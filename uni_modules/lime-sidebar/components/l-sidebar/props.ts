export default {
	// #ifndef VUE3
	value: {
		type: [Number, String],
		default: 0
	},
	// #endif
	// #ifdef VUE3
	modelValue: {
		type: [Number, String],
		default: 0
	},
	// #endif
	width: {
		type: String
	},
	fontSize: {
		type: String
	},
	lineHeight: {
		type: String
	},
	textColor: {
		type: String
	},
	disabledTextColor: {
		type: String
	},
	bgColor: {
		type: String
	},
	selectedFontWeight: {
		type: String
	},
	selectedTextColor: {
		type: String
	},
	selectedBorderWidth: {
		type: String
	},
	selectedBorderHeight: {
		type: String
	},
	selectedBorderColor: {
		type: String
	},
	selectedBgColor: {
		type: String
	},
	/**
	 * 圆角
	 */
	round: {
		type: Boolean,
		default: false
	},
	line: {
		type: Boolean,
		default: false
	},
}