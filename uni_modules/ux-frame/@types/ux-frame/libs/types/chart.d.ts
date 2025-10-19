/**
 * 自绘图表
 */
export type UxChart = {
    id: number;
};
/**
 * 折线图
 */
export type UxChartLineType = {
    /**
     * 数据集
     */
    data: number[][];
    /**
     * x轴
     */
    xAxis: string[];
    /**
     * y轴分段步长 默认 5
     */
    yStep?: number;
    /**
     * 每帧进度 默认 1
     */
    step?: number;
    /**
     * 文本旋转角度 默认 0
     */
    labelAngle?: number;
    /**
     * 区域背景色
     */
    areaColor?: string[];
    /**
     * 折线颜色
     */
    lineColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    lineColorDark?: string;
    /**
     * 虚线颜色
     */
    dashesColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    dashesColorDark?: string;
    /**
     * 文字颜色
     */
    color?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    darkColor?: string;
    /**
     * 文字大小 默认 18
     */
    fontSize?: number;
    /**
     * 文字加粗 默认 false
     */
    bold?: boolean;
};
/**
 * 柱状图
 */
export type UxChartBarType = {
    /**
     * 数据集
     */
    data: number[][];
    /**
     * x轴
     */
    xAxis: string[];
    /**
     * y轴分段步长 默认 5
     */
    yStep?: number;
    /**
     * 每帧进度 默认 1
     */
    step?: number;
    /**
     * 柱宽百分比 0-1 默认 0.7
     */
    width?: number;
    /**
     * 文本旋转角度 默认 0
     */
    labelAngle?: number;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    backgroundColorDark?: string;
    /**
     * 轴线颜色
     */
    lineColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    lineColorDark?: string;
    /**
     * 虚线颜色
     */
    dashesColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    dashesColorDark?: string;
    /**
     * 文字颜色
     */
    color?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    darkColor?: string;
    /**
     * 文字大小 默认 18
     */
    fontSize?: number;
    /**
     * 文字加粗 默认 false
     */
    bold?: boolean;
};
/**
 * 环形图
 */
export type UxChartRingType = {
    /**
     * 百分比值 0 - 100
     */
    value: number;
    /**
     * 每帧进度 默认 1
     */
    step?: number;
    /**
     * 内外圆环半径 默认 [36, 40]
     */
    radius?: number[];
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    backgroundColorDark?: string;
    /**
     * 进度条背景色
     */
    progressColor?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    progressColorDark?: string;
    /**
     * 文字颜色
     */
    color?: string;
    /**
     * 深色 none - 不显示，auto - 自动适配深色模式，其他 - 颜色
     */
    darkColor?: string;
    /**
     * 文字大小 默认 18
     */
    fontSize?: number;
    /**
     * 文字加粗 默认 false
     */
    bold?: boolean;
    /**
     * 文案距离底部偏移 默认 8
     */
    bottom?: number;
};
