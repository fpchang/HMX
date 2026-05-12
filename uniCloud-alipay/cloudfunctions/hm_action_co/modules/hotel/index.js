const utils = require('../utils/index.js');
const HotelAction = require('./HotelAction.js');

module.exports = {
	...HotelAction,

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
	},

	async hotel_getHotelList(event) {
		const { $token } = event;
		if (!$token) {
			throw new Error("token不能为空")
		}
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, "****");
			const { phone } = verifyTokenObj.value;
			console.log("getHotelList", phone);
			const emTemp = dbJQL.collection("hm-employee").where({ phone: phone + "" }).getTemp();
			const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
			const res = await dbJQL.collection(emTemp, hoTemp).get();
			return this.hotel_formatHotelToArray(res.data);
		} catch (e) {
			throw new Error(e)
		}
	},

	async hotel_getHotelList_x(event) {
		const { $token, $user } = event;
		if (!$token) {
			throw new Error("token不能为空")
		}
		const { _id } = $user;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
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
			res.data = this.hotel_formatHotelToArray(res.data);
			return res;
		} catch (e) {
			throw new Error(e)
		}
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

	hotel_validHotel(hotel) {
		return "";
	},

	hotel_foramtHotel(hotel) {
		if (!hotel) {
			return {};
		}
		let result = { ...hotel };
		if (result.hasOwnProperty("curRole")) {
			delete result['curRole'];
		}
		return {
			ownership_id: hotel["ownership_id"] ?? "--",
			belong: hotel['belong'] ?? "",
			dataStatus: 0,
			onlinePayment: false,
			hotelCoordinate: hotel['hotelCoordinate'] ?? [],
			hotelIntroduction: hotel['hotelIntroduction'] ?? "",
			hotelName: hotel['hotelName'] ?? "",
			firstImages: hotel['firstImages'] ?? "",
			imagesList: hotel['imagesList'] ?? [],
			athleticFacility: hotel['athleticFacility'] ?? [],
			cateringServices: hotel['cateringServices'] ?? [],
			feature: hotel['feature'] ?? [],
			hotelAddress: hotel['hotelAddress'] ?? "",
			hotelAddressArea: hotel['hotelAddressArea'] ?? "",
			hotelAddressCode: hotel['hotelAddressCode'] ?? "",
			recreationFacility: hotel['recreationFacility'] ?? [],
			serviceTel: hotel['serviceTel'] ?? "",
			wechat: hotel['wechat'] ?? ""
		}
	},

	hotel_formatHotelToArray(list = []) {
		let arr = [];
		list.map(item => {
			if (item.hotel_id && item.hotel_id[0]) {
				item.hotel_id[0].curRole = item.role;
				arr.push(item.hotel_id[0]);
			}
		})
		return arr;
	}
}
