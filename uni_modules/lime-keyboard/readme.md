# lime-keyboard 虚拟键盘
一个功能丰富的虚拟键盘组件，支持数字键盘、车牌键盘、身份证键盘和自定义键盘等多种类型，兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-shared`、`lime-icon`、`lime-svg`

## 文档链接
📚 组件详细文档请访问以下站点：
- [虚拟键盘文档 - 站点1](https://limex.qcoon.cn/components/keyboard.html)
- [虚拟键盘文档 - 站点2](https://limeui.netlify.app/components/keyboard.html)
- [虚拟键盘文档 - 站点3](https://limeui.familyzone.top/components/keyboard.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-keyboard`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-keyboard`组件（组件）或`lime-keyboard`（演示）


::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::



## 代码演示
### 默认键盘
键盘提供了 `input`、`delete`、`blur` 事件，分别对应输入内容、删除内容和失去焦点的动作。
```html
<button @click="visible = true">默认键盘</button>
<l-keyboard v-model="value" v-model:visible="visible" @delete="onDelete"  @input="onInput" @key-up="onKeyUp"></l-keyboard>
```
```js
const value = ref('')
const visible = ref(false)
const onDelete = () => {console.log('删除')}
const onInput = (text: string) => {
	console.log('text', text)
}
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 带右侧栏的键盘
将 `type` 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。
```html
<button @click="visible = true">带右侧栏的键盘</button>
<l-keyboard type="custom" v-model:visible="visible" @key-up="onKeyUp"></l-keyboard>
```
```js
const visible = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 键盘标题
通过 `title` 属性可以设置键盘标题。
```html
<button @click="visible = true">带右侧栏的键盘</button>
<l-keyboard type="custom" title="键盘标题" v-model:visible="visible" :extraKey="['.']" @key-up="onKeyUp"></l-keyboard>
```
```js
const visible = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 配置多个按键
当 `type` 为 `custom` 时，支持以数组的形式配置两个 extra-key。
```html
<button @click="visible4 = true">配置多个按键</button>
<l-keyboard type="custom" v-model:visible="visible4"  :extraKey="['00','.']" @key-up="onKeyUp"></l-keyboard>
```
```js
const visible = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 身份证键盘
当 `type` 为 `idcard` 时为身份证键盘。
```html
<button @click="visible4 = true">配置多个按键</button>
<l-keyboard type="idcard" v-model:visible="visible4" @key-up="onKeyUp"></l-keyboard>
```
```js
const visible = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 车牌键盘
当 `type` 为 `car` 时为车牌键盘。可以配合[code-input](https://ext.dcloud.net.cn/plugin?id=20993)插件输入车牌
```html
<l-code-input 
	v-model="value" 
	:insertAt="{index:2}" 
	:mask="false" 
	:focused="focused"
	lastElementStyle="background: rgba(225, 252, 236, 1);border: 2px dashed rgba(96, 188, 121, 1);"
	lastElementPlaceholder="新能源"
	lastElementPlaceholderStyle="color: rgba(96, 188, 121, 1); font-size:12px; width:12px"
	:disabledKeyboard="true" 
	activeBorderColor="#E75A2C"
	borderWidth="2px"
	@focus="visible = true; focused = true" 
	:length="8">
</l-code-input>
<l-keyboard type="car" v-model="value" v-model:visible="visible"  @close="focused = false" @key-up="onKeyUp"></l-keyboard>
```
```js
const value = ref('')
const visible = ref(false)
const focused = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
```

### 异步关闭
当 `type` 为 `custom` 时，可通过 `beforeClose` 属性可以传入一个回调函数，在关闭前进行特定操作。
```html
<button @click="visible = true">异步关闭</button>
<l-keyboard 
	type="custom" 
	v-model:visible="visible1" 
	@key-up="onKeyUp" 
	:extraKey="['.']" 
	:beforeClose="beforeClose">
</l-keyboard>
```
```js
const visible = ref(false)
const onKeyUp = (text: string) => {
	uni.showToast({
		icon: 'none',
		title: text,
	})
}
const beforeClose = (detail: UTSJSONObject) => {
	return new Promise((resolve):Promise<boolean>=> {
		const value = parseFloat(detail.getString('value') ?? '0')
		if(isNaN(value) || value < 0.01 || value > 10) {
			resolve(false)
		} else {
			resolve(true)
		}
	})
}
```

## Vue2使用说明
本插件使用了`composition-api`，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
```js
// main.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-keyboard/components/lime-keyboard -->
<lime-keyboard />
```

## 插件标签说明
- `l-keyboard`：虚拟键盘组件
- `lime-keyboard`：演示标签

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 值 | string | - |
| v-model:visible | 是否弹出键盘 | boolean | `false` |
| type | 键盘类型，可选值`custom`、`default`、`car`、`idcard` | string | `default` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | boolean | `true` |
| showDeleteKey | 是否显示删除键 | boolean | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | boolean | `false` |
| extraKey | 当配置type为custom时可配置 | string[] | - |
| closeText | 关闭按钮文本 | string | `完成` |
| deleteText | 删除按钮文本 | string | - |
| maxlength | 最大输入长度 | number | - |
| overlay | 是否显示遮罩 | boolean | `false` |
| title | 键盘标题 | string | - |
| beforeClose | 关闭前的回调函数，返回 Promise | Function | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| delete | 点击删除键触发 | - |
| input | 点击按键时触发，回调已经输入的字符 | key: string |
| key-up | 点击按键时触发，回调当前按键的字符 | key: string |
| close | 点击关闭按钮时触发 | - |
| blur | 失焦时触发 | - |

## 主题定制

组件提供了下列CSS变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-keyboard-bg-color` | `#E5E7EB` | 键盘整体背景色 |
| `--l-keyboard-color` | `$text-color-1` | 键盘主文本颜色 |
| `--l-keyboard-border-radius` | `$border-radius` | 键盘整体圆角 |
| `--l-keyboard-key-bg-color` | `#fff` | 按键默认背景色 |
| `--l-keyboard-key-hover-bg-color` | `rgba(255,255,255,0.6)` | 按键悬停背景色 |
| `--l-keyboard-key-border-radius` | `$border-radius` | 按键圆角 |
| `--l-keyboard-key-gap` | `6px` | 按键间距 |
| `--l-keyboard-close-bg-color` | `$primary-color` | 关闭按钮背景色 |
| `--l-keyboard-close-hover-bg-color` | `$primary-color-7` | 关闭按钮悬停背景色 |
| `--l-keyboard-key-height` | `55px` | 标准按键高度 |
| `--l-keyboard-font-size` | `$font-size-heading-3` | 标准按键字体大小 |
| `--l-keyboard-mini-key-height` | `42px` | 小型按键高度 |
| `--l-keyboard-mini-font-size` | `$font-size-md` | 小型按键字体大小 |
| `--l-keyboard-icon-size` | `$font-size-heading-2` | 图标尺寸 |
| `--l-keyboard-icon-font-size` | `18px` | 图标字体大小 |
| `--l-keyboard-icon-bg-color` | `white` | 图标背景色 |
| `--l-keyboard-icon-color` | `$text-color-3` | 图标颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |