local utils = import '../internal/utils.libsonnet';
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
  // 創建 config.bootstrap.v3.RuntimeLayer 限制連接數量
  // - name: string
  // - connections?: uint max connections
  // - listeners?: Array<{name:string , connections?: uint}>
  // - default?: static_layer
  layer_connections(opts): layer_connections(opts),
}
