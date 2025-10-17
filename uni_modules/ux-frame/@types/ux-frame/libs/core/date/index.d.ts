import { UxDate } from "./date";
import type { UxDateInput } from '../../types/date';
export declare class Dates {
    /**
     * UxDate 实例
     */
    newDate(): UxDate;
    newDate(input?: UxDateInput): UxDate;
    /**
     * 万能转日期对象
     * @param date 时间
     */
    toDate(date: string): Date;
    /**
     * 万能格式化日期
     * @param date 时间
     * @param format 格式化规则 支持yyyy-MM-dd|yyyy-MM-dd HH:mm:ss|yyyy/MM/dd|yyyy/MM/dd HH:mm:ss|yyyy年MM月dd日等组合 默认yyyy-MM-dd
     */
    fmtDate(date: string, format: string): string;
    /**
     * 现在 yyyy-MM-dd HH:mm:ss
     */
    now(): string;
    /**
     * 今天
     * @param n n为负则代表取前n天，为正则代表取后n天，0则为今天
     */
    today(n?: number): string;
    /**
     * 本周所有日期
     */
    weeks(): string[];
    /**
     * 周几
     */
    weekName(day: number, format: string): string;
}
