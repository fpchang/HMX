/**
 * 插件初始化的配置内容
 */
interface PluginOptions extends AutocssConfig {
    /**
     * 输出路径
     */
    output?: string
	/**
	 * 组件扫描路径
	 */
	component ?: string[]
	/**
	 * API扫描路径
	 */
	api ?: string[]
	/**
	 * 扫描文件后缀
	 */
	suffix ?: string
}

declare function DocGen(options?: PluginOptions): any;

export { DocGen as default }