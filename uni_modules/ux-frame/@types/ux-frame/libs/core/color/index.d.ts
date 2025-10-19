/**
 * 颜色工具类 - 提供颜色解析、转换和渐变生成功能
 */
import { RGBA } from "../../types/color";
export declare class Color {
    private static readonly HEX_PATTERN;
    private static readonly RGB_PATTERN;
    private static readonly RGBA_PATTERN;
    private static readonly HSL_PATTERN;
    private static readonly HSLA_PATTERN;
    private static readonly DIRECTION_MAP;
    /**
     * 判断是否是颜色相关的样式
     */
    isColorRelatedStyle(value: string): boolean;
    /**
     * 解析颜色值 - 支持预定义颜色名称和标准颜色格式
     */
    parseColorValue(value: string): string;
    /**
     * 检查是否为有效的颜色
     */
    isValid(color: string): boolean;
    /**
     * 检查是否为有效的颜色格式
     */
    private isValidColorFormat;
    private calculateBezier;
    private calculateBezierDerivative;
    /**
     * 贝塞尔插值
     * @param startX
     * @param endX
     * @param startY
     * @param endY
     * @returns
     */
    bezierInterpolation(startX: number, endX: number, startY: number, endY: number): ((input: number) => number) | null;
    /**
     * 解析颜色字符串为RGBA对象
     */
    parseColorString(color: string): RGBA;
    /**
     * 解析十六进制颜色
     */
    private parseHexColor;
    /**
     * 解析RGB/RGBA颜色
     */
    private parseRgbColor;
    /**
     * 生成线性渐变CSS字符串
     */
    generateLinearGradient(direction: string, colors: string[]): string;
    /**
     * 生成线性渐变 - 从字符串解析
     * @param gradientString   渐变字符串
     * @returns   渐变字符串
     */
    generateLinearGradientFromString(gradientString: string): string;
    /**
     * 创建RGBA颜色字符串
     */
    createRgbaString(r: number, g: number, b: number, a?: number): string;
    /**
     * 解析后直接获取rgba值
     */
    getRgba(color: string, opacity?: number): string;
    /**
     * 创建十六进制颜色字符串
     */
    createHexString(r: number, g: number, b: number): string;
    /**
     * 获取随机颜色（十六进制格式）
     */
    getRandomColor(): string;
    /**
     * 获取随机柔和颜色（HSL方式生成）
     */
    getRandomSoftColor(): string;
    /**
     * 获取颜色的亮度值 (0-255)
     */
    getBrightness(color: string): number;
    /**
     * 判断颜色是否为深色
     */
    isDarkColor(color: string): boolean;
    /**
     * 获取预定义颜色列表
     */
    getPredefinedColors(): Map<string, string>;
    /**
     * 颜色反转（取反色）
     * @param color 颜色值
     * @returns 反转后的颜色字符串
     */
    invertColor(color: string): string;
    /**
     * 获取禁用状态的颜色（通常是灰色调）
     * @param color 原始颜色
     * @param opacity 透明度，默认0.4
     * @returns 禁用状态颜色字符串
     */
    getDisabledColor(color: string, opacity?: number): string;
    /**
     * 深色变浅色，浅色变深色
     * @param color 颜色值
     * @param lightAmount 变浅程度，默认80
     * @param darkAmount 变深程度，默认80
     * @returns 反转后的颜色字符串
     */
    invertColors(color: string, lightAmount?: number, darkAmount?: number): string;
    /**
     * 获取深色版本的颜色
     * @param color 颜色值
     * @param amount 变深程度，默认40
     * @returns 深色版本的颜色字符串
     */
    getDarkColor(color: string, amount?: number): string;
    /**
     * 获取浅色版本的颜色
     * @param color 颜色值
     * @param amount 变浅程度，默认40
     * @returns 浅色版本的颜色字符串
     */
    getLightColor(color: string, amount?: number): string;
    /**
     * 根据背景色自动选择合适的文字颜色（黑色或白色）
     * @param backgroundColor 背景颜色
     * @param lightTextColor 浅色文字颜色，默认白色
     * @param darkTextColor 深色文字颜色，默认黑色
     * @returns 合适的文字颜色
     */
    getContrastTextColor(backgroundColor: string, lightTextColor?: string, darkTextColor?: string): string;
    /**
     * 将颜色变浅指定的量
     * @param color 颜色值
     * @param amount 变浅程度，范围1-100，100为纯白色
     * @returns 变浅后的颜色字符串
     */
    lightenColor(color: string, amount?: number): string;
    /**
     * 将颜色变暗指定的量
     * @param color 颜色值
     * @param amount 变暗程度，范围1-100，100为纯黑色
     * @returns 变暗后的颜色字符串
     */
    darkenColor(color: string, amount?: number): string;
    /**
     * 将颜色变亮指定的量（直接调整RGB值）
     * @param color 颜色值
     * @param amount 变亮程度，范围1-100
     * @returns 变亮后的颜色字符串
     */
    brightenColor(color: string, amount?: number): string;
    /**
     * 调整颜色饱和度
     * @param color 颜色值
     * @param amount 饱和度调整量，正数增加饱和度，负数减少饱和度
     * @returns 调整后的颜色字符串
     */
    saturateColor(color: string, amount?: number): string;
    /**
     * 获取颜色的互补色
     * @param color 颜色值
     * @returns 互补色字符串
     */
    getComplementaryColor(color: string): string;
    /**
     * 混合两种颜色
     * @param color1 第一种颜色
     * @param color2 第二种颜色
     * @param ratio 混合比例，0-1之间，0完全是color1，1完全是color2
     * @returns 混合后的颜色字符串
     */
    mixColors(color1: string, color2: string, ratio?: number): string;
    private rgbToHsl;
    private hslToRgb;
}
