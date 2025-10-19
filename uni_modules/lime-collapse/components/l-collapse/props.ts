export default {
	/**
	 * 是否展示为圆角卡片风格
	 */
	inset: {
		type: Boolean,
		default: false
	},
	/**
	 * 手风琴效果，每个面板互斥展开，每次只展开一个面板 
	 */
	accordion : {
		type: Boolean,
		default: false
	},
	/**
	 * 展开的面板集合 default []
	 * 
	 */
	modelValue: {
		type: Array //[String, Number]
	},
	value: {
		type: Array//[String, Number]
	},
	disabled: {
		type: Boolean,
		default: false
	},
	
}