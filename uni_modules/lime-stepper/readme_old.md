# lime-stepper 步进器
步进器用户通过调整增加按钮、减少按钮、数字输入框来调整具体需要的数值，可设置最大值和最小值，兼容uniapp/uniappx   
插件依赖`lime-style`、`lime-icon`、`lime-shared`，不喜勿下

## 文档
 🚀 [stepper【站点1】](https://limex.qcoon.cn/components/stepper.html)
 🌍 [stepper【站点2】](https://limeui.netlify.app/components/stepper.html)
 🔥 [stepper【站点3】](https://limeui.familyzone.top/components/stepper.html)


## 安装
插件市场导入即可，首次导入可能需要重新编译

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用！   
若不需要[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)删除即可
:::

## 代码演示
### 基础使用

通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化。
```html
<l-stepper v-model="value" />
```

### 设置步长

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 1。
```html
<l-stepper v-model="value" :step="2" />
```

### 允许输入小数
默认限制输入整数，设置 `integer` 为 `false` 属性后，输入框将允许输入小数。

```html
<l-stepper v-model="value" :integer="false" />
```

### 禁用状态
通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```html
<l-stepper v-model="value" :disabled="true" />
```

### 禁用输入框
通过设置 `disable-input` 属性来禁用输入框，此时按钮仍然可以点击。

```html
<l-stepper v-model="value" :disable-input="true" />
```

### 禁用输入框
通过设置 `disable-input` 属性来禁用输入框，此时按钮仍然可以点击。

```html
<l-stepper v-model="value" :disable-input="true" />
```

### 尺寸
插件内置 `size` 提供三个尺寸`small/medium/large`，默认`medium`，还可以通过 `input-width` 属性设置输入框宽度，通过 `size`具体数值设置按钮大小和输入框高度。

```html
<l-stepper v-model="value" size="small" />
<l-stepper v-model="value" size="large" />
<l-stepper v-model="value" input-width="40px" size="32px" />
```

### 受控
如果需要异步地修改输入框的值，可以通过`change`事件中手动修改`value`。

```html
<l-stepper :value="asyncNumber" @change="asyncChange" />
```
```js

// vue2
export default {
	data() {
		return {
			asyncNumber: 3,
		}
	},
	methods: {
		asyncChange(v) {
			uni.showLoading({
				title: '加载中'
			})
			setTimeout(() => {
				uni.hideLoading()
				if (v > 10) {
					this.asyncNumber = 10
					return
				}
				this.asyncNumber = v
			}, 1000);
		}
	}
}

// vue3
const asyncNumber = ref(3),
let timer = -1
const asyncChange = (v:number) => {
	clearTimeout(timer)
	uni.showLoading({
		title: '加载中'
	})
	timer = setTimeout(() => {
		uni.hideLoading()
		if(v > 10) {
			asyncNumber.value = 10
			return
		}
	    asyncNumber.value = v 
	}, 1000);
}

```



### 查看示例
导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-stepper/compoents/lime-stepper -->
<lime-stepper />
```


### 插件标签
`l-stepper` 为 component  
`lime-stepper` 为 demo

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
| value | 值。 | _number_ | `-` |
| defaultValue | 默认值。 | _number_ | `-` |
| v-model | 双向绑定值 | _number_ | `-` |
| longPress | 是否开启长按手势，开启后可以长按增加和减少按钮 | _boolean_ | `true` |
| disableInput | 禁用输入框 | _boolean_ | `false` |
| disabled | 禁用全部操作 | _boolean_ | `false` |
| readonly | 只读 | _boolean_ | `false` |
| inputWidth | 输入框宽度 | _string_ | `-` |
| integer | 是否整型,默认是true,不允许输入小数 | _boolean_ | `true` |
| max | 最大值 | _number_ | `100` |
| min | 最小值 | _number_ | `0` |
| size | 组件尺寸。可选项：small/medium/large,若为具体数值则为按钮尺寸和输入框高度 | _string_ | `medium` |
| step | 步长 | _number_ | `1` |
| theme | 组件风格。可选项：normal/filled/outline/solid | _string_ | `filled` |
| iconRadius | 按钮圆角 | _string_ | `-` |
| minusStyle | 按钮减样式 | _object_ | `-` |
| plusStyle | 按钮加样式 | _object_ | `-` |
| inputStyle | 输入框样式 | _object\|string_ | `-` |
| cursorColor | 光标颜色 | _string_ | `rgba(0,0,0,0.88)` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。uvue app无效

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
--l-stepper-small-height | 40rpx | - 
--l-stepper-medium-height | 48rpx | - 
--l-stepper-large-height | 56rpx | - 
--l-stepper-small-font-size | 20rpx | - 
--l-stepper-medium-font-size | 24rpx | - 
--l-stepper-large-font-size | 32rpx | - 
--l-stepper-small-icon-size | 24rpx | - 
--l-stepper-medium-icon-size | 32rpx | - 
--l-stepper-large-icon-size | 40rpx | - 
--l-stepper-small-input-width | 68rpx | - 
--l-stepper-medium-input-width | 76rpx | - 
--l-stepper-large-input-width | 90rpx | - 
--l-stepper-border-width | 2rpx | - 
--l-stepper-border-radius | $border-radius-sm | - 
--l-stepper-border-color | $border-color-1 | - 
--l-stepper-input-color | $text-color-1 | - 
--l-stepper-input-disabled-color | $text-color-4 | - 
--l-stepper-input-disabled-bg | $gray-2 | - 
--l-stepper-solid-bg-color | $primary-color | - 




## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)