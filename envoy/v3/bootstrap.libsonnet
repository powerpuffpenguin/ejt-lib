local helper = import '../../core/helper.libsonnet';
local utils = import '../internal/utils.libsonnet';
local accesslog = import './accesslog.libsonnet';
local core = import './core.libsonnet';
local static_layer_connections(opts) = utils.get_base(opts, {
}) {
  [if std.objectHas(opts, 'connections') then 'overload']: {
    global_downstream_max_connections: opts.connections,
  },
  [if std.objectHas(opts, 'listeners') then 'envoy']: {
    resource_limits: {
      listener: std.foldl(function(last, v) last + v, [
        {
          [node.name]: {
            connection_limit: node.connections,
          },
        }
        for node in opts.listeners
      ], {}),
    },
  },
};
local layer_connections(opts) = {
  name: opts.name,
  static_layer: static_layer_connections(opts),
};
// 創建 config.bootstrap.v3 對象
{
  __(): {},
  // 創建 config.bootstrap.v3.RuntimeLayer 限制連接數量
  // - name: string
  // - connections?: uint max connections
  // - listeners?: Array<{name:string , connections?: uint}>
  // - default?: static_layer
  layer_connections(opts): layer_connections(opts),

  local default_node = {
    cluster: 'default-cluster',
    id: 'default-node',
  },
  // config.core.v3.Node
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-node
  apply_node(value=default_node, patch={}):
    local val = if value == null then default_node else value;
    assert std.isObject(val) : 'value must be a Object';
    assert std.isObject(patch) : 'patch must be a Object';
    function(o={}) o {
      node: helper.get_default(o, 'node', {}) + val + patch,
    },
  // config.core.v3.Node
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-node
  node(value=default_node, patch={}):
    self.apply_node(value, patch)(),

  local default_admin = helper.apply([
    accesslog.apply_access_log(),
    core.apply_address(
      core.socket_address(':8000'),
    ),
  ]),
  // config.bootstrap.v3.Admin
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-admin
  apply_admin(value=default_admin, patch={}):
    local val = if value == null then default_admin else value;
    assert std.isObject(val) : 'value must be a Object';
    assert std.isObject(patch) : 'patch must be a Object';
    function(o={}) o {
      admin: helper.get_default(o, 'admin', {}) + val + patch,
    },
  // config.bootstrap.v3.Admin
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-admin
  admin(value=default_admin, patch={}):
    self.apply_admin(value, patch)(),

  // config.bootstrap.v3.LayeredRuntime
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-layeredruntime
  apply_layered_runtime(value={}, patch={}):
    local val = if value == null then {} else value;
    assert std.isObject(val) : 'value must be a Object';
    assert std.isObject(patch) : 'patch must be a Object';
    function(o={}) o {
      layered_runtime: helper.get_default(o, 'layered_runtime', {}) + val + patch,
    },
  // config.bootstrap.v3.LayeredRuntime
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-layeredruntime
  layered_runtime(value={}, patch={}):
    self.layered_runtime(value, patch)(),

  helper_layered_runtime: {
    // push config.bootstrap.v3.RuntimeLayer
    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-runtimelayer
    apply_layers(value={}, patch={}):
      local val = if value == null then {} else value;
      assert std.isObject(val) : 'value must be a Object';
      assert std.isObject(patch) : 'patch must be a Object';
      function(o={}) o {
        local layered_runtime = helper.get_default(o, 'layered_runtime', {}),
        layered_runtime: layered_runtime {
          layers:
            helper.get_default(layered_runtime, 'layers', []) +
            [val + patch],
        },
      },
    // push config.bootstrap.v3.RuntimeLayer
    // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-runtimelayer
    layers(value={}, patch={}):
      self.apply_layers(value, patch)(),
  },
  // config.bootstrap.v3.Bootstrap.DynamicResources
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-bootstrap-dynamicresources
  apply_dynamic_resources(value={}, patch={}):
    local val = if value == null then {} else value;
    assert std.isObject(val) : 'value must be a Object';
    assert std.isObject(patch) : 'patch must be a Object';
    function(o={}) o {
      dynamic_resources: helper.get_default(o, 'dynamic_resources', {}) + val + patch,
    },
  // config.bootstrap.v3.Bootstrap.DynamicResources
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-bootstrap-dynamicresources
  dynamic_resources(value={}, patch={}):
    self.apply_dynamic_resources(value, patch)(),
}
