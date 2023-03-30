export namespace extensions.transport_sockets.tls.v3 {
    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret extensions.transport_sockets.tls.v3.Secret}
     */
    export interface Secret { }
}
export namespace type.matcher.v3 {
    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/type/matcher/v3/regex.proto#envoy-v3-api-msg-type-matcher-v3-regexmatcher type.matcher.v3.RegexMatcher}
     */
    export interface RegexMatcher { }

    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/type/matcher/v3/metadata.proto#envoy-v3-api-msg-type-matcher-v3-metadatamatcher type.matcher.v3.MetadataMatcher}
     */
    export interface MetadataMatcher { }
}
export namespace extensions.filters.network.http_connection_manager.v3 {
    export namespace HttpConnectionManager {
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-tracing extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.Tracing}
         */
        export interface Tracing { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-internaladdressconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.InternalAddressConfig}
         */
        export interface InternalAddressConfig {
            /**
             * unix socket 是否作爲內部地址
             */
            unix_sockets?: boolean
            /**
             * 被視為內部的 CIDR 範圍列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-cidrrange config.core.v3.CidrRange}
             */
            cidr_ranges?: Array<config.core.v3.CidrRange>
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-enum-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-forwardclientcertdetails extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ForwardClientCertDetails}
         */
        export interface ForwardClientCertDetails { }
        /**
         * @alpha
         *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-setcurrentclientcertdetails extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.SetCurrentClientCertDetails}
         */
        export interface SetCurrentClientCertDetails { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-upgradeconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.UpgradeConfig}
         */
        export interface UpgradeConfig { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-proxystatusconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ProxyStatusConfig}
         */
        export interface ProxyStatusConfig { }
    }
    /**
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#extensions-filters-network-http-connection-manager-v3-httpconnectionmanager extensions.filters.network.http_connection_manager.v3.HttpConnectionManager}
     */
    export interface HttpConnectionManager {
        /**
         * 提供連接器的編碼類型
         * 
         * @defaultValue 'AUTO'
         */
        codec_type?: 'AUTO' | 'HTTP1' | 'HTTP2'
        /**
         * 統計信息的人類可讀前綴
         */
        stat_prefix: string
        /**
         * 連接管理器的路由表將通過 RDS API 動態加載。
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-rds extensions.filters.network.http_connection_manager.v3.Rds}
         */
        rds?: Rds
        /**
         * 連接管理器的路由表是靜態的，並在此屬性中指定
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto#envoy-v3-api-msg-config-route-v3-routeconfiguration config.route.v3.RouteConfiguration}
         */
        route_config?: config.route.v3.RouteConfiguration
        /**
         * 路由表將根據請求屬性（例如，標頭的值）動態分配給每個請求
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-scopedroutes extensions.filters.network.http_connection_manager.v3.ScopedRoutes}
         */
        scoped_routes?: ScopedRoutes
        /**
         * 組成對連接管理器的請求的過濾器鏈的單個 HTTP 過濾器的列表。 順序很重要，因為過濾器是在請求事件發生時按順序處理的
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpfilter extensions.filters.network.http_connection_manager.v3.HttpFilter}
         */
        http_filters?: Array<HttpFilter>
        /**
         * 連接管理器是否操縱 :path 和 x-envoy-downstream-service-cluster 標頭
         */
        add_user_agent?: boolean
        /**
         * 對象的存在定義連接管理器是否向配置的跟踪提供程序發出跟踪數據。
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-tracing extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.Tracing}
         */
        tracing?: any
        /**
         * 連接管理器處理的 HTTP 請求的附加設置。 這些將適用於 HTTP1 和 HTTP2 請求。
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-httpprotocoloptions config.core.v3.HttpProtocolOptions}
         */
        common_http_protocol_options?: config.core.v3.HttpProtocolOptions
        /**
         * 傳遞給 HTTP/1 編解碼器的其他 HTTP/1 設置
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http1protocoloptions config.core.v3.Http1ProtocolOptions}
         */
        http_protocol_options?: config.core.v3.Http1ProtocolOptions
        /**
         * 傳遞給 HTTP/2 編解碼器的其他 HTTP/2 設置。
         * 
         * @example 對於不信任的下游應該設置如下字段
         * 
         * ```
         * http2_protocol_options: {
         *   initial_connection_window_size: 1048576,
         *   initial_stream_window_size: 65536
         *   max_concurrent_streams: 100
         * }
         * ```
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http2protocoloptions config.core.v3.Http2ProtocolOptions}
         */
        http2_protocol_options?: config.core.v3.Http2ProtocolOptions
        /**
         * 連接管理器將在響應中寫入服務器標頭的可選覆蓋
         * @defaultValue 'envoy'
         */
        server_name?: string
        /**
         * 定義要應用於響應路徑上的服務器標頭的操作。 
         * 默認情況下，Envoy 將使用 server_name 中指定的值覆蓋標頭
         * 
         * @defaultValue 'OVERWRITE'
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-enum-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-serverheadertransformation extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ServerHeaderTransformation}
         */
        server_header_transformation?: 'OVERWRITE' | 'APPEND_IF_ABSENT' | 'PASS_THROUGH'
        /**
         * 允許顯式轉換請求路徑上的 :scheme 標頭。 如果未設置，則應用 Envoy 的默認方案處理。
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-schemeheadertransformation config.core.v3.SchemeHeaderTransformation}
         */
        scheme_header_transformation?: config.core.v3.SchemeHeaderTransformation
        /**
         * uint32 傳入連接的最大請求標頭大小。 
         * 如果未配置，則允許的默認最大請求標頭為 60 KiB。 
         * 超過此限制的請求將收到 431 響應。
         */
        max_request_headers_kb?: number
        /**
         * 連接管理器管理的連接的流空閒超時
         * @defaultValue "300s"
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        stream_idle_timeout?: string
        /**
         * Envoy 等待接收整個請求的時間量。 
         * 計時器在請求發起時激活，並在請求的最後一個字節向上游發送（即所有解碼過濾器已處理請求）或響應發起時解除。 
         * 如果未指定或設置為 0，則禁用此超時。
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        request_timeout?: string
        /**
         * Envoy 等待接收請求標頭的時間量。 
         * 計時器在接收到報頭的第一個字節時激活，並在接收到報頭的最後一個字節時解除。 
         * 如果未指定或設置為 0，則禁用此超時。
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        request_headers_timeout?: string
        /**
         * 在發送 HTTP/2“關閉通知”（具有最大流 ID 的 GOAWAY 幀）和最終 GOAWAY 幀之間等待的時間
         * @defaultValue "5s"
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        drain_timeout?: string
        /**
         * 延遲關閉超時適用於由 HTTP 連接管理器管理的下游連接
         * @defaultValue "1s"
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        delayed_close_timeout?: string
        /**
         * 日誌
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslog config.accesslog.v3.AccessLog}
         */
        access_log?: Array<config.accesslog.v3.AccessLog>
        /**
         * 刷新上述訪問日誌的時間間隔。
         * 
         * @remarks
         *  默認情況下，當 HTTP 請求完成時，HCM 將在流關閉時恰好刷新一個訪問日誌。
         *  如果設置了該字段，HCM 將以指定的時間間隔定期刷新訪問日誌。 
         * 這在長期請求的情況下特別有用，例如 CONNECT 和 Websockets。 
         * 可以通過訪問日誌過濾器中 StreamInfo 的 requestComplete() 方法或通過 %DURATION% 替換字符串檢測最終訪問日誌。
         *  間隔必須至少為 1 毫秒
         * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
         */
        access_log_flush_interval?: string
        /**
         * 如果設置為 true，HCM 將在收到新的 HTTP 請求時刷新一次訪問日誌，在評估請求標頭之後，然後遍歷 HTTP 過濾器鏈。 
         * 與上游集群相關的詳細信息，例如上游主機，將不適用於此日
         */
        flush_access_log_on_new_request?: boolean
        /**
         * 如果設置為 true，連接管理器將在確定內部與外部來源和操作各種標頭時使用客戶端連接的真實遠程地址。 
         * 如果設置為 false 或不存在，連接管理器將使用 x-forwarded-for HTTP 標頭
         */
        use_remote_address?: boolean
        /**
         * uint32 在確定原始客戶端的 IP 地址時，要信任的來自 x-forwarded-for HTTP 標頭右側的額外入口代理躍點數。 
         * 如果未指定此選項，則默認值為零
         */
        xff_num_trusted_hops?: number
        /**
         * 原始 IP 檢測擴展的配置。
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
         */
        original_ip_detection_extensions?: Array<config.core.v3.TypedExtensionConfig>
        /**
         * 早期標頭突變擴展的配置
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
         */
        early_header_mutation_extensions?: Array<config.core.v3.TypedExtensionConfig>
        /**
         * 配置哪些網絡地址被認為是內部的，用於統計和標題衛生目的。 
         * 如果未指定，則只有 RFC1918 IP 地址將被視為內部地址
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-internaladdressconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.InternalAddressConfig}
         */
        internal_address_config?: extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.InternalAddressConfig
        /**
         * 如果設置，Envoy 將不會將遠程地址附加到 x-forwarded-for HTTP 標頭
         */
        skip_xff_append?: boolean
        /**
         * 通過標頭值附加到請求和響應標頭
         */
        via?: string
        /**
         * 連接管理器是否會生成 x-request-id 標頭。 
         * 生成隨機 UUID4 的成本很高，因此在不需要此功能的高吞吐量場景中可以禁用它
         * @defaultValue true
         */
        generate_request_id?: boolean
        /**
         * 如果傳遞給邊緣請求（邊緣請求是從外部客戶端到前端 Envoy 的請求），連接管理器是否會保留 x-request-id 標頭而不重置它，這是當前 Envoy 的行為
         * @defaultValue false
         */
        preserve_external_request_id?: boolean
        /**
         * 如果設置，Envoy 將始終設置 x-request-id 標頭作為響應。 
         * 如果這是 false 或未設置，則僅當使用 x-envoy-force-trace 標頭強制跟踪時，請求 ID 才會在響應中返回。
         */
        always_set_request_id_in_response?: boolean
        /**
         * 如何處理 x-forwarded-client-cert (XFCC) HTTP 標頭
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-enum-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-forwardclientcertdetails extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ForwardClientCertDetails}
         */
        forward_client_cert_details?: extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ForwardClientCertDetails
        /**
         * 此字段僅在 forward_client_cert_details 為 APPEND_FORWARD 或 SANITIZE_SET 且客戶端連接為 mTLS 時有效。
         * 它指定要轉發的客戶端證書中的字段
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-setcurrentclientcertdetails extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.SetCurrentClientCertDetails}
         */
        set_current_client_cert_details?: extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.SetCurrentClientCertDetails
        /**
         * 如果 proxy_100_continue 為真，Envoy 將在上游代理傳入的“Expect: 100-continue”標頭，並向下游轉發“100 Continue”響應
         */
        proxy_100_continue?: boolean
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-upgradeconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.UpgradeConfig}
         */
        upgrade_configs?: Array<extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.UpgradeConfig>
        /**
         * 在通過 HTTP 過濾器或路由處理任何請求之前，是否應該根據 RFC 3986 對路徑進行規範化？ 這也會影響上游 :path 標頭
         */
        normalize_path?: boolean
        /**
         * 確定在 HTTP 過濾器或路由對請求進行任何處理之前，路徑中的相鄰斜杠是否合併為一個。 這也會影響上游 :path 標頭
         */
        merge_slashes?: boolean
        /**
         * 當請求 URL 路徑包含轉義的斜杠序列（%2F、%2f、%5C 和 %5c）時要採取的操作
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-enum-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-pathwithescapedslashesaction extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.PathWithEscapedSlashesAction}
         */
        path_with_escaped_slashes_action?: 'IMPLEMENTATION_SPECIFIC_DEFAULT' | 'KEEP_UNCHANGED' | 'REJECT_REQUEST' | 'UNESCAPE_AND_REDIRECT' | 'UNESCAPE_AND_FORWARD'
        /**
         * 請求 ID 擴展的配置
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-requestidextension extensions.filters.network.http_connection_manager.v3.RequestIDExtension}
         */
        request_id_extension?: RequestIDExtension
        /**
         * 自定義 Envoy 返回的本地回复的配置
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-localreplyconfig extensions.filters.network.http_connection_manager.v3.LocalReplyConfig}
         */
        local_reply_config?: LocalReplyConfig
        /**
         * 確定在 HTTP 過濾器或路由對請求進行任何處理之前是否應從主機/權限標頭中刪除端口部分
         * @remarks
         * 僅當該端口等於偵聽器的本地端口時，該端口才會被刪除。 
         * 這會影響上游主機頭，除非方法是 CONNECT，在這種情況下，如果沒有過濾器添加端口，則在將頭髮送到上游之前，將恢復原始端口。 
         * 如果不設置此選項，主機 example:443 的傳入請求將不會匹配域匹配設置為 example 的路由。 
         *  請注意，端口刪除不是 HTTP 規範的一部分，只是為了方便起見。 
         * 只能設置 strip_matching_host_port 或 strip_any_host_port 之一。
         * 
         * @defaultValue false
         */
        strip_matching_host_port?: boolean
        /**
         * 確定在 HTTP 過濾器或路由對請求進行任何處理之前是否應從主機/權限標頭中刪除端口部分
         * @remarks
         * 這會影響上游主機頭，除非方法是 CONNECT，在這種情況下，如果沒有過濾器添加端口，則在將頭髮送到上游之前，將恢復原始端口。
         * 如果不設置此選項，主機 example:443 的傳入請求將不會匹配域匹配設置為 example 的路由。 
         * 請注意，端口刪除不是 HTTP 規範的一部分，只是為了方便起見。 
         * 只能設置 strip_matching_host_port 或 strip_any_host_port 之一。
         * @defaultValue false
         */
        strip_any_host_port?: boolean
        /**
         * 當從下游接收到無效的 HTTP 時，管理 Envoy 的行為
         */
        stream_error_on_invalid_http_message?: boolean
        /**
         * 確定在 HTTP 過濾器或路由對請求進行任何處理之前是否應從主機/權限標頭中刪除主機的尾隨點
         * @remarks
         * 這會影響上游主機標頭。 如果不設置此選項，則使用主機 example.com. 傳入請求，不會匹配域匹配設置為 example.com 的路由。 
         * 當傳入請求包含包含端口號的主機/權限標頭時，設置此選項將從主機部分刪除尾隨點（如果存在），而端口保持原樣（例如主機值 example.com.:443 將是 更新為 example.com:443）。
         * @defaultValue false
         */
        strip_trailing_host_dot?: boolean
        /**
         * proxy-Status HTTP 響應頭配置。 如果設置了此配置，則會填充 Proxy-Status HTTP 響應標頭字段
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-proxystatusconfig extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ProxyStatusConfig}
         */
        proxy_status_config?: extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.ProxyStatusConfig
        /**
         * 將 x-forwarded-port 標頭附加到客戶端用於連接到 Envoy 的端口值。 
         * 如果 x-forwarded-port 標頭已由 Envoy 前面的任何受信任代理設置，它將被忽略
         */
        append_x_forwarded_port?: boolean
        /**
         * HCM 是否將 ProxyProtocolFilterState 添加到連接生命週期過濾器狀態
         * @defaultValue true
         */
        add_proxy_protocol_connection_state?: boolean
    }
    /**
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-rds extensions.filters.network.http_connection_manager.v3.Rds}
     */
    export interface Rds {
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource config.core.v3.ConfigSource}
         */
        config_source: config.core.v3.ConfigSource
        /**
         * 路由配置的名稱。 此名稱將傳遞給 RDS API。 
         * 這允許具有多個 HTTP 偵聽器（和關聯的 HTTP 連接管理器過濾器）的 Envoy 配置使用不同的路由配置。
         */
        route_config_name?: string
    }
    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-scopedroutes extensions.filters.network.http_connection_manager.v3.ScopedRoutes}
     */
    export interface ScopedRoutes { }
    /**
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-httpfilter extensions.filters.network.http_connection_manager.v3.HttpFilter}
     */
    export interface HttpFilter {

    }
    /**
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-requestidextension extensions.filters.network.http_connection_manager.v3.RequestIDExtension}
     */
    export interface RequestIDExtension {
        typed_config?: any
    }
    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-localreplyconfig extensions.filters.network.http_connection_manager.v3.LocalReplyConfig}
     */
    export interface LocalReplyConfig { }
}

