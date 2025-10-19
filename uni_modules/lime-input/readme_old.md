# lime-input 输入框
用于文本信息输入  
插件依赖`lime-icon`、`lime-style`、`lime-shared`不喜勿下

## 文档
 🚀 [input【站点1】](https://limex.qcoon.cn/components/input.html)
 🌍 [input【站点2】](https://limeui.netlify.app/components/input.html)
 🔥 [input【站点3】](https://limeui.familyzone.top/components/input.html)



## 安装
插件市场导入即可，首次导入可能需要重新编译

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


### 查看示例
导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-input/compoents/lime-input -->
<lime-input />
```


### 插件标签
`l-input` 为 component  
`lime-input` 为 demo

### Vue2使用
插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置  
关键代码是: 在main.js中 在vue2部分加上这一段即可

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 输入框的值。 | _string_ | `` |
| value | 输入框的值。 | _string_ | `` |
| align | 文本内容位置，居左/居中/居右。可选项：left/center/right | _string_ | `left` |
| alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _boolean_ | `false` |
| autoFocus | 自动聚焦，拉起键盘 | _boolean_ | `false` |
| bordered | 是否有边框模式 | _boolean_ | `true` |
| clearable | 是否可清空，默认不启动。 | _boolean_ | `false` |
| clearTrigger | 清空图标触发方式，仅在输入框有值时有效。可选项：always / focus | _string_ | `focus` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | _boolean_ | `false` |
| confirmType | 设置键盘右下角按钮的文字。 | _string_ | `done` |
| cursor | 指定 focus 时的光标位置 | _number_ | `` |
| cursorColor | 光标颜色 | _string_ | `` |
| cursorSpacing | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | _number_ | `0` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| focus | 获取焦点 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | _boolean_ | `false` |
| label |左侧文本 | _string_ | `` |
| layout |标题输入框布局方式。可选项：vertical/horizontal | _string_ | `horizontal` |
| maxlength |用户最多可以输入的文本长度 | _number_ | `-1` |
| placeholder |占位符 | _string_ | `` |
| placeholderStyle |指定 placeholder 的样式 | _string_ | `` |
| readonly | 只读状态 | _boolean_ | `false` |
| safePasswordCertPath | 安全键盘加密公钥的路径，只支持包内路径 | _string_ | `` |
| safePasswordCustomHash | 安全键盘计算 hash 的算法表达式 | _string_ | `` |
| safePasswordLength | 安全键盘输入密码长度 | _number_ | `` |
| safePasswordNonce | 安全键盘加密盐值 | _string_ | `` |
| safePasswordSalt | 安全键盘计算 hash 盐值 | _string_ | `` |
| safePasswordTimeStamp | 安全键盘加密时间戳 | _number_ | `` |
| selectionEnd | 光标起始位置，自动聚集时有效 | _number_ | `-1` |
| selectionStart | 光标起始位置，自动聚集时有效 | _number_ | `-1` |
| status | 输入框状态。可选项：default/success/warning/error | _string_ | `default` |
| prefixIcon | 后置图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | `` |
| prefixIconSize | 后置图标大小 | _string_ | `` |
| prefixIconColor | 后置图标颜色 | _string_ | `` |
| suffix | 后置图标前的后置内容 | _string_ | `` |
| suffixIcon | 后置图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | `` |
| suffixIconSize | 后置图标大小 | _string_ | `` |
| clearIconSize | 删除图标大小 | _string_ | `` |
| suffixIconColor | 后置图标颜色 | _string_ | `` |
| tips | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | _string_ | `` |
| type | 输入框类型。可选项：text/number/idcard/digit/safe-password/password/nickname | _string_ | `text` |
| lStyle | 自定义样式 | _string_ | `-` |
| lableStyle | 左侧标题样式 | _string_ | `-` |
| tipsStyle | 提示样式 | _string_ | `-` |
| inputStyle | 内部输入框样式 | _string_ | `-` |

### Events

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

### Slots

| 名称            | 说明         |
| --------------- | ------------ |
| prefix-icon         | 组件前置图标     |
| label | 组件标题 |
| suffix | 组件后置 |
| suffix-icon | 组件后置图标 |
| tips | 组件提示 |



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，hbx4.71以下uvue app无效。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| --l-input-padding-y         | _16px_            | 输入框垂直方向内间距    |
| --l-input-padding-x         | _16px_            | 输入框水平方向内间距    |
| --l-input-text-color         | _$text-color-1_            | 'default' 状态输入框文本颜色    |
| --l-input-success-text-color         | _$success-color_            | 'success' 状态输入框文本颜色    |
| --l-input-warning-text-color         | _$warning-color_            | 'warning' 状态输入框文本颜色    |
| --l-input-error-text-color         | _$error-color_            | 'error' 状态输入框文本颜色    |
| --l-input-tips-color         | _$text-color-3_            | 'default' 状态辅助文本颜色    |
| --l-input-success-tips-color         | _$success-color_            | 'success' 状态辅助文本颜色    |
| --l-input-warning-tips-color        | _$warning-color_            | 'warning' 状态辅助文本颜色    |
| --l-input-error-tips-color        | _$error-color_            | 'error' 状态辅助文本颜色    |
| --l-input-bg-color       | _$bg-color-container_            | 输入框背景颜色    |
| --l-input-border-color       | _$border-color-2_            | 输入框分割线颜色    |
| --l-input-border-left-space       | _16px_            | 输入框分割线左侧间距    |
| --l-input-border-right-space       | _0_            | 输入框分割线右侧间距    |
| --l-input-placeholder-text-color       | _$text-color-3_            | 输入框占位符文本颜色    |
| --l-input-placeholder-text-font-size       | _$font-size-md_            | 输入框占位符文本字体大小    |
| --l-input-prefix-icon-color       | _$text-color-1_            | 输入框前缀图标颜色    |
| --l-input-suffix-icon-color      | _$text-color-3_            | 输入框后缀图标颜色    |
| --l-input-suffix-icon-size      | _22px_            | 输入框后缀图标大小    |
| --l-input-label-text-color      | _$text-color-1_            | 左侧文本颜色    |
| --l-input-suffix-text-color      | _$text-color-1_            | 后置图标前的后置内容文本颜色    |
| --l-input-disabled-text-color      | _$text-color-4_            | 输入框禁用态文本颜色    |
| --l-input-disabled-bg-color      | _$fill-3_            | 输入框禁用态背景颜色    |
| --l-input-border-radius      | _$border-radius_            | 边框圆角大小    |
| --l-input-classic-padding-x      | _16px_            | 经典模式水平方向内间距    |
| --l-input-classic-padding-y      | _12px_            | 经典模式垂直方向内间距    |
| --l-input-label-min-width      | _2em/64rpx_            | 标签最小宽度（非APP为2em，APP为64rpx）    |
| --l-input-label-max-width      | _5em/160rpx_            | 标签最大宽度（非APP为5em，APP为160rpx）    |



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)