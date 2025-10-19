// @ts-nocheck
export default {
	/**
	 * 应用内跳转的链接
	 */
	url:{
		type: String,
		default:null
	},
	/**
	 * 应用外跳转的链接
	 */
	href:{
		type: String,
		default:null
	},
	/**
	 * 跳转方式
	 */
	openType: {
		type: String,
		default: 'navigate'//'navigate' | 'redirect' | 'switchTab' | 'reLaunch' | 'navigateBack' | 'exit'
	},
	/**
	 * 链接内容
	 */
	content :{
		type: String,
		default:null
	},
	/**
	 * 是否为禁用态
	 */
	disabled : {
		type: Boolean,
		default: false
	},
	/**
	 * 是否开启点击反馈
	 */
	hover : {
		type: Boolean,
		default: false
	},
	/**
	 * 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 `open-type` 风格的属性名改为 `openType` 风格
	 */
	navigatorProps :{
		type: Object,
		default: null
	},
	/**
	 * 前置图标
	 */
	prefixIcon :{
		type: [String, Object],
		default: null
	},
	/**
	 * 后置图标
	 */
	suffixIcon :{
		type: [String, Object],
		default: null
	},
	/**
	 * 尺寸
	 * @default medium
	 */
	size : {
		type: String,
		default: 'medium'
	},
	/**
	 * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
	 * @default default
	 */
	type : {
		type: String,
		default: 'default' //'default' | 'primary' | 'danger' | 'warning' | 'success' | 'info';
	},
	/**
	 * 是否显示链接下划线
	 */
	underline : {
		type: Boolean,
		default: false
	},
	/**
	 * 自定义颜色
	 */
	color:{
		type: String,
		default:null
,	}
}