'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {_id,status} =event;	
	const db = uniCloud.database();
	const item = db.collection("hm-order").where({_id}).get();
	const res = uniCloud.callFunction({
		name:"hm-hm_getRemainderRoomType"
	})
};