export namespace config {
    export namespace route.v3 {
        export namespace RouteAction {
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction-requestmirrorpolicy config.route.v3.RouteAction.RequestMirrorPolicy}
             */
            export interface RequestMirrorPolicy { }
        }
        export namespace RouteMatch {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch-grpcroutematchoptions config.route.v3.RouteMatch.GrpcRouteMatchOptions}
             */
            export interface GrpcRouteMatchOptions { }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch-tlscontextmatchoptions config.route.v3.RouteMatch.TlsContextMatchOptions}
             */
            export interface TlsContextMatchOptions { }
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto#envoy-v3-api-msg-config-route-v3-routeconfiguration config.route.v3.RouteConfiguration}
         */
        export interface RouteConfiguration {
            /**
             * 路由配置的名稱
             */
            name?: string
            /**
             * 虛擬主機列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-virtualhost config.route.v3.VirtualHost}
             */
            virtual_hosts?: Array<VirtualHost>
            /**
             * 一組虛擬主機將通過 VHDS API 動態加載
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto#envoy-v3-api-msg-config-route-v3-vhds config.route.v3.Vhds}
             */
            vhds?: Vhds
            /**
             * 指定連接管理器將認為僅供內部使用的 HTTP 標頭列表。 
             * 如果它們在外部請求中被發現，它們將在過濾器調用之前被清除
             */
            internal_only_headers?: Array<string>
            /**
             * 指定應添加到連接管理器編碼的每個響應的 HTTP 標頭列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            response_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從連接管理器編碼的每個響應中刪除的 HTTP 標頭列表
             */
            response_headers_to_remove?: Array<string>
            /**
             * 指定應添加到 HTTP 連接管理器路由的每個請求的 HTTP 標頭列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            request_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從 HTTP 連接管理器路由的每個請求中刪除的 HTTP 標頭列表
             */
            request_headers_to_remove?: Array<string>
            /**
             * 默認情況下，應添加/刪除的標頭從最具體到最不具體進行評估：
             * - 路由級別
             * - 虛擬主機級別
             * - 連接管理器級別
             * 
             * 要允許在路由或虛擬主機級別設置覆蓋，可以通過將此選項設置為 true 來顛倒此順序
             * 
             * @defaultValue false
             */
            most_specific_header_mutations_wins?: boolean
            /**
             * 指定路由表引用的集群是否將由集群管理器驗證
             * @remarks
             * 如果設置為 true 且路由引用不存在的集群，則不會加載路由表。 
             * 如果設置為 false 且路由引用不存在的集群，則路由表將加載，並且如果在運行時選擇路由，路由器過濾器將返回 404。 
             * 如果路由表是通過 route_config 選項靜態定義的，則此設置默認為 true。 
             * 如果通過 rds 選項動態加載路由表，則此設置默認為 false。 
             * 用戶可能希望在某些情況下覆蓋默認行為（例如，當使用帶有靜態路由表的 CDS 時）
             */
            validate_clusters?: boolean
            /**
             * uint32 響應直接響應正文大小的最大字節數
             * 
             * @defaultValue 4096
             */
            max_direct_response_body_size_bytes?: number
            /**
             * 路由中的集群說明符插件名稱可能使用的插件列表及其配置。 
             * 此列表中的所有 extension.name 字段必須是唯一的
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-clusterspecifierplugin config.route.v3.ClusterSpecifierPlugin}
             */
            cluster_specifier_plugins?: Array<ClusterSpecifierPlugin>
            /**
             * 指定一組默認的請求鏡像策略，適用於其虛擬主機下的所有路由
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction-requestmirrorpolicy config.route.v3.RouteAction.RequestMirrorPolicy}
             */
            request_mirror_policies?: Array<RequestMirrorPolicy>
            /**
             * 默認情況下， :authority 標頭中的端口（如果有）用於主機匹配。
             * @remarks
             * 啟用此選項後，Envoy 在選擇 VirtualHost 時將忽略 :authority 標頭中的端口號（如果有）。
             * 注意：此選項不會去除路由配置 config.route.v3.VirtualHost.domains 字段中包含的端口號（如果有）。
             */
            ignore_port_in_host_matching?: boolean
            /**
             * 忽略路徑匹配中的路徑參數。 
             * @remarks
             * 在 RFC3986 之前，URI 類似於(RFC1808): <scheme>://<net_loc>/<path>;<params>?<query>#<fragment> Envoy 默認將 ':path' 作為 '<path>;<params>'。 
             * 對於只想匹配 '<path>' 部分的用戶，此選項應該為 true
             */
            ignore_path_parameters_in_path_matching?: boolean
            /**
             * 用於提供每個過濾器配置的 RouteConfiguration 級別
             */
            typed_per_filter_config?: Record<string, any>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-virtualhost config.route.v3.VirtualHost}
         */
        export interface VirtualHost {
            /**
             * 虛擬主機的邏輯名稱。 這在發出某些統計信息時使用，但與路由無關
             */
            name: string
            /**
             * 將與此虛擬主機匹配的域列表（主機/權限標頭）。
             * 支持後綴或前綴形式的通配符主機
             * @remarks
             * 域搜索順序:
             * - 準確的域名: www.foo.com
             * - 後綴域通配符: *.foo.com 或 *-bar.foo.com
             * - 前綴域通配符: foo.* 或 foo-*
             * - 特殊通配符: * 匹配任何域
             */
            domains: Array<string>
            /**
             * 將按順序匹配傳入請求的路由列表。 將使用匹配的第一條路線
             * @remarks
             * 只能指定 routes 和 matcher 其中之一
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-route config.route.v3.Route}
             */
            routes?: Array<config.route.v3.Route>
            /**
             * 解析傳入請求的路由操作時使用的匹配樹
             * {@link https://www.envoyproxy.io/docs/envoy/latest/xds/type/matcher/v3/matcher.proto#envoy-v3-api-msg-xds-type-matcher-v3-matcher .xds.type.matcher.v3.Matcher}
             */
            matcher?: any
            /**
             * 指定虛擬主機期望的 TLS 強制類型。 如果未指定此選項，則虛擬主機沒有 TLS 要求
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-enum-config-route-v3-virtualhost-tlsrequirementtype config.route.v3.VirtualHost.TlsRequirementType}
             */
            require_tls?: 'NONE' | 'EXTERNAL_ONLY' | 'ALL'
            /**
             * 為此虛擬主機定義的虛擬集群列表。 虛擬集群用於額外的統計數據收集。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-virtualcluster config.route.v3.VirtualCluster}
             */
            virtual_clusters?: Array<VirtualCluster>
            /**
             * 指定一組將應用於虛擬主機的速率限製配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-ratelimit config.route.v3.RateLimit}
             */
            rate_limits?: Array<RateLimit>
            /**
             * 指定應添加到此虛擬主機處理的每個請求的 HTTP 標頭列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            request_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從此虛擬主機處理的每個請求中刪除的 HTTP 標頭列表
             */
            request_headers_to_remove?: Array<string>
            /**
             * 指定應添加到此虛擬主機處理的每個響應的 HTTP 標頭列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            response_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從此虛擬主機處理的每個響應中刪除的 HTTP 標頭列表
             */
            response_headers_to_remove?: Array<string>
            /**
             * 指示虛擬主機具有 CORS 策略
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-corspolicy config.route.v3.CorsPolicy}
             */
            cors?: CorsPolicy
            /**
             * 用於為過濾器提供特定於虛擬主機的配置
             */
            typed_per_filter_config?: Record<string, any>
            /**
             * 決定 x-envoy-attempt-count 標頭是否應包含在上游請求中
             * @defaultValue false
             */
            include_request_attempt_count?: boolean
            /**
             * 決定 x-envoy-attempt-count 標頭是否應包含在下游響應中
             * @defaultValue false
             */
            include_attempt_count_in_response?: boolean
            /**
             * 指示該虛擬主機中所有路由的重試策略
             * @remarks
             * 設置路由級別條目將優先於此配置，並且將被獨立處理（例如：值不會被繼承）
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-retrypolicy config.route.v3.RetryPolicy}
             */
            retry_policy?: RetryPolicy
            /**
             * 指示該虛擬主機中所有路由的對沖策略
             * @remarks
             * 設置路由級別條目將優先於此配置，並且將被獨立處理（例如：值不會被繼承）
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-hedgepolicy config.route.v3.HedgePolicy}
             */
            hedge_policy?: HedgePolicy
            /**
             * 決定是否在每次嘗試超時啟動的重試中包含 x-envoy-is-timeout-retry 請求標頭
             */
            include_is_timeout_retry_header?: boolean
            /**
             * 將為重試和重試緩衝的最大字節數
             * @remarks
             * 如果設置並且未設置特定於路由的限制，則實際緩衝的字節將是此值和偵聽器 per_connection_buffer_limit_bytes 的最小值
             */
            per_request_buffer_limit_bytes?: number
            /**
             * 為這個虛擬主機下的每條路由指定一組默認的請求鏡像策略
             * @remarks
             * 它完全優先於路由配置鏡像策略。 即不合併策略，最具體的非空策略成為鏡像策略。
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction-requestmirrorpolicy config.route.v3.RouteAction.RequestMirrorPolicy}
             */
            request_mirror_policies?: Array<config.route.v3.RouteAction.RequestMirrorPolicy>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-route config.route.v3.Route}
         */
        export interface Route {
            /**
             * 路由名稱
             */
            name?: string
            /**
             * 路由匹配參數
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch config.route.v3.RouteMatch}
             */
            match: RouteMatch
            /**
             * 將請求路由到某個上游集群
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction config.route.v3.RouteAction}
             */
            route?: RouteAction
            /**
             * 返回重定向
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-redirectaction config.route.v3.RedirectAction}
             */
            redirect?: RedirectAction
            /**
             * 直接返回任意響應
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-directresponseaction config.route.v3.DirectResponseAction}
             */
            direct_response?: DirectResponseAction
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-metadata config.core.v3.Metadata}
             */
            metadata?: config.core.v3.Metadata
            /**
             * 匹配路由的裝飾器
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-decorator config.route.v3.Decorator}
             */
            decorator?: Decorator
            /**
             * 用於為過濾器提供特定於路由的配置。
             */
            typed_per_filter_config?: Record<string, any>
            /**
             * 指定一組標頭，這些標頭將添加到與此路由匹配的請求中
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            request_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從與此路由匹配的每個請求中刪除的 HTTP 標頭列表
             */
            request_headers_to_remove?: Array<string>
            /**
             * 指定一組標頭，這些標頭將添加到與此路由匹配的請求的響應中
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
             */
            response_headers_to_add?: Array<config.core.v3.HeaderValueOption>
            /**
             * 指定應從匹配此請求的每個響應中刪除的 HTTP 標頭列表
             */
            response_headers_to_remove?: Array<string>
            /**
             * 對象的存在定義連接管理器的跟踪配置是否被該路由特定實例覆蓋
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-tracing config.route.v3.Tracing}
             */
            tracing?: Tracing
            /**
             * uint32 將為重試和重試緩衝的最大字節數
             * @remarks
             * 如果設置，實際緩衝的字節將是這個和偵聽器 per_connection_buffer_limit_bytes 的最小值
             */
            per_request_buffer_limit_bytes?: number
            /**
             * 為該端點發出統計信息時使用的人類可讀前綴
             * @remarks
             * 統計信息以 vhost.<虛擬主機名>.route.<stat_prefix> 為根。
             * 這應該為人們希望獲得“每條路線”統計數據的高度關鍵端點設置。 
             * 如果未設置，則不會生成端點統計信息。
             * 發出的統計信息與為虛擬集群記錄的統計信息相同。
             */
            stat_prefix?: string
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch config.route.v3.RouteMatch}
         */
        export interface RouteMatch {
            /**
             * 如果指定，路由是一個前綴規則，意味著前綴必須匹配 :path 標頭的開頭
             */
            prefix?: string
            /**
             * 如果指定，則該路由是一個精確路徑規則，這意味著一旦刪除查詢字符串，該路徑必須與 :path 標頭完全匹配
             */
            path?: string
            /**
             * 如果指定，路由是一個正則表達式規則，這意味著一旦刪除查詢字符串，正則表達式必須匹配 :path 標頭。 
             * @remarks
             * 整個路徑（不含查詢字符串）必須與正則表達式匹配。 
             * 如果只有 :path 標頭的子序列與正則表達式匹配，則該規則將不匹配
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/type/matcher/v3/regex.proto#envoy-v3-api-msg-type-matcher-v3-regexmatcher type.matcher.v3.RegexMatcher}
             */
            safe_regex?: type.matcher.v3.RegexMatcher
            /**
             * 如果將其用作匹配器，則匹配器將僅匹配 CONNECT 請求
             * 
             * @remarks
             * 請注意，這將不匹配 HTTP/2 升級樣式的 CONNECT 請求（WebSocket 等），因為它們在 Envoy 中被規範化為 HTTP/1.1 樣式升級。 
             * 這是匹配 HTTP/1.1 的 CONNECT 請求的唯一方法。 對於 HTTP/2，Extended CONNECT 請求可能有路徑，如果存在路徑，路徑匹配器將工作。 
             * 請注意，CONNECT 支持目前在 Envoy 中被視為 alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch-connectmatcher config.route.v3.RouteMatch.ConnectMatcher}
             */
            connect_matcher?: any
            /**
             * 如果指定，路由是路徑分隔的前綴規則，這意味著 :path 標頭（不帶查詢字符串）必須與 path_separated_prefix 完全匹配或將其作為前綴，後跟 /
             * @remarks
             * 例如，/api/dev 會匹配 /api/dev、/api/dev/、/api/dev/v1 和 /api/dev?param=true 但不會匹配 /api/developer
             */
            path_separated_prefix?: string
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
             */
            path_match_policy?: config.core.v3.TypedExtensionConfig
            /**
             * 表示前綴/路徑匹配應該區分大小寫。 不會影響 safe_regex 匹配
             * @defaultValue true
             */
            case_sensitive?: boolean
            /**
             * 指示路由還應匹配運行時密鑰
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-runtimefractionalpercent config.core.v3.RuntimeFractionalPercent}
             */
            runtime_fraction?: config.core.v3.RuntimeFractionalPercent
            /**
             * 指定路由應匹配的一組標頭
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-headermatcher config.route.v3.HeaderMatcher}
             */
            headers?: Array<HeaderMatcher>
            /**
             * 指定路由應匹配的一組 URL 查詢參數
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-queryparametermatcher config.route.v3.QueryParameterMatcher}
             */
            query_parameters?: Array<QueryParameterMatcher>
            /**
             * 如果指定，則只會匹配 gRPC 請求。 
             * 路由器將檢查 content-type 標頭是否具有 application/grpc 或各種 application/grpc+ 值之一
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch-grpcroutematchoptions config.route.v3.RouteMatch.GrpcRouteMatchOptions}
             */
            grpc?: config.route.v3.RouteMatch.GrpcRouteMatchOptions
            /**
             * 如果指定，客戶端 tls 上下文將根據定義的匹配選項進行匹配
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routematch-tlscontextmatchoptions config.route.v3.RouteMatch.TlsContextMatchOptions}
             */
            tls_context?: config.route.v3.RouteMatch.TlsContextMatchOptions
            /**
             * 指定路由應匹配的一組動態元數據匹配器。 路由器將根據所有指定的動態元數據匹配器檢查動態元
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/type/matcher/v3/metadata.proto#envoy-v3-api-msg-type-matcher-v3-metadatamatcher type.matcher.v3.MetadataMatcher}
             */
            dynamic_metadata?: Array<type.matcher.v3.MetadataMatcher>
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-headermatcher config.route.v3.HeaderMatcher}
         */
        export interface HeaderMatcher { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-queryparametermatcher config.route.v3.QueryParameterMatcher}
         */
        export interface QueryParameterMatcher { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction config.route.v3.RouteAction}
         */
        export interface RouteAction { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-redirectaction config.route.v3.RedirectAction}
         */
        export interface RedirectAction { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-directresponseaction config.route.v3.DirectResponseAction}
         */
        export interface DirectResponseAction { }

        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-tracing config.route.v3.Tracing}
         */
        export interface Tracing { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-decorator config.route.v3.Decorator}
         */
        export interface Decorator { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto#envoy-v3-api-msg-config-route-v3-vhds config.route.v3.Vhds}
         */
        export interface Vhds {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource config.core.v3.ConfigSource}
             */
            config_source: Array<config.core.v3.ConfigSource>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-clusterspecifierplugin config.route.v3.ClusterSpecifierPlugin}
         */
        export interface ClusterSpecifierPlugin {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
             */
            extension: config.core.v3.TypedExtensionConfig
            is_optional?: boolean
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-routeaction-requestmirrorpolicy config.route.v3.RouteAction.RequestMirrorPolicy}
         */
        export interface RequestMirrorPolicy { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-virtualcluster config.route.v3.VirtualCluster}
         */
        export interface VirtualCluster { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-ratelimit config.route.v3.RateLimit}
         */
        export interface RateLimit { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-corspolicy config.route.v3.CorsPolicy}
         */
        export interface CorsPolicy { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-retrypolicy config.route.v3.RetryPolicy}
         */
        export interface RetryPolicy { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route_components.proto#envoy-v3-api-msg-config-route-v3-hedgepolicy config.route.v3.HedgePolicy}
         */
        export interface HedgePolicy { }
    }
    export namespace accesslog.v3 {
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#config-accesslog-v3-accesslog config.accesslog.v3.AccessLog}
         */
        export interface AccessLog {
            /**
             * 訪問日誌擴展配置的名稱
             */
            name?: string
            /**
             * 用於判斷是否需要寫入訪問日誌的過濾器
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslogfilter config.accesslog.v3.AccessLogFilter}
             */
            filter?: AccessLogFilter
            /**
             * 必鬚根據正在實例化的訪問記錄器擴展設置的自定義配置
             */
            typed_config: any
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslogfilter config.accesslog.v3.AccessLogFilter}
         */
        export interface AccessLogFilter { }
    }
    export namespace bootstrap.v3 {
        export namespace Bootstrap {
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-bootstrap-staticresources config.bootstrap.v3.Bootstrap.StaticResources}
             */
            export interface StaticResources {
                /**
                 * 靜態監聽器。 無論 LDS 配置如何，這些偵聽器都可用。
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener config.listener.v3.Listener}
                 */
                listeners?: Array<config.listener.v3.Listener>
                /**
                 * 如果為 cds_config 指定了基於網絡的配置源，則有必要提供一些初始集群定義，以允許 Envoy 知道如何與管理服務器通信。 這些集群定義可能不使用 EDS（即它們應該是靜態 IP 或基於 DNS）
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster config.cluster.v3.Cluster}
                 */
                clusters?: Array<config.cluster.v3.Cluster>
                /**
                 * SdsSecretConfig 可以使用這些靜態 secrets
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret extensions.transport_sockets.tls.v3.Secret}
                 */
                secrets?: Array<extensions.transport_sockets.tls.v3.Secret>
            }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#config-bootstrap-v3-bootstrap-dynamicresources config.bootstrap.v3.Bootstrap.DynamicResources}
             */
            export interface DynamicResources {
                /**
                 * 所有{@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener 監聽器}都由單個  {@link https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/operations/dynamic_configuration#arch-overview-dynamic-config-lds LDS} 配置源提供
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource config.core.v3.ConfigSource}
                 */
                lds_config?: config.core.v3.ConfigSource
                /**
                 * 所有的後端{@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster 集群}由單個  {@link https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/operations/dynamic_configuration#arch-overview-dynamic-config-cds CDS} 配置源提供
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource config.core.v3.ConfigSource}
                 */
                cds_config?: config.core.v3.ConfigSource
                /**
                 * 可以選擇性地指定單個 {@link https://www.envoyproxy.io/docs/envoy/latest/configuration/overview/xds_api#config-overview-ads ADS} 源。
                 * 這必須具有 {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-field-config-core-v3-apiconfigsource-api-type api_type GRPC}。 
                 * 只有設置了廣告字段的 {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource ConfigSources} 才會在 ADS 頻道上流式傳輸。
                 * 
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-apiconfigsource config.core.v3.ApiConfigSource}
                 */
                ads_config?: config.core.v3.ApiConfigSource
            }
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-admin config.bootstrap.v3.Admin}
         */
        export interface Admin {
            /**
             * 管理服務器的日誌配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslog config.accesslog.v3.AccessLog}
             */
            access_log?: Array<config.accesslog.v3.AccessLog>
            /**
             * 管理服務器的 cpu 分析器輸出路徑
             * 
             * @defaultValue '/var/log/envoy/envoy.prof'
             */
            profile_path?: string
            /**
             * 管理服務器將偵聽的 TCP 地址。
             * 如果未指定，Envoy 將不會啟動管理服務器。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address config.core.v3.Address}
             */
            address: config.core.v3.Address
            /**
             * Envoy 源代碼或預編譯二進製文件中可能不存在的其他套接字選項
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#envoy-v3-api-msg-config-core-v3-socketoption config.core.v3.SocketOption}
             */
            socket_options: config.core.v3.SocketOption
            /**
             * 指示 global_downstream_max_connections 是否應該應用於管理界面
             */
            ignore_global_conn_limit: boolean
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-clustermanager config.bootstrap.v3.ClusterManager}
         */
        export interface ClusterManager { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-watchdog config.bootstrap.v3.Watchdog}
         */
        export interface Watchdog { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-watchdogs config.bootstrap.v3.Watchdogs} 
        */
        export interface Watchdogs { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-layeredruntime config.bootstrap.v3.LayeredRuntime}
        */
        export interface LayeredRuntime {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-runtimelayer config.bootstrap.v3.RuntimeLayer}
             */
            layers: Array<RuntimeLayer>
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-runtimelayer config.bootstrap.v3.RuntimeLayer}
         */
        export interface RuntimeLayer { }

        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-fatalaction config.bootstrap.v3.FatalAction}
         */
        export interface FatalAction {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
             */
            config: config.core.v3.TypedExtensionConfig
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-custominlineheader config.bootstrap.v3.CustomInlineHeader}
         */
        export interface CustomInlineHeader { }
    }
    export namespace core.v3 {
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-runtimefractionalpercent config.core.v3.RuntimeFractionalPercent}
         */
        export interface RuntimeFractionalPercent { }
        /**
         * @alpha
         *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-headervalueoption config.core.v3.HeaderValueOption}
         */
        export interface HeaderValueOption { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-schemeheadertransformation config.core.v3.SchemeHeaderTransformation}
         */
        export interface SchemeHeaderTransformation { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-cidrrange config.core.v3.CidrRange}
         */
        export interface CidrRange {
            /**
             *  IPv4 or IPv6 address, e.g. 192.0.0.0 or 2001:db8::.
             */
            address_prefix?: string
            /**
             * uint32 前綴長度，例如 0、32。未設置時默認為 0
             */
            prefix_len?: number
        }
        /**
         * 指定一個邏輯或物理地址，用於告訴 Envoy 在哪裏 bind/listen， connect 上游，查找管理服務器
         * 
         * @remarks
         * 必須設置 socket_address, pipe, envoy_internal_address 中的一個
         * 
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address config.core.v3.Address}
         */
        export interface Address {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-socketaddress config.core.v3.SocketAddress}
             */
            socket_address?: SocketAddress
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-pipe config.core.v3.Pipe}
             */
            pipe?: Pipe
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-envoyinternaladdress config.core.v3.EnvoyInternalAddress}
             */
            envoy_internal_address?: EnvoyInternalAddress
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-socketaddress config.core.v3.SocketAddress}
         */
        export interface SocketAddress {
            /**
             * @defaultValue 'TCP'
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-enum-config-core-v3-socketaddress-protocol protocol}
             */
            protocol?: 'TCP' | 'UDP'
            /**
             * listener 監聽地址，不允許空字符串可以使用 0.0.0.0 或 :: 指代任意地址
             * 
             * @remarks
             * 
             * 當在上游 BindConfig 中使用時，地址控制出站連接的源地址。 
             * 對於集群，集群類型決定地址必須是 IP（STATIC 或 EDS 集群）還是由 DNS 解析的主機名（STRICT_DNS 或 LOGICAL_DNS 集群）。
             * 可以通過 resolver_name 自定義地址解析。
             */
            address: string
            /**
             * uint32 的監聽端口號
             * 
             * port_value/named_port 必須設置其中一個值
             */
            port_value?: number
            /**
             * 這僅在下面指定了 resolver_name 且命名解析器能夠進行命名端口解析時才有效
             * 
             * port_value/named_port 必須設置其中一個值
             */
            named_port?: string
            /**
             * 自定義解析器的名稱，這必須已在 Envoy 註冊
             * 
             * @remarks
             * 如果為空，則應用上下文相關的默認值。 
             * 如果該地址是具體的 IP 地址，則不會發生任何解析。 
             * 如果 address 是主機名，則應將其設置為解析而不是 DNS。 
             * 使用 STRICT_DNS 或 LOGICAL_DNS 指定自定義解析器將在運行時產生錯誤。
             */
            resolver_name?: string
            /**
             * 當綁定到上面的 IPv6 地址時，這會啟用 IPv4 兼容性
             * 
             * @remarks
             * 綁定到 :: 將允許 IPv4 和 IPv6 連接，將對等 IPv4 地址映射到 IPv6 空間，如 ::FFFF:<IPv4-address>。
             */
            ipv4_compat?: boolean
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#envoy-v3-api-msg-config-core-v3-socketoption config.core.v3.SocketOption}
         */
        export interface SocketOption { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#config-core-v3-socketoptionsoverride config.core.v3.SocketOptionsOverride
         */
        export interface SocketOptionsOverride {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#envoy-v3-api-msg-config-core-v3-socketoption config.core.v3.SocketOption}
             */
            socket_options?: Array<SocketOption>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-pipe config.core.v3.Pipe}
         */
        export interface Pipe {
            /**
             * Unix Domain Socket path
             * 
             * @remarks
             * 在 Linux 上，以 "@" 開頭的路徑將使用抽象命名空間。 
             * Envoy 將開頭的 "@" 替換為空字節。 
             * 以 "@" 開頭的路徑將導致在 Linux 以外的環境中出錯。
             */
            path: string
            /**
             * uuint32 的管道的模式。 不適用於抽象套接字。
             */
            mode?: number
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-envoyinternaladdress config.core.v3.EnvoyInternalAddress}
         */
        export interface EnvoyInternalAddress {
            /**
             * 指定內部偵聽器的名稱
             */
            server_listener_name: string
            /**
             * 指定端點標識符以區分單個上游池中同一內部偵聽器的多個端點。 
             * 僅在上游地址中用於跟踪對各個端點的更改。 
             * 例如，這可以設置為目標內部偵聽器的最終目標 IP。
             */
            endpoint_id?: string
        }

        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-node config.core.v3.Node}
         */
        export interface Node {
            /**
             * Envoy 節點的不透明標識符，這也提供本地服務節點的名稱
             * 
             * @remarks
             * 如果使用 statsd, CDS, HTTP following 中的任意功能則需要設置這個值
             * 
             * 也可以在命令行中爲 envoy 傳入 --service-node 參數來指定
             */
            id?: string
            /**
             * 定義運行 Envoy 的本地服務集羣名稱
             * 
             * 如果使用 statsd, health check cluster verification, runtime override directory, user agent addition, HTTP global rate limiting, CDS, HTTP tracing 中任意功能則需要設置此值
             * 
             * 也可以在命令行中爲 envoy 傳入 --service-cluster 參數來指定
             */
            cluster?: string
            /**
             * 擴展節點標識符的不透明元素。Envoy 會將值直接傳遞給管理服務器
             * 
             * {@link https://protobuf.dev/reference/protobuf/google.protobuf/#struct Struct}
             */
            metadata?: any

            /**
             * Record<string,xds.core.v3.ContextParams>
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/xds/core/v3/context_params.proto#envoy-v3-api-msg-xds-core-v3-contextparams xds.core.v3.ContextParams}
             */
            dynamic_parameters?: Record<string, any>
            /**
             * 指示 Envoy 服務器運行的位置
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-locality config.core.v3.Locality}
             */
            locality?: Locality
            /**
             * 請求的自定義標識符字符串。例如 "envoy" , "grpc"
             */
            user_agent_name?: string
            /**
             * 請求的自定義標識符字符串。例如 "1.12.2", "abcd1234", "SpecialEnvoyBuild"
             * 
             * @remarks
             * user_agent_version 和 user_agent_build_version 不能同時設置
             * 
             */
            user_agent_version?: string
            /**
             * 請求配置的實體結構化版本
             * 
             * @remarks
             * user_agent_version 和 user_agent_build_version 不能同時設置
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-buildversion config.core.v3.BuildVersion}
             */
            user_agent_build_version?: BuildVersion
            /**
             * 節點支持的擴展列表及其版本
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-extension config.core.v3.Extension}
             */
            extensions?: Array<Extension>
            /**
             * 客戶端功能支持列表。這些是 Envoy API 存儲庫中針對給定 API 主要版本描述的衆所周知的功能。客戶端功能使用反向 DNS 命名方案，例如 com.acme.feature。請參閱 xDS 客戶端可能支持的功能列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api/client_features#client-features}
             */
            client_features?: Array<string>
            /**
             * 節點上的已知監聽器端口作爲對管理服務器的一般提示，用於過濾要返回的監聽器。
             * 
             * @remarks
             * 例如，如果有一個監聽器 bind 到 80 端口，則該列表可以選擇包含 SocketAddress(0.0.0.0,80)。這是一個可選字段，它只是一個提示
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address config.core.v3.Address}
             */
            listening_addresses?: Array<Address>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-locality config.core.v3.Locality}
         */
        export interface Locality {
            region?: string
            zone?: string
            sub_zone?: string
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-buildversion config.core.v3.BuildVersion}
         */
        export interface BuildVersion { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-extension config.core.v3.Extension}
         */
        export interface Extension { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-apiconfigsource config.core.v3.ApiConfigSource}
         */
        export interface ApiConfigSource { }
        /**
         * 動態配置源
         * 
         * @remarks
         * path, path_config_source, api_config_source, ads 必須設置其中一個
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-configsource config.core.v3.ConfigSource}
         */
        export interface ConfigSource {
            /**
             * @deprecated use {@link path_config_source} instead 
             */
            path?: string
            /**
             * 本地文件系統路徑配置源
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-pathconfigsource config.core.v3.PathConfigSource}
             */
            path_config_source?: PathConfigSource
            /**
             * API 配置源
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-apiconfigsource config.core.v3.ApiConfigSource}
             */
            api_config_source?: ApiConfigSource
            /**
             * 設置後，ADS 將用於獲取資源。 使用引導程序配置中的 ADS API 配置源。
             *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-aggregatedconfigsource config.core.v3.AggregatedConfigSource}
             */
            ads?: AggregatedConfigSource

            /**
             * 資源超時時間
             * 
             * @defaultValue 15s
             * @remarks
             * 指定此超時後，Envoy 將在初始化過程中等待此 xDS 訂閱上的第一個配置響應的指定時間不超過指定時間。
             *  達到超時後，Envoy 將進入下一個初始化階段，即使第一個配置尚未交付。
             *  計時器在 xDS API 訂閱開始時激活，並在第一次配置更新或出錯時解除。 
             * 0 表示沒有超時 - Envoy 將無限期地等待第一個 xDS 配置（除非另一個超時適用）。 默認為 15 秒
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            initial_fetch_timeout?: string
            /**
             * xDS 資源的 API 版本。 
             * 
             * @defaultValue AUTO
             * @remarks
             * 這意味著客戶端將請求資源的類型 URL 以及客戶端將依次期望交付的資源類型。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-enum-config-core-v3-apiversion config.core.v3.ApiVersion}
             */
            resource_api_version?: ApiVersion
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-enum-config-core-v3-apiversion config.core.v3.ApiVersion}
         */
        export type ApiVersion = 'AUTO' | 'V2' | 'V3'
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-pathconfigsource config.core.v3.PathConfigSource}
         */
        export interface PathConfigSource {
            /**
             * 檔案系統上的路徑以獲取和監視配置更新。 為 secret 獲取配置時，還會監視證書和密鑰文件的更新。
             */
            path: string
            /**
             * 如果已配置，將監視此目錄的移動。 當移動到此目錄中的條目時，將重新加載路徑。 這在某些部署場景中是必需的。
             * 
             * @remarks
             * 具體來說，如果嘗試使用 Kubernetes ConfigMap 加載 xDS 資源，則可能會使用以下配置： 
             * 1. 將 xds.yaml 存儲在 ConfigMap 中。 
             * 2. 將 ConfigMap 掛載到 /config_map/xds 
             * 3. 配置 path 爲 /config_map/xds/xds.yaml 
             * 4. 配置 watched_directory 爲 /config_map/xds
             * 上述配置將確保 Envoy 監視擁有目錄以進行移動，這是由於 Kubernetes 在原子更新期間如何管理 ConfigMap 符號鏈接所必需
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-watcheddirectory config.core.v3.WatchedDirectory}
             */
            watched_directory?: WatchedDirectory
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-watcheddirectory config.core.v3.WatchedDirectory}
         */
        export interface WatchedDirectory {
            /**
             * 要監聽的檔案夾路徑
             */
            path: string
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-aggregatedconfigsource config.core.v3.AggregatedConfigSource}
         */
        export interface AggregatedConfigSource {
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
         */
        export interface TypedExtensionConfig { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-metadata config.core.v3.Metadata}
         */
        export interface Metadata { }
        /**
         * * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-transportsocket config.core.v3.TransportSocket}
         */
        export interface TransportSocket {
            /**
             * 要實例化的傳輸套接字的名稱。 該名稱必須與受支持的傳輸套接字實現相匹配。
             */
            name: string
            /**
             * 特定於實現的配置取決於正在實例化的實現。 請參閱支持的傳輸套接字實現以獲取更多文檔。
             */
            typed_config: any
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-bindconfig config.core.v3.BindConfig}
         */
        export interface BindConfig { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http2protocoloptions config.core.v3.Http2ProtocolOptions}
         */
        export interface Http2ProtocolOptions { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http1protocoloptions config.core.v3.Http1ProtocolOptions}
         */
        export interface Http1ProtocolOptions { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-httpprotocoloptions config.core.v3.HttpProtocolOptions}
         */
        export interface HttpProtocolOptions { }

        /**
         * @alpha
         *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-upstreamhttpprotocoloptions config.core.v3.UpstreamHttpProtocolOptions}
         */
        export interface UpstreamHttpProtocolOptions { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/health_check.proto#envoy-v3-api-msg-config-core-v3-healthcheck config.core.v3.HealthCheck}
         */
        export interface HealthCheck { }

        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/health_check.proto#envoy-v3-api-enum-config-core-v3-healthstatus config.core.v3.HealthStatus}
         */
        export type HealthStatus = 'UNKNOWN' | 'HEALTHY' | 'UNHEALTHY' | 'DRAINING' | 'TIMEOUT' | 'DEGRADED'

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-extensionconfigsource config.core.v3.ExtensionConfigSource}
         */
        export interface ExtensionConfigSource { }
    }
    export namespace endpoint.v3 {
        export namespace Endpoint {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-endpoint-healthcheckconfig config.endpoint.v3.Endpoint.HealthCheckConfig}
             */
            export interface HealthCheckConfig {
                /**
                 * uint32 可選的替代健康檢查端口值
                 * 
                 * @remarks
                 * 默認情況下，上游主機的健康檢查地址端口與主機的服務地址端口相同。 這提供了一個替代的健康檢查端口。 將此設置為非零值允許上游主機具有不同的健康檢查地址端口。
                 */
                port_value?: number
                /**
                 * 默認情況下，用於 L7 健康檢查的主機標頭由集群級別配置控制（請參閱：主機和權限）。
                 */
                hostname?: string
                /**
                 * 可選的替代健康檢查主機地址
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address config.core.v3.Address}
                 */
                address?: config.core.v3.Address
                /**
                 * 用於控制是否為此端點執行主動健康檢查的可選標誌。 
                 * 如果有健康檢查器，則默認啟用主動健康檢查。 
                 */
                disable_active_health_check?: boolean
            }
        }
        export namespace ClusterLoadAssignment {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint.proto#envoy-v3-api-msg-config-endpoint-v3-clusterloadassignment-policy config.endpoint.v3.ClusterLoadAssignment.Policy}
             */
            export interface Policy {
                /**
                 * uint32 優先級和位置被認為是這個因素（以百分比表示）的過度配置。
                 * 這意味著在健康主機的比例乘以過度配置因子下降到 100 以下之前，我們不會認為優先級或位置不健康。
                 * 使用默認值 140(1.4)
                 */
                overprovisioning_factor?: number
                /**
                 * 可以使用此分配的端點的最長時間。 如果在此時間到期之前沒有收到新的分配，則端點將被視為過時並應標記為不健康。 默認為 0，這意味著端點永遠不會過時。
                 * 
                 * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
                 */
                endpoint_stale_after?: string
            }
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint.proto#envoy-v3-api-msg-config-endpoint-v3-clusterloadassignment config.endpoint.v3.ClusterLoadAssignment}
         */
        export interface ClusterLoadAssignment {
            /**
             * 集群名稱
             */
            cluster_name: string
            /**
             * 要進行負載均衡的端點列表
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-localitylbendpoints config.endpoint.v3.LocalityLbEndpoints}
             */
            endpoints?: Array<LocalityLbEndpoints>
            /**
             * 負載均衡策略
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint.proto#envoy-v3-api-msg-config-endpoint-v3-clusterloadassignment-policy config.endpoint.v3.ClusterLoadAssignment.Policy}
             */
            policy?: config.endpoint.v3.ClusterLoadAssignment.Policy
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-localitylbendpoints config.endpoint.v3.LocalityLbEndpoints}
         */
        export interface LocalityLbEndpoints {
            /**
             * 標識上游主機的運行位置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-locality config.core.v3.Locality}
             */
            locality?: config.core.v3.Locality
            /**
             * 指定端點數組
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-lbendpoint config.endpoint.v3.LbEndpoint}
             */
            lb_endpoints?: Array<config.endpoint.v3.LbEndpoint>
            /**
             * 每個優先級/區域/區域/子區域權重
             */
            load_balancing_weight?: number
            /**
             * 此 LocalityLbEndpoints 的優先級。 如果未指定，這將默認為最高優先級 (0)
             * 
             * @remarks
             * 通常情況下，Envoy 只會選擇最高優先級（0）的端點。 
             * 如果特定優先級的所有端點都不可用/不健康，Envoy 將故障轉移到為下一個最高優先級組選擇端點。
             */
            priority?: number
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-lbendpoint config.endpoint.v3.LbEndpoint}
         */
        export interface LbEndpoint {
            /**
             * 上游主機標識符或命名引用
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-endpoint config.endpoint.v3.Endpoint}
             */
            endpoint?: Endpoint
            /**
             * EDS 服務器已知和提供的可選健康狀態
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/health_check.proto#envoy-v3-api-enum-config-core-v3-healthstatus config.core.v3.HealthStatus}
             */
            health_status?: config.core.v3.HealthStatus
            /**
             * 端點元數據指定負載均衡器可以用來為給定請求選擇集群中的端點的值。 過濾器名稱應指定為 envoy.lb。 示例布爾鍵值對是金絲雀，提供上游主機的可選金絲雀狀態
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-metadata config.core.v3.Metadata}
             */
            metadata?: config.core.v3.Metadata
            /**
             * uint32 上游主機的可選負載均衡權重
             */
            load_balancing_weight?: number
        }
        /**
         * {@link {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-endpoint config.endpoint.v3.Endpoint}}
         */
        export interface Endpoint {
            /**
             * 上游地址
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address core.v3.Address}
             */
            address?: core.v3.Address

            /**
             * 健康檢查配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint_components.proto#envoy-v3-api-msg-config-endpoint-v3-endpoint-healthcheckconfig config.endpoint.v3.Endpoint.HealthCheckConfig}
             */
            health_check_config?: config.endpoint.v3.Endpoint.HealthCheckConfig
            /**
             * 與此端點關聯的 hostname。 此 hostname 不用於路由或地址解析。 
             * 如果提供，它將與端點相關聯，並可用於需要 hostname 的功能，如 auto_host_rewrite
             */
            hostname?: string
        }
    }
    export namespace listener.v3 {
        export namespace Listener {
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener-connectionbalanceconfig config.listener.v3.Listener.ConnectionBalanceConfig}
             */
            export interface ConnectionBalanceConfig { }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener-internallistenerconfig config.listener.v3.Listener.InternalListenerConfig}
             */
            export interface InternalListenerConfig { }
        }
        export namespace FilterChainMatch {
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-enum-config-listener-v3-filterchainmatch-connectionsourcetype config.listener.v3.FilterChainMatch.ConnectionSourceType}
             */
            export type ConnectionSourceType = 'ANY' | 'SAME_IP_OR_LOOPBACK' | 'EXTERNAL'
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener config.listener.v3.Listener}
         */
        export interface Listener {
            /**
             * 監聽器的唯一名稱
             * 
             * @remarks
             * 如果未提供則 envoy 自動創建一個 uuid作爲名稱。
             * 如果要使用 {@link https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/lds#config-listeners-lds LDS} 更新或刪除監聽器則必須指定一個唯一的名稱
             */
            name?: string
            /**
             * 監聽地址，除非設置了 api_listener/listener_specifier 否則必須設置此值
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address config.core.v3.Address}
             */
            address?: config.core.v3.Address
            /**
             * 偵聽器應偵聽的其他地址
             * 
             * @remarks
             * 在單個偵聽器中使用多個地址時，所有地址都使用相同的協議，並且不支持多個內部地址
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-additionaladdress config.listener.v3.AdditionalAddress}
             */
            additional_addresses?: Array<AdditionalAddress>
            /**
             * 統計信息前綴
             * 
             * @remarks
             * 如果為空，統計信息將以 listener.<address as string>.. 如果非空，統計信息將以 listener.<stat_prefix>..
             */
            stat_prefix?: string
            /**
             * 監聽器上的過濾鏈
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchain config.listener.v3.FilterChain}
             */
            filter_chains?: Array<FilterChain>
            /**
             * @alpha
             * 從網路獲取過濾鏈名稱
             */
            filter_chain_matcher?: any
            /**
             * 如果使用 iptables 重定向連接，則代理接收它的端口可能與原始目標地址不同。
             * 當此標誌設置為 true 時，偵聽器將重定向連接移交給與原始目標地址關聯的偵聽器。 
             * 如果沒有與原始目標地址關聯的偵聽器，則連接由接收它的偵聽器處理
             * 
             * @defaultValue false
             */
            use_original_dst?: boolean,
            /**
             * 如果沒有匹配的過濾器鏈，則使用默認過濾器鏈。
             * 如果沒有提供默認的過濾器鏈，連接將被關閉。 
             * 過濾器鏈匹配在此字段中被忽略。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchain config.listener.v3.FilterChain}
             */
            default_filter_chain?: FilterChain
            /**
             * 對偵聽器的新連接讀寫緩衝區大小的軟限制
             * 
             * @defaultValue 1024*1024 = 1M
             */
            per_connection_buffer_limit_bytes?: number
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-metadata config.core.v3.Metadata}
             */
            metadata?: config.core.v3.Metadata
            /**
             * 在偵聽器級別執行的耗盡類型
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-enum-config-listener-v3-listener-draintype config.listener.v3.Listener.DrainType}
             */
            drain_type?: 'DEFAULT' | 'MODIFY_ONLY'
            /**
             * 監聽器過濾器，用於指定監聽器的類型
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-listenerfilter config.listener.v3.ListenerFilter}
             */
            listener_filters?: Array<ListenerFilter>
            /**
             * 等待所有偵聽器過濾器完成操作的超時時間
             * 
             * @defaultValue 5s
             * 
             * @remarks
             * 如果達到超時，除非將 continue_on_listener_filters_timeout 設置為 true，否則將關閉接受的套接字而不創建連接。 
             * 指定 0 以禁用超時。
             * 如果未指定，則使用默認超時 15 秒。
             * 
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            listener_filters_timeout?: string
            /**
             * 當偵聽器過濾器超時時是否應創建連接
             * 
             * @defaultValue false
             */
            continue_on_listener_filters_timeout?: boolean
            /**
             * 是否應將偵聽器設置為透明套接字 TPROXY
             */
            transparent?: boolean
            /**
             * 是否啓用 IP_FREEBIND 選項
             */
            freebind?: boolean
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#envoy-v3-api-msg-config-core-v3-socketoption config.core.v3.SocketOption}
             */
            socket_options?: Array<config.core.v3.SocketOption>
            /**
             * 偵聽器是否應接受 TCP 快速打開 (TFO) 連接。 當此標誌設置為大於 0 的值時，選項 TCP_FASTOPEN 在套接字上啟用，隊列長度為指定大小（請參閱 {@link https://tools.ietf.org/html/rfc7413#section-5.1 RFC7413} 中的詳細信息）
             */
            tcp_fast_open_queue_length?: number
            /**
             * 指定流量相對於本地 Envoy 的預期方向。 對於使用原始目標篩選器的偵聽器，此屬性在 Windows 上是必需的，請參閱{@link https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/listener_filters/original_dst_filter#config-listener-filters-original-dst 原始目標}
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-enum-config-core-v3-trafficdirection config.core.v3.TrafficDirection}
             */
            traffic_direction?: 'UNSPECIFIED' | 'INBOUND' | 'OUTBOUND'
            /**
             * 對於 udp 協議，指定udp設定
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/udp_listener_config.proto#envoy-v3-api-msg-config-listener-v3-udplistenerconfig config.listener.v3.UdpListenerConfig}
             */
            udp_listener_config?: UdpListenerConfig
            /**
             * 用於表示一個 API 偵聽器，用於非代理客戶端。
             * @remarks
             * 向非代理應用程序公開的 API 類型取決於 API 偵聽器的類型。 
             * 設置此字段後，不應設置除名稱以外的其他字段。
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/api_listener.proto#envoy-v3-api-msg-config-listener-v3-apilistener config.listener.v3.ApiListener}
             */
            api_listener?: ApiListener
            /**
             * 偵聽器的連接平衡器配置，目前僅適用於 TCP 偵聽器。
             * @remarks
             * 如果未指定配置，Envoy 將不會嘗試平衡工作線程之間的活動連接
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener-connectionbalanceconfig config.listener.v3.Listener.ConnectionBalanceConfig}
             */
            connection_balance_config?: config.listener.v3.Listener.ConnectionBalanceConfig
            /**
             * 使用 {@link enable_reuse_port} 替代
             */
            reuse_port?: boolean
            /**
             * 當此標誌設置為 true 時，偵聽器設置 SO_REUSEPORT 套接字選項並為每個工作線程創建一個套接字。
             *  這使得入站連接在存在大量連接的情況下大致均勻地分佈在工作線程中。 
             * 當此標誌設置為 false 時，所有工作線程共享一個套接字
             * 
             * @defaultValue true
             */
            enable_reuse_port?: boolean
            /**
             * 爲監聽器配置日誌
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslog config.accesslog.v3.AccessLog}
             */
            access_log?: Array<config.accesslog.v3.AccessLog>
            /**
             * uint32 tcp 偵聽器的掛起連接隊列可以增長到的最大長度。 
             * 如果未提供任何值， 在 Linux 上使用 net.core.somaxconn，否則為 128。
             */
            tcp_backlog_size?: number
            /**
             * 偵聽器是否應綁定到端口。 未綁定的偵聽器只能接收從其他將 use_original_dst 設置為 true 的偵聽器重定向的連接
             * 
             * @defaultValue true
             */
            bind_to_port?: boolean
            /**
             * 用於表示不在 OSI L4 地址上偵聽但可由特使集群用來創建用戶空間連接的內部偵聽器。
             * 內部偵聽器充當 TCP 偵聽器。 它支持偵聽器過濾器和網絡過濾器鏈。 
             * 上游集群通過名稱引用內部偵聽器。 不得在內部偵聽器上設置地址。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener-internallistenerconfig config.listener.v3.Listener.InternalListenerConfig}
             */
            internal_listener?: config.listener.v3.Listener.InternalListenerConfig
            /**
             * 在此偵聽器上啟用 MPTCP（多路徑 TCP）。
             * 客戶端將被允許建立 MPTCP 連接。 非 MPTCP 客戶端將回退到常規 TCP。
             */
            nable_mptcp?: boolean
            /**
             * 偵聽器是否應根據 global_downstream_max_connections 的值限制連接
             */
            ignore_global_conn_limit?: boolean
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-additionaladdress config.listener.v3.AdditionalAddress}
         */
        export interface AdditionalAddress {
            address?: string
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/socket_option.proto#config-core-v3-socketoptionsoverride config.core.v3.SocketOptionsOverride}
             */
            socket_options?: Array<config.core.v3.SocketOptionsOverride>
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchain config.listener.v3.FilterChain}
         */
        export interface FilterChain {
            /**
             * 定義如何匹配此鏈
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchainmatch config.listener.v3.FilterChainMatch}
             */
            filter_chain_match?: FilterChainMatch
            /**
             * 過濾器
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filter config.listener.v3.Filter}
             */
            filters?: Array<Filter>
            /**
             * 偵聽器是否應在新連接上期望 PROXY 協議 V1 標頭
             * 
             * @deprecated 應該顯示增加一個 PROXY 協議的監聽器
             */
            use_proxy_proto?: boolean
            /**
             * 用於下游連接的可選自定義傳輸套接字實現，例如啓用 tls
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-transportsocket config.core.v3.TransportSocket}
             */
            transport_socket?: config.core.v3.TransportSocket
            /**
             * 如果存在且非零，則為允許傳入連接完成任何傳輸套接字協商的時間量。 
             * 如果這在傳輸報告連接建立之前過期，連接將立即關閉。
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            transport_socket_connect_timeout?: string
            /**
             * 過濾器在監聽器中的唯一名稱
             */
            name?: string
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filter config.listener.v3.Filter}
         */
        export interface Filter {
            /**
             * 選用的過濾器名稱
             */
            name: string
            /**
             * 過濾器特定配置取決於正在實例化的過濾器
             */
            typed_config?: any
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-listenerfilter config.listener.v3.ListenerFilter}
         */
        export interface ListenerFilter {
            /**
             * 選擇的過濾器名稱
             */
            name: string
            /**
             * 過濾器特定配置取決於正在實例化的過濾器
             */
            typed_config?: any

            /**
             * 擴展配置發現服務的配置源說明符。 如果發生故障且沒有默認配置，偵聽器將關閉連接
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-extensionconfigsource config.core.v3.ExtensionConfigSource}
             */
            config_discovery?: config.core.v3.ExtensionConfigSource

            /**
             * 用於禁用過濾器的可選匹配謂詞
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-listenerfilterchainmatchpredicate config.listener.v3.ListenerFilterChainMatchPredicate}
             */
            filter_disabled?: config.listener.v3.ListenerFilterChainMatchPredicate
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/udp_listener_config.proto#envoy-v3-api-msg-config-listener-v3-udplistenerconfig config.listener.v3.UdpListenerConfig}
         */
        export interface UdpListenerConfig { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/api_listener.proto#envoy-v3-api-msg-config-listener-v3-apilistener config.listener.v3.ApiListener}
         */
        export interface ApiListener {
            api_listener?: any
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-listenerfilterchainmatchpredicate config.listener.v3.ListenerFilterChainMatchPredicate}
         */
        export interface ListenerFilterChainMatchPredicate { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-msg-config-listener-v3-filterchainmatch config.listener.v3.FilterChainMatch}
         */
        export interface FilterChainMatch {
            /**
             * uint32 匹配目的端口
             */
            destination_port?: number
            /**
             * 如果非空，當偵聽器綁定到 0.0.0.0/:: 或指定 use_original_dst 時，IP 地址和前綴長度匹配地址
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-cidrrange config.core.v3.CidrRange}
             */
            prefix_ranges?: Array<config.core.v3.CidrRange>
            /**
             * 如果下游連接的直接連接的源 IP 地址包含在至少一個指定的子網中，則滿足條件。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-cidrrange config.core.v3.CidrRange}
             */
            direct_source_prefix_ranges?: Array<config.core.v3.CidrRange>
            /**
             * 指定連接源 IP 匹配類型。 可以是任何本地或外部網絡。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#envoy-v3-api-enum-config-listener-v3-filterchainmatch-connectionsourcetype config.listener.v3.FilterChainMatch.ConnectionSourceType}
             */
            source_type?: config.listener.v3.FilterChainMatch.ConnectionSourceType
            /**
             * 如果下游連接的源 IP 地址至少包含在指定子網之一中，則滿足條件
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-cidrrange config.core.v3.CidrRange}
             */
            source_prefix_ranges?: Array<config.core.v3.CidrRange>
            /**
             * uint32 如果下游連接的源端口包含在至少一個指定端口中，則滿足條件
             */
            source_ports?: Array<number>
            /**
             * 如果非空，則在確定過濾器鏈匹配時要考慮的服務器名稱列表（例如 TLS 協議的 SNI）。 
             * 
             * @remarks
             * 服務器名稱將與所有通配符域匹配，即 www.example.com 將首先與 www.example.com 匹配，然後是 *.example.com，然後是 *.com
             */
            server_names?: Array<string>
            /**
             * 如果非空，則在確定過濾器鏈匹配時要考慮的傳輸協議
             */
            transport_protocol?: 'raw_buffer' | 'tls'
            /**
             * 如果非空，則在確定過濾器鏈匹配時要考慮的應用程序協議列表（例如 TLS 協議的 ALPN）
             * 
             * - http/1.1 - set by envoy.filters.listener.tls_inspector,
             * - h2 - set by envoy.filters.listener.tls_inspector
             */
            application_protocols?: Array<string>
        }
    }
    export namespace cluster.v3 {
        export namespace Cluster {
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-commonlbconfig config.cluster.v3.Cluster.CommonLbConfig}
             */
            export interface CommonLbConfig { }

            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-roundrobinlbconfig config.cluster.v3.Cluster.RoundRobinLbConfig}
             */
            export interface RoundRobinLbConfig { }

            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-leastrequestlbconfig config.cluster.v3.Cluster.LeastRequestLbConfig}
             */
            export interface LeastRequestLbConfig { }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-originaldstlbconfig config.cluster.v3.Cluster.OriginalDstLbConfig}
             */
            export interface OriginalDstLbConfig { }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-maglevlbconfig config.cluster.v3.Cluster.MaglevLbConfig}
             */
            export interface MaglevLbConfig { }
            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-ringhashlbconfig config.cluster.v3.Cluster.RingHashLbConfig}
             */
            export interface RingHashLbConfig { }
            /**
             * @alpha
             *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-lbsubsetconfig config.cluster.v3.Cluster.LbSubsetConfig}
             */
            export interface LbSubsetConfig { }

            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily config.cluster.v3.Cluster.DnsLookupFamily}
             */
            export type DnsLookupFamily = 'AUTO' | 'V4_ONLY' | 'V6_ONLY' | 'V4_PREFERRED' | 'ALL'

            /**
             * @alpha
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-refreshrate config.cluster.v3.Cluster.RefreshRate}
             */
            export interface RefreshRate { }

            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-lbpolicy config.cluster.v3.Cluster.LbPolicy}
             */
            export type LbPolicy = 'ROUND_ROBIN' | 'LEAST_REQUEST' | 'RING_HASH' | 'RANDOM' | 'MAGLEV' | 'CLUSTER_PROVIDED' | 'LOAD_BALANCING_POLICY_CONFIG'

            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-edsclusterconfig config.cluster.v3.Cluster.EdsClusterConfig}
             */
            export interface EdsClusterConfig {
                /**
                 * 此集群的 EDS 更新源的配置
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-edsclusterconfig config.core.v3.ConfigSource}
                 */
                eds_config?: Array<config.core.v3.ConfigSource>
                /**
                 * 集群名稱的可選替代方案，以呈現給 EDS。 這與集群名稱沒有相同的限制，即它可以是任意長度。 這可能是一個 xdstp:// URL。
                 */
                service_name?: string
            }
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-customclustertype config.cluster.v3.Cluster.CustomClusterType}
             */
            export interface CustomClusterType {
                /**
                 * 要實例化的集群類型。 該名稱必須與受支持的集群類型相匹配
                 */
                name: string
                /**
                 * 集群特定配置取決於正在實例化的集群
                 */
                typed_config?: any
            }
            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-discoverytype config.cluster.v3.Cluster.DiscoveryType}
             */
            export type DiscoveryType = 'STATIC' | 'STRICT_DNS' | 'LOGICAL_DNS' | 'EDS' | 'ORIGINAL_DST'

            /**
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-transportsocketmatch config.cluster.v3.Cluster.TransportSocketMatch}
             */
            export interface TransportSocketMatch {
                /**
                 * 匹配的名稱，用於統計生成
                 */
                name: string
                /**
                 * 可選端點元數據匹配條件
                 */
                match?: Record<string, any>
                /**
                 * 傳輸 socket 的配置
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-transportsocket config.core.v3.TransportSocket}
                 */
                transport_socket?: config.core.v3.TransportSocket
            }
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster config.cluster.v3.Cluster}
         */
        export interface Cluster {
            /**
             * 為不同的端點使用不同的傳輸套接字的配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-transportsocketmatch config.cluster.v3.Cluster.TransportSocketMatch}
             */
            transport_socket_matches?: Array<config.cluster.v3.Cluster.TransportSocketMatch>
            /**
             * 提供在所有集群中必須唯一的集群名稱
             */
            name: string
            /**
             * 用於可觀察性的集群名稱的可選替代項
             */
            alt_stat_name?: string
            /**
             * 用於解析集群的服務發現類型
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-discoverytype config.cluster.v3.Cluster.DiscoveryType}
             */
            type?: config.cluster.v3.Cluster.DiscoveryType
            /**
             * 自定義集群類型。
             * 只能設置 type cluster_type 其中之一
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-customclustertype config.cluster.v3.Cluster.CustomClusterType}
             */
            cluster_type?: config.cluster.v3.Cluster.CustomClusterType
            /**
             * 用於集群的 EDS 更新的配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-edsclusterconfig config.cluster.v3.Cluster.EdsClusterConfig}
             */
            eds_cluster_config?: config.cluster.v3.Cluster.EdsClusterConfig
            /**
             * 集群中主機的新網絡連接超時
             * 
             * @defaultValue 5s
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            connect_timeout?: string
            /**
             * uint32 對集群連接讀寫緩衝區大小的軟限制
             * 
             * defaultValue 1MB = 1024*1024
             */
            per_connection_buffer_limit_bytes?: number
            /**
             * 在集群中選擇主機時使用的負載均衡器類型
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-lbpolicy config.cluster.v3.Cluster.LbPolicy}
             */
            lb_policy?: config.cluster.v3.Cluster.LbPolicy
            /**
             * 指定 STATIC、STRICT_DNS 或 LOGICAL_DNS 集群的成員
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint.proto#envoy-v3-api-msg-config-endpoint-v3-clusterloadassignment config.endpoint.v3.ClusterLoadAssignment}
             */
            load_assignment?: config.endpoint.v3.ClusterLoadAssignment
            /**
             * 主動健康檢查配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/health_check.proto#envoy-v3-api-msg-config-core-v3-healthcheck config.core.v3.HealthCheck}
             */
            health_checks?: Array<config.core.v3.HealthCheck>
            /**
             * uint32 單個上游連接的最大請求數。 
             * 
             * @remarks
             * HTTP/1.1 和 HTTP/2 連接池實現都遵守此參數。
             * 如果未指定，則沒有限制。 
             * 將此參數設置為 1 將有效地禁用保持活動狀態
             */
            max_requests_per_connection?: number
            /**
             * 集群的可選斷路器
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/circuit_breaker.proto#envoy-v3-api-msg-config-cluster-v3-circuitbreakers config.cluster.v3.CircuitBreakers}
             */
            circuit_breakers?: config.cluster.v3.CircuitBreakers
            /**
             * 僅應用於上游 HTTP 連接的 HTTP 協議選項。 這些選項適用於所有 HTTP 版本
             * 
             * @deprecated 使用 http_protocol_options.upstream_http_protocol_options 設定，可以通過 {@link typed_extension_protocol_options} 設定 http_protocol_options
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-upstreamhttpprotocoloptions config.core.v3.UpstreamHttpProtocolOptions}
             */
            upstream_http_protocol_options?: config.core.v3.UpstreamHttpProtocolOptions
            /**
             * 上游處理 HTTP 請求時的附加選項。 這些選項將適用於 HTTP1 和 HTTP2 請求
             * 
             * @deprecated 使用 http_protocol_options.common_http_protocol_options 設定，可以通過 {@link typed_extension_protocol_options} 設定 http_protocol_options
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-httpprotocoloptions config.core.v3.HttpProtocolOptions}
             */
            common_http_protocol_options?: config.core.v3.HttpProtocolOptions
            /**
             * 處理 HTTP1 請求時的附加選項
             * @deprecated 使用 http_protocol_options.http_protocol_options 設定，可以通過 {@link typed_extension_protocol_options} 設定 http_protocol_options
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http1protocoloptions config.core.v3.Http1ProtocolOptions}
             */
            http_protocol_options?: config.core.v3.Http1ProtocolOptions
            /**
             * 指定使用 http2 連接上游
             * 
             * @deprecated 使用 http_protocol_options.http2_protocol_options 設定，可以通過 {@link typed_extension_protocol_options} 設定 http_protocol_options
             * 
             * @example 對於不信任的上游應該設置如下字段
             * 
             * ```
             * http2_protocol_options: {
             *   initial_connection_window_size: 1048576,
             *   initial_stream_window_size: 65536
             * }
             * ```
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-msg-config-core-v3-http2protocoloptions config.core.v3.Http2ProtocolOptions}
             */
            http2_protocol_options?: config.core.v3.Http2ProtocolOptions
            /**
             * 為上游連接提供擴展特定的協議選項
             * 
             * @remarks
             *  密鑰應與擴展過濾器名稱相匹配，例如 'envoy.filters.network.thrift_proxy'。
             *  有關特定選項的詳細信息，請參閱擴展的文檔。
             */
            typed_extension_protocol_options?: Record<string, any>
            /**
             * 如果指定了 DNS 刷新率並且集群類型為 STRICT_DNS 或 LOGICAL_DNS，則此值用作集群的 DNS 刷新率。 配置的值必須至少為 1ms。
             * 
             * @defaultValue 5s
             * 
             * @remarks
             * 對於 STRICT_DNS 和 LOGICAL_DNS 以外的集群類型，此設置將被忽略。
             * 
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            dns_refresh_rate?: string
            /**
             * 如果指定了 DNS 故障刷新率並且集群類型為 STRICT_DNS 或 LOGICAL_DNS，則這將在請求失敗時用作集群的 DNS 刷新率。 
             * 如果未指定此設置，則故障刷新率默認為 DNS 刷新率。 
             * 對於 STRICT_DNS 和 LOGICAL_DNS 以外的集群類型，此設置將被忽略
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-refreshrate config.cluster.v3.Cluster.RefreshRate}
             */
            dns_failure_refresh_rate?: config.cluster.v3.Cluster.RefreshRate
            /**
             *  如果該值設置為 true，集群的 DNS 刷新率將設置為資源記錄的 TTL，該 TTL 來自 DNS 解析
             */
            respect_dns_ttl?: boolean
            /**
             * DNS IP地址解析策略。 如果未指定此設置
             * 
             * @defaultValue AUTO
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily config.cluster.v3.Cluster.DnsLookupFamily}
             */
            dns_lookup_family?: config.cluster.v3.Cluster.DnsLookupFamily
            /**
             * 如果指定了 DNS 解析器並且集群類型為 STRICT_DNS 或 LOGICAL_DNS，則此值用於指定集群的 dns 解析器。 
             * 如果未指定此設置，則該值默認為默認解析器
             * 
             * @deprecated 使用 {@link typed_dns_resolver_config} 替代
             */
            dns_resolvers?: Array<config.core.v3.Address>,
            /**
             * 始終使用 TCP 查詢而不是 UDP 查詢進行 DNS 查找
             * @deprecated 使用 {@link typed_dns_resolver_config} 替代
             */
            use_tcp_for_dns_lookups?: boolean
            /**
             * DNS 解析配置，包括底層 DNS 解析器地址和選項
             * 
             * @deprecated 使用 {@link typed_dns_resolver_config} 替代
             */
            dns_resolution_config?: any
            /**
             * DNS 解析器類型配置擴展
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
             */
            typed_dns_resolver_config?: config.core.v3.TypedExtensionConfig,
            /**
             * 如果為 true，集群就緒會在預熱時阻塞。 如果為 false，無論預熱是否完成，集群都將完成初始化。
             *  
             * @defaultValue true
             * 
             * @remarks
             * 目前，僅適用於 {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-value-config-cluster-v3-cluster-discoverytype-strict-dns STRICT_DNS} {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-enum-value-config-cluster-v3-cluster-discoverytype-logical-dns LOGICAL_DNS} 或 {@link https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_protocols/redis#arch-overview-redis Redis Cluster}
             */
            wait_for_warm_on_init?: boolean,
            /**
             * 如果指定，將為此上游集群啟用離群值檢測。 每個配置值都可以通過運行時值覆蓋。
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/outlier_detection.proto#envoy-v3-api-msg-config-cluster-v3-outlierdetection config.cluster.v3.OutlierDetection}
             */
            outlier_detection?: config.cluster.v3.OutlierDetection
            /**
             * 從 ORIGINAL_DST 類型的集群中刪除陳舊主機的時間間隔(毫秒)
             * 
             * @defaultValue 5s
             * 
             * @remarks
             * 如果在此時間間隔內未將主機用作上游目標，則主機被視為陳舊。 
             * 隨著新連接被重定向到 Envoy，新主機按需添加到原始目標集群，導致集群中的主機數量隨著時間的推移而增長。
             *  不陳舊的主機（它們被積極用作目的地）保留在集群中，這允許與它們的連接保持打開狀態，從而節省了打開新連接所花費的延遲。 
             * 對於 ORIGINAL_DST 以外的集群類型，此設置將被忽略。
             * 
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            cleanup_interval?: string
            /**
             * 用於綁定新建立的上游連接的可選配置
             * 
             * @remarks
             *  這會覆蓋引導程序協議中指定的任何 bind_config。 
             * 如果地址和端口為空，則不會執行任何綁定
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-bindconfig config.core.v3.BindConfig}
             */
            upstream_bind_config?: config.core.v3.BindConfig
            /**
             * 負載平衡子集的配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-lbsubsetconfig config.cluster.v3.Cluster.LbSubsetConfig}
             */
            lb_subset_config?: config.cluster.v3.Cluster.LbSubsetConfig
            /**
             * Ring Hash 負載均衡策略的可選配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-ringhashlbconfig config.cluster.v3.Cluster.RingHashLbConfig}
             */
            ring_hash_lb_config?: config.cluster.v3.Cluster.RingHashLbConfig
            /**
             * Maglev 負載均衡策略的可選配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-maglevlbconfig config.cluster.v3.Cluster.MaglevLbConfig}
             */
            maglev_lb_config?: config.cluster.v3.Cluster.MaglevLbConfig
            /**
             * Original Destination 負載均衡策略的可選配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-originaldstlbconfig config.cluster.v3.Cluster.OriginalDstLbConfig}
             */
            original_dst_lb_config?: config.cluster.v3.Cluster.OriginalDstLbConfig
            /**
             * LeastRequest 負載均衡策略的可選配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-leastrequestlbconfig config.cluster.v3.Cluster.LeastRequestLbConfig}
             */
            least_request_lb_config?: config.cluster.v3.Cluster.LeastRequestLbConfig
            /**
             * RoundRobin 負載均衡策略的可選配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-roundrobinlbconfig config.cluster.v3.Cluster.RoundRobin}
             */
            round_robin_lb_config?: config.cluster.v3.Cluster.RoundRobinLbConfig
            /**
             * 所有負載均衡器實現的通用配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-commonlbconfig config.cluster.v3.Cluster.CommonLbConfig}
             */
            common_lb_config?: config.cluster.v3.Cluster.CommonLbConfig
            /**
             * 用於上游連接的可選自定義傳輸套接字實現
             * 
             * @remarks
             * 例如使用 tls，name 需要設置爲 'envoy.transport_sockets.tls'， typed_config 設置爲 {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/tls.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-upstreamtlscontext extensions.transport_sockets.tls.v3.UpstreamTlsContext}
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-transportsocket config.core.v3.TransportSocket}
             */
            transport_socket?: config.core.v3.TransportSocket
            /**
             * 元數據字段可用於提供有關集群的附加信息
             * @remarks
             * 它可用於統計、日誌記錄和不同的過濾器行為。 
             * 字段應使用反向 DNS 表示法來表示 Envoy 中的哪個實體將需要該信息。 
             * 例如，如果元數據用於路由器過濾器，則過濾器名稱應指定為 envoy.filters.http.router。
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-metadata config.core.v3.Metadata}
             */
            metadata?: config.core.v3.Metadata
            /**
             * @deprecated
             */
            protocol_selection?: any
            /**
             * 上游連接的可選選項
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-upstreamconnectionoptions config.cluster.v3.UpstreamConnectionOptions}
             */
            upstream_connection_options?: UpstreamConnectionOptions
            /**
             * 如果上游主機變得不健康（由配置的健康檢查或異常檢測確定），立即關閉與故障主機的所有連接。
             */
            close_connections_on_host_health_failure?: boolean
            /**
             * 如果設置為 true，Envoy 在處理從服務發現中移除主機時將忽略主機的健康值。 
             * 這意味著如果使用主動健康檢查，Envoy 將不會等待端點變得不健康再將其刪除。
             */
            ignore_health_on_host_removal?: boolean,
            /**
             * 一個（可選的）網絡過濾器鏈，按照過濾器的應用順序列出。 
             * 該鏈將應用於 Envoy 與該集群的上游服務器建立的所有傳出連接。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/filter.proto#envoy-v3-api-msg-config-cluster-v3-filter config.cluster.v3.Filter}}
             */
            filters?: Array<Filter>
            /**
             * 如果此字段已設置並受客戶端支持，它將取代 {@link lb_policy lb_policy} 的值。
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-loadbalancingpolicy config.cluster.v3.LoadBalancingPolicy}
             */
            load_balancing_policy?: LoadBalancingPolicy
            /**
             * @deprecated 使用 {@link track_cluster_stats} 替代
             */
            track_timeout_budgets?: boolean
            /**
             * 上游連接池和上游類型的可選定制和配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
             */
            upstream_config?: config.core.v3.TypedExtensionConfig
            /**
             * 跟踪可選集群統計信息的配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-trackclusterstats config.cluster.v3.TrackClusterStats}
             */
            track_cluster_stats?: TrackClusterStats
            /**
             * 此集群的預連接配置
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-preconnectpolicy config.cluster.v3.PreconnectPolicy} 
             */
            preconnect_policy?: PreconnectPolicy,
            /**
             * 如果爲 true，集群將爲每個下游連接使用一個單獨的連接池
             */
            connection_pool_per_downstream_connection?: boolean
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster-preconnectpolicy config.cluster.v3.PreconnectPolicy}
         */
        export interface PreconnectPolicy { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-trackclusterstats config.cluster.v3.TrackClusterStats}
         */
        export interface TrackClusterStats { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-loadbalancingpolicy config.cluster.v3.LoadBalancingPolicy}
         */
        export interface LoadBalancingPolicy { }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-trackclusterstats config.cluster.v3.TrackClusterStats}
         */
        export interface TrackClusterStats { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/filter.proto#envoy-v3-api-msg-config-cluster-v3-filter config.cluster.v3.Filter}
         */
        export interface Filter {
            /**
             * 過濾器名稱
             */
            name: string
            /**
             * (任何)過濾器特定配置取決於正在實例化的過濾器。 請參閱支持的過濾器以獲取更多文檔。
             * 
             * @remarks
             * 請注意，Envoy 的下游網絡過濾器不是有效的上游過濾器
             */
            typed_config: any
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-upstreamconnectionoptions config.cluster.v3.UpstreamConnectionOptions}
         */
        export interface UpstreamConnectionOptions { }

        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/outlier_detection.proto#envoy-v3-api-msg-config-cluster-v3-outlierdetection config.cluster.v3.OutlierDetection}
         */
        export interface OutlierDetection { }

        /**
         * @alpha
         *  {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/circuit_breaker.proto#envoy-v3-api-msg-config-cluster-v3-circuitbreakers config.cluster.v3.CircuitBreakers}
         */
        export interface CircuitBreakers { }
    }
    export namespace overload.v3 {
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/overload/v3/overload.proto#envoy-v3-api-msg-config-overload-v3-overloadmanager config.overload.v3.OverloadManager}
         */
        export interface OverloadManager { }
    }
    export namespace metrics.v3 {
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/metrics/v3/stats.proto#envoy-v3-api-msg-config-metrics-v3-statssink config.metrics.v3.StatsSink}
         */
        export interface StatsSink {
            name?: string
            typed_config?: any
        }
        /**
         * @@alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/metrics/v3/stats.proto#envoy-v3-api-msg-config-metrics-v3-statsconfig config.metrics.v3.StatsConfig}
         */
        export interface StatsConfig { }
    }
    export namespace trace.v3 {
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/trace/v3/http_tracer.proto#envoy-v3-api-msg-config-trace-v3-tracing config.trace.v3.Tracing} 
         */
        export interface Tracing { }
    }
}
/**
 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-field-config-bootstrap-v3-bootstrap-node}
 */
