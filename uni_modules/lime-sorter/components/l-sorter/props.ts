export default {
	/**
	 * 选中的箭头方向，1表示升序，0表示重置状态，-1表示降序。
	 * 类型: number
	 * 可选值: -1, 0, 1
	 * 默认值: 0或-1（根据具体实现可能有所不同）
	 */
	value: {
		type: Number,
		default: null
	},
	modelValue: {
		type: Number,
		default: null
	},
	defaultValue: {
		type: Number,
		default: 0
	},
	/**
	 * 排序按钮展示的文案。
	 * 类型: string
	 */
	label: {
		type: String,
		default: null
	},
	labelStyle: {
		type: String,
		default: null
	},
	/**
	 * 当展示双箭头时，是否允许手动重置按钮。
	 * 类型: boolean
	 * 默认值: false
	 */
	allowReset: Boolean,
	/**
	 * 是否优先切换为降序，如果不开启则默认优先切换为升序。
	 * 类型: boolean
	 * 默认值: false
	 */
	descFirst: Boolean,

	activeColor: {
		type: String,
		default: null
	},
	inactiveColor: {
		type: String,
		default: null
	},
	arrowSize: {
		type: String,
		default: null
	}
}