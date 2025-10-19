# lime-dialog 对话框

一个功能丰富的对话框组件，用于展示重要信息并获取用户反馈。支持标题、内容、确认/取消按钮、自定义内容等多种配置，可用于消息提示、确认操作、信息收集等多种场景。组件提供了组件调用和函数调用两种方式，满足各种复杂的交互需求。

> 插件依赖：`lime-shared`、`lime-style`、`lime-icon`、`lime-button`、`lime-popup`

## 文档链接
📚 组件详细文档请访问以下站点：
- [对话框文档 - 站点1](https://limex.qcoon.cn/components/dialog.html)
- [对话框文档 - 站点2](https://limeui.netlify.app/components/dialog.html)
- [对话框文档 - 站点3](https://limeui.familyzone.top/components/dialog.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-dialog`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-dialog`组件


## 代码演示

### 基础使用

通过`v-model`绑定是事展示对话框，通过`title`设置对话框标题，`content`设置是对话框内容，`confirm-btn`设置确认按钮或确认按钮所有属性,

```html
<l-dialog 
	v-model="visible" 
	title="对话框标题" 
	content="告知当前状态、信息等内容。描述文案尽可能控制在三行内"
	confirm-btn="知道了"
	@confirm="confirm">
</l-dialog>
<button @click="visible = true">基础使用</button>
```
```js
const visible = ref(false);
const confirm = () => {
	console.log('点击了确认按钮')
}
```


### 确认弹窗

`confirm-btn`和`cancel-btn`可以入[button](https://ext.dcloud.net.cn/plugin?id=20481)按钮所有属性,

```html
<l-dialog 
	v-model="visible"
	title="对话框标题"
	:cancel-btn="{ content: '取消', variant: 'text', size: 'large', type: 'default'}"
	:confirm-btn="{ content: '确认', variant: 'text', size: 'large'}"
	@confirm="confirm"
	@cancel="cancel">
	@confirm="confirm">
</l-dialog>
<button @click="visible = true">确认弹窗</button>
```
```js
const visible = ref(false);
const confirm = () => {
	console.log('点击了确认按钮')
}
const cancel = () => {
	console.log('点击了取消按钮')
}
```

### 通过插槽自定义内容
对话框提供了 默认插槽`default`、置顶插槽`top`、标题插槽`title`、中部`middle`、操作按钮`actions`、取消`cancel-btn`、确认`confirm-btn`
```html
<l-dialog  
	v-model="visible" 
	confirm-btn="知道了"
	@confirm="visible = false">
	<scroll-view type="list" scroll-y direction="vertical" style="height: 476rpx;">
	    <text>
		  这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	      这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
	    </text>
	  </scroll-view>
</l-dialog>
<button @click="visible2 = true">内容超长</button>
```


### 垂直按钮

`button-layout`设置为`vertical`可以高按钮组垂直布局

```html
<l-dialog 
	v-model="visible"
	title="对话框标题"
	content="告知当前状态、信息和解决方法"
	cancel-btn="取消"
	confirm-btn="确认"
	button-layout="vertical"
	@confirm="confirm"
	@cancel="cancel">
</l-dialog>
<button @click="visible = true">垂直按钮</button>
```


### 命令调用
通过调用组件内部方法可以达到灵活使用，例如异步关闭
```html
<l-dialog ref="dialogRef"></l-dialog>
<button @click="showDialog">命令调用</button>
```
```js
// 组合式API
const dialogRef = ref<LDialogComponentPublicInstance|null>(null)
const showDialog = () => {
	if(dialogRef.value == null) return
	dialogRef.value!.show({
		title: '弹窗标题',
		closeOnClickOverlay: true,
		buttonLayout: 'vertical',
		content: '告知当前状态、信息和解决方法等内容。',
		confirmBtn: '确定',
		cancelBtn: '取消',
		beforeClose: (action: string): Promise<boolean> => {
			console.log('action', action)
			return new Promise((resolve) => {
				setTimeout(() => {
					if (action == 'cancel') {
						resolve(true);
					} else {
						// 拦截取消操作
						resolve(false);
					}
				}, 1000);
			})
		}
	}).then((index)=>{
		console.log('点击了确定', index)
	}).catch(()=>{
		console.log('点击了取消')
	})
}
```

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)

## 插件标签说明
`l-dialog` 为组件标签   
`lime-dialog` 为演示标签

## API文档

### Props 属性说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示对话框 | <em>boolean</em> | `false` |
| visible | 是否显示对话框 | <em>boolean</em> | `false` |
| title | 对话框标题 | <em>string</em> | - |
| content | 对话框内容 | <em>string</em> | - |
| actions | 操作栏按钮列表 | <em>object[]</em> | - |
| cancel-btn | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性 | <em>string \| UTSJSONObject</em> | - |
| confirm-btn | 确认按钮，可自定义。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性 | <em>string \| UTSJSONObject</em> | - |
| button-layout | 多按钮排列方式，可选值为 `horizontal` `vertical` | <em>string</em> | `horizontal` |
| close-btn | 是否显示右上角关闭按钮 | <em>boolean</em> | `false` |
| close-on-click-overlay | 点击蒙层时是否触发关闭事件 | <em>boolean</em> | `true` |
| overlay | 是否显示遮罩层 | <em>boolean</em> | `true` |
| overlay-style | 自定义遮罩层样式 | <em>string</em> | - |
| prevent-scroll-through | 防止滚动穿透 | <em>boolean</em> | `true` |
| z-index | 对话框层级 | <em>number</em> | `888` |
| l-style | 自定义组件样式 | <em>string</em> | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| action | 点击操作栏按钮时触发 | <em>index: number</em> |
| click | 点击对话框时触发 | <em>event: Event</em> |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 对话框内容 |
| title | 自定义标题 |
| top | 顶部内容 |
| middle | 中间内容 |
| actions | 自定义操作栏 |
| confirm-btn | 自定义确认按钮 |
| cancel-btn | 自定义取消按钮 |

### 命令式调用方法

通过组件实例的 `show` 方法可以命令式调用对话框：

```js
// 返回Promise对象
const result = dialogRef.value.show({
  title: '标题',
  content: '内容',
  confirmBtn: '确定',
  cancelBtn: '取消',
  // 其他属性...
})

// 处理确认操作
result.then((index) => {
  console.log('确认', index)
})

// 处理取消操作
result.catch(() => {
  console.log('取消')
})
```

#### show方法参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 对话框标题 | <em>string</em> | - |
| content | 对话框内容 | <em>string</em> | - |
| confirmBtn | 确认按钮文本或配置 | <em>string \| UTSJSONObject</em> | - |
| cancelBtn | 取消按钮文本或配置 | <em>string \| UTSJSONObject</em> | - |
| buttonLayout | 按钮排列方式 | <em>'horizontal' \| 'vertical'</em> | `'horizontal'` |
| closeOnClickOverlay | 点击蒙层是否关闭 | <em>boolean</em> | `true` |
| beforeClose | 关闭前的回调函数，返回 Promise | <em>`(action: string) => Promise<boolean>`</em> | - |
| 其他属性 | 同Props | <em>-</em> | - |

## 主题定制

组件提供了以下CSS变量，可以通过自定义CSS变量来自定义组件样式：

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --l-dialog-width | 322px | 对话框宽度 |
| --l-dialog-body-max-height | 456px | 对话框内容最大高度 |
| --l-dialog-title-font-size | 18px | 标题字体大小 |
| --l-dialog-title-color | var(--l-text-color-1) | 标题文字颜色 |
| --l-dialog-title-line-height | 26px | 标题行高 |
| --l-dialog-content-font-size | 16px | 内容字体大小 |
| --l-dialog-content-color | var(--l-text-color-2) | 内容文字颜色 |
| --l-dialog-content-line-height | 24px | 内容行高 |
| --l-dialog-close-color | var(--l-text-color-3) | 关闭按钮颜色 |
| --l-dialog-bg-color | var(--l-bg-color-container) | 对话框背景色 |
| --l-dialog-split-color | var(--l-border-color-2) | 分割线颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![支付宝赞赏码](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![微信赞赏码](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |