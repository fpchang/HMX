export default {
	to: {
		type: Number,
		default: 0
	},
	precision: {
		type: Number,
		default: 0
	},
	showSeparator: Boolean,
	locale: String,
	from: { type: Number, default: 0 },
	active: {
		type: Boolean,
		default: true
	},
	duration: {
		type: Number,
		default: 2000
	},
	/**
	 * 动画曲线函数
	 */
	timingFunction: {
		type: Function,
		default: null
	},
	separator: {
		type: String,
		default: 'group3'
	},
	fps: {
		type: Number,
		default: 0
	}
}