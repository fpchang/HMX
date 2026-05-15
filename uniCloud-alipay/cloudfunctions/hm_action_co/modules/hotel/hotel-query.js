const utils = require('../utils/index.js');

module.exports = {
	async hotel_getHotelList(params) {
		console.log("BBBB",params)
		const {$token} = params;
		if (!$token) {
			throw new Error("token不能为空")
		}
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, "****");
			const { phone, account, account_id } = verifyTokenObj.value;
			if (!phone && !account && !account_id) {
				throw new Error("无有效用户信息");
			}
			let sql = `account_id=='${account_id+""}'`;
			if (!account_id) {
				sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
			}
			console.log('sql', sql);
			const emTemp = dbJQL.collection("hm-employee").where(sql).getTemp();
			const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
			const res = await dbJQL.collection(emTemp, hoTemp).get();
			res.data = hotel_formatHotelToArray(res.data);
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	async hotel_getHotelListByMobile(event) {
		const { mobile, token } = event;
		if (!mobile) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		console.log("hotel_getHotelListByMobile>>>");
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		const hotelList = await dbJQL.collection('hm-hotel').where(`blongUserId=='${mobile}'`).get();
		return hotelList;
	},

	async hotel_hotelApprove(event) {
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const timenow = Date.now();
		const dbcm = db.command;
		const s = "wechat!=''&&wechat!=null&&isArray(imagesList) && size(imagesList) > 0 &&firstImages!=null&&firstImages!='https://env-00jxhfhjd231.normal.cloudstatic.cn/HM/images/app.png'"
		try {
			dbJQL.collection("hm-hotel").where(s).update({ dataStatus: 1 });
		} catch (error) {
			console.log("error", error);
		}
	}
}

function hotel_formatHotelToArray(list = []) {
	let arr = [];
	list.map(item => {
		if (item.hotel_id && item.hotel_id[0]) {
			item.hotel_id[0].curRole = item.role;
			arr.push(item.hotel_id[0]);
		}
	})
	return arr;
}