'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		roomObj
	} = event;
	console.log("hm_updateRoom", event);
	if(!_id){
		return new Promise((resolve,reject)=>{
			reject({errMsg:"缺少_id",errCode:"300"});
		})
	}
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const db = uniCloud.database();
	const dCmd = db.command;
	const result = await dbJQL.collection('hm-room').doc(_id).update(roomObj);
	return result;
};