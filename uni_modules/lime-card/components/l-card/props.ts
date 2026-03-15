// @ts-nocheck
export default {
	inset: {
		type: Boolean,
		default: true
	},
	/**
	 * 标题
	 */
	title: {
		type: String
	},
	/**
	 * 和标题同行的说明文字
	 */
	note: {
		type: String
	},
	/**
	 * 右侧额外文字
	 */
	extra: {
		type: String
	},
	/**
	 * 左侧图标，出现在单元格标题的左侧
	 */
	icon: {
		type: String,
		default: null
	},
	image: {
		type: String,
		default: null
	},
	/**
	 * 封面
	 */
	cover: {
		type: String,
		default: null
	},
	more: {
		type: Boolean,
		default: false
	},
	/**
	 * 操作栏
	 */
	actions: {
		type: Array,
		default: null
	},
	actionsAlign: {
		type: String,
		// required: true,
		default: 'right',
		validator: (value) => ['left', 'right', 'space-between'].includes(value)
	},
	iconColor: {
		type: String,
		default: null
	},
	rightIcon: {
		type: String,
		default: null
	},
	rightIconColor: {
		type: String,
		default: null
	},
	iconSize: {
		type: String,
		default: null
	},
	rightIconSize: {
		type: String,
		default: null
	},
	lStyle: {
		type: [String, Object],
		default: ''
	},
	imageStyle: {
		type: [String, Object],
		default: ''
	},
	coverStyle: {
		type: [String, Object],
		default: ''
	},
	coverMode: {
		type: String,
		default: 'widthFix',
		// required: true,
		validator: (value) => [
			'scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix',
			'top', 'bottom', 'center', 'left', 'right',
			'top left', 'top right', 'bottom left', 'bottom right'
		].includes(value)
	},
	bgColor: {
		type: String,
		default: null
	},
	lClass: {
		type: String,
		default: ''
	},
	lClassLeftIcon: {
		type: String,
		default: null
	},
	lClassRightIcon: {
		type: String,
		default: null
	},
	headerBordered: {
		type: Boolean,
		default: true
	},
	footerBordered: {
		type: Boolean,
		default: true
	}
}