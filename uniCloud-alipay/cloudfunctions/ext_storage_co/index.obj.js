// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

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
   	getUploadFileOptions(data = {}) {
   		let { 
   			cloudPath, // 前端传过来的文件路径
   		} = data;
   		// 可以在此先判断下此路径是否允许上传等逻辑
   		// ...
   		
   		// 然后获取 extStorageManager 对象实例
   		const extStorageManager = uniCloud.getExtStorageManager({
   			provider: "qiniu",
   			domain: "cdn.hotelsys.fun", // 域名地址
   		});
   		// 最后调用 extStorageManager.getUploadFileOptions
   		let uploadFileOptionsRes = extStorageManager.getUploadFileOptions({
   			cloudPath: cloudPath,
			mimeLimit:"image/jpeg;image/png",
   			allowUpdate: false, // 是否允许覆盖更新，如果返回前端，建议设置false，代表仅新增，不可覆盖
   		});
   		return uploadFileOptionsRes;
   	}
}
