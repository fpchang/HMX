import{DB} from '../api/DB';
class HotelServiceClass{
	constructor(){
        this.DB=DB;
    }

    
    /**
     *
     *
     * @param {*} hotelObj
     * @return {*} 
     * @memberof HotelService
     */
    getHotelByDistance(){
      return   DB.callFunction("hm_createHotel",{hotelObj});
    }
  
}
//module.exports =new HotelService();
export var HotelService=new HotelServiceClass();