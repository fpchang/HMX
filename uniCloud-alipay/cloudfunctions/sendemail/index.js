'use strict';
const nodemailer = require('nodemailer') // 记得在当前文件夹执行npm install nodemailer后才能使用  
exports.main = async (event, context) => {
	// let name = event.bod
	const {
		email,
		subject,
		html
	} = event;
	const sendEmail = '514342305@qq.com'; //自己的邮箱
	//const pass = 'mydezpfxokxurnsg'; //邮箱的授权码
	const pass = '147895kk';
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
	const info = await transporter.sendMail({
		from: `发送人<${sendEmail}>`,
		to: `接收人<${email}>`,
		subject: subject,
		html: html,
		//text: '验证码为  5055'  
	})
	if (info.messageId) {
		// return {code: 0, msg: '发送成功'}  
		return event
	} else {
		// return {code: 1, msg: '发送失败', info}  
		return event
	}
}