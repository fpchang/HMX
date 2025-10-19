import type { Composer, Availabilities } from './types';
export declare class AvailabilitiesImpl implements Availabilities {
    dateTimeFormat: boolean;
    numberFormat: boolean;
    constructor();
}
/**
 * 创建一个Composer实例，用于处理国际化信息。
 * @param {UTSJSONObject} [options={}] - 配置对象，包含语言环境、格式化器等设置。
 * @param {Composer | null} [__root=null] - 根Composer实例，用于继承语言环境等信息。
 * @returns {Composer} 返回一个新的Composer实例。
 */
export declare function createComposer(options?: UTSJSONObject, __root?: Composer | null): Composer;
