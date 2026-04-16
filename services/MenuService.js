import {DB} from '../api/DB';
class MenuServiceClass{
    constructor(){
        this.DB=DB
    }
    /*
    *获取菜单列表
    */
    getMenuList(hotel_id){
        if(!hotel_id){
            throw new Error("未传hotel_id");
        }
        const db = uniCloud.database();
        const mt=   db.collection("hm-menuType").where({hotel_id}).getTemp();
        const mtd =  db.collection("hm-menuDetail").getTemp();
       return   db.collection(mt,mtd).get();
  
    }
	/*
	*添加菜单分类
	*/
	addMenuType(menuTypeObj){
	    return this.DB.callFunction("hm_addMenuType",{menuTypeObj})
	}
      /*
    *删除菜单分类
    */
    removeMenuType(menuType_id){
        return this.DB.callFunction("hm_deleteMenuType",{_id:menuType_id})
    }
	/**
	 * 编辑价格分类
	 * @param {*} obj 
	 * @returns 
	 */
	editMenuType(_id,menuTypeObj){
	  return  DB.callFunction("hm_editMenuType", {  _id, menuTypeObj})
	}
      /*
    *删除菜单详情
    */
    removeMenuDetail(menuDetail_id){
        return this.DB.callFunction("hm_deleteMenuDetail",{_id:menuDetail_id})
    }
    /**
     * 添加价格条目
     * @param {*} MenuDetailObj 
     * @returns 
     */
    addMenuDetail(menuDetailObj){
        return  DB.callFunction("hm_addMenuDetail", {
                menuDetailObj,
            })
    }
    /**
     * 编辑价格条目
     * @param {*} obj 
     * @returns 
     */
    editMenuDetail(_id,menuDetail){
      return  DB.callFunction("hm_editMenuDetail", {
		  _id,menuDetail
	  })
    }

      /**
     * 添加点菜单
     * @param {*} orderDishesObj 
     * @returns 
     */
      addOrderDishes(orderDishesObj){
        return  DB.callFunction("hm_addOrderDishes", {
            orderDishesObj
            })
    }
    /**条件选择已下订单列表 */
    getOrderDishesListByCondition(w={}){
        //console.log("查找 条件",w)
        return DB.getCollectionOrderBy("hm-orderDishes",w,"mealDateTimestamp asc")
    }
     /**已下订单列表 今天及以后 */
     getOrderDishesList(hotel_id){
        const db = uniCloud.database();
        let w ={
            hotel_id:hotel_id,
            mealDateTimestamp:db.command.gt( new Date(new Date().getTime() - 1000*60*60*24).getTime())
        }
        return DB.getCollectionOrderBy("hm-orderDishes",w,"mealDateTimestamp asc")
    }
    /**删除已下订单列表 */
    removeOrderDishes(_id){
        return this.DB.callFunction("hm_deleteOrderDishes",{_id})
    }
}
//module.exports =new MenuService();
export var MenuService=new MenuServiceClass()