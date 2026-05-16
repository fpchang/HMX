const utils = require('../utils/index.js');

module.exports = {
	async config_getConfig(event) {
		console.log('config_getConfig : ', event);
		const { spaceId } = this.getClientInfo().SPACEINFO;
		console.log("环境配置文件", config[spaceId]);
		return config[spaceId];
	},

	async permission_getPermission(event) {
		const { hotel_id} = event;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		
		try {

			const { phone } = this._tokenInfo;
			const roleObj = await dbJQL.collection("hm-employee").where({ hotel_id, phone }).get();
			let role_name = "normal";
			if (roleObj.data.length > 0) {
				role_name = roleObj.data[0]['role'];
			} else {
				console.log("没有查到用户角色,为超级管理员");
				role_name = "administrator"
			}
			if (role_name == "administrator") {
				const resper = await dbJQL.collection("hm-permission").field("permission_name").get();
				let perArr = resper.data.map(item => item.permission_name);
				return perArr
			}
			console.warn("role_name", role_name);
			const permission_select = dbJQL.collection("hm-permission").getTemp();
			const role_permission_select = dbJQL.collection("hm-role-permission").where({ role_name }).getTemp();
			const res = await dbJQL.collection(role_permission_select, permission_select).get();
			console.warn("222222>>", res)
			return this.permission_formatPermissionToArray(res.data);
		} catch (e) {
			throw new Error(e)
		}
	},

	async permission_getPermission_x(event) {
		const { hotel_id } = event;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})

		try {
			
			const { account_id } = this._tokenInfo;
			const roleObj = await dbJQL.collection("hm-employee").where({ hotel_id, account_id }).get();
			let role_name = "normal";
			if (roleObj.data.length > 0) {
				role_name = roleObj.data[0]['role'];
			} else {
				console.log("没有查到用户角色,为超级管理员");
				role_name = "administrator"
			}
			if (role_name == "administrator") {
				const resper = await dbJQL.collection("hm-permission").field("permission_name").get();
				let perArr = resper.data.map(item => item.permission_name);
				resper.data = perArr;
				return resper;
			}
			const permission_select = dbJQL.collection("hm-permission").getTemp();
			const role_permission_select = dbJQL.collection("hm-role-permission").where({ role_name }).getTemp();
			const res = await dbJQL.collection(role_permission_select, permission_select).get();
			res.data = this.permission_formatPermissionToArray(res.data);
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	permission_formatPermissionToArray(list = []) {
		let arr = [];
		list.map(item => {
			item.permission_id && item.permission_id[0] && arr.push(item.permission_id[0].permission_name);
		})
		return arr;
	}
}

var config = {
	"env-00jxh1m2dpmq": {
		hostName: "http://hmdev.hotelsys.fun",
		cloudUrl: "https://env-00jxh1m2dpmq.normal.cloudstatic.cn",
		miniProgramKey: "a69cc73276ceb1a813f3be0d5d42c2aa",
		txmapkey: "I6DBZ-AY3CC-XHY2K-AJFAN-WAZ7K-XXBWU"
	},
	"env-00jxhfhjd231": {
		hostName: "http://hm.hotelsys.fun",
		cloudUrl: "https://env-00jxhfhjd231.normal.cloudstatic.cn",
		miniProgramKey: "a69cc73276ceb1a813f3be0d5d42c2aa",
		txmapkey: "I6DBZ-AY3CC-XHY2K-AJFAN-WAZ7K-XXBWU"
	}
}
