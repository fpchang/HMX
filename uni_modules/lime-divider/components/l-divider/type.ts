// @ts-nocheck
export interface DividerProps {
	/**
	 * 文本位置（仅在水平分割线有效）
	 * @default center
	 */
	align : 'left' | 'right' | 'center';
	/**
	 * 子元素
	 */
	content ?: string;
	/**
	 * 是否虚线（仅在水平分割线有效）
	 */
	dashed: boolean;
	/**
	 * 分隔线类型有两种：水平和垂直 @default horizontal
	 * 
	 */
	vertical: boolean;  //'horizontal' | 'vertical';
	textColor?: string;
	color?: string;
	
}