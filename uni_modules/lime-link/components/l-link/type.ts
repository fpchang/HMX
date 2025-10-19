// @ts-nocheck
export type SizeEnum = 'small' | 'medium' | 'large';
export interface LinkProps {
	/**
	 * 应用内跳转的链接
	 */
	url?: string;
	/**
	 * 应用外跳转的链接
	 */
	href?: string;
	/**
	 * 跳转方式
	 */
	openType: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch' | 'navigateBack' | 'exit'
	/**
	 * 链接内容
	 */
	content ?: string;
	/**
	 * 是否为禁用态
	 */
	disabled : boolean;
	/**
	 * 是否开启点击反馈
	 */
	hover : boolean;
	/**
	 * 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 `open-type` 风格的属性名改为 `openType` 风格
	 */
	navigatorProps ?: UTSJSONObject;
	/**
	 * 前置图标
	 */
	prefixIcon ?: any;
	/**
	 * 后置图标
	 */
	suffixIcon ?: any;
	/**
	 * 尺寸
	 * @default medium
	 */
	size : SizeEnum;
	/**
	 * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
	 * @default default
	 */
	type : 'default' | 'primary' | 'danger' | 'warning' | 'success' | 'info';
	/**
	 * 是否显示链接下划线
	 */
	underline : boolean;
	/**
	 * 自定义颜色
	 */
	color?: string;
}