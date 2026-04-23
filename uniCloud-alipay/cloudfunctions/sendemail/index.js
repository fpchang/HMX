'use strict';
const nodemailer = require('nodemailer') // 记得在当前文件夹执行npm install nodemailer后才能使用  
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	// let name = event.bod
	console.log(event)
	const {
		email,
		subject,
		html
	} = event;
	const sendEmail = '710357723@qq.com'; //自己的邮箱
	//const pass = 'cxosuglunfhkbbjf'; //邮箱的授权码
	const pass = 'cxosuglunfhkbbjf';
	//  const email = '514342305@qq.com' //对方邮箱
	if (!email) {
		throw new Error("无有效的邮箱信息");
	}
	const emailCode =randomSms();
	let transporter = nodemailer.createTransport({
		host: 'smtp.qq.com',
		    port: 465,
		    secure: true,
		auth: {
			user: sendEmail,
			pass: pass
		}
	})
	const info = await transporter.sendMail({
		from: `玄天科技有限公司<${sendEmail}>`,
		to: email,
		subject: subject,
		html: `${html}<p><text style="font-weight:bold;padding:0 14px;font-size:24px">${emailCode}<text></p>`
		//text: `验证码为${smsCode}`  
	})
	if (info.messageId) {
		const newToken = tokenEvent.getToken({email:email,emailCode:emailCode},tokenEvent.getSecret(),'5m');
		// return {code: 0, msg: '发送成功'}  
		return {errCode:0,errMsg:"",emailCodeTk:newToken}
	} else {
		 return {errCode: 103, msg: '发送失败', info}  
		//return event
	}
}

//随机6位短信验证码
function randomSms() {
	let res = '';
	for(var i = 0; i < 4; i++) res += Math.floor(Math.random()*10);
	return res;
}