export interface Envoy {
    /**
     * 用於標識節點身份讓管理服務器可以識別 envoy 節點(例如在生成的 headers 中)
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/base.proto#envoy-v3-api-msg-config-core-v3-node config.core.v3.Node}
     */
    node?: config.core.v3.Node
    /**
     * 指定靜態資源
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-bootstrap-staticresources config.bootstrap.v3.Bootstrap.StaticResources}
     */
    static_resources?: config.bootstrap.v3.Bootstrap.StaticResources
    /**
     * 使用 xDS 配置動態資源
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#config-bootstrap-v3-bootstrap-dynamicresources config.bootstrap.v3.Bootstrap.DynamicResources}
     */
    dynamic_resources?: config.bootstrap.v3.Bootstrap.DynamicResources
    /**
     * 擁有服務器內所有上游集群的集群管理器的配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-clustermanager config.bootstrap.v3.ClusterManager}
     */
    cluster_manager?: config.bootstrap.v3.ClusterManager
    /**
     * 健康發現服務配置選項
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/config_source.proto#envoy-v3-api-msg-config-core-v3-apiconfigsource config.core.v3.ApiConfigSource}
     */
    hds_config?: config.core.v3.ApiConfigSource
    /**
     * 用於搜索啟動標誌文件的可選文件系統路徑
     */
    flags_path?: string
    /**
     * 可選的統計接收器
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/metrics/v3/stats.proto#envoy-v3-api-msg-config-metrics-v3-statssink config.metrics.v3.StatsSink}
     */
    stats_sinks?: Array<config.metrics.v3.StatsSink>
    /**
     * 統計數據內部處理的配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/metrics/v3/stats.proto#envoy-v3-api-msg-config-metrics-v3-statsconfig config.metrics.v3.StatsConfig}
     */
    stats_config?: config.metrics.v3.StatsConfig
    /**
     * 刷新到配置的統計接收器之間的可選持續時間。 
     * 
     * @remarks
     * 出於性能原因，Envoy 鎖存計數器並且僅定期刷新計數器和儀表。
     *  如果未指定，默認值為 5000 毫秒（5 秒）。 
     * 只能設置 stats_flush_interval 或 stats_flush_on_admin 之一。 
     * 持續時間必須至少為 1 毫秒，最多為 5 分鐘。
     * 
     * @defaultValue 5s
     * 
     * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
     */
    stats_flush_interval?: string
    /**
     * 僅當在管理界面上查詢時才將統計信息刷新到接收器
     * @remarks
     * 如果設置，則不會創建刷新計時器。 
     * 只能設置 stats_flush_on_admin 或 stats_flush_interval 之一。
     */
    stats_flush_on_admin?: boolean
    /**
     * 可選看門狗配置。 這是針對整個系統的單個看門狗配置。 棄用了具有更細粒度的看門狗。
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-watchdog config.bootstrap.v3.Watchdog}
     */
    watchdog?: config.bootstrap.v3.Watchdog
    /**
     * 可選的看門狗配置。 這用於為不同的子系統指定不同的看門狗
     * {@linkhttps://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-watchdogs config.bootstrap.v3.Watchdogs}
     */
    watchdogs?: config.bootstrap.v3.Watchdogs
    /**
     * 外部跟踪提供程序的配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/trace/v3/http_tracer.proto#envoy-v3-api-msg-config-trace-v3-tracing config.trace.v3.Tracing}
     */
    tracing?: config.trace.v3.Tracing
    /**
     * 運行時配置提供程序的配置。 如果未指定，將使用 null 提供程序，這將導致使用所有默認值。
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-layeredruntime config.bootstrap.v3.LayeredRuntime}
     */
    layered_runtime?: config.bootstrap.v3.LayeredRuntime
    /**
     * 本地管理 HTTP 服務器的配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-admin config.bootstrap.v3.Admin}
     */
    admin?: config.bootstrap.v3.Admin
    /**
     * 可選的過載管理器配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/overload/v3/overload.proto#envoy-v3-api-msg-config-overload-v3-overloadmanager config.overload.v3.OverloadManager}
     */
    overload_manager?: config.overload.v3.OverloadManager
    /**
     * 為事件調度器啟用統計信息，默認為 false
     * @remarks
     * 請注意，這會為每個線程上的事件循環的每次迭代記錄一個值。
     *  這通常應該是最小的開銷，但是當使用 statsd 時，它將通過線路單獨發送每個觀察值，
     * 因為 statsd 協議沒有任何方式來表示直方圖摘要。 請注意，這可能是一個非常大的數據量。
     */
    enable_dispatcher_stats?: boolean
    /**
     * 可選字符串，將用於代替 x-envoy 作為前綴標題
     * @remarks
     * 
     * 例如，如果此字符串存在並設置為 X-Foo，則 x-envoy-retry-on 將轉換為 x-foo-retry-on 等。
     * 請注意，這適用於 Envoy 將生成的標頭，Envoy 將清理的標頭，以及 Envoy 將僅信任核心代碼和核心擴展的標頭。 
     * 對此字符串進行更改時要非常小心，尤其是在多層 Envoy 部署或使用非上游擴展的部署中
     */
    header_prefix?: string
    /**
     * UInt64Value 可選的代理版本，如果指定，將用於設置 server.version 統計信息的值
     * @remarks
     * Envoy 不會處理這個值，它會按原樣發送到統計接收器。
     * 
     * {@link https://protobuf.dev/reference/protobuf/google.protobuf/#uint64-value UInt64Value}
     */
    stats_server_version_override?: string | bigint
    /**
     * @deprecated
     */
    use_tcp_for_dns_lookups?: boolean
    /**
     * config.core.v3.DnsResolutionConfig
     * @deprecated
     */
    dns_resolution_config?: any
    /**
     * DNS 解析器類型配置擴展
     * @remarks
     * 此擴展可用於配置 c-ares、apple 或任何其他 DNS 解析器類型和相關參數
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
     */
    typed_dns_resolver_config?: config.core.v3.TypedExtensionConfig
    /**
     * 指定要在啟動時實例化的可選引導程序擴展。 每個項目都包含擴展特定的配置
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
     */
    bootstrap_extensions?: Array<config.core.v3.TypedExtensionConfig>
    /**
     * 指定在啟動時實例化並在崩潰時根據導致崩潰的請求調用的可選擴展
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-fatalaction config.bootstrap.v3.FatalAction}
     */
    fatal_actions?: Array<config.bootstrap.v3.FatalAction>
    /**
     * 套接字接口
     * @remarks
     * 該值必須是通過引導程序擴展初始化的套接字接口工廠之一的名稱
     */
    default_socket_interface?: string
    /**
     * 指定一組需要註冊為內聯 header 的 headers
     * @remarks
     * 此配置允許用戶在 Envoy 啟動時按需自定義內聯標頭，而無需修改 Envoy 的源代碼
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/bootstrap/v3/bootstrap.proto#envoy-v3-api-msg-config-bootstrap-v3-custominlineheader config.bootstrap.v3.CustomInlineHeader}
     */
    inline_headers?: Array<config.bootstrap.v3.CustomInlineHeader>
    /**
     * "Perfetto" SDK 以二進制 ProtoBuf 格式創建的具有性能跟踪數據的文件的可選路徑
     * @defaultValue "envoy.pftrace"
     */
    perf_tracing_file_path?: string
    /**
     * 正則表達式引擎。 如果未指定該值，則默認使用 Google RE2。
     * 
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
     */
    default_regex_engine?: config.core.v3.TypedExtensionConfig
    /**
     * 可選的 XdsConfigTracker 配置，它允許跟踪外部組件中的 xDS 響應，例如外部跟踪器或監視器
     * @remarks
     * 它提供了接收、攝取或無法處理 xDS 資源和消息時的處理點。
     *  如果未指定值，則不會使用 XdsConfigTracker。
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto#envoy-v3-api-msg-config-core-v3-typedextensionconfig config.core.v3.TypedExtensionConfig}
     */
    xds_config_tracker_extension?: config.core.v3.TypedExtensionConfig
}