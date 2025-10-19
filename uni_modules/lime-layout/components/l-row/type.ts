
export interface RowProps {
	/**
	 * 列间距
	 */
	gap?: Array<string | number> | string | number 
	/**
	 * 水平对齐方式
	 */
	justify : 'end' | 'center' | 'around' | 'between' | 'start' | 'evenly'
	/**
	 * 垂直对齐方式
	 */
	align : 'start ' | 'center' | 'end' | 'stretch'
	/**
	 * 是否自动换行
	 */
	wrap : boolean
	/**
	 * 自定义样式
	 */
	lStyle?: string | UTSJSONObject
}