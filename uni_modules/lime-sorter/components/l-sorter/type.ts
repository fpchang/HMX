// @ts-nocheck
export interface SorterProps {
	/**
	 * 选中的箭头方向，1表示升序，0表示重置状态，-1表示降序。
	 * 类型: number
	 * 可选值: -1, 0, 1
	 * 默认值: 0或-1（根据具体实现可能有所不同）
	 */
	value?: number;
	modelValue?: number;
	defaultValue: number;
	/**
	 * 排序按钮展示的文案。
	 * 类型: string
	 */
	label?: string;
	labelStyle?: string;
	/**
	 * 当展示双箭头时，是否允许手动重置按钮。
	 * 类型: boolean
	 * 默认值: false
	 */
	allowReset: boolean;
	/**
	 * 是否优先切换为降序，如果不开启则默认优先切换为升序。
	 * 类型: boolean
	 * 默认值: false
	 */
	descFirst: boolean;
	activeColor?: string;
	inactiveColor?: string;
	arrowSize?: string
}