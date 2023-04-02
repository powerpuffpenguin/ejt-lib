local helper = import '../../core/helper.libsonnet';
// 創建 config.accesslog.v3 對象
{
  __(): {},

  local default = {
    name: 'envoy.access_loggers.stdout',
    typed_config: {
      '@type': 'type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog',
    },
  },
  // 爲 access_log 屬性 push config.accesslog.v3.AccessLog
  apply_access_log(value=default, patch={}):
    local val = if value == null then default else value;
    assert std.isObject(val) : 'value must be a Object';
    assert std.isObject(patch) : 'patch must be a Object';
    function(o={}) o {
      access_log: helper.get_default(o, 'access_log', []) + [
        val + patch,
      ],
    },
  // 爲 access_log 屬性 push config.accesslog.v3.AccessLog
  access_log(value=default, patch={}):
    self.apply_access_log(value, patch)(),
}
