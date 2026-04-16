// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif
export interface CardProps {
	inset:boolean
	/**
	 * 标题
	 */
	title ?: string
	/**
	 * 和标题同行的说明文字
	 */
	note ?: string
	/**
	 * 右侧额外文字
	 */
	extra ?: string
	/**
	 * 左侧图标，出现在单元格标题的左侧
	 */
	icon ?: string
	image ?: string
	/**
	 * 封面
	 */
	cover ?: string
	more: boolean
	/**
	 * 操作栏
	 */
	actions?: UTSJSONObject[];
	actionsAlign: 'left' | 'right' | 'space-between'
	
	iconColor ?: string
	rightIcon ?: string
	rightIconColor ?: string
	iconSize ?: string
	rightIconSize ?: string
	lStyle ?: string|UTSJSONObject
	imageStyle ?: string|UTSJSONObject
	coverStyle ?: string|UTSJSONObject
	coverMode : 'scaleToFill' | 'aspectFit' | 'aspectFill'	 | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
	
	bgColor ?: string
	lClass?:string
	lClassLeftIcon?: string
	lClassRightIcon?:string
	
	headerBordered: boolean
	footerBordered: boolean
}