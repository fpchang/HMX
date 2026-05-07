 const hotel =require("../hotel/index.js");
module.exports={
	async order_getList(){
		return await hotel.hotel_getList();
	}
}