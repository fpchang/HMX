'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {
		order_no,
		out_trade_no,
		total_fee
	} = event;
	const db =uniCloud.database();
	const res = await db.collection("hm-rechargeOrder").doc(order_no).update({orderStatus:1});
	return res;
};
