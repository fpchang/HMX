import{DB} from '../api/DB';
class OrderServiceClass{
    constructor(){
        this.DB=DB
    }
    /**
     * 创建订单
     */
    addOrder(orderObj){
        return this.DB.callFunction("hm_addOrder",{orderObj});
    }
	/**
	 *  办理入住订单
     * st 日期
	 */
	getOrderListByCheckIn(hotel_id,st) {
	    let startTime = new Date(new Date(st).Format("yyyy/MM/dd 14:00:00")).getTime();
	    let jql = `hotel_id=='${hotel_id}'&&orderStatus==1&&checkInStartDateTimeStamp==${startTime}`;
	    return this.DB.getCollection("hm-order", jql);
	}
    	/**
	 *  退房订单
     * ed 日期
	 */
	getOrderListByCheckOut(hotel_id,ed=new Date()) {
	    let endTime = new Date(new Date(ed).Format("yyyy/MM/dd 12:00:00")).getTime();
	    let jql = `hotel_id=='${hotel_id}'&&orderStatus==1&&checkInEndDateTimeStamp==${endTime}`;
	    return this.DB.getCollection("hm-order", jql);
	}
    /**
	 *  今天住客订单
	 */
	getOrderListToday(hotel_id) {
	    let startTime = new Date(new Date().Format("yyyy/MM/dd 14:00:00")).getTime();
        const s0 =  `hotel_id=='${hotel_id}'&&orderStatus==1`
        const s1 = `${startTime}>=checkInStartDateTimeStamp&&${startTime}<checkInEndDateTimeStamp`;
       
	    let jql = `${s0}&&${s1}`;
	    return this.DB.getCollection("hm-order", jql);
	}
      /**
	 *  特定日期住客订单
	 */
	getOrderListByDate(hotel_id,date=new Date()) {
	    let startTime = new Date(new Date(date).Format("yyyy/MM/dd 14:00:00")).getTime();
        const s0 =  `hotel_id=='${hotel_id}'&&orderStatus==1`
        const s1 = `${startTime}>=checkInStartDateTimeStamp&&${startTime}<checkInEndDateTimeStamp`;
       
	    let jql = `${s0}&&${s1}`;
	    return this.DB.getCollection("hm-order", jql);
	}
    /**
     *  根据日期范围查找订单
     */
     
    getOrderListByCondition(hotel_id,st,et) {
        //console.log(arguments);
        let startTime = new Date(new Date(st).Format("yyyy/MM/dd 14:00:00")).getTime();
        let endTime = new Date(new Date(et).Format("yyyy/MM/dd 12:00:00")).getTime();
		const s1=`checkInStartDateTimeStamp<${startTime}&&checkInEndDateTimeStamp>${startTime}`;
		const s2=`checkInStartDateTimeStamp>=${startTime}&&checkInEndDateTimeStamp<=${endTime}`;
		const s3=`checkInStartDateTimeStamp<${endTime}&&checkInStartDateTimeStamp>=${startTime}&&checkInEndDateTimeStamp>=${endTime}`
        const s4=`checkInStartDateTimeStamp<=${startTime}&&checkInEndDateTimeStamp>=${endTime}`;
		
		let jql =
            `hotel_id=='${hotel_id}'&&orderStatus==1&&(${s1}||${s2}||${s3}||${s4})`;
        return this.DB.getCollectionOrderBy("hm-order", jql,"checkInStartDateTimeStamp asc");
    }
      /** 
     * 获取当前酒店今天以后的订单信息
    */
  getOrderListTodayAfter(hotel_id) {
    let startTime = new Date(new Date().Format("yyyy/MM/dd 14:00:00")).getTime();
    let endTime = new Date(new Date().Format("yyyy/MM/dd 12:00:00")).getTime();
    let jql =
        `hotel_id=='${hotel_id}'&&orderStatus==1&&(checkInStartDateTimeStamp>=${startTime} ||` +
        `(${endTime}<checkInEndDateTimeStamp && ${endTime}>checkInStartDateTimeStamp))`;
    return   this.DB.getCollectionOrderBy("hm-order", jql,"checkInStartDateTimeStamp asc");
   
}
/**
 * 
 * @returns 删除订单
 */
deleteOrder(_id){
   return  this.DB.callFunction('hm-deleteOrder',{ _id});
}
//更改订单状态
updateOrder(_id,obj){
  //console.log("更新",_id,obj)
    return this.DB.update("hm-order",_id,obj);
}
}
//module.exports =new OrderService();
export var OrderService=new OrderServiceClass();