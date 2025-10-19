// @ts-nocheck
export type PaginationItem = {
  pageNumber: number,  // 页码
  label: string,       // label 文本内容
  isActive: boolean    // isActive 表示当前项是否激活
};
export interface PaginationProps {
	/**
	 * 总记录数，用于计算总页数。
	 */
	total: number;
	/**
	 * 每页显示的记录数
	 */
	pageSize: number;
	/**
	 * 显示的页码按钮数量
	 */
	pagerCount: number;
	/**
	 * 如果只有一页，是否隐藏分页器。
	 */
	hideOnSinglePage: boolean;
	/**
	 * 是否禁用分页
	 */
	disabled: boolean;
	/**
	 * 是否显示省略号
	 */
	forceEllipses: boolean;
	/**
	 * 上一页
	 */
	prevText: string;
	/**
	 * 下一页
	 */
	nextText: string;
	/**
	 * 是否为简单分页
	 */
	simple: boolean;
	bgColor?: string;
	color?: string;
	activeBgColor?: string;
	activeColor?: string;
	fontSize?:string;
	radius?: string;
	borderColor?:string;
	showPrevButton: boolean;
	showNextButton: boolean;
	itemWidth?: string;
	itemHeight?: string;
}