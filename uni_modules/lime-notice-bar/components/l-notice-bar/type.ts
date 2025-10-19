// @ts-nocheck
export interface NoticeProps {
	/**
	 * 文本内容
	 */
	text ?: any;
	/**
	 * 前缀图标
	 */
	leftIcon ?: string;
	/**
	 * 后缀图标
	 */
	rightIcon ?: string;
	/**
	 * 内置主题
	 */
	type : 'info' | 'success' | 'warning' | 'danger';
	/** 间隔时间 */
	interval : number;
	/**
	 * 动画延迟时间
	 */
	delay : number
	/**
	 * 滚动速率
	 */
	speed : number
	/**
	 * 滚动速率
	 */
	loop : number
	color ?: string
	bgColor ?: string
	marquee : boolean
	vertical : boolean
	wrapable : boolean
	leftIconColor?: string
	leftIconSize?: string
	fontSize?: string
	rightIconColor?: string
	rightIconSize?: string
	lStyle?: string | UTSJSONObject
}