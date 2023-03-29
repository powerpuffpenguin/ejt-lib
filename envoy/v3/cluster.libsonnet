local utils = import '../internal/utils.libsonnet';
local core = import './core.libsonnet';
local cluster(opts) = {
  connect_timeout: '5s',
  type: 'STRICT_DNS',
  name: opts.name,
  [if std.objectHas(opts, 'transport_socket') then 'transport_socket']: opts.transport_socket,
  [if std.objectHas(opts, 'extensions') then 'typed_extension_protocol_options']: opts.extensions,
  // config.endpoint.v3.ClusterLoadAssignment
  load_assignment: utils.get_default(opts, 'default_load_assignment', {}) {
    cluster_name: opts.name,
    endpoints: [
      // config.endpoint.v3.LocalityLbEndpoints
      utils.get_default(opts, 'default_lb_endpoints', {}) + {
        lb_endpoints: [
          // config.endpoint.v3.LbEndpoint
          utils.get_default(opts, 'default_lb_endpoint', {}) {
            // config.endpoint.v3.Endpoint
            endpoint: utils.get_default(opts, 'default_endpoint', {}) {
              address: core.socket_address({ addr: endpoint, default: {} }),
            },
          },
        ],
      }
      for endpoint in opts.endpoints
    ],
  },
};
local cds(opts) = cluster(opts) {
  '@type': 'type.googleapis.com/envoy.config.cluster.v3.Cluster',
};
// extensions.upstreams.http.v3.HttpProtocolOptions
// https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/upstreams/http/v3/http_protocol_options.proto#envoy-v3-api-field-extensions-upstreams-http-v3-httpprotocoloptions-upstream-http-protocol-options
local upstreams_http(opts) = {
  'envoy.extensions.upstreams.http.v3.HttpProtocolOptions': {
    '@type': 'type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions',
  } + opts,
};
local explicit_http2(opts) = {
  'envoy.extensions.upstreams.http.v3.HttpProtocolOptions': {
    '@type': 'type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions',
    explicit_http_config: {
      assert std.isObject(opts) : 'explicit_http2(config.core.v3.Http2ProtocolOptions)',
      http2_protocol_options: opts,
    },
  },
};
// 創建 config.cluster.v3 對象
{
  // 如何解析發現上游服務器
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-discoverytype
  type: {
    // 最簡單的服務發現類型(默認類型)。
    // 配置明確指定每個上游主機的解析網絡名稱（IP 地址/端口、unix 域套接字等）。
    STATIC: 'STATIC',
    // 異步的解析 dns 的 ip，每個ip都作爲上游集群中的一個主機被負載均衡。從 dns 刪除 ip，也爲從上游主機中刪除。
    STRICT_DNS: 'STRICT_DNS',
    // 每次異步的解析 dns 並且使用其第一個 ip 作爲上游服務，這個適合上游已經使用 dns 分流的場景
    LOGICAL_DNS: 'LOGICAL_DNS',
    // 由 eds 指定上游主機
    EDS: 'EDS',
    // 當傳入連接通過 iptables REDIRECT 或 TPROXY 目標或使用代理協議重定向到 Envoy 時，可以使用原始目標集群
    ORIGINAL_DST: 'ORIGINAL_DST',
  },
  // 創建 config.cluster.v3.Cluster 上游集群
  // - name: string 集群名稱
  // - endpoints: Array<string> host:port
  // - extensions?: typed_extension_protocol_options
  // - transport_socket? config.core.v3.TransportSocket
  // - default_load_assignment?: config.endpoint.v3.ClusterLoadAssignment
  // - default_lb_endpoints ?: config.endpoint.v3.LocalityLbEndpoints
  // - default_lb_endpoint?: config.endpoint.v3.LbEndpoint
  // - default_endpoint?: config.endpoint.v3.Endpoint
  cds(opts): cds(opts),
  // 創建 config.cluster.v3.Cluster 上游集群
  // - name: string 集群名稱
  // - endpoints: Array<string> host:port
  // - extensions?: typed_extension_protocol_options
  // - transport_socket? config.core.v3.TransportSocket
  // - default_load_assignment?: config.endpoint.v3.ClusterLoadAssignment
  // - default_lb_endpoints ?: config.endpoint.v3.LocalityLbEndpoints
  // - default_lb_endpoint?: config.endpoint.v3.LbEndpoint
  // - default_endpoint?: config.endpoint.v3.Endpoint
  cluster(opts): cluster(opts),

  // 創建 extensions.upstreams.http.v3.HttpProtocolOptions
  // - common_http_protocol_options?
  // - upstream_http_protocol_options?
  // - explicit_http_config?
  // - use_downstream_protocol_config?
  // - auto_config?
  // - http_filters?
  upstreams_http(opts): upstreams_http(opts),

  // 創建 extensions.upstreams.http.v3.HttpProtocolOptions.explicit_http_config 並且設置 http_protocol_options
  // - opts?: config.core.v3.Http1ProtocolOptions
  explicit_http(opts): upstreams_http({
    explicit_http_config: {
      assert std.isObject(opts) : 'explicit_http(config.core.v3.Http1ProtocolOptions)',
      http_protocol_options: opts,
    },
  }),
  // 創建 extensions.upstreams.http.v3.HttpProtocolOptions.explicit_http_config 並且設置 http2_protocol_options
  // - opts?: config.core.v3.Http2ProtocolOptions
  explicit_http2(opts): upstreams_http({
    explicit_http_config: {
      assert std.isObject(opts) : 'explicit_http2(config.core.v3.Http2ProtocolOptions)',
      http2_protocol_options: opts,
    },
  }),
  // 創建 extensions.upstreams.http.v3.HttpProtocolOptions.explicit_http_config 並且設置 http2_protocol_options
  // - opts?: config.core.v3.Http3ProtocolOptions
  explicit_http3(opts): upstreams_http({
    explicit_http_config: {
      assert std.isObject(opts) : 'explicit_http3(config.core.v3.Http3ProtocolOptions)',
      http3_protocol_options: opts,
    },
  }),
  // 創建 extensions.upstreams.http.v3.HttpProtocolOptions.auto_config
  auto_config(opts): upstreams_http({
    assert std.isObject(opts) : 'auto_config(extensions.upstreams.http.v3.HttpProtocolOptions.AutoHttpConfig)',
    auto_config: opts,
  }),

  // 創建 envoy.transport_sockets.tls
  // - opts extensions.transport_sockets.tls.v3.UpstreamTlsContext
  //
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/tls.proto#extensions-transport-sockets-tls-v3-upstreamtlscontext
  transport_sockets_tls(opts): {
    name: 'envoy.transport_sockets.tls',
    typed_config: {
      assert std.isObject(opts) : 'transport_sockets_tls(extensions.transport_sockets.tls.v3.UpstreamTlsContext)',
      '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext',
    } + opts,
  },
}
