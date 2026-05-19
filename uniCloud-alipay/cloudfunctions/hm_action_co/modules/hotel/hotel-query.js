const utils = require('../utils/index.js');

module.exports = {
	async hotel_getHotelList(){
		const db = uniCloud.database();
		const userId = '当前用户的_id';
		const { phone, account, account_id } = this._tokenInfo;
		if (!phone && !account && !account_id) {
			throw new Error("无有效用户信息");
		}
		let sql ={account_id}
		if (!account_id) {
			sql = phone ?{phone} :{account}
		}
		const res = await db.collection('hm-employee')
		  .aggregate()
		  // 1. 筛选当前员工的所有任职记录
		  .match(sql)
		  // 2. 关联酒店表，获取酒店详情
		  .lookup({
		    from: 'hm-hotel',
		    localField: 'hotel_id',    // employee 表中存储酒店ID的字段
		    foreignField: '_id',
		    as: 'hotelInfo'
		  })
		  // 3. 展开 hotelInfo 数组（每个员工记录对应一个酒店）
		  .unwind('$hotelInfo')
		 .match({ 'hotelInfo.dataStatus': { $ne: 10 } })
		  // 4. 重构造文档：以酒店信息为基础，添加该员工在此酒店的角色
		  .replaceRoot({
		    newRoot: {
		      $mergeObjects: [
		        '$hotelInfo',        // 酒店的所有字段（_id, name, address...）
		        { role: '$role' }    // 从 employee 记录中取出 role 字段
		      ]
		    }
		  })
		  .end();
		  console.log("55555",res)
		return res;
	},
	async hotel_getHotelList2() {
		const t= Date.now();
		console.log(1,Date.now()-t);
		console.log("$t2",this.$t);
		console.log("thistoken",this._tokenInfo);
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const { phone, account, account_id } = this._tokenInfo;
			if (!phone && !account && !account_id) {
				throw new Error("无有效用户信息");
			}
			let sql = `account_id=='${account_id+""}'`;
			if (!account_id) {
				sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
			}
			console.log('sql', sql);
				console.log(2,Date.now()-t);
			const emTemp = dbJQL.collection("hm-employee").where(sql).getTemp();
			const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
			const res = await dbJQL.collection(emTemp, hoTemp).get();
			console.log(3,Date.now()-t);
			res.data = hotel_formatHotelToArray(res.data);
			return res;
		} catch (e) {
			throw new Error(e)
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