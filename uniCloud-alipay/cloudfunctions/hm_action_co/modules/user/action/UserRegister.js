const utils = require('../../utils/index.js');
//const uniIdCo = uniCloud.importObject("uni-id-co", { customUI: true });
class UserRegister{
	constructor(ctx){
		this.ctx= ctx;
	}
	async user_addUser(userInfo) {
		console.log("user_addUser", userInfo);
		const dbJQL = uniCloud.databaseForJQL();
		const addResult = await dbJQL.collection('hm-user').add(userInfo)
		return addResult;
	}
	async validEmailAndCode(email, emailCode, emailCodeTk) {
		console.log("参数", email, emailCode, emailCodeTk)
		const secret = utils.getSecret();
		const verifT = utils.verifyToken(emailCodeTk, secret);
		console.log('verift', verifT);
		if (!verifT || verifT.value.emailCode != emailCode) {
			return {
				errCode: 202,
				errMsg: "邮箱验证码不正确",
				data:false
			};
		}
		if (verifT.value.email != email) {
			return {
				errCode: 202,
				errMsg: "邮箱与验证码不匹配",
				data:false
			};
		}
		return {
			errCode: 0,
			errMsg: "",
			data:true
		};
	}
	async register(user = {}) {
		console.log("register", user);
		const { account, email, password } = user;
		const msg = await this.validRegisterForm(account, password, email);
		if (msg) {
			return {
				errCode: 101,
				errMsg: msg
			};
		}
		try {
			const dbJQL = uniCloud.databaseForJQL();
			const ep = utils.encryptPassword(password);
			const user = this.formatUser(account, ep, email);
			console.log(user)
			const result = await dbJQL.collection('hm-user').add(user);
			console.log("注册结果",result);
			const id= result.id;
			//this.regitserUniId(id,account, ep, email,"");
			return result
		} catch (error) {
			console.log(error)
			throw new Error(error);
		}
	}
	async regitserUniId(_id,account,password,email,phone){
		//uni-id 注册
		const data ={
			_id:_id,
			"username": account,
			"password": password,
			email:email,
			mobile:phone,
			mobile_confirmed:0,
			email_confirmed:1,
			
		}
		//await uniIdCo.registerUser(data);
	}
	async registerByPhone(phone) {
		console.log("注册",phone);
		const secret = utils.getSecret();
		const newToken =utils.getToken({
			phone: phone
		}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
		const dbJQL = uniCloud.databaseForJQL();
		const res = await dbJQL.collection('hm-user').add(this.formatUser("","","",phone, newToken));
		const id= res.id;
		this.regitserUniId(id,"", "", "",phone);
		return {
			errCode: 0,
			errMsg: "",
			data: {
				token: newToken
			}
		};
	}
	
	async validRegisterForm(account, password, email) {
		let msg = ""
		if (account == "") {
			msg = "账号不能为空";
		}
		if (password == "") {
			msg = "密码不能为空";
		}
		const dbJQL = uniCloud.databaseForJQL();
		const sql = `email=='${email}'||account=='${account}'`;
		const validuser = await dbJQL.collection('hm-user').where(sql).get();
		if (validuser.data.length > 0) {
			const hasAccount = validuser.data.find(item => item.account == account);
			const hasEmail = validuser.data.find(item => item.email == email);
			if (hasAccount) {
				msg = "该账号已经注册";
			}
			if (hasEmail) {
				msg = "该邮箱已经注册";
			}
		}
		return msg;
	}
	
	formatUser(account="",password="",email="",phone="", token) {
		let vipStartDateStamp = new Date().getTime();
		let vipEndDateStamp = new Date().getTime() + 30 * 1000 * 60 * 60 * 24;
		const phone_s = phone.substr(-4);
		return {
			"idCard": "",
			"vipStartDateStamp": vipStartDateStamp,
			"isVip": true,
			"nickName": "",
			"account":account,
			"phone": phone,
			"password": password,
			"email":email,
			"userId": phone,
			"userName": `用户${phone_s}`,
			"vipEndDate": utils.dateFormat(new Date(vipEndDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"vipEndDateStamp": vipEndDateStamp,
			"vipStartDate": utils.dateFormat(new Date(vipStartDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"wxNickName": "",
			"wxOpenId": "",
			"hm_token": token,
			"avatar": "",
			"blongEmployment": []
		}
	}
	
}
module.exports = {UserRegister};