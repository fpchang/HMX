export default {
	/**​ 指示器类型 */
	type: {
		type: String,
		required: true,
		validator: value => ['dot', 'dot-bar', 'index', 'title', 'fraction'].includes(value)
	},

	/**​ 总项目数 */
	total: {
		type: Number,
		default: 0
	},

	/**​ 当前激活项索引 */
	current: {
		type: Number,
		default: 0
	},

	/**​ 数据对象标题字段名 */
	field: {
		type: String
	},

	/**​ 数据源数组 */
	list: {
		type: Array,
		default: () => []
	},

	/**​ 全局文本颜色 */
	color: {
		type: String,
		default: null
	},

	/**​ 激活状态指示点颜色 */
	activeColor: {
		type: String,
		default: null
	},

	/**​ 未激活状态指示点颜色 */
	inactiveColor: {
		type: String,
		default: null
	},

	/**​ 文字字号 */
	fontSize: {
		type: String,
		default: null
	}
}