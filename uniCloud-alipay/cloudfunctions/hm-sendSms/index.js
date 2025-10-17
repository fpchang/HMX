'use strict';
const { networkInterfaces } = require('os');
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event,context);
	let {appid,phone,templateId='uni_sms_test'} =event;
	const db = uniCloud.database();
	const smsCode =randomSms();
	if(context.SPACEINFO.spaceId=="env-00jxh1m2dpmq" ||isTestAccount(phone)){//开发环境0000
		const newToken = tokenEvent.getToken({phone:phone,smsCode:1234},tokenEvent.getSecret(),300);
		//console.log("生成。。。",newToken)
		return {code:0,tk:newToken};
	}
	
	const {appId} =context;
	  try {
		 
	    const res = await uniCloud.sendSms({
	      appid:appId,
	      phone: phone,
	      templateId: '34246',// 'uni_sms_test', // 请替换为自己申请的模板id
	      data: {
	        name: 'DCloud',
	        code: smsCode,
	        expMinute: '5',
	      }
	    });
		console.log("发送短信验证结果=====",res);
		const newToken = tokenEvent.getToken({phone:phone,smsCode:smsCode},tokenEvent.getSecret(),300);
		console.log("生成。。。",newToken)
		return {code:0,tk:newToken};
	  } catch(err) {
	    // 调用失败
	    // console.log(err)
	    // console.log(err)
	    // return {
	    //   code: err.errCode,
	    //   msg: err.errMsg
	    // }
		throw new Error(err);
	  }
	
};
function isTestAccount(phone="",smsCode){
	const testAccountList=[
	{phone:"18516285834",smsCode:"1234"},
	{phone:"13122905834",smsCode:"1234"}]
	
	let t = testAccountList.find(item=>item.phone==phone);
	return t?true:false;
}
//随机6位短信验证码
function randomSms() {
	let res = '';
	for(var i = 0; i < 4; i++) res += Math.floor(Math.random()*10);
	return res;
}