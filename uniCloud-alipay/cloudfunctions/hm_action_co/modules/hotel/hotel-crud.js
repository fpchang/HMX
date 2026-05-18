const utils = require('../utils/index.js');
const hotelUtils = require("./hotelUtils");
module.exports = {
	async hotel_createHotel(hotelObj) {
		console.log("hotel_createHotel", hotelObj);
		const dbJQL = uniCloud.databaseForJQL()
		try {
			const validstr = hotelUtils.hotel_validHotel(hotelObj);
			if (validstr != "") {
				return { errCode: 10, errMsg: validstr,data:[] };
			}
			if (!hotelObj.ownership_id && hotelObj.belong) {
				console.log(3333)
				const user = await dbJQL.collection('hm-user').where({ phone: hotelObj.belong }).get();
				console.log("uuu", user);
				const oid = user.data[0]["_id"];
				if (oid) {
					hotelObj.ownership_id = oid;
				}
			}
			console.log(4444)
			const result = await dbJQL.collection('hm-hotel').add(hotelUtils.hotel_foramtHotel(hotelObj));
			console.log(555,result)
			const employeeForm = {
				"employee_name": "店主",
				"hotel_id": result.id,
				"account_id": hotelObj.ownership_id,
				"role": "administrator"
			}
			console.log("create hotel employee", employeeForm)
			await dbJQL.collection('hm-employee').add(employeeForm);
			return { code: 0, message: "" };
		} catch (e) {
			throw new Error(e);
		}
	},

	async hotel_updateHotel(hotel_id,hotelObj) {
		if (!hotel_id) {
			throw new Error("缺少hotel_id")
		}
		const dbJQL = uniCloud.databaseForJQL()
		try {
			const result = await dbJQL.collection('hm-hotel').doc(hotel_id).update(hotelUtils.hotel_foramtHotel(hotelObj));
			return result;
		} catch (e) {
			throw new Error(e)
		}
	},

	async hotel_deleteHotel(hotel_id) {
		const dbJQL = uniCloud.databaseForJQL();
		try {		
			const { phone, account_id } = this._tokenInfo;
			const res = await dbJQL.collection("hm-hotel").doc(hotel_id).get();
			if (res.data[0].ownership_id != account_id) {
				//throw new Error("权限不足")
				return {errCode:33,errMsg:"Insufficient permissions",data:[]}
			}
			const dres = await dbJQL.collection("hm-hotel").doc(hotel_id).update({ dataStatus: 10 });
			return dres;
		} catch (e) {
			throw new Error(e)
		}
	}
}