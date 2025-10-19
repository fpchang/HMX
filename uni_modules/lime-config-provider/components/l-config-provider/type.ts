// @ts-nocheck
export type ConfigProviderTheme = 'light' | 'dark'
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, string>
// #endif
export interface ConfigProviderProps {
	/**
	 * 主题风格，设置为 dark 来开启深色模式，全局生效
	 */
	theme: ConfigProviderTheme
	/**
	 * 自定义主题变量
	 */
	themeVars: UTSJSONObject
	/**
	 * 自定义节点class name
	 */
	lClass: string
	/**
	 * 自定义节点样式
	 */
	lStyle: string | UTSJSONObject
}
