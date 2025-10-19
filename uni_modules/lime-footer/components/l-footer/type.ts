export interface FooterProps {
	/**
	 * 链接列表。name 表示链接名称， url 表示跳转链接，target 表示跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同
	 */
	links ?: Array<UTSJSONObject>;
	/**
	 * 图标配置。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接跳转地址，`logo.target` 表示跳转方式
	 */
	logo ?: UTSJSONObject;//FooterLogo;
	/**
	 * 版权信息
	 */
	text ?: string;
	
	linkColor?: string;
	lineColor?: string;
	textColor?: string;
	color?: string;
}


// export interface LinkObj {
// 	name : string;
// 	url ?: string;
// 	target ?: string;
// }

// export interface FooterLogo {
// 	icon : string;
// 	title ?: string;
// 	url ?: string;
// 	target ?: string;
// }