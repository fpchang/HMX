import{DB} from '../api/DB';
class PermissionServiceClass{
    constructor(){
        this.DB=DB
    }
    /*
    *获取角色列表
    */
    getRoleList(){
    //     const db = uniCloud.database();
    //     const mt=   db.collection("hm-menuType").where({hotel_id}).getTemp();
    //     const mtd =  db.collection("hm-menuDetail").getTemp();
    //    return   db.collection(mt,mtd).get();
  
    }
    /*
    *获取用户角色
    */
    getUserRoleList(phone){

    }
     /*
    *获取权限列表
    */
    getPermissionList(hotel_id){
        return DB.callFunction("hm_getPermission",{hotel_id});
    }
	/*
    *根据角色的权限列表
    */
    getRolePermissionList(hotel_id){  
        // return new Promise(async (resolve,reject)=>{
        //     try {
        //         const db = uniCloud.database();
        //     const permission_select = db.collection("hm-permission").getTemp();
        //     const role_permission_select = db.collection("hm-role-permission").where({role_name}).getTemp();
        //     const res = await db.collection(role_permission_select,permission_select).get(); 
        //     //console.log("result",res); 
        //     resolve(this.formatPermissionToArray(res.result.data))
        //     } catch (error) {
        //         reject(error)
        //     }
            
        // })
         return DB.callFunction("hm_getPermission",{hotel_id})           
  
    }
    /*
    *获取用户权限列表
    */
    getUserPermissionList(phone){

    }
    //权限数组列表
    formatPermissionToArray(list=[]){
        let arr =[];
        list.map(item=>{
          arr.push(item.permission_id[0].permission_name);  
        })
        return arr;
    }
}
//module.exports =new PermissionService();
export var PermissionService=new PermissionServiceClass();