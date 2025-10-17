import { ComponentPublicInstance } from 'vue';
import { Core } from '../core';
/**
   @Name    :	工具
   @Author  :   UxFrame
   @Date    :   2023-10-09 11:20:22
*/
export declare class Util {
    core: Core;
    constructor(core: Core);
    /**
     * 睡眠
     * @param {number} time 时间 单位：毫秒
     */
    sleep(time: number): Promise<boolean>;
    /**
     * 获取 px 值
     * @param {string|number} value 值
     */
    getPx(value: any | null): number;
    /**
     * 格式化单位 px
     * @param {string|number} value 需要添加单位的值
     * @param {string} unit 添加的单位名 比如px
     */
    addUnit(value: any | null, unit?: string): string;
    /**
     * 查询节点
     * @param {String} id 节点 id / className
     * @param {ComponentPublicInstance} context 实例
     */
    getBoundingClientRect(id: string, context?: any): Promise<NodeInfo | null>;
    /**
     * 查询节点数组
     * @param {String} id 节点 id / className
     * @param {ComponentPublicInstance} context 实例
     */
    getBoundingClientRectList(id: string, context?: any): Promise<NodeInfo[]>;
    /**
     * 查询节点滚动位置
     * @param {String} id 节点 id / className
     * @param {ComponentPublicInstance} context 实例
     */
    getScrollOffset(id: string, context?: any): Promise<NodeInfo>;
    /**
     * 获取CanvasContext对象实例
     * @param {String} id canvasId
     * @param {ComponentPublicInstance} context 实例
     */
    createCanvasContext(id: string, context?: VueComponent): Promise<CanvasContext>;
    /**
     * 查找父级或平级指定元素
     * @param {ComponentPublicInstance} context 实例
     * @param {Array} refs 查询对象ref名称
     */
    $findEl(context: ComponentPublicInstance | null, refs: string[]): UniElement | null;
    /**
     * 查找父组件实例 执行操作
     * @param {ComponentPublicInstance} context 实例
     * @param {String} componentName 组件名
     * @param {String} eventName 事件名
     * @param {Array} params 参数
     */
    $dispatch(context: ComponentPublicInstance, componentName: string, eventName: string, ...params: any[]): void;
    timer: Map<any, number>;
    flag: boolean;
    /**
     * 节流：在一定时间内，只能触发一次
     *
     * @param {Function} func 要执行的回调函数
     * @param {Number} wait 延时的时间
     */
    throttle(func: () => void, wait: number): void;
    /**
     * 防抖：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
     *
     * @param {Function} func 要执行的回调函数
     * @param {Number} wait 延时的时间
     */
    debounce(func: () => void, wait: number): void;
    /**
     * 防抖：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
     *
     * @param {Function} func 要执行的回调函数
     * @param {Number} wait 延时的时间
     * @param {Number} key 唯一key
     */
    debouncek(func: () => void, wait: number, key: string): void;
    /**
     * 去除空格
     *
     * @param {String} str 需要去除空格的字符串
     * @param {String} pos both(左右)|left|right|all
     */
    trim: (str: string, pos: string) => string;
    /**
     * 公共样式
     *
     * @returns {Map<string, any>}
     */
    xStyle(css: Map<string, any>, margin: any[], mt: number, mr: number, mb: number, ml: number, padding: any[], pt: number, pr: number, pb: number, pl: number): Map<string, any>;
}
