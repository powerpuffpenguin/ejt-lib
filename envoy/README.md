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
```
