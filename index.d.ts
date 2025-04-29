import { App } from 'vue'
import RecycleScroller from './src/RecycleScroller'
import DynamicScroller from './src/DynamicScroller'
import DynamicScrollerItem from './src/DynamicScrollerItem'

declare module 'vue-virtual-scroller' {
    export { RecycleScroller, DynamicScroller, DynamicScrollerItem }

    export interface PluginOptions {
        /**
         * 是否自动注册组件
         * @default true
         */
        installComponents?: boolean

        /**
         * 组件名称前缀
         * @default ''
         */
        componentsPrefix?: string

        /**
         * 项目数量限制，超过此限制将显示警告
         * @default 1000
         */
        itemsLimit?: number
    }

    /**
     * Vue虚拟滚动插件
     */
    const VueVirtualScroller: {
        /**
         * 插件版本
         */
        version: string

        /**
         * 安装插件
         * @param app Vue应用实例
         * @param options 插件配置选项
         */
        install(app: App, options?: PluginOptions): void
    }

    export default VueVirtualScroller
}
