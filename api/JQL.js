module.exports={
	//获取日历订单,>当前 日期
	GET_CALENDAR_ORDER_STR:`checkInStartDateTimeStamp>=${new Date(new Date().Format("yyyy/MM/dd 14:00:00")).getTime()} ||`+
	`(${new Date(new Date().Format("yyyy/MM/dd 12:00:00")).getTime()}<checkInEndDateTimeStamp) && ${new Date(new Date().Format("yyyy/MM/dd 12:00:00")).getTime()}>checkInStartDateTimeStamp`,
	GET_ORDER_BY_CONDITION_FUN:()=>{
		
	}
}