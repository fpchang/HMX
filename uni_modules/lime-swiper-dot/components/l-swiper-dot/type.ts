// @ts-nocheck
export interface SwiperDotProps {
	/**​ 指示器类型 */
	type : "dot" | "dot-bar" | "index" | "title" | "fraction";
	/**​ 总项目数 */
	total : number;
	/**​ 当前激活项索引 */
	current : number;
	/**​ 数据对象标题字段名 */
	field : string;
	/**​ 数据源数组 */
	list ?: any[];

	/**​ 全局文本颜色（影响所有模式下的文字） */
	color ?: string;
	/**​ 激活状态指示点颜色（支持所有颜色格式：hex/rgb/hsl） */
	activeColor ?: string;
	/**​ 未激活状态指示点颜色（支持所有颜色格式） */
	inactiveColor ?: string;
	/**​ 文字字号（带单位，如 14px） */
	fontSize ?: string;
}