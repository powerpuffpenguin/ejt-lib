local get_base(opts, base) = if std.objectHas(opts, 'base') then opts.base else base;
local socket_address(opts) = {
  socket_address: get_base(opts, {
    ipv4_compat: true,
  }) {
    local strs = std.split(opts.addr, ':'),
    local n = std.length(strs),
    assert n > 1 : 'socket_address.addr must be in the form of host:port',
    local addr = std.join(':', std.slice(strs, 0, n - 1, 1)),
    local port = std.parseInt(std.join(':', std.slice(strs, n - 1, n, 1))),
    address: if addr == '' then '::' else addr,
    port_value: port,
  },
};
{
  // 返回一個 config.accesslog.v3.AccessLog 將日誌輸出到 stdout
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslog
  stdout_log: {
    name: 'envoy.access_loggers.stdout',
    typed_config: {
      '@type': 'type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog',
    },
  },
  // 返回一個 config.core.v3.Address 並且設置 socket_address 字段
  //
  // socket_address(':::80',{ipv4_compat:true})
  //
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-address
  socket_address: socket_address,
}
