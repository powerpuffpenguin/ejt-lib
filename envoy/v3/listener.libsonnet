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
}
