local utils = import '../internal/utils.libsonnet';

local socket_address(opts) = {
  socket_address: utils.get_base(opts, {
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
// 創建 config.core.v3 對象
{
  // 創建 config.core.v3.Address 並且設置 socket_address 字段
  // - default?: config.core.v3.SocketAddress
  // - addr: string host:port
  //
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-address
  socket_address(opts): socket_address(opts),
}
