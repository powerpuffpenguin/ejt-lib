local utils = import '../internal/utils.libsonnet';
local add_websocket(arrs) = if
  utils.find(arrs, function(o) utils.get_default(o, 'upgrade_type', '') == 'websocket') then arrs
else arrs;
local websocket(route) = route {
  route: route.route {
    local o = route.route,
    upgrade_configs: utils.map_default(
      o, 'upgrade_configs', function(v) add_websocket(v), [
        {
          upgrade_type: 'websocket',
        },
      ],
    ),
  },
};
{
  // 爲 config.route.v3.Route 添加 websocket 設定
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-route
  websocket(route={}): websocket(route),
}
