'use strict';
const {
	encryptPassword
} = require('encryptPassword');
 class PasswordClass {
	constructor(_id) {
		this._id =_id;
		//this.password = password;
	}
	async resetPassword(password){
		if(!password){
			return {errCode:10,errMsg:"密码不能为空"}
		}
		const ep = encryptPassword(password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").doc(this._id).update({password:ep});
		return res;
	}
	async validPasswordIsCorrent(password){
		const db = uniCloud.databaseForJQL();
		const user = await db.collection("hm-user").doc(this._id).get();		
		const ep = encryptPassword(password);
		const psd = user.data[0].password;
		return psd ===ep;
		
		
	}
}

 

module.exports = { PasswordClass};