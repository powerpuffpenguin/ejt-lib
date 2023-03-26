export namespace extensions.transport_sockets.tls.v3 {
    /**
     * @alpha
     * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/secret.proto#envoy-v3-api-msg-extensions-transport-sockets-tls-v3-secret extensions.transport_sockets.tls.v3.Secret}
     */
    export interface Secret { }
}
export namespace config {
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
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener config.core.v3.Listener}
                 */
                listeners?: Array<config.core.v3.Listener>
                /**
                 * 如果為 cds_config 指定了基於網絡的配置源，則有必要提供一些初始集群定義，以允許 Envoy 知道如何與管理服務器通信。 這些集群定義可能不使用 EDS（即它們應該是靜態 IP 或基於 DNS）
                 * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster config.core.v3.Cluster}
                 */
                clusters?: Array<config.core.v3.Cluster>
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
             * @defaultValue 15000
             * @remarks
             * 指定此超時後，Envoy 將在初始化過程中等待此 xDS 訂閱上的第一個配置響應的指定時間不超過指定時間。
             *  達到超時後，Envoy 將進入下一個初始化階段，即使第一個配置尚未交付。
             *  計時器在 xDS API 訂閱開始時激活，並在第一次配置更新或出錯時解除。 
             * 0 表示沒有超時 - Envoy 將無限期地等待第一個 xDS 配置（除非另一個超時適用）。 默認為 15 秒
             * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
             */
            initial_fetch_timeout?: number
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
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto#envoy-v3-api-msg-config-listener-v3-listener config.core.v3.Listener}
         */
        export interface Listener {
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-msg-config-cluster-v3-cluster config.core.v3.Cluster}
         */
        export interface Cluster {
            // "transport_socket_matches": [],
            // "name": ...,
            // "alt_stat_name": ...,
            // "type": ...,
            // "cluster_type": {...},
            // "eds_cluster_config": {...},
            // "connect_timeout": {...},
            // "per_connection_buffer_limit_bytes": {...},
            // "lb_policy": ...,
            // "load_assignment": {...},
            // "health_checks": [],
            // "max_requests_per_connection": {...},
            // "circuit_breakers": {...},
            // "upstream_http_protocol_options": {...},
            // "common_http_protocol_options": {...},
            // "http_protocol_options": {...},
            // "http2_protocol_options": {...},
            // "typed_extension_protocol_options": {...},
            // "dns_refresh_rate": {...},
            // "dns_failure_refresh_rate": {...},
            // "respect_dns_ttl": ...,
            // "dns_lookup_family": ...,
            // "dns_resolvers": [],
            // "use_tcp_for_dns_lookups": ...,
            // "dns_resolution_config": {...},
            // "typed_dns_resolver_config": {...},
            // "wait_for_warm_on_init": {...},
            // "outlier_detection": {...},
            // "cleanup_interval": {...},
            // "upstream_bind_config": {...},
            // "lb_subset_config": {...},
            // "ring_hash_lb_config": {...},
            // "maglev_lb_config": {...},
            // "original_dst_lb_config": {...},
            // "least_request_lb_config": {...},
            // "round_robin_lb_config": {...},
            // "common_lb_config": {...},
            // "transport_socket": {...},
            // "metadata": {...},
            // "protocol_selection": ...,
            // "upstream_connection_options": {...},
            // "close_connections_on_host_health_failure": ...,
            // "ignore_health_on_host_removal": ...,
            // "filters": [],
            // "load_balancing_policy": {...},
            // "track_timeout_budgets": ...,
            // "upstream_config": {...},
            // "track_cluster_stats": {...},
            // "preconnect_policy": {...},
            // "connection_pool_per_downstream_connection": ...
        }
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
     * @defaultValue 5000
     * 
     * {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration Duration}
     */
    stats_flush_interval?: number
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