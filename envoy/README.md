# envoy

- [init](#init)
  - [envoy.jsonnet](#envoy.jsonnet)

# init

對於 envoy 項目，通常應該創建如下的一個 ejt.jsonnet 設定檔案:

```
{
  ext_strs: [
    'dev=0',
  ],
  jpath: [
    '/opt/ejt-lib',
  ],
  endpoints: [
    {
      output: './dst', 
      target: './envoy',  
      source: './src', 
      resources: [
        'envoy.jsonnet',
        'cds.jsonnet',
        'lds.jsonnet',
      ],
    },
  ],
}
```

- ext_strs 指定了要設置的擴展字符串
- jpath 指定了 import 搜索目錄，通常是本項目的 git clone 目錄
- endpoints 定義了一個 envoy 項目
  - source 指定了源碼根路徑
  - output 指定了生成的 yaml 路徑
  - target 指定了將 yanl 使用 move 指令移動的最終路徑(envoy 必須使用 move
    指令移動的檔案才能觸發更新)
  - resources 指定了要編譯的 jsonnet 源碼入口

    對於 envoy 項目，resources 通常建議至少指定：

    - envoy.jsonnet 這是 envoy 主設定
    - cds.jsonnet 這是後端服務
    - lds.jsonnet 這是監聽器

# envoy.jsonnet

envoy.jsonnet 會被轉換爲 envoy.yaml 作爲 envoy 的主要設定，它通常長這樣:

```
local accesslog = import 'envoy/v3/accesslog.libsonnet';
local bootstrap = import 'envoy/v3/bootstrap.libsonnet';
local core = import 'envoy/v3/core.libsonnet';
{
  node: {
    id: 'default-node',
    cluster: 'default-cluster',
  },
  layered_runtime: {
    layers: [
      // 創建一個層設置 連接上限爲 50k
      bootstrap.layer_connections({
        name: 'static_layer_conns',
        // 考慮到連接上下遊需要兩個連接所以這個值應該是 open files 的一半
        connections: 50000,
        // 這裏可以爲每個 監聽器設置單獨的連接上限
        listeners: [
          {
            name: 'example_listener_name',
            connections: 10000,
          },
        ],
      }),
    ],
  },
  // 創建管理服務器
  admin: {
    access_log: accesslog.stdout_log,
    address: core.socket_address({
      addr: ':8000',
    }),
  },
  // 動態加載資源
  dynamic_resources: {
    cds_config: core.dynamic_path({
      path: '/etc/envoy/cds.yaml',
    }),
    lds_config: core.dynamic_path({
      path: '/etc/envoy/lds.yaml',
    }),
  },
}
```

- node 定義了這個 envoy 服務的節點名稱
- layered\_runtime 中限制了監聽器和總的socket連接數，請改爲具體的真實值
- admin 在 8000 端口配置了一個管理服務器，以及將管理日誌輸出到 stdout
- dynamic_resources 定義了從檔案動態加載監聽器和後端集群
