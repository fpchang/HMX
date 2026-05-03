// 国际化文案
const messages = {
  zh: {
    loginSuccess: "登录成功",
    loginFail: "登录失败",
    userNotFound: "用户不存在",
    passwordError: "密码错误",
    required: "必填项",
    success: "操作成功"
  },
  en: {
    loginSuccess: "Login successful",
    loginFail: "Login failed",
    userNotFound: "User not found",
    passwordError: "Password error",
    required: "Required",
    success: "Operation successful"
  }
};

// 获取当前语言文案
module.exports = function (lang = "zh") {
  return messages[lang] || messages.zh;
};