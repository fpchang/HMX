export declare const numberFormatKeys: string[];
export declare const dateTimeFormatKeys: string[];
/**
 * utilities
 */
export declare function getAllKeys(map: Map<string, UTSJSONObject>): string[];
/**
 * 打印警告信息
 * @param {string} msg - 警告信息
 * @param {Error} err - 可选的错误对象
 */
export declare function warn(msg: string, code?: number): void;
/**
 * 打印错误信息
 * @param {string} msg - 错误信息
 * @param {Error} err - 可选的错误对象
 */
export declare function error(code: number, msg?: string | null): void;
export declare function isArray(value: any): boolean;
/**
 * 判断一个值是否为对象
 * @param {mixed} obj - 需要判断的值
 * @returns {boolean} - 如果值为对象，则返回 true，否则返回 false
 */
export declare function isObject(obj: any | null): boolean;
/**
 * 判断一个值是否为布尔值
 * @param {mixed} val - 需要判断的值
 * @returns {boolean} - 如果值为布尔值，则返回 true，否则返回 false
 */
export declare function isBoolean(val: any): boolean;
/**
 * 判断一个值是否为字符串
 * @param {mixed} val - 需要判断的值
 * @returns {boolean} - 如果值为字符串，则返回 true，否则返回 false
 */
export declare function isString(val: any): boolean;
/**
 * 判断一个值是否为普通对象
 * @param {any} obj - 需要判断的值
 * @returns {boolean} - 如果值为普通对象，则返回 true，否则返回 false
 */
export declare function isPlainObject(obj: any): boolean;
/**
 * 判断一个值是否为 null 或 undefined
 * @param {mixed} val - 需要判断的值
 * @returns {boolean} - 如果值为 null 或 undefined，则返回 true，否则返回 false
 */
export declare function isNull(val: any | null | undefined): boolean;
/**
 * 判断一个值是否为函数
 * @param {mixed} val - 需要判断的值
 * @returns {boolean} - 如果值为函数，则返回 true，否则返回 false
 */
export declare function isFunction(val: any): boolean;
/**
 * 解析参数
 * @param {...mixed} args - 输入的参数
 * @returns {Object} - 包含 locale 和 params 的对象
 */
export declare function parseArgs(...args: Array<any>): Map<string, UTSJSONObject>;
/**
 * looseClone 函数用于对一个对象进行浅拷贝。
 * 它通过将对象序列化为 JSON 字符串，然后再将其解析回对象来实现这一目的。
 * 请注意，这种方法仅适用于可序列化的对象，不适用于包含循环引用或特殊对象（如函数、Date 对象等）的对象。
 *
 * @param {Object} obj - 需要进行浅拷贝的对象。
 * @returns {Object} 返回一个新的对象，它是原始对象的浅拷贝。
 */
export declare function looseClone(obj: UTSJSONObject): UTSJSONObject;
/**
 * remove 函数用于从数组中删除指定的元素。
 * 如果成功删除元素，则返回修改后的数组；否则，不返回任何值。
 *
 * @param {Array} arr - 需要操作的数组。
 * @param {*} item - 需要删除的元素。
 * @returns {Array} 返回修改后的数组，或者不返回任何值。
 */
export declare function remove(arr: Set<any>, item: any): Set<any> | null;
/**
 * arrayFrom 函数用于将类数组对象（如 Set 集合）转换为数组。
 *
 * @param {Set} arr - 需要转换的类数组对象。
 * @returns {Array} 返回一个新数组，其中包含原类数组对象的所有元素。
 */
export declare function arrayFrom(arr: Set<any>): Array<any>;
/**
 * includes 函数用于检查数组中是否包含指定的元素。
 *
 * @param {Array} arr - 需要检查的数组。
 * @param {*} item - 需要查找的元素。
 * @returns {boolean} 如果数组中包含指定元素，则返回 true，否则返回 false。
 */
export declare function includes(arr: Array<any>, item: any): boolean;
/**
 * hasOwn 函数用于检查对象是否具有指定的属性。
 * 与直接使用 `obj.hasOwnProperty` 不同，此函数可以正确处理通过原型链继承的属性。
 *
 * @param {Object|Array} obj - 需要检查的对象或数组。
 * @param {string} key - 需要检查的属性名。
 * @returns {boolean} 如果对象具有指定的属性，则返回 true，否则返回 false。
 */
export declare function hasOwn(obj: UTSJSONObject, key: string): boolean;
/**
 * merge 函数用于合并多个对象。
 * 它会将源对象的所有可枚举属性值复制到目标对象。
 * 如果目标对象和源对象有相同的属性，且它们的属性值都是对象，则会递归地合并这两个属性值。
 *
 * @param {Object} target - 目标对象，将被合并的对象。
 * @returns {Object} 返回合并后的新对象。
 */
export declare function merge(...target: UTSJSONObject[]): UTSJSONObject;
/**
 * looseEqual 函数用于比较两个值是否宽松相等。
 * 宽松相等意味着在比较时会进行类型转换，例如将字符串转换为数字。
 * 该函数可以处理对象、数组和其他基本数据类型的值。
 *
 * @param {any} a - 要比较的第一个值。
 * @param {any} b - 要比较的第二个值。
 * @returns {boolean} 如果两个值宽松相等，则返回 true，否则返回 false。
 */
export declare function looseEqual(a: any, b: any): boolean;
/**
 * 从 `parseArgs().params` 返回的所有提供的参数中转义 HTML 标签和特殊符号。
 * 此方法对 `params` 对象执行原地操作。
 *
 * @param {any} params - 从 `parseArgs().params` 提供的参数。
 *                         可能是字符串数组或字符串到任意值的映射。
 * @returns {any} 返回被操纵过的 `params` 对象。
 */
export declare function escapeParams(params: UTSJSONObject | null): UTSJSONObject | null;
