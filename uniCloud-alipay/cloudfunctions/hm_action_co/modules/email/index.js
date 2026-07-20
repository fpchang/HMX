const nodemailer = require('nodemailer');
const utils = require('../utils/index.js');
module.exports = {
	async sendEmailCode(email,tempKey){
		console.log("sendEmailCode===",email,tempKey)
		   const sendEmail = '710357723@qq.com'; //自己的邮箱
		   //const pass = 'cxosuglunfhkbbjf'; //邮箱的授权码
		   const pass = 'cxosuglunfhkbbjf';
		   //  const email = '514342305@qq.com' //对方邮箱
		   if (!email) {
		   	throw new Error("无有效的邮箱信息");
		   }
		   let transporter = nodemailer.createTransport({
		   	host: 'smtp.qq.com',
		   	    port: 465,
		   	    secure: true,
		   	auth: {
		   		user: sendEmail,
		   		pass: pass
		   	}
		   })
		   const temp =getEmailTemp(tempKey);
		   const info = await transporter.sendMail({
		   	from: `玄天科技有限公司<${sendEmail}>`,
		   	to: email,
		   	subject: temp.subject,
		   	html: temp.html
		   	//text: `验证码为${smsCode}`  
		   })
		   if (info.messageId) {
		   	const newToken = utils.getToken({email:email,emailCode:temp.emailCode},utils.getSecret(),'5m');
		   	// return {code: 0, msg: '发送成功'}  
		   	return {errCode:0,errMsg:"",data:{emailCodeTk:newToken}}
		   } else {
		   	 return {errCode: 103, errMsg: '发送失败',data:{emailCodeTk:""},info}  
		   	//return event
		   }
	}
	
}
//随机6位短信验证码
function randomSms() {
	let res = '';
	for(var i = 0; i < 4; i++) res += Math.floor(Math.random()*10);
	return res;
}
function getEmailTemp(key){
	const emailCode =randomSms();
	const temp={
		register:{
			subject:"验证邮箱",
			emailCode:emailCode,
			html:`<h1>邮箱验证</h1><p>你正在通过邮箱注册议宿账号，验证码为</p><p><span style="font-weight:bold;padding:0 14px;font-size:24px;color:#007aff">${emailCode}<span></p>`
		},
		resetPassword:{
			subject:"验证邮箱",
			emailCode:emailCode,
			html:`<h1>邮箱验证</h1><p>你正在通过邮箱重置议宿账号密码，验证码为</p><p><span style="font-weight:bold;padding:0 14px;font-size:24px;color:#007aff">${emailCode}<span></p>`
		},
		updateEmail:{
			subject:"验证邮箱",
			emailCode:emailCode,
			html:`<h1>邮箱验证</h1><p>你正在为议宿系统绑定邮箱，验证码为</p><p><span style="font-weight:bold;padding:0 14px;font-size:24px;color:#007aff">${emailCode}<span></p>`
		}
		
	}
	if(!temp[key]){
		throw new Error("需要的模板不存在");
	}
	return temp[key];
}
