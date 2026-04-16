// 页面路径：store/index.js 
import{DB} from '../../api/DB'
import {PermissionService} from '../../services/PermissionService';
export default{
	namespace:true,
	state: { //存放状态
		permissionList:[]
	},

	mutations: {
	setPermissionList(state,list=[]){
   		 state.permissionList = list;
 	 }
	},
	actions:{
		getPermissionList(context,hotel_id){
			//console.log(33445,arguments)
			return  PermissionService.getPermissionList(hotel_id).then(res=>{
				//console.log("权限列表为==",res)
				context.commit('setPermissionList', res.result)
			}).catch(e=>{
				console.error(e)
			})
		}
	}
}