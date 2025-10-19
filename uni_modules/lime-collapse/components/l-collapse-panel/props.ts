export default {
	/**
	 * 禁止当前面板展开，优先级大于 Collapse 的同名属性
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	title: {
		type: String
	},
	/**
	 * 左侧图标，出现在单元格标题的左侧
	 */
	icon: {
		type: String
	},
	image: {
		type: String
	},
	/**
	 * 和标题同行的说明文字
	 */
	note: {
		type: String
	},
	size: {
		type: String,//'small' | 'medium' | 'large'
		default: 'medium'
	}, 
	iconColor: {
		type: String
	},
	rightIconColor: {
		type: String
	},
	iconSize: {
		type: String
	},
	rightIconSize: {
		type: String
	},
	imageWidth: {
		type: String
	},
	imageHeight: {
		type: String
	},
	/**
	 * 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识
	 */
	value: {
		type: [String, Number]
	},
	bgColor: {
		type: String
	},
}