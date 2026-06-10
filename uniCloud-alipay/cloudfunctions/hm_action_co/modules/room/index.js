const {RoomAction} = require("./action/RoomAction.js");

module.exports = {
async room_addRoom(roomList) {
		return await new RoomAction(this).addRoom(roomList);
	},
	async room_updateRoom(room) {
		return await new RoomAction(this).updateRoom(room);
	},
	async room_getRemainderRoomList() {
		return await new RoomAction(this).getRemainderRoomList();
	},
	async room_deleteRoom(_id) {
		return await new RoomAction(this).deleteRoom();
	}
}