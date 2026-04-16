// @ts-nocheck
export interface SidebarProps {
	width ?: string
	fontSize ?: string
	lineHeight ?: string
	textColor ?: string
	disabledTextColor ?: string
	// activeColor?: string
	bgColor ?: string
	selectedFontWeight ?: string
	selectedTextColor ?: string
	selectedBorderWidth ?: string
	selectedBorderHeight ?: string
	selectedBorderColor ?: string
	selectedBgColor ?: string

	round : boolean
	line : boolean

	/**
	 * 选项值
	 */
	value ?: LimeSidebarValue;
	/**
	 * 选项值，非受控属性
	 */
	defaultValue ?: LimeSidebarValue;
	/**
	 * 选项值
	 */
	modelValue ?: LimeSidebarValue;
}

export type LimeSidebarValue = string | number

export type LimeSidebarContext = {
	currentValue: Ref<LimeSidebarValue>,
	currentIndex: Ref<number>,
	children: Ref<LSidebarItemComponentPublicInstance[]>,
	register : (child : LSidebarItemComponentPublicInstance, getRect: () => Promise<DOMRect>) => void;
	unregister : (child : LSidebarItemComponentPublicInstance) => void;
	round: ComputedRef<boolean>;
	line: ComputedRef<boolean>;
	onClickItem: (value: string|number) => void
}
