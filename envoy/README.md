# envoy

- [init](#init)
- [envoy](#envoy)
- [cds](#cds)

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
    access_log: accesslog.stdout_log,
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
