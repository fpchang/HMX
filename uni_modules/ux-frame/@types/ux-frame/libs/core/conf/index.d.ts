import { ColorBase } from "./color";
import { SizeBase } from "./size";
import { RadiusBase } from "./radiu";
import { SpacingBase } from "./spacing";
import type { UxConf } from "./def";
/**
 * UxConf 全局配置
 */
export declare class Conf {
    /**
     * 开启debug打印
     */
    debugLog: any;
    /**
     * 深色模式
     */
    darkMode: any;
    /**
     * 灰色模式（哀悼模式）
     */
    grayMode: any;
    /**
     * 跟随系统
     */
    followSys: any;
    /**
     * 强调色
     */
    primaryColor: ColorBase;
    /**
     * 次要色
     */
    secondaryColor: ColorBase;
    /**
     * 成功提示色
     */
    successColor: ColorBase;
    /**
     * 错误提示色
     */
    errorColor: ColorBase;
    /**
     * 警告提示色
     */
    warningColor: ColorBase;
    /**
     * 信息提示色
     */
    infoColor: ColorBase;
    /**
     * 背景色
     */
    backgroundColor: ColorBase;
    /**
     * 前景色
     */
    foregroundColor: ColorBase;
    /**
     * tabbar背景色
     */
    tabbarBackgroundColor: ColorBase;
    /**
     * tabbar文本色
     */
    tabbarTextColor: ColorBase;
    /**
     * 文字色
     */
    fontColor: ColorBase;
    /**
     * 占位色
     */
    placeholderColor: ColorBase;
    /**
     * 取消色
     */
    cancelColor: ColorBase;
    /**
     * 边框色
     */
    borderColor: ColorBase;
    /**
     * 按压色
     */
    hoverColor: ColorBase;
    /**
     * 标题色
     */
    titleColor: ColorBase;
    /**
     * 二级标题色
     */
    subtitleColor: ColorBase;
    /**
     * 段落色
     */
    paragraphColor: ColorBase;
    /**
     * 分割线色
     */
    lineColor: ColorBase;
    /**
     * 背景透明度
     */
    maskAlpha: any;
    /**
     * 文字大小
     */
    fontSize: SizeBase;
    /**
     * 圆角
     */
    radius: RadiusBase;
    /**
     * 水平外边距
     */
    hmargin: SpacingBase;
    /**
     * 垂直外边距
     */
    vmargin: SpacingBase;
    /**
     * 水平内边距
     */
    hpadding: SpacingBase;
    /**
     * 垂直内边距
     */
    vpadding: SpacingBase;
    /**
     * 主题改变回调
     */
    themeChangeEvent?: (dark: boolean) => void;
    /**
     * 哀悼模式改变回调
     */
    grayModeChangeEvent?: (gray: boolean) => void;
    /**
     * 缓存key
     */
    private cacheKey;
    constructor();
    /**
     * 初始化
     */
    init(options?: UxConf): void;
    /**
     * 加载缓存配置
     */
    private loadCached;
    /**
     * 设置缓存
     */
    private setCache;
    /**
     * 清理缓存
     */
    clearCache(): void;
    /**
     * 设置配置
     */
    setConf(conf: UxConf): void;
    /**
     * 开启打印日志
     */
    setDebugLog(debugLog: boolean): void;
    /**
     * 设置深色模式
     */
    setDarkMode(dark: boolean): void;
    /**
     * 设置灰色模式（哀悼模式）
     */
    setGrayMode(gray: boolean): void;
    /**
     * 设置跟随系统
     */
    setFollowSys(followSys: boolean): void;
    /**
     * 设置主色调
     */
    setPrimaryColor(color: string): void;
    /**
     * 设置次要色
     */
    setSecondaryColor(color: string): void;
    /**
     * 设置成功提示色
     */
    setSuccessColor(color: string): void;
    /**
     * 设置错误提示色
     */
    setErrorColor(color: string): void;
    /**
     * 设置警告提示色
     */
    setWarningColor(color: string): void;
    /**
     * 设置信息提示色
     */
    setInfoColor(color: string): void;
    /**
     * 设置背景色
     */
    setBackgroundColor(color: string, darkColor: string | null): void;
    /**
     * 设置前景色
     */
    setForegroundColor(color: string, darkColor: string | null): void;
    /**
     * 设置tabbar背景色
     */
    setTabbarBackgroundColor(color: string, darkColor: string | null): void;
    /**
     * 设置tabbar文本色
     */
    setTabbarTextColor(color: string, darkColor: string | null): void;
    /**
     * 设置文本色
     */
    setFontColor(color: string, darkColor: string | null): void;
    /**
     * 设置占位色
     */
    setPlaceholderColor(color: string, darkColor: string | null): void;
    /**
     * 设置取消色
     */
    setCancelColor(color: string, darkColor: string | null): void;
    /**
     * 设置按压色
     */
    setHoverColor(color: string, darkColor: string | null): void;
    /**
     * 设置边框色
     */
    setBorderColor(color: string, darkColor: string | null): void;
    /**
     * 设置标题色
     */
    setTitleColor(color: string, darkColor: string | null): void;
    /**
     * 设置二级标题色
     */
    setSubtitleColor(color: string, darkColor: string | null): void;
    /**
     * 设置段落色
     */
    setParagraphColor(color: string, darkColor: string | null): void;
    /**
     * 设置分割线色
     */
    setLineColor(color: string, darkColor: string | null): void;
    /**
     * 设置背景透明度
     */
    setMaskAlpha(alpha: number): void;
    /**
     * 设置文字大小
     */
    setFontSize(fontSize: number): void;
    /**
     * 设置圆角
     */
    setRadius(radius: number): void;
    /**
     * 水平外边距
     */
    setHmargin(margin: number): void;
    /**
     * 垂直外边距
     */
    setVmargin(margin: number): void;
    /**
     * 水平内边距
     */
    setHpadding(padding: number): void;
    /**
     * 垂直内边距
     */
    setVpadding(padding: number): void;
    /**
     * 设置主题改变回调
     */
    setOnThemeChangeEvent(callback: (dark: boolean) => void): void;
    /**
     * 设置哀悼模式改变回调
     */
    setOnGrayModeChangeEvent(callback: (gray: boolean) => void): void;
    /**
     * 设置系统主题
     */
    setSysDarkMode(): void;
    /**
     * 监听深色模式
     */
    onDarkModeListener(): void;
    /**
     * 设置全局背景色
     */
    setGlobalBackgroundColor(): void;
}
