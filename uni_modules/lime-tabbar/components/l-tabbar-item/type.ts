// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Object
// #endif


export interface TabbarItemProps {
  /**
   * 图标右上角提示信息
   */
  badgeProps?: UTSJSONObject;
  /**
   * 图标名称
   */
  icon?: string;
  /**
   * 标识符
   */
  value?: string;
  label?: string;
  disabled: boolean;
  /**
	* 文本超过时是否显示省略号
  */
  ellipsis: boolean;
}
