// @ts-nocheck
export default {
	/** 是否允许取消选中 */
	allowUncheck: Boolean,
	/** 是否禁用全部子单选框。默认为 false。RadioGroup.disabled 优先级低于 Radio.disabled */
	disabled: Boolean,
	readonly: Boolean,
	/** HTML 元素原生属性 */
	name: {
		type: String,
		default: null,
	},
	/** 选中的值 */
	value: {
		type: [String, Number, Boolean], //as PropType<LRadioGroupProps['value']>,
		default: null,
	},
	modelValue: {
		type: [String, Number, Boolean], //as PropType<LRadioGroupProps['value']>,
		default: null,
	},
	/** 选中的值，非受控属性 */
	defaultValue: {
		type: [String, Number, Boolean] //as PropType<LRadioGroupProps['defaultValue']>,
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
		default: 'circle'
	}, //?: 'circle' | 'line' | 'dot';
	size: {
		type: String,
		default: 'medium'
	}, //?: 'small' | 'medium' | 'large';
	iconSize: {
		type: String,
		defalut: null
	},
	fontSize: {
		type: String,
		defalut: null
	},
	direction: {
		type: String,
		default: 'horizontal'
	}, //'horizontal' | 'vertical'
	gap: {
		type: String,
		default: null
	}, 
}