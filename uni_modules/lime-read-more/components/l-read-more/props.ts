export default {
	modelValue: {
		type: Boolean,
		default: false
	},
	value: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	expandText: {
		type: String,
		default: '展开更多'
	},
	expandIcon: {
		type: String,
		default: 'chevron-down'
	},
	collapseText: {
		type: String,
		default: '收起'
	},
	collapseIcon: {
		type: String,
		default: 'chevron-up'
	},
	height: {
		type: String,
		default: '100px'
	},
	fontSize: {
		type: String,
		// default: '15px'
	},
	textColor: {
		type: String,
		// default: 'rgba(0,0,0,0.45)'
	},
	maskColor: {
		type: Array,
		// default: () => ['white', 'rgba(255, 255, 255, 0.3)']
	},
}