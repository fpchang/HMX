// @ts-nocheck
export default {
	/** SVG 图标的源，支持本地路径、网络 URL、SVG 源文本和 Base64 编码 */
	src: {
		type: String,
		default: ''
	},
	/** 图标颜色，仅对纯色图标有效 */
	color: {
		type: String,
		default: ''
	},
	/** 是否使用 WebView 渲染，支持动画效果 */
	web: {
		type: Boolean,
		default: false
	},
	/** 是否以继承颜色方式渲染图标 */
	inherit: {
		type: Boolean,
		default: false
	},
	/** 根元素自定义类名 */
	lClass: {
		type: [String, Object]
	},
	/** 根元素自定义样式 */
	lStyle: {
		type: [String, Object]
	}
}
