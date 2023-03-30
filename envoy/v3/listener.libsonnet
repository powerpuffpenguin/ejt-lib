local core = import './core.libsonnet';
local http_connection_manager(opts) = {
  assert std.isString(opts.stat_prefix) && opts.stat_prefix != '' : 'http_connection_manager(opts.stat_prefix) must be a no empty string',
  name: 'envoy.filters.network.http_connection_manager',
  typed_config: opts {
    '@type': 'type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager',
    http_filters: [
      {
        name: 'envoy.filters.http.router',
        typed_config: {
          '@type': 'type.googleapis.com/envoy.extensions.filters.http.router.v3.Router',
        },
      },
    ],
  },
};
local transport_sockets_tls(opts) = {
  name: 'envoy.transport_sockets.tls',
  typed_config: {
    '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext',
    common_tls_context: {  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/tls.proto.html#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-commontlscontext
      alpn_protocols: if std.objectHas(opts, 'alpn') then opts.alpn else ['h2', 'http/1.1'],
      tls_certificate_sds_secret_configs: {
        name: opts.name,
        sds_config: {
          path_config_source: {
            path: opts.path,
            [if std.objectHas(opts, 'dir') then 'watched_directory']: {
              path: opts.dir,
            },
          },
          resource_api_version: 'V3',
        },
      },
    },
  },
};
local route_websocket(opts) = {
  match: {
    prefix: '/',
    headers: [{
      name: 'Upgrade',
      string_match: {
        exact: 'websocket',
      },
    }],
  },
  route: {
    upgrade_configs: [
      {
        upgrade_type: 'websocket',
      },
    ] + if std.objectHas(opts, 'upgrade_configs') then opts.upgrade_configs else [],
  } + opts,
};
{
  // 設置 LDS @type
  lds: {
    '@type': 'type.googleapis.com/envoy.config.listener.v3.Listener',
  },
  // 創建 config.listener.v3.ListenerFilter 啓用 tls
  tls_inspector: {
    name: 'envoy.filters.listener.tls_inspector',
    typed_config: {
      '@type': 'type.googleapis.com/envoy.extensions.filters.listener.tls_inspector.v3.TlsInspector',
    },
  },
  // 創建一個 config.listener.v3.Filter 類型爲 extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
  // - opts: extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
  // - opts.stat_prefix: string
  http_connection_manager(opts): http_connection_manager(opts),

  // - name: string sds name
  // - path: string sds path
  // - dir?: string watched_directory
  // - alpn = ['h2', 'http/1.1']
  transport_sockets_tls(opts): transport_sockets_tls(opts),

  route_websocket(opts): route_websocket(opts),
}
