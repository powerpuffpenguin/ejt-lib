// 創建 config.accesslog.v3 對象
{
  // 返回一個 config.accesslog.v3.AccessLog 將日誌輸出到 stdout
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslog
  stdout_log: {
    name: 'envoy.access_loggers.stdout',
    typed_config: {
      '@type': 'type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog',
    },
  },
}
