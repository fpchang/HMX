export default {
	/**
	 * 主题风格，设置为 dark 来开启深色模式，全局生效
	 */
	theme: {
		type: String,
		default: 'light'
	},
	/**
	 * 自定义主题变量
	 */
	themeVars: {
		type: Object,
		default: () => ({})
	},
	/**
	 * 自定义节点class name
	 */
	lClass: String,
	/**
	 * 自定义节点样式
	 */
	lStyle: {
		type: [String , Object],
		default: ''
	}
}