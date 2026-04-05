'use strict';
const crypto = require('crypto');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
		const {account,password,email}=event;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		})
		if(account!=""){
			return {code:40,msg:"账号不能为空"}
		}
		if(password!=""){
			return {code:40,msg:"密码不能为空"}
		}
		try {
			const ep = encryptPassword(password);
			const user= formatUser(account,ep);
			const result = await dbJQL.collection('hm-user').add(user);
			console.log("result",result);
		} catch (error) {
			throw new Error("注册失败");
		}
	//返回数据给客户端
	return event
};


/**
 * 明文密码加密（Node.js / UniCloud 通用）
 * @param {string} password 明文密码
 * @returns {string} 加密后的密码
 */
function encryptPassword(password) {
  // 盐值（自己改一个唯一的，不要泄露）
  const salt = 'unicloud_2026_secure_salt';
  
  // 创建 SHA256 哈希
  const hash = crypto.createHmac('sha256', salt)
    .update(password)
    .digest('hex'); // 转 16 进制字符串

  return hash;
}

function formatUser(account,password){
	return {
		idCard: "",
		ipStartDateStamp: "",
		isVip: false,
		nickName: "",
		phone: "",
		account:account,
		password:password
		userName: "",
		vipEndDate: "",
		vipEndDateStamp: "",
		closeAccountDateTime:null,
		vipStartDate: "",
		wxNickName: "",
		wxOpenId: "",
		hm_token: "",
		avatar:"",
		accountStatus: 1
	}
	
}