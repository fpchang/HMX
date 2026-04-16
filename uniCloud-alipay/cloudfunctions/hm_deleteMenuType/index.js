'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event为客户端上传的参数
	let {
		_id,
	} = event;
	console.log("hm_deletMenuType", event);
	try{
		const db = uniCloud.database();
		 await db.collection('hm-menuDetail').where({menuType_id:_id}).remove();
		const res =  await db.collection('hm-menuType').doc(_id).remove();
		return res;
	}catch(e){
		throw new Error(e)
	}
	
};
