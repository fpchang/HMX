class TimeClass{
    constructor(){}
    /**
     * 一天的开始时间
     * @param {*} time 
     * @returns 
     */
     startTime(time) {
        const nowTimeDate = new Date(time);
        return nowTimeDate.setHours(0, 0, 0, 0);
      }
      /**
       * 一天的结束时间
       * @param {*} time 
       * @returns 
       */
       endTime(time) {
        const nowTimeDate = new Date(time);
        return nowTimeDate.setHours(23, 59, 59, 999);
      }
      /**
       * 获取当天开始时间和结束时间
       * @param {*} time 
       * @returns 
       */
       getTodayStartTimeAndEndTime(time) {
        time = time ? time : new Date();
        return {
          startTime: new Date(time.setHours(0, 0, 0, 0)),
          endTime: new Date(time.setHours(23, 59, 59, 999)),
        };
      }
      /**
       * //获取本周开始时间和结束时间
       * @param {*} time 
       * @returns 
       */
      
       getCurrentWeekStartTimeAndEndTime(time) {
        const current = time ? time : new Date();
        // current是本周的第几天
        let nowDayOfWeek = current.getDay();
        if (nowDayOfWeek === 0) nowDayOfWeek = 7;
        const dayNum = 1 * 24 * 60 * 60 * 1000;
        // 获取本周星期一的时间，星期一作为一周的第一天
        const firstDate = new Date(current.valueOf() - (nowDayOfWeek - 1) * dayNum);
        // 获取本周星期天的时间，星期天作为一周的最后一天
        const lastDate = new Date(new Date(firstDate).valueOf() + 6 * dayNum);
        return {
          startTime: new Date(startTime(firstDate)),
          endTime: new Date(endTime(lastDate)),
        };
      }
      /**
       * 获取本月第一天
       * @param {*} time 
       * @returns 
       */
       getCurrentMonthFirst(time) {
        const date = time ? time : new Date();
        date.setDate(1);
        return this.startTime(date);
      }
      /**
       *
       *获取本月最后一天
       * @memberof TIME
       */
      
       getCurrentMonthLast(time) {
        const date = time ? time : new Date();
        const currentMonth = date.getMonth();
        const nextMonth = currentMonth + 1;
        const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        const oneDay = 24 * 60 * 60 * 1000;
        return this.endTime(new Date(nextMonthFirstDay - oneDay));
      }
      /**
       * 获取本年第一天
       * @param {*} date 
       * @returns 
       */
       getCurrentYearFirst(date) {
        date = date ? date : new Date();
        date.setDate(1);
        date.setMonth(0);
        return this.startTime(date);
      }
      /**
       * 获取本年最后一天
       * @param {*} date 
       * @returns 
       */
       getCurrentYearLast(date) {
        date = date ? date : new Date();
        date.setFullYear(date.getFullYear() + 1); // 设置到明年
        date.setMonth(0); // 明年的0月，也就是对应到1月，是存在的哦，不是不存在的0
        date.setDate(0); // 明年的0日
        return this.endTime(date);
      }
      

      
      
      
}
export var TIME=new TimeClass();