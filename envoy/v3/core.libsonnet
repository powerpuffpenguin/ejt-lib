local helper = import '../../core/helper.libsonnet';
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
  resource_api_version: 'V3',
};
// 創建 config.core.v3 對象
{
  __(): {},
  // 創建 config.core.v3.Address 並且設置 socket_address 字段
  // - addr: string host:port
  // - default?: config.core.v3.SocketAddress
  //
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-address
  // socket_address(opts): socket_address(opts),
  // 以本地檔案創建 config.core.v3.ConfigSource
  // - path: string 要監視的檔案
  // - dir?: string 要監視的檔案夾
  dynamic_path(opts): dynamic_path(opts),

  
  // - f(addr:string)
  // - f(value:config.core.v3.SocketAddress={},addr:string=null)
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-socketaddress
  apply_socket_address(value={}, addr=null):
    local val = if std.isString(value) then {} else value;
    assert std.isObject(val) : 'value must be a Object or String';
    local s = if std.isString(value) then value else addr;
    assert s == null || std.isString(s) : 'addr must be a String or null';

    local patch = if std.isString(s) then {
      local strs = std.split(s, ':'),
      local n = std.length(strs),
      assert n > 1 : 'addr must be in the form of host:port',
      local addr = std.join(':', std.slice(strs, 0, n - 1, 1)),
      local port = std.parseInt(std.join(':', std.slice(strs, n - 1, n, 1))),
      address: if addr == '' then '::' else addr,
      port_value: port,
    } else {};
    function(o={}) o {
      socket_address: helper.get_default(o, 'socket_address', {}) + val + patch,
    },
  // - f(addr:string)
  // - f(value:config.core.v3.SocketAddress={},addr:string=null)
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-socketaddress
  socket_address(value={}, addr=null):
    self.apply_socket_address(value, addr)(),

  // config.core.v3.Address
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-address
  apply_address(value={}):
    assert std.isObject(value) : 'value must be a Object';
    function(o={}) o {
      address: helper.get_default(o, 'address', {}) + value,
    },
  address(value={}):
    self.apply_address(value)(),
}
