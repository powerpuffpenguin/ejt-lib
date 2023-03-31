# envoy

- [init](#init)
- [envoy](#envoy)
- [cds](#cds)
- [sds](#sds)
- [lds](#lds)

# init

對於 envoy 項目，通常應該創建如下的一個 ejt.jsonnet 設定檔案:

```
{
  ext_strs: [
    'dev=0',
  ],
  jpath: [
    '/opt/ejt-lib',
  ],
  endpoints: [
    {
      output: './dst', 
      target: './envoy',  
      source: './src', 
      resources: [
        'envoy.jsonnet',
        'cds.jsonnet',
        'sds.jsonnet',
        'lds.jsonnet',
      ],
    },
  ],
}
```

- ext_strs 指定了要設置的擴展字符串
- jpath 指定了 import 搜索目錄，通常是本項目的 git clone 目錄
- endpoints 定義了一個 envoy 項目
  - source 指定了源碼根路徑
  - output 指定了生成的 yaml 路徑
  - target 指定了將 yanl 使用 move 指令移動的最終路徑(envoy 必須使用 move
    指令移動的檔案才能觸發更新)
  - resources 指定了要編譯的 jsonnet 源碼入口

    對於 envoy 項目，resources 通常建議至少指定：

    - envoy.jsonnet 這是 envoy 主設定
    - cds.jsonnet 這是後端服務
    - sds.jsonnet 使用 sds 動態更新 https 使用到的證書
    - lds.jsonnet 這是監聽器

# envoy

envoy.jsonnet 會被轉換爲 envoy.yaml 作爲 envoy 的主要設定，它通常長這樣:

```
local accesslog = import 'envoy/v3/accesslog.libsonnet';
local bootstrap = import 'envoy/v3/bootstrap.libsonnet';
local core = import 'envoy/v3/core.libsonnet';
{
  node: {
    id: 'default-node',
    cluster: 'default-cluster',
  },
  layered_runtime: {
    layers: [
      // 創建一個層設置 連接上限爲 50k
      bootstrap.layer_connections({
        name: 'static_layer_conns',
        // 考慮到連接上下遊需要兩個連接所以這個值應該是 open files 的一半
        connections: 50000,
        // 這裏可以爲每個 監聽器設置單獨的連接上限
        listeners: [
          {
            name: 'http_listener',
            connections: 10000,
          },
          {
            name: 'https_listener',
            connections: 10000,
          },
        ],
      }),
    ],
  },
  // 創建管理服務器
  admin: {
    access_log: [accesslog.stdout_log],
    address: core.socket_address({
      addr: ':8000',
    }),
  },
  // 動態加載資源
  dynamic_resources: {
    cds_config: core.dynamic_path({
      path: '/etc/envoy/cds.yaml',
    }),
    lds_config: core.dynamic_path({
      path: '/etc/envoy/lds.yaml',
    }),
  },
}
```

- node 定義了這個 envoy 服務的節點名稱
- layered\_runtime 中限制了監聽器和總的socket連接數，請改爲具體的真實值
- admin 在 8000 端口配置了一個管理服務器，以及將管理日誌輸出到 stdout
- dynamic_resources 定義了從檔案動態加載監聽器和後端集群

# cds

cds.jsonnet 會被轉換爲 cds.yaml 作爲 envoy 的
[CDS](https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-field-config-bootstrap-v3-bootstrap-dynamicresources-cds-config)
資源用於動態指定集群，它通常長這樣:

```
local cluster = import 'envoy/v3/cluster.libsonnet';
local core = import 'envoy/v3/core.libsonnet';
{
  resources: [
    cluster.cds(
      {
        name: 'http_web',
        endpoints: ['httptest:80'],
        // config.core.v3.Http1ProtocolOptions
        // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http1protocoloptions
        extensions: cluster.explicit_http({}),
      },
    ),
    cluster.cds(
      {
        name: 'h2c_web',
        endpoints: ['httptest:80'],
        // config.core.v3.Http2ProtocolOptions
        // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http2protocoloptions
        extensions: cluster.explicit_http2({}),
      },
    ),
    cluster.cds(
      {
        name: 'https_web',
        endpoints: ['httptest:443'],
        // envoy.transport_sockets.tls typed_config
        // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/tls.proto
        transport_socket: cluster.transport_sockets_tls({}),
        extensions: cluster.explicit_http({}),
      },
    ),
    cluster.cds(
      {
        name: 'h2_web',
        endpoints: ['httptest:443'],
        transport_socket: cluster.transport_sockets_tls({}),
        extensions: cluster.explicit_http2({}),
      },
    ),
  ],
}
```

上面例子定義了四個集群，分別使用 http1.1/h2c/https1.1/h2 連接上游的集群

## auto_config

對於 https 可以使用 ALPN 與上游進行協商自動判斷使用 http1/http2/http3 進行連接

```
local cluster = import 'envoy/v3/cluster.libsonnet';
{
  resources: [
    cluster.cds(
      {
        name: 'https_web',
        endpoints: ['httptest:443'],
        transport_socket: cluster.transport_sockets_tls({}),
        // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/upstreams/http/v3/http_protocol_options.proto#extensions-upstreams-http-v3-httpprotocoloptions-autohttpconfig
        extensions: cluster.auto_config({}),
      },
    ),
  ],
}
```

> 注意 http3 必須顯示設定才會啓用，所以上述配置只包含了 http1/http2 的自動識別
>
> 不推薦使用 auto_config，因爲envoy目前對於 http2 不支持 websocket，如果要使用
> websocket 啓動了 auto_config，當服務器支持 h2 時會自動使用 h2 連接導致
> websocket 無法正常工作

# sds

sds.jsonnet 會被轉換爲 sds.yaml 作爲 envoy 的
[LDS](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/operations/dynamic_configuration#arch-overview-dynamic-config-lds)
資源用於動態加載tls證書，它通常長這樣:

```
local sds = import 'envoy/v3/sds.libsonnet';
{
  resources: [
    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret
    sds.inline_string({
      name: 'default',
      certificate_chain: '/etc/envoy/x509.crt',
      private_key: '/etc/envoy/x509.key',
    }),
  ],
}
```

# lds

lds.jsonnet 會被轉換爲 lds.yaml 作爲 envoy 的
[LDS](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/operations/dynamic_configuration#arch-overview-dynamic-config-lds)
資源用於動態指定監聽器，它通常長這樣:

```
local accesslog = import 'envoy/v3/accesslog.libsonnet';
local core = import 'envoy/v3/core.libsonnet';
local listener = import 'envoy/v3/listener.libsonnet';
{
  resources: [
    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener
    listener.lds {
      name: 'http_listener',
      address: core.socket_address({ addr: ':80' }),
      default_filter_chain: {  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchain
        filters: [
          // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#extension-envoy-filters-network-http-connection-manager
          listener.http_connection_manager({
            stat_prefix: 'http_ingress_default',
            access_log: [accesslog.stdout_log],
            generate_request_id: false,
            // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto#envoy-v3-api-msg-config-route-v3-routeconfiguration
            route_config: {
              name: 'http_route_default',
              virtual_hosts: [
                {
                  name: 'http_host_default',
                  domains: ['*'],
                  routes: [
                    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-route
                    {
                      match: {  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch
                        prefix: '/',
                      },
                      redirect: {  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-redirectaction
                        https_redirect: true,
                        port_redirect: 443,
                      },
                    },
                  ],
                },
              ],
            },
          }),
        ],
      },
    },
    listener.lds {
      name: 'https_listener',
      address: core.socket_address({ addr: ':443' }),
      listener_filters: [
        // 啓用 https
        listener.tls_inspector,
      ],
      filter_chains: [
        {
          // filter_chain_match: {
          //   server_names: ['*'],  // 如果有多個 tls 證書，使用這裏匹配鏈並設置對應證書
          // },
          filters: [
            listener.http_connection_manager({
              stat_prefix: 'https_ingress_default',
              access_log: [accesslog.stdout_log],
              generate_request_id: false,
              route_config: {
                name: 'https_route_example',
                virtual_hosts: [
                  {
                    name: 'https_host_example',
                    domains: ['*'],
                    routes: [
                      listener.route_websocket({
                        cluster: 'http_web',
                      }),
                      {
                        match: {  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch
                          prefix: '/',
                        },
                        route: {
                          cluster: 'h2c_web',
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          ],
          // 設置證書
          transport_socket: listener.transport_sockets_tls({
            name: 'default',
            path: '/etc/envoy/sds.yaml',
          }),
        },
      ],
    },
  ],
}
```
