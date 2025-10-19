/**
 * 水平外边距
 * @param margin 边距
 * @param type 边距类型 0 - 正常 1 - 较小边距 2 - 较大边距
 */
export declare const useHmargin: (margin: number, type: number) => number;
/**
 * 垂直外边距
 * @param margin 边距
 * @param type 边距类型 0 - 正常 1 - 较小边距 2 - 较大边距
 */
export declare const useVmargin: (margin: number, type: number) => number;
/**
 * 垂直内边距
 * @param padding 边距
 * @param type 边距类型 0 - 正常 1 - 较小边距 2 - 较大边距
 */
export declare const useHpadding: (padding: number, type: number) => number;
/**
 *  水平内边距
 * @param padding 边距
 * @param type 边距类型 0 - 正常 1 - 较小边距 2 - 较大边距
 */
export declare const useVpadding: (padding: number, type: number) => number;
/**
 * 圆角
 * @param radius 圆角
 * @param type 圆角类型 0 - 正常 1 - 较小圆角 2 - 较大圆角
 */
export declare const useRadius: (radius: number, type: number) => number;
/**
 * 字体大小
 * @param size 尺寸
 * @param type 尺寸类型 0 - 正常 1 - 较小尺寸 2 - 较大尺寸 3 - 超大尺寸  4 - 迷你尺寸
 */
export declare const useFontSize: (size: number, type: number) => number;
/**
 * 文本色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useFontColor: (color: string, darkColor: string) => string;
/**
 * 背景色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useBackgroundColor: (color: string, darkColor: string) => string;
/**
 * 前景色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useForegroundColor: (color: string, darkColor: string) => string;
export type UxThemeType = 'info' | 'primary' | 'success' | 'warning' | 'error';
/**
 * 主题色
 * @param theme 主题
 */
export declare const useThemeColor: (theme: UxThemeType) => string;
/**
 * 标题色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useTitleColor: (color: string, darkColor: string) => string;
/**
 * 二级标题色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useSubTitleColor: (color: string, darkColor: string) => string;
/**
 * 次要色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useSecondaryColor: (color: string, darkColor: string) => string;
/**
 * 占位色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const usePlaceholderColor: (color: string, darkColor: string) => string;
/**
 * 取消色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useCancelColor: (color: string, darkColor: string) => string;
/**
 * 边框色
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useBorderColor: (color: string, darkColor: string) => string;
/**
 * 背景文本颜色 适配深色模式
 * @param color 浅色
 * @param darkColor 深色
 */
export declare const useColor: (color: string, darkColor: string) => string;
/**
 * 反色
 * 深色 -> 浅色
 * 浅色 -> 深色
 * @param color 颜色值
 */
export declare const useInverseColor: (color: string) => string;
/**
 * 浅色
 * @param color 颜色值
 */
export declare const useLightColor: (color: string) => string;
/**
 * 禁止色
 * @param color 颜色值
 */
export declare const useDisabledColor: (color: string) => string;
