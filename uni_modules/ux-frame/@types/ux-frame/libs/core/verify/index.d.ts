/**
   @Name    :	校验
   @Author  :   UxFrame
   @Date    :   2023-11-20 12:21:36
*/
export declare class Verify {
    /**
     * 日期验证
     */
    isDate(date: any): boolean;
    /** 链接验证
     * @param {string} url
     * @returns {Boolean}
     */
    isURL(url: string): boolean;
    /** 数字验证
     * @param {string} num
     * @returns {Boolean}
     */
    isNumber(num: string): boolean;
    /** 字母验证
     * @param {string} str
     * @returns {Boolean}
     */
    isAbc(str: string): boolean;
    /** 字母或数字验证
     * @param {string} str
     * @returns {Boolean}
     */
    isAbcNum(str: string): boolean;
    /** 中文验证
     * @param {string} str
     * @returns {Boolean}
     */
    isChinese(str: string): boolean;
    /** 邮箱验证
     * @param {string} email
     * @returns {Boolean}
     */
    isEmail(email: string): boolean;
    /** 电话验证
     * @param {string} phone
     * @returns {Boolean}
     */
    isPhone(phone: string): boolean;
    /** 固定电话验证
     * @param {string} phone
     * @returns {Boolean}
     */
    isLandline(phone: string): boolean;
    /** 身份证验证
     * @param {string} idcard
     * @returns {Boolean}
     */
    isIdcard(idcard: string): boolean;
    /** 图片验证
     * @param {string} url
     * @returns {boolean}
     */
    isImage(url: string): boolean;
    /** 视频验证
     * @param {string} url
     * @returns {boolean}
     */
    isVideo(url: string): boolean;
    /** 车牌号验证
     * @param {string} no
     * @returns {boolean}
     */
    isCarNo(no: string): boolean;
    /** 判空验证
     * @param {string} val
     * @returns {boolean}
     */
    isEmpty<T>(val: T): boolean;
}
