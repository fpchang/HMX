
import{DB} from '../../api/DB'
import {MenuService} from '../../services/MenuService';


//Vuex.Store 构造器选项
export default{
	state: { //存放状态
		menuList:null,
		orderDishesList:null,//未来餐饮订单
		orderDishesToday:[], //今日预定的餐饮订单
		orderDishesTommorow:[] //明日预定的餐饮订单
	},

	mutations: {
		//调用 this.$store.commit('updateHotelList',[])
		updateMenuList(state, list=[]) {
			state.menuList = list;
		},
		updateOrderDishesList(state, list=[]){
			state.orderDishesList = list;
		},
		updateOrderDishesToday(state,list=[]){
			state.orderDishesToday = list;
		},
		updateOrderDishesTommorow(state,list=[]){
			state.orderDishesTommorow = list;
		}
	},
  actions:{
	async getMenuEvent(context,hotel_id){
		const s1 = 	context.dispatch("getOrderDishesToday",hotel_id);
		const s2=	context.dispatch("getOrderDishesTommorow",hotel_id);
	return Promise.all([s1,s2]);
	},
     getMenuList(context,hotel_id){
		return new Promise((resolve,reject)=>{
			MenuService.getMenuList(hotel_id).then(res=>{
				//console.log("菜单列表",res.result.data)
				context.commit('updateMenuList', res.result.data);
				resolve();
			  }).catch(e=>{
				reject(e)
			  })
		})
     
    },
	//当日餐饮订单
	 async getOrderDishesToday(context,hotel_id){
		
		  let w ={
			hotel_id:hotel_id,
			mealDate: new Date().Format("yyyy-MM-dd")
		  }
		  const res = await MenuService.getOrderDishesListByCondition(w);
		  //console.log("当日餐饮订单",res)
			context.commit("updateOrderDishesToday",res.result.data)
		  return res;
		},
		//明日餐饮订单
		async getOrderDishesTommorow(context,hotel_id){
		
			let w ={
			  hotel_id:hotel_id,
			  mealDate: new Date(new Date().getTime()+1000*60*60*24).Format("yyyy-MM-dd")
			}
			const res = await MenuService.getOrderDishesListByCondition(w);
			//console.log("明日餐饮订单",res)
		  	context.commit("updateOrderDishesTommorow",res.result.data)
			return res;
		  },
		//已下订的餐饮订单
		async getOrderDishesList(context,hotel_id) {
				const res = await MenuService.getOrderDishesList(hotel_id);
				//console.log("请求orderdishes",res)
				context.commit("updateOrderDishesList",res.result.data);
				return res;		
		}

  }
}