
import{DB} from '../../api/DB'
import {ScenicSpotService} from '../../services/ScenicSpotService';
export default{
	state: { //存放状态
		scenicSpotList:[]
	},

	mutations: {
		//调用 this.$store.commit('updateHotelList',[])
		updateScenicSpotList(state, list) {
			state.scenicSpotList = list;
		}
        
	},
  actions:{
	getTT(){
		//console.log("scenic tt")
	},
     getScenicSpotList(context,hotel_id){
		return new Promise((resolve,reject)=>{
			ScenicSpotService.getScenicSpotList(hotel_id).then(res=>{
				//console.log("景点列表",res)
				context.commit('updateScenicSpotList', res.result.data);
				resolve(res)
			  }).catch(e=>{
				reject(e)
			  })
		})
     
    }
  }
}