export default {
	/** 标题 */
	title: {
		type: String,
	},
	/** 下方内容描述 */
	description: {
		type: String,
	},
	/** 是否显示下边框 */
	bordered: {
		type: Boolean,
		default: true,
	},
	/** 是否开启点击反馈 */
	hover: {
		type: Boolean
	},
	/** 左侧图标，出现在单元格标题的左侧 */
	icon: {
		type: String,
	},
	/** 主图 */
	image: {
		type: String,
	},
	imageWidth: {
		type: String,
	},
	imageHeight: {
		type: String,
	},
	/** 和标题同行的说明文字 */
	note: {
		type: String,
	},
	/** 是否显示表单必填星号 */
	required: {
		type: Boolean,
		default: false,
	},
	/** 是否显示右侧箭头 */
	arrow: {
		type: Boolean,
		default: false,
	},
	/** 最右侧图标 */
	rightIcon: {
		type: String,
	},
	/** 点击后跳转链接地址。如果值为空，则表示不需要跳转 */
	url: {
		type: String
	},
	/** 链接跳转类型 */
	openType: {
		type: String,
		default: 'navigateTo',
	},
	/** 内容的对齐方式，默认居中对齐 */
	align: {
		type: String,
		default: 'middle',
	},
	size: {
		type: String
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
	bgColor: {
		type: String
	},
	lClass: {
		type: String
	},
	lClassLeftIcon: {
		type: String
	},
	lClassRightIcon: {
		type: String
	}
}