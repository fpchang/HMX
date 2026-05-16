const zh = require('./locales/zh-CN.js');
const en = require('./locales/en-US.js');
/**
 * 获取国际化文案
 * @param {string} lang 语言标识 zh-CN / en
 * @returns {object} 对应语言文案对象
 */
function getI18nMsg(lang = 'zh-CN') {
  return lang === 'en-US' ? en : zh
}

module.exports = {
  getI18nMsg
}