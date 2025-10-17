/**
 * 加密解密
 */
export declare class Encrypt {
    /**
     * SM4加密
     * @param {string} data 原始字符串
     * @param {string} key 密钥 16 进制字符串要求为 128 比特
     * @returns {string} 返回加密后16进制字符串
     */
    sm4Encrypt(data: string, key: string): string;
    /**
     * SM4解密
     * @param {string} data 要解密的16进制字符串
     * @param {string} key 密钥 16 进制字符串要求为 128 比特
     * @returns {string} 返回解密后的文本
     */
    sm4Decrypt(data: string, key: string): string;
    /**
     * SM4 CBC 加密
     * @param {string} data 原始字符串
     * @param {string} key 密钥 16 进制字符串要求为 128 比特
     * @param {string} vi 密钥 16 进制字符串要求为 128 比特
     * @returns {string} 返回解密后的文本
     */
    sm4EncryptCBC(data: string, key: string, iv: string): string;
    /**
     * SM4 CBC 解密
     * @param {string} data 要解密的16进制字符串
     * @param {string} key 密钥 16 进制字符串要求为 128 比特
     * @param {string} vi 密钥 16 进制字符串要求为 128 比特
     * @returns {string} 返回解密后的文本
     */
    sm4DecryptCBC(data: string, key: string, iv: string): string;
}
