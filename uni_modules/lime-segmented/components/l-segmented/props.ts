export default {
	/**
	 * 列表
	 */
	options: {
		type: Array,
		default: () => []
	},
	/**
	 * 受控
	 */
	value: {
		type: Number,
		default: null
	},
	modelValue: {
		type: Number,
		default: null	
	},
	size: {
		type: String,
		default: 'medium' //'small'| 'medium' | 'large';
	},
	/**
	 * 标签栏的形状
	 */
	shape: {
		type: String,
		default: 'normal'//'normal' | 'round';
	},
	disabled: {
		type: Boolean,
		default: false
	},
	type: {
		type: String, //'button' | 'card' | 'text'
		default: 'card'
	},
	bgColor: {
		type: String,
		default: null
	},
	activeColor: {
		type: String,
		default: null
	},
	color: {
		type: String,
		default: null
	},
	sliderColor: {
		type: String,
		default: null
	},
	fontSize: {
		type: String,
		default: null
	},
	height: {
		type: String,
		default: null
	},
	padding: {
		type: String,
		default: null
	},
	immediate: {
		type: Boolean,
		default: false
	}
}