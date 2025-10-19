// @ts-nocheck
export type FormattedTypes = {
	integer : string
	decimal : string
	decimalSeparator : string
}

export type EasingFunction = (normalizedTime: number) => number
// type TimingFunction = EasingFunction | null
export interface CountToProps {

	/**
	 * 起始值
	 */
	from : number
	/**
	 * 目标值
	 */
	to : number
	/**
	 * 精度
	 */
	precision : number
	/**
	 * 是否显示分隔符
	 */
	showSeparator : boolean
	/**
	 * 国际化的语言
	 */
	// locale : string
	/**
	 * 是否开始动画
	 */
	active : boolean
	/**
	 * 	动画持续时间
	 */
	duration : number
	/**
	 * 动画曲线函数
	 */
	timingFunction ?: EasingFunction
	
	separator: 'group4' | 'group3' //'ten-thousand' | 'thousand'
	
	fps: number
}

