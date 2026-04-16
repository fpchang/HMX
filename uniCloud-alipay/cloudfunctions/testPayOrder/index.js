'use strict';
// const unipay = require('unipay') // 报错: MODULE_NOT_FOUND:Cannot find module 'unipay'   
 // 引入unipay
const unipay = require('uni-pay')
exports.main = async (event, context) => {
	const unipayIns = unipay.initWeixin({
	   appId: 'wx1e656e3fd064719a', //小程序appid
	   mchId: '1699379322', //微信商户号
	   key: 'VPpHKpisQvahiXPCvbHbUL88rv12IfpB', //商户号的API密钥
	   //pfx: fs.readFileSync('/path/to/your/pfxfile'), // p12文件路径，使用微信退款时需要，需要注意的是阿里云目前不支持以相对路径读取文件，请使用绝对路径的形式
	})
   //event为客户端上传的参数
   let orderInfo = await unipayIns.getOrderInfo({
      openid: event.openid, //这个是客户端上传的用户的openid
      // subject: event.name, // 订单名称微信支付时不可填写此项
      body: '会员费',
      outTradeNo: event.suiji, //给他个随机号让他可以第二次发起支付
      totalFee: event.pric, // 金额，单位元,在上传过来的时候就已经*100了
      // 支付结果通知地址,没有该参数或者为空会报错,随便给了一个测试网址
      notifyUrl: 'https://env-00jxh1m2dpmq.dev-hz.cloudbasefunction.cn/uni-pay-co',
      // attach: event.out_trade, //备注,订单号或 长者id 在下一步通知中判断长度来确定
   })
   return { orderInfo }
};