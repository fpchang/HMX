// @ts-nocheck
export type RadioValue = any//string | number | boolean;
export interface RadioGroupProps {
	/**
	  * 是否允许取消选中
	  */
	allowUncheck: boolean;
	/**
	  * 是否禁用全部子单选框。默认为 false。RadioGroup.disabled 优先级低于 Radio.disabled
	  */
	disabled: boolean;
	readonly : boolean;
	/**
	 * HTML 元素原生属性
	 */
	name ?: string;
	/**
	  * 选中的值
	  */
	value ?: RadioValue;
	/**
	 * 选中的值，非受控属性
	 */
	defaultValue ?: RadioValue;
	/**
	 * 选中的值
	 */
	modelValue ?: RadioValue;
	checkedColor?: string;
	iconBgColor?: string;
	iconBorderColor?: string;
	iconDisabledColor?: string;
	iconDisabledBgColor?: string;
	icon ?: 'circle' | 'line' | 'dot';
	size ?: 'small' | 'medium' | 'large';
	iconSize ?: string;
	fontSize ?: string;
	gap ?: string;
	direction: 'horizontal' | 'vertical'
}


