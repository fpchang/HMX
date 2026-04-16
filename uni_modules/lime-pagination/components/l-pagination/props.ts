export default {
	modelValue: {
		type: Number,
	},
	value:{
		type: Number,
	},
	/**
	 * 总记录数，用于计算总页数。
	 */
	total: {
		type: Number,
		default:0 
	},
	/**
	 * 每页显示的记录数
	 */
	pageSize: {
		type: Number,
		default: 10 
	},
	/**
	 * 显示的页码按钮数量
	 */
	pagerCount: {
		type: Number,
		default: 5 
	},
	/**
	 * 如果只有一页，是否隐藏分页器。
	 */
	hideOnSinglePage: {
		type: Boolean,
		default: false
	},
	/**
	 * 是否禁用分页
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	/**
	 * 是否显示省略号
	 */
	forceEllipses: {
		type: Boolean,
		default: false
	},
	/**
	 * 上一页
	 */
	prevText: {
		type: String,
		default: '上一页'
	},
	/**
	 * 下一页
	 */
	nextText: {
		type: String,
		default: '下一页'
	},
	/**
	 * 是否为简单分页
	 */
	simple: {
		type: Boolean,
		default: false
	},
	bgColor: {
		type: String,
		default: null
	},
	color: {
		type: String,
		default: null
	},
	activeBgColor: {
		type: String,
		default: null
	},
	activeColor: {
		type: String,
		default: null
	},
	fontSize:{
		type: String,
		default: null
	},
	radius: {
		type: String,
		default: null
	},
	borderColor:{
		type: String,
		default: null
	},
	showPrevButton: {
		type: Boolean,
		default: true
	},
	showNextButton: {
		type: Boolean,
		default: true
	},
	itemWidth:{
		type: String,
		default: null
	},
	itemHeight:{
		type: String,
		default: null
	},
}