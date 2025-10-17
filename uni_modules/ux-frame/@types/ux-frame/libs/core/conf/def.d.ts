/**
 * 配置
 */
export type UxConf = {
    /**
     * 开启debug打印
     */
    debugLog?: boolean | null;
    /**
     * 深色模式 默认 false
     */
    darkMode?: boolean | null;
    /**
     * 灰色模式（哀悼模式） 默认 false
     */
    grayMode?: boolean | null;
    /**
     * 跟随系统 默认 false
     */
    followSys?: boolean | null;
    /**
     * 主色调 默认 #3c9cff
     */
    primaryColor?: string | null;
    /**
     * 次要色 默认 #3c9cff
     */
    secondaryColor?: string | null;
    /**
     * 成功提示色 默认 #5ac725
     */
    successColor?: string | null;
    /**
     * 错误提示色 默认 #f56c6c
     */
    errorColor?: string | null;
    /**
     * 警告提示色 默认 #f9ae3d
     */
    warningColor?: string | null;
    /**
     * 信息提示色 默认 #909399
     */
    infoColor?: string | null;
    /**
     * 背景色 默认 #f6f6f6
     */
    backgroundColor?: string | null;
    /**
     * 背景色 深色 #111111
     */
    backgroundColorDark?: string | null;
    /**
     * 前景色 默认 #ffffff
     */
    foregroundColor?: string | null;
    /**
     * 前景色 深色 #272727
     */
    foregroundColorDark?: string | null;
    /**
     * tabbar背景色 默认 #ffffff
     */
    tabbarBackgroundColor?: string | null;
    /**
     * tabbar背景色 深色 #000000
     */
    tabbarBackgroundColorDark?: string | null;
    /**
     * tabbar文本色 默认 #000000
     */
    tabbarTextColor?: string | null;
    /**
     * tabbar文本色 深色 #ffffff
     */
    tabbarTextColorDark?: string | null;
    /**
     * 文本色 默认 #111111
     */
    fontColor?: string | null;
    /**
     * 文本色 深色 #f9f9f9
     */
    fontColorDark?: string | null;
    /**
     * 占位色 默认 #c0c4cc
     */
    placeholderColor?: string | null;
    /**
     * 占位色 深色
     */
    placeholderColorDark?: string | null;
    /**
     * 取消色 默认 #a9a9a9
     */
    cancelColor?: string | null;
    /**
     * 取消色 深色
     */
    cancelColorDark?: string | null;
    /**
     * 边框色 默认 #e7e6e4
     */
    borderColor?: string | null;
    /**
     * 边框色 深色
     */
    borderColorDark?: string | null;
    /**
     * 按压色 默认 #e7e6e4
     */
    hoverColor?: string | null;
    /**
     * 按压色 深色
     */
    hoverColorDark?: string | null;
    /**
     * 标题色 默认 #2C405A
     */
    titleColor?: string | null;
    /**
     * 标题色 深色
     */
    titleColorDark?: string | null;
    /**
     * 二级标题色 默认 #555555
     */
    subtitleColor?: string | null;
    /**
     * 二级标题色 深色
     */
    subtitleColorDark?: string | null;
    /**
     * 段落色 默认 #3F536E
     */
    paragraphColor?: string | null;
    /**
     * 段落色 深色
     */
    paragraphColorDark?: string | null;
    /**
     * 分割线色 默认 #3F536E
     */
    lineColor?: string | null;
    /**
     * 分割线色 深色
     */
    lineColorDark?: string | null;
    /**
     * 背景透明度 默认 0.6
     */
    maskAlpha?: number | null;
    /**
     * 文字大小 默认 15
     */
    fontSize?: number | null;
    /**
     * 圆角 默认 6
     */
    radius?: number | null;
    /**
     * 水平外边距 默认 15
     */
    hmargin?: number | null;
    /**
     * 垂直外边距 默认 15
     */
    vmargin?: number | null;
    /**
     * 水平内边距 默认 15
     */
    hpadding?: number | null;
    /**
     * 垂直内边距 默认 15
     */
    vpadding?: number | null;
};
/**
 * 默认配置
 */
export declare const defConf: UxConf;
