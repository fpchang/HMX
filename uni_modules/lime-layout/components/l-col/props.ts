export default {
	/**
	 * 列元素宽度
	 */
	span: {
		type: [String, Number] //number | string | 'auto' | 'none'
	},
	/**
	 * 列元素偏移距离
	 */
	offset: {
		type: [String, Number]
	}, //number | string
	/**
	 * 列元素顺序
	 */
	order: Number,
	/**
	 * 自定义样式
	 */
	lStyle: {
		type: [String , Object]
	},
	/**
	 * 高度与宽度的比例 (如 "16/9"、"1" 或 "0.5")
	 */
	aspectRatio: Number
}