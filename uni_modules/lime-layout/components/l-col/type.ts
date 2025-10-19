export interface ColProps {
	/**
	 * 列元素宽度
	 */
	span ?: number | string | 'auto' | 'none'
	/**
	 * 列元素偏移距离
	 */
	offset :  number | string
	/**
	 * 列元素顺序
	 */
	order :  number
	/**
	 * 自定义样式
	 */
	lStyle?: string | UTSJSONObject
	/**
	 * 高度与宽度的比例 (如 "16/9"、"1" 或 "0.5")
	 */
	aspectRatio ?: number
}