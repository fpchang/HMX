// @ts-nocheck
export interface PopoverProps {
	/**
		* 是否在点击外部元素后关闭菜单
		*/
	closeOnClickOutside : boolean;
	/**
		 * 确认框内容
		 */
	content ?: string;
	/**
		* 浮层出现位置
		*/
	placement :
	| 'top'
	| 'left'
	| 'right'
	| 'bottom'
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'left-top'
	| 'left-bottom'
	| 'right-top'
	| 'right-bottom';
	/**
		 * 是否显示浮层箭头
		 */
	showArrow : boolean;
	/**
		* 弹出气泡主题。
		* @default dark
		*/
	theme : 'dark' | 'light';
	/**
		* 是否显示气泡确认框
		*/
	visible ?: boolean;
	color?: string;
	disabled: boolean
	duration: number
	scrollPosition?: number
}

export type PlacementAndWidth = {
  placement: string;
  finalWidth: number;
};