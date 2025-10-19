// @ts-nocheck
export default {
	/** 图标右上角提示信息 */
	badgeProps: {
		type: Object,
		default: () => ({})
	},
	/** 图标名称 */
	icon: {
		type: String,
	},
	/** 标识符 */
	value: {
		type: [String, Number],
		default: null
	},
	disabled: {
		type: Boolean,
		default: false
	},
	label: {
		type: String
	},
	ellipsis: {
		type: Boolean,
		default: false
	}
};