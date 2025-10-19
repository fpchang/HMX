// @ts-nocheck
export type SizeEnum = 'small' | 'medium' | 'large';
export interface AvatarProps {
	/** 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件存在 AvatarGroup，默认值便由 AvatarGroup.size 决定 */
	size: SizeEnum
	/** 形状 */
	shape: 'square' | 'circle'
	/** 图片地址 */
	src?: string
	/** 图标 */
	icon?: string
	/** 头像替换文本，仅当图片加载失败时有效 */
	alt?: string
	fontSize?: string
	color?: string
	textColor?: string
}