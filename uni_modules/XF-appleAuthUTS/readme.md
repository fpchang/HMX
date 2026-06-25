# **概述**

XF-appleAuthUTS 封装了 Apple、Google、Huawei 一键授权登录的统一接口。

当前版本按平台固定登录提供方：

- iOS：Apple 登录，已接入系统 `AuthenticationServices`。
- Android：Google 登录，已接入 Android Credential Manager + Sign in with Google。
- HarmonyOS：Huawei 登录，已接入系统 `@kit.AccountKit`。


## **插件接口**

<div id="a0"></div>

# **login**

发起当前平台的一键授权登录。

iOS 平台使用 Sign in with Apple。默认不请求 `email`、`fullName`，如需获取用户邮箱或姓名，请显式传入 `scopes`。Apple 的 `email`、`fullName` 通常只在用户首次授权时返回，后续登录可能为空。

Android 平台使用 Google Credential Manager，需要传入 Google Cloud Console 中 OAuth 2.0 `Web client ID` 对应的 `googleWebClientId`，返回的 `idToken` 需要交给业务服务端验签。

HarmonyOS 平台使用 Huawei Account Kit，需要传入 AppGallery Connect 中的 `Client ID` 对应的 `huaweiClientId`，并在鸿蒙工程 `module.json5` 中配置同一个 `client_id` metadata。登录成功后优先返回 `authorizationCode`，业务服务端应使用授权码换取并校验 token。

## uni-app项目中（nvue）调用示例：

```js
import { login, createLoginOptions } from "@/uni_modules/XF-appleAuthUTS"

const options = createLoginOptions()
options.scopes = ["email", "fullName"]
options.googleWebClientId = "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"
options.huaweiClientId = "YOUR_HUAWEI_CLIENT_ID"
options.nonce = "server-generated-nonce"
options.state = "server-generated-state"
options.success = (res) => {
  console.log(res)
}
options.fail = (err) => {
  console.log(err.errCode, err.errMsg)
}
options.complete = (res) => {
  console.log(res)
}

login(options)
```

## uni-app x项目（uvue）中调用示例：

```js
import { login, createLoginOptions } from "@/uni_modules/XF-appleAuthUTS"
import type { AuthLoginFail, AuthLoginOptions, AuthLoginResult } from "@/uni_modules/XF-appleAuthUTS/utssdk/interface.uts"

let options = createLoginOptions()
options.scopes = ["email", "fullName"]
options.googleWebClientId = "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"
options.huaweiClientId = "YOUR_HUAWEI_CLIENT_ID"
options.nonce = "server-generated-nonce"
options.state = "server-generated-state"
options.success = (res : AuthLoginResult) => {
  console.log(res)
}
options.fail = (err : AuthLoginFail) => {
  console.log(err.errCode, err.errMsg)
}
options.complete = (res : any) => {
  console.log(res)
}

login(options as AuthLoginOptions)
```

## 返回字段

```ts
type AuthLoginResult = {
  errMsg: string
  provider: "apple" | "huawei" | "google"
  platform: "ios" | "android" | "harmony"
  userId?: string
  idToken?: string
  authorizationCode?: string
  email?: string
  nickname?: string
  avatarUrl?: string
  fullName?: string
  realUserStatus?: number
  raw?: any
}
```

## 可用性

iOS、Android、HarmonyOS 系统

可提供的 1.0.0 及更高版本

<div id="a1"></div>

# **getProvider**

获取当前平台固定的登录提供方。

- iOS 返回 `apple`
- Android 返回 `google`
- HarmonyOS 返回 `huawei`

## uni-app项目中（nvue）调用示例：

```js
import { getProvider } from "@/uni_modules/XF-appleAuthUTS"

const provider = getProvider()
console.log(provider)
```

## uni-app x项目（uvue）中调用示例：

```js
import { getProvider } from "@/uni_modules/XF-appleAuthUTS"
import type { AuthProvider } from "@/uni_modules/XF-appleAuthUTS/utssdk/interface.uts"

const provider : AuthProvider = getProvider()
console.log(provider)
```

## 可用性

iOS、Android、HarmonyOS 系统

可提供的 1.0.0 及更高版本

<div id="a2"></div>

# **isProviderAvailable**

判断当前平台固定登录提供方是否可用。

当前版本 iOS 13.0 及以上返回 `true`。Android 在可以获取 Activity 时返回 `true`。HarmonyOS 在可以获取 UIAbilityContext 时返回 `true`。

## uni-app项目中（nvue）调用示例：

```js
import { isProviderAvailable } from "@/uni_modules/XF-appleAuthUTS"

const available = isProviderAvailable()
console.log(available)
```

## uni-app x项目（uvue）中调用示例：

```js
import { isProviderAvailable } from "@/uni_modules/XF-appleAuthUTS"

const available : boolean = isProviderAvailable()
console.log(available)
```

