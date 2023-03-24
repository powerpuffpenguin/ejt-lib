# ejt-lib

envoy
是當下最強大的網關之一，由於它的功能太繁雜導致它的配置檔案相當反人類，故而它首推的是使用控制平面。

但是沒有一個通用的控制平面特別是對於一些 中小型 或 docker-compose 項目，並且隨着
envoy
的升級控制平面可能也需要升級以使用最新的設定，這對於中小型項目顯然得不償失。

好在 envoy 提供了dynamic-resources-from-filesystem 的支持，並且 yaml 結構上與
json 一致，我們可以利用 dynamic-resources-from-filesystem 作爲控制平面，然後配合
jsonnet 來替代 yaml 以簡單的書寫 envoy
配置，[ejt](https://github.com/powerpuffpenguin/ejt)
就是本喵爲此開發的一個工具。

# jsonnet

有了 ejt 提供的 jsonnet 就可以將繁雜的 yaml
設定以函數等形式包裝，這個項目主要就是保存了這些代碼以供方便的書寫 envoy 代碼

# envoy

envoy 檔案夾下包含了一些幫助創建 envoy 配置的腳本
