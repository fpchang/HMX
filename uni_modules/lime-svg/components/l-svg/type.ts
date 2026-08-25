// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif

/**
 * LSvgProps SVG 组件 Props 类型定义
 */
export interface LSvgProps {
	/** SVG 图标的源，支持本地路径、网络 URL、SVG 源文本和 Base64 编码 */
	src: string;
	/** 图标颜色，仅对纯色图标有效 */
	color: string;
	/** 是否使用 WebView 渲染，支持动画效果 */
	web: boolean;
	/** 是否以继承颜色方式渲染图标 */
	inherit: boolean;
	/** 根元素自定义类名 */
	lClass?: string | UTSJSONObject;
	/** 根元素自定义样式 */
	lStyle?: string | UTSJSONObject;
}
