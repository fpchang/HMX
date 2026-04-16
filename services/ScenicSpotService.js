import{DB} from '../api/DB';
class ScenicSpotServiceClass{
    constructor(){
        this.DB=DB
    }
    /*
    *获取景点列表
    */
    getScenicSpotList(hotel_id){
      if(!hotel_id){
          throw new Error("未传hotel_id");
      }
        const db = uniCloud.database();
        const ss=   db.collection("hm-scenicSpot").where({hotel_id}).getTemp();
        const ssd =  db.collection("hm-scenicSpotPriceDetail").getTemp();
       return   db.collection(ss,ssd).get();
  
    }
      /*
    *删除景点
    */
    removeScenicSpot(scenicSpot_id){
      if(!scenicSpot_id){
        throw new Error("未传scenicSpot_id");
      }
        return this.DB.callFunction("hm_deleteScenicSpot",{_id:scenicSpot_id})
    }
      /*
    *删除景点价格详情
    */
    removeScenicSpotDetail(scenicSpotDetail_id){
      if(!scenicSpotDetail_id){
        throw new Error("未传scenicSpotDetail_id");
      }
        return this.DB.callFunction("hm_deleteScenicSpotDetail",{_id:scenicSpotDetail_id})
    }
    /**
     * 添加价格条目
     * @param {*} scenicSpotDetailObj 
     * @returns 
     */
    addScenicSpotDetail(scenicSpotDetailObj){
        return  DB.callFunction("hm_addScenicSpotDetail", {
                scenicSpotDetailObj,
            })
    }
    /**
     * 编辑价格条目
     * @param {*} obj 
     * @returns 
     */
    editScenicSpotDetail(obj){
      return  DB.callFunction("hm_editScenicSportDetail", obj)
    }
}
//module.exports =new scenicSpotService();
export var ScenicSpotService=new ScenicSpotServiceClass();