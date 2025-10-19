export default {
	/**
	 * 链接列表。name 表示链接名称，url 表示跳转链
	 */
	links: {
		type: Array,
		default: () => []
	},
	/**
	 * 图标配置。包含以下属性：
		* icon - 图标链接地址
		* title - 标题文本
		* url - 跳转链接地址
		* target - 跳转方式
	 */
	logo: {
		type: Object
	},
	/**
	 * 版权信息文本
	 */
	text: {
		type: String,
	},
	/**
	 * 链接文字颜色
	 */
	linkColor: {
		type: String,
	},
	/**
	 * 分隔线颜色
	 */
	lineColor: {
		type: String
	},
	/**
	 * 版权文本颜色
	 */
	textColor: {
		type: String
	},
	/**
	 * 文字颜色
	 */
	color: {
		type: String
	}
}