/**
   @Name    :	格式化
   @Author  :   UxFrame
   @Date    :   2024-01-09 22:07:11
*/
export declare class Format {
    /**
     * 脱敏加密
     *
     * @param {String} text
     * @returns {Boolean}
     */
    encryptText(text: string): string;
    /**
     * 大写金额
     *
     * @param {String} money
     * @returns {String}
     */
    upperMoney(money: string): string;
    /**
     * 格式化金额
     *
     * @param {String} money
     * @param {Boolean} wfz true 万分制 false 千分制
     * @returns {String}
     */
    fmtMoney(money: string, wfz: boolean): string;
}
