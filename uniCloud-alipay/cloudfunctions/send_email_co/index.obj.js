// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const nodemailer = require('nodemailer') // 记得在当前文件夹执行npm install nodemailer后才能使用  
const tokenEvent = require('tokenEvent');
module.exports = {
	_before: function () { // 通用预处理器
		const methodName = this.getMethodName()
	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
   async sendEmailCode(email,tempKey){
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
	   const temp =getEmailTemp(tempKey);
	   const info = await transporter.sendMail({
	   	from: `玄天科技有限公司<${sendEmail}>`,
	   	to: email,
	   	subject: temp.subject,
	   	html: temp.html
	   	//text: `验证码为${smsCode}`  
	   })
	   if (info.messageId) {
	   	const newToken = tokenEvent.getToken({email:email,emailCode:emailCode},tokenEvent.getSecret(),'5m');
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
			html:`<h1>邮箱验证</h1><p>你正在通过邮箱注册议宿账号，验证码为</p><p><text style="font-weight:bold;padding:0 14px;font-size:24px;color:#007aff">${emailCode}<text></p>`
		},
		
	}
	if(!temp[key]){
		throw new Error("需要的模板不存在");
	}
	return temp[key];
}
