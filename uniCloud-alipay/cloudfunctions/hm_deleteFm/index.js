'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {_id} =event;
	console.log("hm-incomeAndExpenses",event);
		const db =uniCloud.database();
		const dCmd=db.command;
		try {
			const result = await db.collection('hm-incomeAndExpenses').doc(_id).remove();
			return {code:0,data:[],message:""};
		} catch (error) {
			throw new Error("删除失败");
		}
	
};
