type Token = {
    type: 'text' | 'named' | 'list' | 'unknown';
    value: string;
};
/**
 * 解析格式化字符串并生成一个包含标记（Token）的数组。
 * 这些标记可以是文本、列表或命名值。
 *
 * @param {string} format - 需要解析的格式化字符串。
 * @returns {Array<Token>} 返回一个包含解析后的标记的数组。
 */
export declare function parse(format: string): Array<Token>;
/**
 * 根据给定的标记数组和值对象或数组，编译出相应的值数组。
 *
 * @param {Array<Token>} tokens - 标记数组，包含文本、列表和命名值。
 * @param {Object | Array<any>} values - 值对象或数组，用于替换标记中的占位符。
 * @returns {Array<any>} 返回编译后的值数组。
 */
declare function compile(tokens: Array<Token>, values: UTSJSONObject): Array<any>;
declare function compile(tokens: Array<Token>, values: Array<any>): Array<any>;
export { compile };
export default class BaseFormatter {
    private _caches;
    constructor();
    interpolate(message: string, values: any | null): any[];
}
