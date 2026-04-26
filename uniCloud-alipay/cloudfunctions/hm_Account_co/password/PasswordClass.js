'use strict';
const {
	encryptPassword
} = require('encryptPassword');
 class PasswordClass {
	constructor(_id,password) {
		this._id =_id;
		this.password = password;
	}
	async resetPassword(){
		if(!this.password){
			return {errCode:10,errMsg:"密码不能为空"}
		}
		const ep = encryptPassword(this.password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").doc(this._id).update({password:ep});
		return res;
	}
}

 

module.exports = { PasswordClass};