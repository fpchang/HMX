export default {
	cancelBtn: {
		type: String,
		default: undefined // 默认值可以根据实际情况设置
	},
	cancelStyle: {
		type: [String, Object],
		default: undefined
	},
	confirmBtn: {
		type: String,
		default: undefined
	},
	confirmStyle: {
		type:  [String, Object],
		default: undefined
	},
	title: {
		type: String,
		default: undefined
	},
	titleStyle: {
		type: [String, Object],
		default: undefined
	},
	uniCloud: {
		type: Boolean,
		required: false // 因为在接口中是必须的，所以在这里也是必填项
	},
	localData: {
		type: Object,
		default: () => ({}) // 默认是一个空对象
	},
	columnsNum: {
		type: Number,
		default: 3
	},
	modelValue: {
		type: Array,
		default: undefined
	},
	defaultValue: {
		type: Array,
		default: undefined
	},
	value: {
		type: Array,
		default: undefined
	},
	loading: {
		type: Boolean,
		required: false
	},
	loadingColor: {
		type: String,
		default: undefined
	},
	loadingMaskColor: {
		type: String,
		default: undefined
	},
	loadingSize: {
		type: String,
		default: undefined
	},
	itemHeight: {
		type: String,
		default: undefined
	},
	itemColor: {
		type: String,
		default: undefined
	},
	itemFontSize: {
		type: String,
		default: undefined
	},
	itemActiveColor: {
		type: String,
		default: undefined
	},
	indicatorStyle: {
		type: String,
		default: undefined
	},
	bgColor: {
		type: String,
		default: undefined
	},
	groupHeight: {
		type: String,
		default: undefined
	},
	radius: {
		type: String,
		default: undefined
	},
	resetIndex: {
		type: Boolean,
		default: true // 默认值可以根据实际情况设置
	}
}