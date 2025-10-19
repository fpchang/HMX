// @ts-nocheck
export interface BackTopProps {
	ariaRole: string;
	/**
	 * 滚动到指定对象 暂时无用
	 */
	target?: string;
	/**
	* 是否绝对定位固定到屏幕右下方
	*/
	fixed: boolean;
	/**
	* 图标
	* @default 'backtop'
	*/
	icon: string;
	/**
    * 文案
    * @default ''
    */
	text?: string;
	/**
	* 预设的样式类型 未实现
	* @default ''
	*/
	type: 'primary' | 'success' | 'warning' | 'danger' | 'default';
	/**
	* 页面垂直滚动多高后出现
	* @default 0
	*/
	offset: number
	/** 页面滚动距离 有的环境不支持获取页面距离，需要传入 */
	scrollTop?: number
	duration: number
	/** icon的尺寸 */
	iconSize: number|string
	/**
	* 距离页面右侧距离
	*/
	right: number|string
	/**
	* 距离页面底部距离
	*/
	bottom: number|string
	/** 形状 */
	shape: 'round'|'square'
	lStyle: string | UTSJSONObject
}
