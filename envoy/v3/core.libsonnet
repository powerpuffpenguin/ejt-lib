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
local dynamic_path(opts) = {
  path_config_source: {
    path: opts.path,
    [if std.objectHas(opts, 'dir') then 'watched_directory']: {
      path: opts.dir,
    },
  },
};
// 創建 config.core.v3 對象
{
  // 創建 config.core.v3.Address 並且設置 socket_address 字段
  // - addr: string host:port
  // - default?: config.core.v3.SocketAddress
  //
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-address
  socket_address(opts): socket_address(opts),
  // 以本地檔案創建 config.core.v3.ConfigSource
  // - path: string 要監視的檔案
  // - dir?: string 要監視的檔案夾
  dynamic_path(opts): dynamic_path(opts),
}
