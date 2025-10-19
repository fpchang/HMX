// @ts-nocheck
export type RadioValue = any//string | number | boolean;
export interface RadioProps {
	/**
	 * 是否允许取消选中
	 */
	allowUncheck : boolean;
	/**
	 * 是否选中
	 */
	checked ?: boolean;
	modelValue ?: boolean;
	/**
	 * 是否选中，非受控属性
	 */
	defaultChecked ?: boolean;
	/**
	 * 是否选中
	 */
	// modelValue ?: boolean;
	/**
	 * 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。Radio.disabled 优先级高于 RadioGroup.disabled
	 */
	disabled : boolean;
	readonly : boolean;
	/**
	 * 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标
	 */
	icon?: 'circle' | 'line' | 'dot' //| string[];
	// icon ?: 'circle' | 'line' | 'dot';
	/**
	 * 主文案
	 */
	label ?: string;
	/**
	 * 唯一名称
	 */
	name ?: string;
	value ?: RadioValue;
	size?: 'small' | 'medium' | 'large'
	fontSize ?: string;
	iconSize?: string;
	checkedColor?: string;
	iconBgColor?: string;
	iconBorderColor?: string;
	iconDisabledColor?: string;
	iconDisabledBgColor?: string;
	labelStyle?: string | UTSJSONObject;
}


type ComputedRefImpl<T> = ComputedRef<T>