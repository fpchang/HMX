'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {_id} =event;
	console.log("hm_deleteRoom",event);
		const db =uniCloud.database();
		const dCmd=db.command;
		try {
			const result = await db.collection('hm-room').doc(_id).remove();
			return {code:0,message:""}
		} catch (error) {
			//TODO handle the exception
			//return {code:1,message:"删除失败"}
			throw new Error("删除失败");
		}
	
	
};
