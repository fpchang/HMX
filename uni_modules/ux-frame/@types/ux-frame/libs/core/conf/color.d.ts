export declare class ColorBase {
    /**
     * 颜色值
     */
    color: any;
    /**
     * 深色颜色值
     */
    darkColor: any;
    /**
     * 浅色
     */
    light: any;
    /**
     * 深色
     */
    dark: any;
    /**
     * 禁止色
     */
    disabled: any;
    /**
     * 禁止色-深色
     */
    disabledDark: any;
    constructor(color: string, darkColor: string);
    /**
     * 重置颜色值
     */
    reset(color: string, darkColor: string): void;
    /**
     * 反色
     * 深色 -> 浅色
     * 浅色 -> 深色
     */
    getDarkColor(color: string): string;
    /**
     * 浅色
     */
    getLightColor(color: string): string;
    /**
     * 禁止色
     */
    getDisabledColor(color: string): string;
}
