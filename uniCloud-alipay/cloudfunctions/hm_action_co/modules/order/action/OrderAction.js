class OrderAction{
	constructor(ctx){
		this.ctx= ctx;
	}
	async addOrder(orderObj) {
		console.log("order_addOrder", orderObj);
		const db = uniCloud.databaseForJQL();
		// if (!orderObj['reservedRoomList'] || orderObj['reservedRoomList'].length < 1) {
		// 	orderObj.reservedRoomList = this.order_getRoomList(orderObj.roomTypeArray);
		// }
		if(!orderObj['reservedRoomList'] || orderObj['reservedRoomList'].length < 1){
			return {errMsg:"no room been select",errCode:304,data:{}}
		}
		try {
			const res = await db.collection('hm-order').add(orderObj);
			return res;
		} catch (error) {
			throw new Error("add order fail");
		}
		
	}
	async deleteOrder(_id) {
		const db = uniCloud.database();
		const res = await db.collection("hm-order").doc(_id).update({ 'orderStatus': 10 });
		return res;
	}
	
}
module.exports = {OrderAction};