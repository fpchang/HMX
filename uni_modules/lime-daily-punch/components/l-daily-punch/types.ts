export interface DailyPunchProps {
	canSupplement : boolean; // 是否允许补充
	isFullCalendar : boolean; // 是否显示完整日历
	yearMonth : string; // 格式 "YYYY-MM"
	signedDates : string[]; // 已签到日期数组
	dayHeight : string | number | object; // 单日高度（不同平台类型不同）
	week : string[]; // 星期数组
	weekStartsOn : number; // 星期起始日（0-6，周日为0）
	weekColor : string; // 星期文字颜色
	weekFontSize : number; // 星期文字大小
	weekHeight : number; // 星期行高
	selectedDayBgColor : string; // 选中日背景色
	dayFontSize : number; // 日期文字大小
	textColor : string; // 文字颜色
	disabledColor : string; // 禁用状态颜色
	monthTitleHeight : number; // 月份标题高度
	monthTitleFontSize : number; // 月份标题文字大小
	color : string; // 签到状态颜色
	unsignedColor : string; // 未签到状态颜色
	disableFutureDays ?: boolean // 控制是否禁用未来日期
}