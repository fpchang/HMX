export default {
	/**
	 * 列间距
	 */
	gap: {
		type: [Number, String, Array]
	}, //Array<string | number> | string | number 
	/**
	 * 水平对齐方式
	 */
	justify: String, //'end' | 'center' | 'around' | 'between' | 'start' | 'evenly'
	/**
	 * 垂直对齐方式
	 */
	align: String, //'start ' | 'center' | 'end' | 'stretch'
	/**
	 * 是否自动换行
	 */
	wrap: {
		type: Boolean,
		default: true
	},
	/**
	 * 自定义样式
	 */
	lStyle: {
		type: [String, Object]
	}
}