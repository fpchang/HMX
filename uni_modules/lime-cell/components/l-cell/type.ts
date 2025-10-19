// @ts-nocheck
export interface CellProps {
	size: 'small' | 'medium' | 'large'
	/**
	 * 标题
	 */
	title ?: string
	/**
	 * 下方内容描述
	 */
	description ?: string
	/**
	 * 是否显示下边框
	 */
	bordered : boolean
	hover : boolean
	/**
	 * 左侧图标，出现在单元格标题的左侧
	 */
	icon ?: string
	
	image ?: string
	/**
	 * 和标题同行的说明文字
	 */
	note ?: string
	/**
	 * 是否显示表单必填星号
	 */
	required : boolean
	/**
	 * 是否显示右侧箭头
	 */
	arrow : boolean
	/**
	 * 最右侧图标
	 */
	rightIcon ?: string
	/**
	 * 点击后跳转链接地址。如果值为空，则表示不需要跳转
	 */
	url?:string
	/**
	 * 链接跳转类型
	 */
	openType: 'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateTo'
	/**
	 * 内容的对齐方式，默认居中对齐
	 */
	align: 'top' | 'middle' | 'bottom'
	iconColor ?: string
	rightIconColor ?: string
	iconSize ?: string
	rightIconSize ?: string
	imageWidth ?: string
	imageHeight ?: string
	bgColor ?: string
	lClass?:string
	lClassLeftIcon?:string
	lClassRightIcon?:string
	
}