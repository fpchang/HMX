// @ts-nocheck
export type SizeEnum = 'small' | 'medium' | 'large';
export interface StepperProps {
	name ?: string;
	/**
	  * 禁用输入框
	  */
	disableInput: boolean;
	/**
	 * 禁用全部操作
	 */
	disabled: boolean;
	readonly: boolean;
	/**
	 * 输入框宽度
	 */
	inputWidth ?: string;
	/**
	 * 是否整型
	 */
	integer : boolean;
	/**
	 * 最大值 100
	 */
	max: number;
	/**
	 * 最小值
	 * @default 0
	 */
	min : number;
	/**
	 * 组件尺寸
	 */
	size : SizeEnum;
	/**
	 * 步长
	 * @default 1
	 */
	step : number;
	/**
	 * 组件风格
	 */
	theme : 'normal' | 'filled' | 'outline' | 'solid';
	/**
	 * 值
	 */
	value ?:  number;
	/**
	 * 值，非受控属性
	 */
	defaultValue ?:  number;
	modelValue ?:  number;
	/**
	 * 是否开启长按手势，开启后可以长按增加和减少按钮
	 */
	longPress : boolean;
	iconRadius?:string;
	minusStyle?: UTSJSONObject;
	plusStyle?: UTSJSONObject;
	inputStyle?: UTSJSONObject | string;
	cursorColor:string
}