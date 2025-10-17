/**
 * 16 进制串转字节数组
 */
export declare function hexToArray(str: string): number[];
/**
 * 将字节数组转换为16进制字符串
 *
 * @param arr 输入的字节数组
 * @returns 16进制表示的字符串，每个字节占2位
 */
export declare function arrayToHex(arr: number[]): string;
/**
 * UTF-8字符串转字节数组
 * @param str 待转换的UTF-8字符串
 * @returns 字节数组
 */
export declare function utf8ToArray(str: string): number[];
/**
 * 将字节数组转换为UTF-8字符串
 *
 * @param arr 输入的字节数组
 * @returns UTF-8编码的字符串
 */
export declare function arrayToUtf8(arr: number[]): string;
/**
 * SM4加密
 * @param {string} data 原始字符串
 * @param {string} key 密钥 16 进制字符串要求为 128 比特
 * @returns {string} 返回加密后16进制字符串
 */
export declare const sm4_encrypt: (data: string, key: string) => string;
/**
 * SM4解密
 * @param {string} data 要解密的16进制字符串
 * @param {string} key 密钥 16 进制字符串要求为 128 比特
 * @returns {string} 返回解密后的文本
 */
export declare const sm4_decrypt: (data: string, key: string) => string;
/**
 * SM4加密
 * @param {string} data 原始字符串
 * @param {string} key 密钥 16 进制字符串要求为 128 比特
 * @param {string} vi 密钥 16 进制字符串要求为 128 比特
 * @returns {string} 返回解密后的文本
 */
export declare const sm4_encrypt_cbc: (data: string, key: string, iv: string) => string;
/**
 * SM4解密
 * @param {string} data 要解密的16进制字符串
 * @param {string} key 密钥 16 进制字符串要求为 128 比特
 * @param {string} vi 密钥 16 进制字符串要求为 128 比特
 * @returns {string} 返回解密后的文本
 */
export declare const sm4_decrypt_cbc: (data: string, key: string, iv: string) => string;
