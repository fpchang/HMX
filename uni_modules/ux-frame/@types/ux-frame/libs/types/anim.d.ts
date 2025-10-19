export type UxAnimationOptions = {
    /**
     * 开始值
     */
    startVal: number;
    /**
     * 结束值
     */
    endVal: number;
    /**
     * 上次值
     */
    lastVal?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 速度
     */
    speed?: number;
    /**
     * 缓动偏移
     */
    offset?: number;
    /**
     * 缓动速度
     */
    offsetSpeed?: number;
    /**
     * 内部使用
     */
    _isOffset?: boolean;
    /**
     * 桢动画回调
     */
    frame?: (value: number) => void;
    /**
     * 结束回调
     */
    end?: (value: number) => void;
};
