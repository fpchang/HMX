export declare class Store {
    private STORE_KEY;
    private STORE_KEY;
    private keys;
    constructor();
    /**
     * 获取缓存数据
     * @param key 键
     * @returns {any}
     */
    get(key: string): any | null;
    /**
     * 内存缓存数据，不会持久化
     * @param key 键
     * @param value 值
     */
    set(key: string, value: any): void;
    /**
     * 异步持久化缓存数据，可设置过期时间
     * 持久化存储只支持原生类型、及能够通过 JSON.stringify 序列化的对象
     * @param key 键
     * @param value 值
     * @param expires <= 0 永不过期; > 0 过期时间 单位ms
     */
    setExpires(key: string, value: any, expires: number): void;
    /**
     * 同步持久化缓存数据，可设置过期时间
     * 持久化存储只支持原生类型、及能够通过 JSON.stringify 序列化的对象
     * @param key 键
     * @param value 值
     * @param expires <= 0 永不过期; > 0 过期时间 单位ms
     */
    setExpiresSync(key: string, value: any, expires: number): void;
    /**
     * 同步持久化缓存数据，可设置过期时间，返回一个随机key
     * 持久化存储只支持原生类型、及能够通过 JSON.stringify 序列化的对象
     * @param value 值
     * @param expires <= 0 永不过期; > 0 过期时间 单位ms
     */
    setDataSync(value: any, expires: number): string;
    /**
     * 删除数据
     * @param key 键
     */
    delete(key: string): void;
    /**
     * 清空数据
     */
    clear(): void;
    /**
     * Key
     */
    private getKey;
    /**
     * 获取keys
     */
    getKeys(): Map<string, number>;
    /**
     * 设置key
     */
    private setKey;
    /**
     * 持久化keys
     */
    private saveKeys;
    /**
     * 移除过期key
     * @param key 键
     */
    private removeExpires;
}
