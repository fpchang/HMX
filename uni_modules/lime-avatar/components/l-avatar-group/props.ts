export default {
	/**
	* 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上
	* 'left-up' | 'right-up'
	*/
	cascading: {
		type: String,
		default: 'right-up'
	},
	/**
	* 能够同时显示的最多头像数量
	*/
	max: Number,
	/** 
	* 形状 
	* 'square' | 'circle'
	*/
	shape: String, 
	/** 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size */
	size: {
		type: String,
		default: 'medium'
	},
	collapseText: String,
	collapseFontSize: String,
	collapseColor: String,
	collapseTextColor: String
}