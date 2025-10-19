// @ts-nocheck
// #ifndef APP-ANDROID || APP-IOS
export type Numeric = string | number;
// #endif
export interface CollapsePanelProps {
	/**
	 * 禁止当前面板展开，优先级大于 Collapse 的同名属性
	 */
	disabled: boolean;
	title?: string;
	/**
	 * 左侧图标，出现在单元格标题的左侧
	 */
	icon ?: string
	image ?: string
	/**
	 * 和标题同行的说明文字
	 */
	note ?: string
	size: 'small' | 'medium' | 'large'
	iconColor ?: string
	rightIconColor ?: string
	iconSize ?: string
	rightIconSize ?: string
	imageWidth ?: string
	imageHeight ?: string
	/**
	 * 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识
	 */
	value?: any;
	bgColor?: string;
}