## 可用性

iOS、Android、HarmonyOS 系统

可提供的 1.0.0 及更高版本

<div id="a3"></div>

# **createLoginOptions**

创建一个空的登录参数对象，方便在 uni-app x 中获得正确类型。

## uni-app项目中（nvue）调用示例：

```js
import { createLoginOptions } from "@/uni_modules/XF-appleAuthUTS"

const options = createLoginOptions()
options.scopes = ["email", "fullName"]
```

## uni-app x项目（uvue）中调用示例：

```js
import { createLoginOptions } from "@/uni_modules/XF-appleAuthUTS"
import type { AuthLoginOptions } from "@/uni_modules/XF-appleAuthUTS/utssdk/interface.uts"

let options : AuthLoginOptions = createLoginOptions()
options.scopes = ["email", "fullName"]
options.googleWebClientId = "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"
options.huaweiClientId = "YOUR_HUAWEI_CLIENT_ID"
```

## 可用性

iOS、Android、HarmonyOS 系统

可提供的 1.0.0 及更高版本

<div id="a4"></div>

# **getCredentialState**

查询当前登录用户的厂商凭证状态。

iOS 平台调用 `ASAuthorizationAppleIDProvider.getCredentialState`，可用于判断 Apple ID 凭证是否仍有效。Android、HarmonyOS 当前返回 `unknown`。

返回值：

- `authorized`：凭证有效。
- `revoked`：用户已撤销授权。
- `notFound`：找不到凭证。
- `transferred`：凭证已迁移。
- `unknown`：无法确认状态。

## uni-app项目中（nvue）调用示例：

```js
import { getCredentialState } from "@/uni_modules/XF-appleAuthUTS"

getCredentialState("apple-user-id").then((state) => {
  console.log(state)
})
```

## uni-app x项目（uvue）中调用示例：

```js
import { getCredentialState } from "@/uni_modules/XF-appleAuthUTS"
import type { AuthCredentialState } from "@/uni_modules/XF-appleAuthUTS/utssdk/interface.uts"

getCredentialState("apple-user-id").then((state : AuthCredentialState) => {
  console.log(state)
})
```

## 可用性

iOS、Android、HarmonyOS 系统

可提供的 1.0.0 及更高版本

## **iOS Apple 登录配置**

### 前置条件

1. 必须使用自定义基座或云打包验证原生能力，标准基座无法调试 Apple 登录。
2. 仅支持 iOS 13.0 及以上系统，建议使用真机测试。
3. Apple Developer 后台的 App ID 必须启用 `Sign in with Apple`。
4. 启用能力后，需要重新生成并下载 Provisioning Profile 描述文件。
5. HBuilderX 的 iOS 证书配置需要使用匹配的证书和最新描述文件。
6. App 的 Bundle ID、Apple Developer App ID、证书、描述文件必须保持一致。
7. 工程 entitlements 需要包含：

```xml
<key>com.apple.developer.applesignin</key>
<array>
  <string>Default</string>
</array>
```

### Apple Developer 配置步骤

1. 登录 Apple Developer，进入 `Certificates, Identifiers & Profiles`。
2. 在 `Identifiers` 中选择当前 App 对应的 App ID。
3. 编辑 App ID 能力，勾选并保存 `Sign in with Apple`。
4. 到 `Profiles` 中重新生成描述文件，并下载新的描述文件。
5. 回到 HBuilderX，在 iOS 打包或自定义基座配置中更新证书和描述文件。

### 调试注意事项

1. `email`、`fullName` 只会在用户首次授权时返回，后续登录通常为空。
2. 用户可以隐藏邮箱，也可以删除或编辑姓名，业务侧不能假定这些字段一定存在。
3. 如需重新测试首次资料返回，需要在 iOS 设置中取消该 App 的 Apple 登录授权后重新登录：`系统设置 > Apple ID > 密码与安全性 > 使用 Apple ID 的 App`。
4. 按 Apple Human Interface Guidelines 使用系统推荐的 Sign in with Apple 展示方式，不要在不必要时强制登录。

## **Android Google 登录配置**

### 前置条件

1. 必须使用自定义基座或云打包验证原生能力，标准基座无法调试 Google 原生登录能力。
2. Android 设备需要可用的 Google Play services，国内无 GMS 的设备通常无法完成 Google 登录。
3. 在 Google Cloud Console 或 Firebase 控制台创建 OAuth 2.0 客户端。
4. 需要配置 Android client，对应当前 App 的包名和签名证书 `SHA-1`。
5. 需要配置 Web client，并在调用 `login()` 时把 Web client ID 传给 `options.googleWebClientId`。这里必须使用 Web client ID，不是 Android client ID。
6. Debug、自定义基座、正式包如果使用不同签名证书，需要分别在 Google 控制台登记对应的 `SHA-1`。
7. 打包使用的 `applicationId`、Google 控制台 Android client 的包名、签名证书 `SHA-1` 必须一致。

