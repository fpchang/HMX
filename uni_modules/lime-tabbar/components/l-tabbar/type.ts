// @ts-nocheck
// #ifndef APP-ANDROID
import type { ComputedRef } from '@/uni_modules/lime-shared/vue';
type ComputedRefImpl<T> = ComputedRef<T>
// #endif

export interface TabbarProps {
	/**
	 * 是否显示外边框 true
	 */
	bordered : boolean;
	/**
	 * 是否固定在底部 true
	 */
	fixed : boolean;
	/**
	 * 是否为 iPhoneX 留出底部安全距离 true
	 */
	safeAreaInsetBottom : boolean;
	/** 
	 * 标签栏的形状 normal
	 */
	shape : 'normal' | 'round';
	/**
	 * 是否需要分割线 true
	 */
	split : boolean;
	/**
	 * 选项风格 normal
	 */
	theme : 'normal' | 'tag';
	/**
	 * 当前选中标签的索引
	 */
	value ?: string;
	/**
	 * 当前选中标签的索引，非受控属性
	 */
	defaultValue ?: string;
	/**
	 * 当前选中标签的索引
	 */
	modelValue ?: string;
	/** 固定在底部时，是否在标签位置生成一个等高的占位元素 */
	placeholder:boolean;
	// #ifdef APP-ANDROID || APP-IOS
	activeColor ?: string;
	color ?: string;
	// #endif
	// #ifndef APP-ANDROID || APP-IOS
	activeColor ?: string;
	color ?: string;
	// #endif
	lStyle ?: string|UTSJSONObject;
	activeBgColor ?: string;
	bgColor?: string
	zIndex?:number;
	iconSize?: string;
	fontSize?: string;
}

export type TabbarProvide = {
	defaultIndex : Ref<number>,
	props: LTabbarComponentPublicInstance,
	activeValue: ComputedRefImpl<string>,
	updateChild: (value: string) => void,
	children: Ref<LTabbarItemComponentPublicInstance[]>
}