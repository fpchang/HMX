# lime-input 输入框组件
一个功能丰富的输入框组件，支持多种输入类型、状态和样式。组件提供了丰富的自定义选项，包括前缀图标、后缀图标、清除按钮、提示文本等，可以满足各种复杂的表单输入需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [输入框组件文档 - 站点1](https://limex.qcoon.cn/components/input.html)
- [输入框组件文档 - 站点2](https://limeui.netlify.app/components/input.html)
- [输入框组件文档 - 站点3](https://limeui.familyzone.top/components/input.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-input`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-input`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用！   
若不需要[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)删除即可
:::


## 代码演示
### 基础使用
通过`v-model`双向绑定或通过`value`设置值，通过`placeholder`设置占位符
```html
<l-input v-model="value" placeholder="请输入文字"></l-input>
```
```js
const value = ref('')
```

### 标题
通过`label`设置标题，通过`placeholder`设置占位符
```html
<l-input v-model="value" label="标签文字" placeholder="请输入文字"></l-input>
```


### 字数限制
通过`maxlength`设置最多可以输入的文本长度，通过`tips`设置提示文本
```html
<l-input v-model="value" label="标签文字" placeholder="请输入文字" :maxlength="10" tips="最大输入10个字符"></l-input>
```

### 前置图标
通过`prefix-icon`设置标题前的[图标](https://ext.dcloud.net.cn/plugin?id=14057)
```html
<l-input label="标签文字" placeholder="请输入文字" prefix-icon="fingerprint-2" ></l-input>
```

### 前置图标插槽
通过`prefix-icon`插槽可自定义标题前的内容
```html
<l-input label="标签文字" placeholder="请输入文字">
	<template #prefix-icon>
		<l-icon name="fingerprint-2" size="44rpx"></l-icon>
	</template>
</l-input>
```

### 后置图标
通过`suffix-icon`设置后置的[图标](https://ext.dcloud.net.cn/plugin?id=14057)
```html
<l-input label="标签文字" placeholder="请输入文字" suffix-icon="info-circle-filled"></l-input>
```

### 后置插槽
通过`suffix`插槽可以自定义后置内容
```html
<l-input label="标签文字" placeholder="请输入文字" >
	<template #suffix>
	     <l-button type="primary" size="mini">操作按钮 </l-button>
	</template>
</l-input>
```


### 后置图标插槽
通过`suffix-icon`插槽可以自定义后置图标位内容
```html
<l-input label="标签文字" placeholder="请输入文字" >
	<template #suffix-icon>
		<l-icon name="user-avatar" size="44rpx"></l-icon>
	</template>
</l-input>
```

### 输入框类型
通过`type`可以设置输入框类型，通过`clearable`属性设置是否显示可清空图标
```html
<l-input v-model="value" type="password" label="输入密码" placeholder="请输入密码" :clearable="true"></l-input>
```

### 输入框状态
通过`status`可以设置输入框状态
```html
<l-input label="标签文字" placeholder="请输入文字" value="已输入文字" status="error" tips="辅助说明"></l-input>
```

### 禁用状态
通过`disabled`可以设置输入框禁用
```html
<l-input label="不可编辑" placeholder="请输入文字" value="不可编辑文字" disabled></l-input>
```

### 竖向布局
通过`layout`属性设置`vertical`可为竖向布局
```html
<l-input label="标签文字" layout="vertical" placeholder="请输入文字"></l-input>
```

### 经典边框样式
设置classic属性，使用经典边框样式。

```html
<l-input 
  v-model="value" 
  classic
  placeholder="经典边框样式"
></l-input>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-input/components/lime-input -->
<lime-input />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-input` |组件标签|
| `lime-input`| 演示标签|

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)


## API文档

### Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框值 | _string \| number_ | - |
| modelValue | 输入框值（v-model绑定） | _string \| number_ | - |
| v-model | 输入框的值。 | _string_ | `` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | _boolean_ | - |
| align | 文本内容位置，居左/居中/居右 | _'left' \| 'center' \| 'right'_ |`left` |
| alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _boolean_ | - |
| autoFocus | (即将废弃，请直接使用 focus)自动聚焦，拉起键盘 | _boolean_ | - |
| bordered | 是否开启无边框模式 | _boolean_ | - |
| clearTrigger | 清空图标触发方式，仅在输入框有值时有效 | _'always' \| 'focus'_ | - |
| clearable | 是否可清空，默认不启动 | _boolean_ | - |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | _boolean_ | - |
| confirmType | 设置键盘右下角按钮的文字 | _'send' \| 'search' \| 'next' \| 'go' \| 'done'_ | - |
| cursor | 指定 focus 时的光标位置 | _number_ | - |
| cursorColor | 光标颜色 | _string_ | - |
| cursorSpacing | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | _number_ | - |
| disabled | 是否禁用输入框 | _boolean_ | - |
| focus | 获取焦点 | _boolean_ | - |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | _boolean_ | - |
| label | 左侧文本 | _string_ | - |
| layout | 标题输入框布局方式 | _'horizontal' \| 'vertical'_ |  `horizontal` |
| maxcharacter | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | _number_ | - |
| maxlength | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | _number_ | - |
| placeholder | 占位符 | _string_ | - |
| placeholderStyle | 指定 placeholder 的样式 | _string \| UTSJSONObject_ | - |
| placeholderClass | 指定 placeholder 的样式类 | _string_ | - |
| readonly | 只读状态 | _boolean_ | - |
| safePasswordCertPath | 安全键盘加密公钥的路径，只支持包内路径 | _string_ | - |
| safePasswordCustomHash | 安全键盘计算 hash 的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` | _string_ | - |
| safePasswordLength | 安全键盘输入密码长度 | _number_ | - |
| safePasswordNonce | 安全键盘加密盐值 | _string_ | - |
| safePasswordSalt | 安全键盘计算 hash 盐值，若指定custom-hash 则无效 | _string_ | - |
| safePasswordTimeStamp | 安全键盘加密时间戳 | _number_ | - |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | _number_ | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | _number_ | - |
| status | 输入框状态 | _'default' \| 'success' \| 'warning' \| 'error'_ | - |
| prefixIcon | 组件前置图标。值为字符串表示图标名称,等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| prefixIconColor | 前置图标颜色 | _string_ | - |
| suffix | 后置图标前的后置内容 | _string_ | - |
| suffixIcon | 后置文本内容。值为字符串则表示图标名称,等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| suffixIconColor | 后置图标颜色 | _string_ | - |
| tips | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | _string_ | - |
| type | 输入框类型 | _'text' \| 'number' \| 'idcard' \| 'digit' \| 'safe-password' \| 'password' \| 'nickname'_ | - |
| lStyle | 自定义样式 | _string \| UTSJSONObject_ | - |
| labelStyle | 标签自定义样式 | _string \| UTSJSONObject_ | - |
| tipsStyle | 提示文本自定义样式 | _string \| UTSJSONObject_ | - |
| inputStyle | 输入框自定义样式 | _string \| UTSJSONObject_ | - |
| borderColor | 边框颜色 | _string_ | - |
| classic | 是否使用经典边框样式 | _boolean_ | - |
| focused | 是否处于聚焦状态 | _boolean_ | - |
| focusedBorderColor | 聚焦状态边框颜色 | _string_ | - |
| prefixIconSize | 前置图标大小 | _string_ | - |
| suffixIconSize | 后置图标大小 | _string_ | - |
| clearIconSize | 清除图标大小 | _string_ | - |

### Events 事件

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| change    | 输入框值发生变化时触发           | - |
| focus | 获得焦点时触发         | - |
| blur             | 失去焦点时触发       | -                   |
| confirm            | 回车键按下时触发       | -                   |
| clear           | 清空按钮点击时触发 | -                   |
| click-icon           | 点击图标事件 | -                   |
| keyboardheightchange    | 键盘高度发生变化的时候触发此事件 | -                   |
| nicknamereview    | 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 | -                   |

### Slots 插槽

| 名称            | 说明         |
| --------------- | ------------ |
| prefix-icon         | 组件前置图标     |
| label | 组件标题 |
| suffix | 组件后置 |
| suffix-icon | 组件后置图标 |
| tips | 组件提示 |


## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-input-padding-y` | `$spacer` | 输入框垂直方向内间距 |
| `--l-input-padding-x` | `$spacer` | 输入框水平方向内间距 |
| `--l-input-text-color` | `$text-color-1` | 'default' 状态输入框文本颜色 |
| `--l-input-success-text-color` | `$success-color` | 'success' 状态输入框文本颜色 |
| `--l-input-warning-text-color` | `$warning-color` | 'warning' 状态输入框文本颜色 |
| `--l-input-error-text-color` | `$error-color` | 'error' 状态输入框文本颜色 |
| `--l-input-tips-color` | `$text-color-3` | 'default' 状态辅助文本颜色 |
| `--l-input-success-tips-color` | `$success-color` | 'success' 状态辅助文本颜色 |
| `--l-input-warning-tips-color` | `$warning-color` | 'warning' 状态辅助文本颜色 |
| `--l-input-error-tips-color` | `$error-color` | 'error' 状态辅助文本颜色 |
| `--l-input-bg-color` | `$bg-color-container` | 输入框背景颜色 |
| `--l-input-border-color` | `$border-color-2` | 输入框分割线颜色 |
| `--l-input-border-left-space` | `$spacer` | 输入框左边框间距 |
| `--l-input-border-right-space` | `0` | 输入框右边框间距 |
| `--l-input-placeholder-text-color` | `$text-color-3` | 输入框占位符文本颜色 |
| `--l-input-placeholder-text-font-size` | `$font-size-md` | 输入框占位符文本字体大小 |
| `--l-input-prefix-icon-color` | `$text-color-1` | 输入框前缀图标颜色 |
| `--l-input-suffix-icon-color` | `$text-color-3` | 输入框后缀图标颜色 |
| `--l-input-suffix-icon-size` | `22px` | 输入框后缀图标大小 |
| `--l-input-label-text-color` | `$text-color-1` | 左侧文本颜色 |
| `--l-input-suffix-text-color` | `$text-color-1` | 后置图标前的后置内容文本颜色 |
| `--l-input-disabled-text-color` | `$text-color-4` | 输入框禁用态文本颜色 |
| `--l-input-disabled-bg-color` | `$fill-3` | 输入框禁用态背景颜色 |
| `--l-input-border-radius` | `$border-radius` | 边框圆角大小 |
| `--l-input-label-font-size` | `$font-size-md` | 标签字体大小 |
| `--l-input-classic-padding-x` | `$spacer` | 经典样式水平内边距 |
| `--l-input-classic-padding-y` | `$spacer-sm` | 经典样式垂直内边距 |
| `--l-input-label-min-width` | `2em` | 标签最小宽度 |
| `--l-input-label-max-width` | `5em` | 标签最大宽度 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |