// @ts-nocheck
export type SizeEnum = 'small' | 'medium' | 'large';
export interface AvatarGroupProps {
	/**
	* 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上
	*/
	cascading: 'left-up' | 'right-up'
	/**
	* 能够同时显示的最多头像数量
	*/
	max?: number
	/** 形状 */
	shape?: 'square' | 'circle'
	/** 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size */
	size: SizeEnum
	collapseText?: string
	collapseFontSize?: string
	collapseColor?: string
	collapseTextColor?: string
}


export type AvatarGroupProvide = {
	children: Ref<number[]>,
	props: LAvatarGroupComponentPublicInstance
}