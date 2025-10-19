/**
   @Name    :	随机数
   @Author  :   UxFrame
   @Date    :   2023-10-09 11:20:22
*/
export declare class Random {
    /**
     * uuid
     */
    uuid: () => string;
    /**
     * 如果value小于min，取min；如果value大于max，取max
     *
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     * @param {Number} value 值
     */
    range: (min: number, max: number, value: number) => number;
    /**
     * 取一个区间数
     *
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     */
    random: (min: number, max: number) => number;
    /**
     * @description 随机生成N位的数字
     * @param {number} n
     * @returns {number}
     */
    generateRandom(n: number): number;
    /**
     * 打乱数组
     *
     * @param {Array} array 需要打乱的数组
     * @returns {Array} 打乱后的数组
     */
    shuffleArray: (array: any[]) => any[];
}
