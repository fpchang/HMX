export default {
	/** 是否允许取消选中 */
	allowUncheck: Boolean,
	/** 是否选中 */
	checked: {
		type: Boolean,
		default: null,
	},
	modelValue: {
		type: Boolean,
		default: null,
	},
	/** 是否选中，非受控属性 */
	defaultChecked: Boolean,
	/** 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。Radio.disabled 优先级高于 RadioGroup.disabled */
	disabled: {
		type: Boolean,
		default: false,
	},
	/** 主文案 */
	label: {
		type: String,
	},
	/** 唯一名称 */
	name: {
		type: [String, Number],
		default: null,
	},
	/** 单选按钮的值 */
	value: {
		type: [String, Number, Boolean],//as PropType<TdRadioProps['value']>,
		default: null,
	},
	checkedColor: {
		type: String,
		default: null
	},
	iconBgColor: {
		type: String,
		default: null
	},
	iconBorderColor: {
		type: String,
		default: null
	},
	iconDisabledColor: {
		type: String,
		default: null
	},
	iconDisabledBgColor: {
		type: String,
		default: null
	},
	icon: {
		type: String,
		default: null//'circle'
	}, //?: 'circle' | 'line' | 'dot';
	size: {
		type: String,
		default: null//'medium'
	}, //?: 'small' | 'medium' | 'large';
	iconSize: {
		type: String,
		defalut: null
	},
	fontSize: {
		type: String,
		defalut: null
	},
	labelStyle: {
		type: [String, Object],
		defalut: null
	},
	readonly: {
		type: Boolean,
		default: false,
	}
}