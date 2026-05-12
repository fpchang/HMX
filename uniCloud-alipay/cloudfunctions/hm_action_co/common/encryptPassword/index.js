const crypto = require('crypto');
/**
 * 明文密码加密（Node.js / UniCloud 通用）
 * @param {string} password 明文密码
 * @returns {string} 加密后的密码
 */
function encryptPassword(password) {
  // 盐值（自己改一个唯一的，不要泄露）
  const salt = '****';
  
  // 创建 SHA256 哈希
  const hash = crypto.createHmac('sha256', salt)
    .update(password)
    .digest('hex'); // 转 16 进制字符串

  return hash;
}
module.exports = {
	// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
	
		encryptPassword
	
}
