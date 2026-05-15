const utils = require('../utils/index.js');

module.exports = {
	async hotel_createHotel(event) {
		let { $user, hotelObj } = event;
		console.log("hotel_createHotel", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const validstr = this.hotel_validHotel(hotelObj);
			if (validstr != "") {
				return { code: 10, message: validstr };
			}
			if (!hotelObj.ownership_id && hotelObj.belong) {
				const user = await dbJQL.collection('hm-user').where({ phone: hotelObj.belong }).get();
				console.log("uuu", user);
				const oid = user.data[0]["_id"];
				if (oid) {
					hotelObj.ownership_id = oid;
				}
			}
			const result = await dbJQL.collection('hm-hotel').add(this.hotel_foramtHotel(hotelObj));
			const employeeForm = {
				"employee_name": "店主",
				"hotel_id": result.id,
				"phone": hotelObj.belong,
				"account": $user.account,
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

	async hotel_updateHotel(event) {
		let { hotel_id, hotelObj } = event;
		console.log("hotel_updateHotel", event);
		if (!hotel_id) {
			throw new Error("缺少hotel_id")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const result = await dbJQL.collection('hm-hotel').doc(hotel_id).update(this.hotel_foramtHotel(hotelObj));
			return result;
		} catch (e) {
			throw new Error(e)
		}
	},

	async hotel_deleteHotel(event) {
		const { hotel_id, $token } = event;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const secret = utils.utils_getSecret();
			const verifT = utils.utils_verifyToken($token, secret);
			if (!verifT) {
				throw new Error("token无效")
			}
			const { phone, account_id } = verifT.value;
			const res = await dbJQL.collection("hm-hotel").doc(hotel_id).get();
			if (res.data[0].ownership_id != account_id) {
				throw new Error("权限不足")
			}
			const dres = await dbJQL.collection("hm-hotel").doc(hotel_id).update({ dataStatus: 10 });
			return dres;
		} catch (e) {
			throw new Error(e)
		}
	}
}