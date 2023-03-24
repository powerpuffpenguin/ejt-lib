export namespace config {
    export namespace accesslog.v3 {
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#config-accesslog-v3-accesslog}
         */
        export interface AccessLog {
            /**
             * 訪問日誌擴展配置的名稱
             */
            name?: string
            /**
             * 用於判斷是否需要寫入訪問日誌的過濾器
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslogfilter}
             */
            filter?: AccessLogFilter
            /**
             * 必鬚根據正在實例化的訪問記錄器擴展設置的自定義配置
             */
            typed_config: any
        }
        /**
         * @alpha
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/accesslog/v3/accesslog.proto#envoy-v3-api-msg-config-accesslog-v3-accesslogfilter}
         */
        export interface AccessLogFilter { }
    }
    export namespace bootstrap.v3 {
        export interface Admin {
            /**
             * 管理服務器的日誌配置
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
             */
            address: config.core.v3.Address
            /**
             * Envoy 源代碼或預編譯二進製文件中可能不存在的其他套接字選項
             */
            socket_options: config.core.v3.SocketOption
            /**
             * 指示 global_downstream_max_connections 是否應該應用於管理界面
             */
            ignore_global_conn_limit: boolean
        }
    }
    export namespace core.v3 {
        /**
         * 指定一個邏輯或物理地址，用於告訴 Envoy 在哪裏 bind/listen， connect 上游，查找管理服務器
         * 
         * @remarks
         * 必須設置 socket_address, pipe, envoy_internal_address 中的一個
         * 
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-address}
         */
        export interface Address {

            socket_address?: SocketAddress
            pipe?: Pipe
            envoy_internal_address?: EnvoyInternalAddress
        }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#config-core-v3-socketaddress}
         */
        export interface SocketAddress {
            /**
             * @defaultValue 'TCP'
             * 
             * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-enum-config-core-v3-socketaddress-protocol}
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
         */
        export interface SocketOption { }
        /**
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-pipe}
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
         * {@link https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/address.proto#envoy-v3-api-msg-config-core-v3-envoyinternaladdress}
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
    }
}