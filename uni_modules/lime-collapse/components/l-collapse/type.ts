// @ts-nocheck
export type Numeric = string | number;

// #ifdef APP-ANDROID || APP-IOS || APP-HARMONY
export type ComputedRef<T> = ComputedRefImpl<T>
// #endif

export interface CollapseProps {
	/**
	 * 是否展示为圆角卡片风格
	 */
	inset: boolean
	/**
	 * 手风琴效果，每个面板互斥展开，每次只展开一个面板 
	 */
	accordion : boolean
	/**
	 * 展开的面板集合 default []
	 * 
	 */
	modelValue?: any[]
	value?: any[]
	disabled: boolean
	
}


export type CollapseProvide = {
	children: Ref<LCollapsePanelComponentPublicInstance[]>,
	disabled: ComputedRef<boolean>,
	activeValue: ComputedRef<Numeric[]>,
	onPanelChange: (value: Numeric) => void
}