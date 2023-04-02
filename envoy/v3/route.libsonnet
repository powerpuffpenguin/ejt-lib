local utils = import '../internal/utils.libsonnet';

{
  __(): {},
  // 爲 config.route.v3.Route 添加 websocket 設定
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-route
  websocket(o={}): o {
    local defaultHeaders = [{
      name: 'Upgrade',
      string_match: {
        exact: 'websocket',
      },
    }],
    local match = utils.get_default(o, 'match', {
      prefix: '/',
      headers: defaultHeaders,
    }),
    match: match {
      headers: utils.merge_field_array({
        o: match,
        key: 'headers',
        default: defaultHeaders,
        exists: function(header)
          std.asciiLower(utils.get_default(header, 'name', '')) == 'upgrade' &&
          std.objectHas(header, 'string_match') &&
          utils.get_default(header.string_match, 'exact', '') == 'websocket',
        append: function(arrs) defaultHeaders + arrs,
      }),
    },
    local route = utils.get_default(o, 'route', {}),
    route: route {
      upgrade_configs: utils.merge_field_array({
        o: route,
        key: 'upgrade_configs',
        default: [
          {
            upgrade_type: 'websocket',
          },
        ],
        exists: function(val) utils.get_default(val, 'upgrade_type', '') == 'websocket',
      }),
    },
  },
  
}
