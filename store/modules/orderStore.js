
import{DB} from '../../api/DB'
import {OrderService} from '../../services/OrderService';
export default{
	state: { //存放状态
        orderListTodayAfter:[],//今天及以后的订单

		orderListByCheckInToday:[], //今天办理入住的订单
		orderListByCheckOutToday:[], //今天退房的订单
		orderListToday:[],//今天住宿订单
		
		orderListByCheckInTommorow:[], //明天天办理入住的订单
		orderListByCheckOutTommorow:[], //明天退房的订单
		orderListTommorow:[],//明天住宿订单

	},

	mutations: {
        updateOrderListTodayAfter(state,list=[]) {
			//console.log("11111111111",list)
			state.orderListTodayAfter = list;
		},

		updateOrderListByCheckInToday(state,list=[]){
			state.orderListByCheckInToday= list;
		},
		updateOrderListByCheckOutToday(state,list=[]){
			state.orderListByCheckOutToday= list;
		},
		updateOrderListToday(state,list=[]){
			state.orderListToday=list;
		},
		//明天
		updateOrderListByCheckInTommorow(state,list=[]){
			state.orderListByCheckInTommorow= list;
		},
		updateOrderListByCheckOutTommorow(state,list=[]){
			state.orderListByCheckOutTommorow= list;
		},
		updateOrderListTommorow(state,list=[]){
			state.orderListTommorow=list;
		}

    },
    actions:{
		 async getGatherEvent(context,hotel_id){
		const s1=	context.dispatch("getOrderListByCheckInToday",hotel_id);//今日办理入住的客户
		const s2=	context.dispatch("getOrderListByCheckOutToday",hotel_id);//今天退房订单

		const s3=	context.dispatch("getOrderListByCheckOutTommorow",hotel_id);//明天退房订单
		const s4=	context.dispatch("getOrderListByCheckInTommorow",hotel_id);//明日办理入住的客户

		const s5=	context.dispatch("getOrderListToday",hotel_id);	//今日订单
		const s6=	context.dispatch("getOrderListTommorow",hotel_id);//明日订单
			return	Promise.all([s1,s2,s3,s4,s5,s6]);
		},
        	//获取当天开始的订单
		 async getOrderListTodayAfter(context,hotel_id) {
			const res = await OrderService.getOrderListTodayAfter(hotel_id);
				context.commit("updateOrderListTodayAfter", res.result.data);
			return res;
		},
		//今天退房订单
		async getOrderListByCheckOutToday(context,hotel_id){
			const res = await OrderService.getOrderListByCheckOut(hotel_id,new Date());
			//console.log("今日退房订单",res);
			context.commit("updateOrderListByCheckOutToday", res.result.data);
		},
		//明天退房订单
		async getOrderListByCheckOutTommorow(context,hotel_id){
			const res = await OrderService.getOrderListByCheckOut(hotel_id,new Date().getTime()+1000*60*60*24);
			//console.log("明日退房订单",res);
			context.commit("updateOrderListByCheckOutTommorow", res.result.data);
		},
		//今日办理入住的客户
		async getOrderListByCheckInToday(context,hotel_id){
			const res = await OrderService.getOrderListByCheckIn(hotel_id,new Date());
			//console.log("今日办理入住。。。。。",res);
			context.commit("updateOrderListByCheckInToday",res.result.data);
			return res;	
		  },
		  //今日订单
		  async getOrderListToday(context,hotel_id){						
			 const res = await OrderService.getOrderListByDate(hotel_id);
			 //console.log("今日订单",res);
			 context.commit("updateOrderListToday",res.result.data);
			 return res;			
			},

				//明日办理入住的客户
		async getOrderListByCheckInTommorow(context,hotel_id){
			const res = await OrderService.getOrderListByCheckIn(hotel_id,new Date().getTime()+1000*60*60*24);
			//console.log("明日办理入住。。。。。",res);
			context.commit("updateOrderListByCheckInTommorow",res.result.data);
			return res;	
		  },
		  //明日订单
		  async getOrderListTommorow(context,hotel_id){						
			 const res = await OrderService.getOrderListByDate(hotel_id,new Date().getTime()+1000*60*60*24);
			 //console.log("明日订单",res);
			 context.commit("updateOrderListTommorow",res.result.data);
			 return res;			
			}
    }
}
