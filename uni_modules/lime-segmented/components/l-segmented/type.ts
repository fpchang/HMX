// @ts-nocheck
export interface SegmentedProps {
	/**
	 * 列表
	 */
	options: string[];
	/**
	 * 受控
	 */
	value?: number;
	size: 'small'| 'medium' | 'large';
	/**
	 * 标签栏的形状
	 */
	shape: 'normal' | 'round';
	disabled: boolean;
	type: 'button' | 'card' | 'text'
	bgColor?: string;
	activeColor?: string;
	color?: string;
	sliderColor?: string;
	fontSize?:string;
	height?:string;
	padding?:string;
	
	immediate: boolean
}