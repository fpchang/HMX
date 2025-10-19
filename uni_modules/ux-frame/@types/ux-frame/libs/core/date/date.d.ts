import type { UxDateInput, UxDateConfig, IUxDate } from '../../types/date';
/**
 * 全新的时间处理类
 */
export declare class UxDate implements IUxDate {
    private _timestamp;
    private _config;
    constructor(input?: UxDateInput, config?: UxDateConfig);
    /**
     * 解析输入为时间戳
     */
    private parseToTimestamp;
    /**
     * 解析字符串为时间戳
     */
    private parseStringToTimestamp;
    /**
     * 智能补全日期字符串
     */
    private smartComplete;
    /**
     * 创建当前时间
     */
    create(): UxDate;
    /**
     * 从输入创建时间
     */
    from(input?: UxDateInput): UxDate;
    /**
     * 创建今天开始时间
     */
    today(): UxDate;
    /**
     * 创建明天开始时间
     */
    tomorrow(): UxDate;
    /**
     * 创建昨天开始时间
     */
    yesterday(): UxDate;
    /**
     * 创建本周开始时间
     */
    thisWeek(): UxDate;
    /**
     * 创建本月开始时间
     */
    thisMonth(): UxDate;
    /**
     * 创建本年开始时间
     */
    thisYear(): UxDate;
    /**
     * 获取年份
     */
    getYear(): number;
    /**
     * 获取月份 (1-12)
     */
    getMonth(): number;
    /**
     * 获取日期 (1-31)
     */
    getDay(): number;
    /**
     * 获取星期几 (1-7, 1=周一)
     */
    getWeekday(): number;
    /**
     * 获取小时 (0-23)
     */
    getHour(): number;
    /**
     * 获取分钟 (0-59)
     */
    getMinute(): number;
    /**
     * 获取秒数 (0-59)
     */
    getSecond(): number;
    /**
     * 获取毫秒 (0-999)
     */
    getMillisecond(): number;
    /**
     * 获取时间戳 (毫秒)
     */
    getTimestamp(): number;
    /**
     * 获取Unix时间戳 (秒)
     */
    getUnixTimestamp(): number;
    /**
     * 获取本月天数
     */
    getDaysInMonth(): number;
    /**
     * 获取本年天数
     */
    getDaysInYear(): number;
    /**
     * 获取季度 (1-4)
     */
    getQuarter(): number;
    /**
     * 设置年份
     */
    setYear(year: number): UxDate;
    /**
     * 设置月份 (1-12)
     */
    setMonth(month: number): UxDate;
    /**
     * 设置日期 (1-31)
     */
    setDay(day: number): UxDate;
    /**
     * 设置小时 (0-23)
     */
    setHour(hour: number): UxDate;
    /**
     * 设置分钟 (0-59)
     */
    setMinute(minute: number): UxDate;
    /**
     * 设置秒数 (0-59)
     */
    setSecond(second: number): UxDate;
    /**
     * 设置毫秒 (0-999)
     */
    setMillisecond(millisecond: number): UxDate;
    /**
     * 增加年份
     */
    plusYears(years: number): UxDate;
    /**
     * 减少年份
     */
    minusYears(years: number): UxDate;
    /**
     * 增加月份
     */
    plusMonths(months: number): UxDate;
    /**
     * 减少月份
     */
    minusMonths(months: number): UxDate;
    /**
     * 增加天数
     */
    plusDays(days: number): UxDate;
    /**
     * 减少天数
     */
    minusDays(days: number): UxDate;
    /**
     * 增加周数
     */
    plusWeeks(weeks: number): UxDate;
    /**
     * 减少周数
     */
    minusWeeks(weeks: number): UxDate;
    /**
     * 增加小时
     */
    plusHours(hours: number): UxDate;
    /**
     * 减少小时
     */
    minusHours(hours: number): UxDate;
    /**
     * 增加分钟
     */
    plusMinutes(minutes: number): UxDate;
    /**
     * 减少分钟
     */
    minusMinutes(minutes: number): UxDate;
    /**
     * 增加秒数
     */
    plusSeconds(seconds: number): UxDate;
    /**
     * 减少秒数
     */
    minusSeconds(seconds: number): UxDate;
    /**
     * 增加毫秒
     */
    plusMilliseconds(milliseconds: number): UxDate;
    /**
     * 减少毫秒
     */
    minusMilliseconds(milliseconds: number): UxDate;
    /**
     * 年初
     */
    startOfYear(): UxDate;
    /**
     * 年末
     */
    endOfYear(): UxDate;
    /**
     * 月初
     */
    startOfMonth(): UxDate;
    /**
     * 月末
     */
    endOfMonth(): UxDate;
    /**
     * 周初
     */
    startOfWeek(): UxDate;
    /**
     * 周末
     */
    endOfWeek(): UxDate;
    /**
     * 日初
     */
    startOfDay(): UxDate;
    /**
     * 日末
     */
    endOfDay(): UxDate;
    /**
     * 小时初
     */
    startOfHour(): UxDate;
    /**
     * 小时末
     */
    endOfHour(): UxDate;
    /**
     * 分钟初
     */
    startOfMinute(): UxDate;
    /**
     * 分钟末
     */
    endOfMinute(): UxDate;
    /**
     * 是否在指定时间之前
     */
    isBefore(other: UxDateInput): boolean;
    /**
     * 是否在指定时间之后
     */
    isAfter(other: UxDateInput): boolean;
    /**
     * 是否等于指定时间
     */
    isEqual(other: UxDateInput): boolean;
    /**
     * 是否在指定时间之前或等于
     */
    isBeforeOrEqual(other: UxDateInput): boolean;
    /**
     * 是否在指定时间之后或等于
     */
    isAfterOrEqual(other: UxDateInput): boolean;
    /**
     * 是否在两个时间之间
     */
    isBetween(start: UxDateInput, end: UxDateInput): boolean;
    /**
     * 是否是同一天
     */
    isSameDay(other: UxDateInput): boolean;
    /**
     * 是否是同一周
     */
    isSameWeek(other: UxDateInput): boolean;
    /**
     * 是否是同一月
     */
    isSameMonth(other: UxDateInput): boolean;
    /**
     * 是否是同一年
     */
    isSameYear(other: UxDateInput): boolean;
    /**
     * 是否是今天
     */
    isToday(): boolean;
    /**
     * 是否是昨天
     */
    isYesterday(): boolean;
    /**
     * 是否是明天
     */
    isTomorrow(): boolean;
    /**
     * 是否是本周
     */
    isThisWeek(): boolean;
    /**
     * 是否是本月
     */
    isThisMonth(): boolean;
    /**
     * 是否是本年
     */
    isThisYear(): boolean;
    /**
     * 是否是闰年
     */
    isLeapYear(): boolean;
    /**
     * 是否是周末
     */
    isWeekend(): boolean;
    /**
     * 是否是工作日
     */
    isWeekday(): boolean;
    /**
     * 计算与另一时间的差值 (毫秒)
     */
    diffInMilliseconds(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (秒)
     */
    diffInSeconds(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (分钟)
     */
    diffInMinutes(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (小时)
     */
    diffInHours(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (天)
     */
    diffInDays(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (周)
     */
    diffInWeeks(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (月)
     */
    diffInMonths(other: UxDateInput): number;
    /**
     * 计算与另一时间的差值 (年)
     */
    diffInYears(other: UxDateInput): number;
    /**
     * 格式化为字符串
     * 支持: yyyy年 MM月 dd日 HH时 mm分 ss秒 SSS毫秒 Q季度 W周 d星期
     */
    format(pattern?: string | null): string;
    /**
     * 格式化指定时间
     * @param input 要格式化的时间输入
     * @param pattern 格式化模式，默认 'yyyy-MM-dd'
     */
    formatTime(input: UxDateInput, pattern?: string): string;
    /**
     * 格式化为日期字符串
     * @param pattern 格式化模式，默认 'yyyy-MM-dd'
     */
    toDateString(pattern?: string): string;
    /**
     * 格式化为时间字符串 HH:mm:ss
     */
    toTimeString(): string;
    /**
     * 格式化为日期时间字符串 yyyy-MM-dd HH:mm:ss
     */
    toDateTimeString(): string;
    /**
     * 格式化为ISO字符串
     */
    toISOString(): string;
    /**
     * 转换为原生Date对象
     */
    toDate(): Date;
    /**
     * 转换为JSON字符串
     */
    toJSON(): string;
    /**
     * 获取中文星期名
     */
    getWeekdayName(): string;
    /**
     * 获取中文月份名
     */
    getMonthName(): string;
    /**
     * 获取一年中的第几周
     */
    getWeekOfYear(): number;
    /**
     * 获取一年中的第几天
     */
    getDayOfYear(): number;
    /**
     * 相对时间描述
     */
    fromNow(): string;
    /**
     * 复制当前实例
     */
    copy(): UxDate;
    /**
     * 克隆当前实例
     */
    clone(): UxDate;
    /**
     * 是否有效时间
     */
    isValid(): boolean;
    /**
     * 获取本周所有日期
     */
    getWeekDays(): UxDate[];
    /**
     * 获取本月所有日期
     */
    getMonthDays(): UxDate[];
    /**
     * 比较两个时间
     */
    compare(other: UxDateInput): number;
    /**
     * 最小时间
     */
    static min(...times: UxDateInput[]): UxDate;
    /**
     * 最大时间
     */
    static max(...times: UxDateInput[]): UxDate;
}
