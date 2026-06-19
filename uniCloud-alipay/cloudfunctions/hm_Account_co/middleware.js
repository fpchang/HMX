const i18n = require('./i18n')

module.exports = {
  before: async function () {
    // 正确：必须挂载到 this.locals
    const lang = this.params?.custom?.lang || 'zh'
    this.locals.lang = lang
    this.locals.t = i18n(lang)
  }
}