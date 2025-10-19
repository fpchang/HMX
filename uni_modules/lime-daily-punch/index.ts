// @ts-nocheck
export interface LimeDailyPunchDay {
  day: number;
  month: number;
  year: number;
  fullDate: string;
  isBeforeToday: boolean;
  isToday: boolean;
  isFuture: boolean;
  isCurrentMonth: boolean;
  width: number;
  height: number;
  originalMonth: number;
  type: string;
  fontSize: number;
  timestamp: number;

  // formatDay(day: number): string;
  // formatMonth(month: number): string;
  isCoordinateInside(x: number, y: number): boolean;
  setPosition(x: number, y: number): void;
  setDimensions(width: number, height: number): void;
  selectDate: LimeDailyPunchDay | null;
  canSupplement: boolean;
  isCheckedIn: boolean;
  draw(ctx: CanvasRenderingContext2D): void;
  
  // #ifndef UNI-APP-X && APP
  getSelectDate() : boolean;
  getCanSupplement() : boolean;
  getIsCheckedIn(): boolean;
  // #endif
  
}


export type LimeDailyPunchYearMonth = {
	year : number,
	month : number
}

export type LimeDailyPunchGridSize = {
	x : number,
	y : number,
	width : number,
	height : number
}

export type LimeDailyPunchMonthData = {
	year : number
	month : number
	days : LimeDailyPunchDay[]
}


export type LimeDailyPunchOptions = {
	canSupplement ?: boolean
	isFullCalendar ?: boolean
	yearMonth ?: string,
	signedDates ?: string[],
	week ?: string[],
	dayHeight ?: number,
	weekStartsOn ?: number,
	weekColor?: string,
	weekFontSize?: number,
	weekHeight?: number,
	selectedDayBgColor?: string,
	dayFontSize?: number,
	textColor?: string,
	disabledColor?: string,
	monthTitleHeight?: number,
	monthTitleFontSize?: number,
	color?: string,
	unsignedColor?: string,
	select ?: (day : LimeDailyPunchDay) => void,
	panelChange ?: (res : LimeDailyPunchYearMonth) => void
	disableFutureDays ?: boolean // 控制是否禁用未来日期
	// weekStartsOn : string
}