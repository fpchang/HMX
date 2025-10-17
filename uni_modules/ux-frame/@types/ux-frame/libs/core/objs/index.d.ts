/**
   @Name    :	对象
   @Author  :   UxFrame
   @Date    :   2024-01-09 22:13:21
*/
export declare class Objs {
    /**
     * 移除空对象
     */
    removeNulls(obj: UTSJSONObject | null): UTSJSONObject;
    private handleJson;
    private handleArray;
}
