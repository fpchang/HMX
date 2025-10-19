export default {
	/**
	 * 文本内容
	 */
	text: {
		type:[String, Array]
	},
	/**
	 * 前缀图标
	 */
	leftIcon: {
		type: String,
		default: null
	},
	/**
	 * 后缀图标
	 */
	rightIcon: String,
	/**
	 * 内置主题
	 */
	type : {
		type: String,// 'info' | 'success' | 'warning' | 'danger'
		default: 'info'
	},
	/** 间隔时间 */
	interval : {
		type: Number,
		default: 2000
	},
	/**
	 * 动画延迟时间
	 */
	delay : {
		type: Number,
		default: 0
	},
	/**
	 * 滚动速率
	 */
	speed : {
		type: Number,
		default: 50
	},
	/**
	 * 滚动速率
	 */
	loop : {
		type: Number,
		default: 2
	},
	color : String,
	bgColor : String,
	marquee : {
		type: Boolean,
		default: false
	},
	vertical : {
		type: Boolean,
		default: false
	},
	wrapable : {
		type: Boolean,
		default: false
	},
	leftIconColor: String,
	leftIconSize: String,
	fontSize: String,
	rightIconColor: String,
	rightIconSize: String,
	
	lStyle: {
		type: [String, Object]
	}
}