
import{DB} from '../../api/DB'
import {HotelServiceClient} from '../../services/HotelServiceClient';
export default{
	namespaced: true,
	state: { //存放状态
		hotelList:null,
		hotel:null,
		roomType:null,
		searchCondition:{
			filterVal:"",
			address:"",
			location:[119.872549,30.55434],
		},//过滤条件
		searchDateRange:[Date.now(),Date.now()+1000*60*60*24] //查找 的日期范围
	},

	mutations: {
		updateSearchCondition(state,obj){
			state.searchCondition=obj;
		},
		updateSearchDateRange(state,range){
			state.searchDateRange=range;
		},
		updateHotelList(state, list) {
			//console.log("client set")
			state.hotelList = list;
		},
		updateHotel(state,hotel){
			state.hotel=hotel;
		},
		updateRoomType(state,roomType){
			state._roomType=roomType;
		}
        
	},
  actions:{
    async  getHotelList(context,params){
		const res = await HotelServiceClient.getHotelList(params);
		//console.log("客户端hotelist",res);
		context.commit("updateHotelList",res.result.data);
		return res;
     
    }
  }
}