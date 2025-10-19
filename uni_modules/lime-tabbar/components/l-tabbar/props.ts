// @ts-nocheck
export default {
	/** 是否显示外边框 */
	bordered: {
		type: Boolean,
		default: true,
	},
	/** 是否固定在底部 */
	fixed: {
		type: Boolean,
		default: true,
	},
	/** 是否为 iPhoneX 留出底部安全距离 */
	safeAreaInsetBottom: {
		type: Boolean,
		default: true,
	},
	/** 当前选中标签的索引 */
	value: {
		type: [String, Number],
		default: undefined,
	},
	modelValue: {
		type: [String, Number],
		default: undefined,
	},
	/** 当前选中标签的索引，非受控属性 */
	defaultValue: {
		type: [String, Number],
		default: undefined,
	},
	/** 固定在底部时，是否在标签位置生成一个等高的占位元素 */
	placeholder: {
		type: Boolean,
		default: true,
	},
	/** 标签栏的形状 */
	shape: {
		type: String,
		default: 'normal',
		validator(val) {
			if (!val) return true;
			return ['normal', 'round'].includes(val);
		},
	},
	/** 选项风格 */
	theme: {
		type: String,
		default: 'normal',
		validator(val) {
			if (!val) return true;
			return ['normal', 'tag'].includes(val);
		},
	},
	/** 是否需要分割线 */
	split: {
		type: Boolean,
		default: false,
	},
	/** 选中标签的颜色 */
	activeColor: {
		type: String,
		default: null,
	},
	/** 未选中标签的颜色 */
	color: {
		type: String,
		default: null,
	},
	lStyle: {
		type: [String, Object],
		default: null,
	},
	bgColor: {
		type: String,
		default: null,
	},
	activeBgColor: {
		type: String,
		default: null,
	},
	zIndex: {
		type: Number,
		default: null
	},
	iconSize: {
		type: String,
		default: null
	},
	fontSize: {
		type: String,
		default: null
	}
}