'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('order-roomlist-event : ', event)
	//订单定时触发
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const _ = db.command;
	const $ = db.command.aggregate
	try {
	 const res = await dbJQL.collection("hm-order").get();
	 
	 console.log("res",res);
	 let list =res.data;
	// list.forEach(item=>{
	// 	 item.reservedRoomList=getRoomList(item.roomTypeArray);
	//  })
	//  console.log("newList",list);
	//  list.forEach(async item=>{
	// 	  await dbJQL.collection("hm-order").doc(item._id).update(item);
	//  })
	
	} catch (error) {
		console.log("error",error);		
	}	 	
};
function getRoomList(roomTypeList=[]){
	let roomlist = roomTypeList.map(rt=>rt.roomList||[]);
	roomlist=roomlist.flat();
	return roomlist;
}