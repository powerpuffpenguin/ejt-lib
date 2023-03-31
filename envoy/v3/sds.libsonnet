local inline_string(opts) = {
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret
  '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
  certificate_chain: if std.extVar('dev') == '0' then {
    inline_string: std.native('os.readText')(opts.certificate_chain),
  } else {
    filename: opts.certificate_chain,
  },
  private_key: if std.extVar('dev') == '0' then {
    inline_string: std.native('os.readText')(opts.private_key),
  } else {
    filename: opts.private_key,
  },
};
{
  // 創建 extensions.transport_sockets.tls.v3.Secret
  tls: {
    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret
    '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
  },
  // 創建 extensions.transport_sockets.tls.v3.Secret
  // name?: string
  // certificate_chain: string
  // private_key: string
  inline_string(opts): inline_string(opts),
}
