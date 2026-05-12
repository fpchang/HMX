module.exports = {
	async order_getOrderList(event) {
		const hotel = require("../hotel/index.js");
		return await hotel.hotel_getList();
	}
}