### Google Cloud 配置步骤

1. 登录 Google Cloud Console，创建或选择项目。
2. 配置 OAuth consent screen，按业务需要填写应用名称、支持邮箱、隐私协议等信息。
3. 在 `APIs & Services > Credentials` 中创建 `OAuth client ID`。
4. 创建 Android client，填写 App 包名和签名证书 `SHA-1`。
5. 创建 Web client，复制生成的 Client ID。
6. 调用插件时设置：

```js
const options = createLoginOptions()
options.googleWebClientId = "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"
login(options)
```

### 调试注意事项

1. Android 当前使用 Credential Manager + Sign in with Google，插件已在 Android 配置中声明 `androidx.credentials`、`credentials-play-services-auth` 和 `googleid` 依赖。
2. 登录成功返回 `idToken`，客户端不要直接信任该结果，必须由业务服务端校验签名、`aud`、`iss`、`exp`、`sub`。
3. `options.nonce` 会传给 Google 登录请求，服务端验签时应校验同一个 nonce，防止重放。
4. 未传 `googleWebClientId` 会返回 `9100003`。用户取消返回 `9100005`。设备无可用凭证或 Google 服务不可用时可能返回 `9100004`。

## **HarmonyOS Huawei 登录配置**

### 前置条件

1. 必须使用自定义基座、云打包或鸿蒙真机工程验证原生能力，标准基座无法调试 Huawei Account Kit。
2. 需要在 AppGallery Connect 创建或选择 HarmonyOS 应用，并确保 `Bundle Name`、签名证书和实际打包配置一致。
3. 在 AppGallery Connect 开通 `Account Kit`/华为帐号服务，按控制台要求补齐隐私政策、数据处理和应用信息。
4. 在 AGC 配置签名证书指纹。Debug、自定义基座、正式包如果签名不同，需要分别配置对应证书指纹。
5. 获取 AGC 中该应用的 `Client ID`，调用 `login()` 时传入 `options.huaweiClientId`。
6. 在鸿蒙工程 `harmony-configs/entry/src/main/module.json5` 的 `module.metadata` 中配置同一个 `client_id`：

```json
{
  "module": {
    "metadata": [
      {
        "name": "client_id",
        "value": "YOUR_HUAWEI_CLIENT_ID"
      }
    ]
  }
}
```

7. `harmony-configs/AppScope/app.json5` 中的 `bundleName`、AGC 的 Bundle Name、签名证书指纹必须一致，否则可能返回 `9100003`，原始错误中通常包含指纹校验或未授权信息。

### 调用示例

```js
const options = createLoginOptions()
options.huaweiClientId = "YOUR_HUAWEI_CLIENT_ID"
options.nonce = "server-generated-nonce"
options.state = "server-generated-state"
login(options)
```

### 调试注意事项

1. HarmonyOS 当前使用 `@kit.AccountKit` 的 `HuaweiIDProvider.createLoginWithHuaweiIDRequest()`，登录成功会返回 `authorizationCode`、`idToken`、`openID`、`unionID` 等原生凭证。
2. 插件统一结果中的 `userId` 优先使用 `unionID`，没有 `unionID` 时使用 `openID`。业务侧仍应以服务端校验后的身份为准。
3. 未传 `huaweiClientId` 会返回 `9100003`。用户取消返回 `9100005`。未登录华为帐号或当前上下文不可拉起登录时可能返回 `9100004`。
4. `options.nonce`、`options.state` 会透传给华为登录请求，服务端验签或换 token 时应校验同一个 nonce/state。

## **服务端验签建议**

客户端只负责拉起厂商授权并返回凭证，不应在客户端直接完成业务登录可信判断。

- Apple：服务端校验 `idToken` 的签名、`iss`、`aud`、`exp`、`sub`，必要时结合 `authorizationCode` 走服务端换取 token。
- Google：服务端校验 `idToken` 的签名、`aud`、`iss`、`exp`、`sub`，并校验 nonce 是否与本次登录请求一致。
- Huawei：建议使用授权码模式，由服务端使用 `authorizationCode` 换取 token，并校验 `idToken` 的签名、`aud/client_id`、`iss`、`exp`、用户标识和 nonce/state。

## **错误码**

| 错误码 | 说明 |
| --- | --- |
| 9100001 | 当前平台不支持 |
| 9100002 | 当前平台不支持固定 provider |
| 9100003 | SDK 或配置缺失 |
| 9100004 | 当前设备不可用 |
| 9100005 | 用户取消授权 |
| 9100006 | 原生授权失败 |
| 9100007 | 原生凭证缺少必要身份数据 |
