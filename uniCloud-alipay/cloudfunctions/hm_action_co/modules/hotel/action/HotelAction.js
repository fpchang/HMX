const utils = require('../../utils/index.js');
const hotelUtils = require("../hotelUtils.js");
class HotelAction{
	constructor(ctx){
		this.ctx= ctx;
	}
	async createHotel(hotelObj) {
		console.log("hotel_createHotel", hotelObj);
		const db = uniCloud.databaseForJQL();
		try {
			const validstr = hotelUtils.hotel_validHotel(hotelObj);
			if (validstr != "") {
				return { errCode: 10, errMsg: validstr,data:[] };
			}
			if (!hotelObj.ownership_id && hotelObj.belong) {
				const user = await db.collection('hm-user').where({ phone: hotelObj.belong }).get();
				console.log("uuu", user);
				const oid = user.data[0]["_id"];
				if (oid) {
					hotelObj.ownership_id = oid;
				}
			}
			const result = await db.collection('hm-hotel').add(hotelUtils.hotel_foramtHotel(hotelObj));
			const employeeForm = {
				"employee_name": "店主",
				"hotel_id": result.id,
				"account_id": hotelObj.ownership_id,
				"role": "administrator"
			}
			console.log("create hotel employee", employeeForm)
			await db.collection('hm-employee').add(employeeForm);
			return { code: 0, message: "" };
		} catch (e) {
			throw new Error(e);
		}
	}
	
	async updateHotel(hotel_id,hotelObj) {
		if (!hotel_id) {
			throw new Error("缺少hotel_id")
		}
		const db = uniCloud.database()
		try {
			const result = await db.collection('hm-hotel').doc(hotel_id).update(hotelUtils.hotel_foramtHotel(hotelObj));
			return result;
		} catch (e) {
			throw new Error(e)
		}
	}
	
	async deleteHotel(hotel_id) {
		const db = uniCloud.database();
		try {		
			const { phone, account_id } = this.ctx._tokenInfo;
			const res = await db.collection("hm-hotel").doc(hotel_id).get();
			if (res.data[0].ownership_id != account_id) {
				//throw new Error("权限不足")
				return {errCode:33,errMsg:"Insufficient permissions",data:[]}
			}
			const dres = await db.collection("hm-hotel").doc(hotel_id).update({ dataStatus: 10 });
			return dres;
		} catch (e) {
			throw new Error(e)
		}
	}
	async getHotelList(){
		console.log("get hotel list",this.ctx._tokenInfo)
		const db = uniCloud.database();
		const userId = '当前用户的_id';
		const { phone, account, account_id } = this.ctx._tokenInfo;
		if (!phone && !account && !account_id) {
			throw new Error("无有效用户信息");
		}
		let sql ={account_id}
		if (!account_id) {
			sql = phone ?{phone} :{account}
		}
		console.log("employee",sql)
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
		        { curRole: '$role' }    // 从 employee 记录中取出 role 字段
		      ]
		    }
		  })
		  .end();
		return res;
	}
}
module.exports = {HotelAction};