
class DBConnect{
  constructor(){
	  this.db=uniCloud.database();
  }
   callFunction(name,data={}){
    
    // let needLoginCallFunctionArray=["hm_addOrderDishes"];
    // if(!uni.getStorageSync('hm_token')&&needLoginCallFunctionArray.includes(name)){      
    //   //未登录
    //   //console.log("未登录")
    //   uni.reLaunch({ url: '/pages/login/login' });
    //   return Promise.reject();

    // }
	return  uniCloud.callFunction({
	  	name:name,
	  	data:Object.assign(data,{
        $user:uni.getStorageSync('user'),
        $token:uni.getStorageSync('hm_token')
      })
	  })
  }
   getCollection(dbName,w={}){
    return  this.db.collection(dbName).where(w).limit(50000).get();
  
  }
  getCollectionOrderBy(dbName,w={},orderBy="_id desc"){
    return this.db.collection(dbName).where(w).orderBy(orderBy).get();
  }
  insertData(dbName,r={}){
    if(!dbName){
       return "dbName is invalid"
     }
    return this.db.collection(dbName).add(r);

  }
  add(dbName,r={}){
    const db = uniCloud.database();
      return db.collection(dbName).add(r)  
  }
  update(dbName,_id="",data={}){
    return this.db.collection(dbName).doc(_id).update(data);
  }
  remove(dbName,_id){
    return this.db.collection(dbName).doc(_id).remove();
  }
  clearnTable(dbName){
// 		const dbCmd = this.db.command
//  this.db.collection(dbName).where({
//   _id: dbCmd.exists(true);
// }).remove()
  }
}
//module.exports = new DB();
export var DB = new DBConnect();