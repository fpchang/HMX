
// const hotelCrud = require('./hotel-crud.js');
// const hotelQuery = require('./hotel-query.js');
const {HotelAction} = require('./action/HotelAction.js')
module.exports = {
	async hotel_createHotel(hotelObj){
		return await new HotelAction(this).createHotel(hotelObj);
	},
	async hotel_updateHotel(hotel_id,hotelObj){
		return await new HotelAction(this).updateHotel(hotel_id,hotelObj);
	},
	async hotel_deleteHotel(hotel_id){
		return await new HotelAction(this).deleteHotel(hotel_id);
	},
	async hotel_getHotelList(){
		return await new HotelAction(this).getHotelList();
	}
}