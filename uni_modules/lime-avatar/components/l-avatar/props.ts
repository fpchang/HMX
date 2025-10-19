export default {
	/** 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size */
	size: {
		type: String,
		default: 'medium'
	},
	shape: {
		type: String,
		default: 'circle'
	},
	/** 图片地址 */
	src: String,
	/** 图标 */
	icon: String,
	fontSize: String,
	color: String,
	textColor: String
}