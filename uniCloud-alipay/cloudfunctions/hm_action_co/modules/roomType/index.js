const {
	RoomTypeAction
} = require("./action/RoomTypeAction.js");

module.exports = {
	async roomType_addRoomType(roomType) {
		return await new RoomTypeAction(this).addRoomType(roomType);
	},
	async roomType_deleteRoomType(roomTypeId) {
		return await new RoomTypeAction(this).deleteRoomType(roomTypeId);
	},
	async roomType_updateRoomType(roomType) {
		return await new RoomTypeAction(this).updateRoomType(roomType);
	},
	async roomType_getRoomType(hotel_id) {
		return await new RoomTypeAction(this).getRoomType(hotel_id);
	},
	async getRoomTypeIncludeRoomList(hotel_id) {
		return await new RoomTypeAction(this).getRoomTypeIncludeRoomList(hotel_id);
	},
	async roomType_getRemainderRoomType(params) {
		return await new RoomTypeAction(this).getRemainderRoomType(params);
	}
}