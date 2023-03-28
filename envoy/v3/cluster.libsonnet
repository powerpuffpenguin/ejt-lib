local utils = import '../internal/utils.libsonnet';
local core = import './core.libsonnet';
local cluster(opts) = {
  connect_timeout: '5s',
  type: 'STRICT_DNS',
  name: opts.name,
  // config.endpoint.v3.ClusterLoadAssignment
  load_assignment: utils.get_default(opts, 'default_load_assignment', {}) {
    cluster_name: opts.name,
    endpoints: [
      // config.endpoint.v3.LocalityLbEndpoints
      utils.get_default(opts, 'default_lb_endpoints', {}) + {
        lb_endpoints: [
          // config.endpoint.v3.LbEndpoint
          utils.get_default(opts, 'default_lb_endpoint', {}) {
            // config.endpoint.v3.Endpoint
            endpoint: utils.get_default(opts, 'default_endpoint', {}) {
              address: core.socket_address({ addr: endpoint, default: {} }),
            },
          },
        ],
      }
      for endpoint in opts.endpoints
    ],
  },
};
local cds(opts) = cluster(opts) {
  '@type': 'type.googleapis.com/envoy.config.cluster.v3.Cluster',
};
// 創建 config.cluster.v3 對象
{
  // 如何解析發現上游服務器
  // https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-discoverytype
  type: {
    // 最簡單的服務發現類型(默認類型)。
    // 配置明確指定每個上游主機的解析網絡名稱（IP 地址/端口、unix 域套接字等）。
    STATIC: 'STATIC',
    // 異步的解析 dns 的 ip，每個ip都作爲上游集群中的一個主機被負載均衡。從 dns 刪除 ip，也爲從上游主機中刪除。
    STRICT_DNS: 'STRICT_DNS',
    // 每次異步的解析 dns 並且使用其第一個 ip 作爲上游服務，這個適合上游已經使用 dns 分流的場景
    LOGICAL_DNS: 'LOGICAL_DNS',
    // 由 eds 指定上游主機
    EDS: 'EDS',
    // 當傳入連接通過 iptables REDIRECT 或 TPROXY 目標或使用代理協議重定向到 Envoy 時，可以使用原始目標集群
    ORIGINAL_DST: 'ORIGINAL_DST',
  },
  // 創建 config.cluster.v3.Cluster 上游集群
  // - name: string 集群名稱
  // - endpoints: Array<string> host:port
  // - default_load_assignment?: config.endpoint.v3.ClusterLoadAssignment
  // - default_lb_endpoints ?: config.endpoint.v3.LocalityLbEndpoints
  // - default_lb_endpoint?: config.endpoint.v3.LbEndpoint
  // - default_endpoint?: config.endpoint.v3.Endpoint
  cds(opts): cds(opts),
  // 創建 config.cluster.v3.Cluster 上游集群
  // - name: string 集群名稱
  // - default_load_assignment?: config.endpoint.v3.ClusterLoadAssignment
  // - default_lb_endpoints ?: config.endpoint.v3.LocalityLbEndpoints
  // - default_lb_endpoint?: config.endpoint.v3.LbEndpoint
  // - default_endpoint?: config.endpoint.v3.Endpoint
  cluster(opts): cluster(opts),
}
