export type Chunk = {
	start : number
	end : number
	highlight : boolean
	text : string
};


export interface HighlightProps {
  /**
   * 是否自动转义特殊字符
   */
  autoEscape: boolean;
  /**
   * 是否区分大小写匹配
   */
  caseSensitive: boolean;
  /**
   * 高亮样式（CSS类名或样式对象）
   * @format 类名 | { color: string; backgroundColor: string }
   * @example 'highlight' | { color: '#fff', backgroundColor: '#2196F3' }
   */
  highlightStyle?: string | UTSJSONObject;

  /**
   * 未高亮部分的类名
   */
  unhighlightClass?: string;

  /**
   * 高亮部分的类名
   */
  highlightClass?: string;

  /**
   * 需要高亮的文本（支持多个关键词）
   */
  keywords?: string | string[];

  /**
   * 原始文本内容
   */
  text?: string;
}