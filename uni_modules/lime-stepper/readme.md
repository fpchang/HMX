# lime-stepper 步进器
一个功能丰富的步进器组件，用户可以通过调整增加按钮、减少按钮、数字输入框来调整具体需要的数值。组件支持设置最大值和最小值、步长、长按手势、禁用状态等多种配置，并提供多种尺寸和主题风格选择，兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-icon`、`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [步进器文档 - 站点1](https://limex.qcoon.cn/components/stepper.html)
- [步进器文档 - 站点2](https://limeui.netlify.app/components/stepper.html)
- [步进器文档 - 站点3](https://limeui.familyzone.top/components/stepper.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-stepper`
2. 插件市场导入即可，首次导入可能需要重新编译
3. 在页面中使用`l-stepper`组件（组件）或`lime-stepper`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示

### 基础使用
通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化。

```html
<l-stepper v-model="value" />
```

```js
const value = ref(1)
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

### 尺寸选择
插件内置 `size` 提供三个尺寸：`small`、`medium`、`large`，默认为`medium`。还可以通过 `input-width` 属性设置输入框宽度，通过 `size`具体数值设置按钮大小和输入框高度。

```html
<l-stepper v-model="value" size="small" />
<l-stepper v-model="value" size="large" />
<l-stepper v-model="value" input-width="40px" size="32px" />
```

### 异步受控模式
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

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-stepper/components/lime-stepper -->
<lime-stepper />
```

## 插件标签说明
- 默认 `l-stepper` 为组件标签
- 默认 `lime-stepper` 为演示标签

## Vue2使用说明
插件使用了`composition-api`，如果你希望在Vue2中使用，请按官方教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键代码是在main.js中的Vue2部分添加以下代码：

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值 | <em>number</em> | - |
| defaultValue | 默认值 | <em>number</em> | - |
| v-model | 双向绑定值 | <em>number</em> | - |
| longPress | 是否开启长按手势，开启后可以长按增加和减少按钮 | <em>boolean</em> | `true` |
| disableInput | 禁用输入框 | <em>boolean</em> | `false` |
| disabled | 禁用全部操作 | <em>boolean</em> | `false` |
| readonly | 只读状态 | <em>boolean</em> | `false` |
| inputWidth | 输入框宽度 | <em>string</em> | - |
| integer | 是否整型，默认是true，不允许输入小数 | <em>boolean</em> | `true` |
| max | 最大值 | <em>number</em> | `100` |
| min | 最小值 | <em>number</em> | `0` |
| size | 组件尺寸。可选值：small/medium/large，若为具体数值则为按钮尺寸和输入框高度 | <em>string</em> | `medium` |
| step | 步长 | <em>number</em> | `1` |
| theme | 组件风格。可选值：normal/filled/outline/solid | <em>string</em> | `filled` |
| iconRadius | 按钮圆角 | <em>string</em> | - |
| minusStyle | 减少按钮样式 | <em>object</em> | - |
| plusStyle | 增加按钮样式 | <em>object</em> | - |
| inputStyle | 输入框样式 | <em>object\|string</em> | - |
| cursorColor | 光标颜色 | <em>string</em> | `rgba(0,0,0,0.88)` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当前值变化时触发 | <em>value: number</em> |
| focus | 输入框聚焦时触发 | <em>event: Event</em> |
| blur | 输入框失焦时触发 | <em>event: Event</em> |
| overlimit | 点击增加或减少按钮时触发 | <em>-</em> |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-stepper-small-height | <em>40rpx</em> | 小尺寸步进器高度 |
| --l-stepper-medium-height | <em>48rpx</em> | 中尺寸步进器高度 |
| --l-stepper-large-height | <em>56rpx</em> | 大尺寸步进器高度 |
| --l-stepper-small-font-size | <em>20rpx</em> | 小尺寸字体大小 |
| --l-stepper-medium-font-size | <em>24rpx</em> | 中尺寸字体大小 |
| --l-stepper-large-font-size | <em>32rpx</em> | 大尺寸字体大小 |
| --l-stepper-small-icon-size | <em>24rpx</em> | 小尺寸图标大小 |
| --l-stepper-medium-icon-size | <em>32rpx</em> | 中尺寸图标大小 |
| --l-stepper-large-icon-size | <em>40rpx</em> | 大尺寸图标大小 |
| --l-stepper-small-input-width | <em>68rpx</em> | 小尺寸输入框宽度 |
| --l-stepper-medium-input-width | <em>76rpx</em> | 中尺寸输入框宽度 |
| --l-stepper-large-input-width | <em>90rpx</em> | 大尺寸输入框宽度 |
| --l-stepper-border-width | <em>2rpx</em> | 边框宽度 |
| --l-stepper-border-radius | <em>$border-radius-sm</em> | 边框圆角 |
| --l-stepper-border-color | <em>$border-color-1</em> | 边框颜色 |
| --l-stepper-input-color | <em>$text-color-1</em> | 输入框文字颜色 |
| --l-stepper-input-disabled-color | <em>$text-color-4</em> | 禁用状态输入框文字颜色 |
| --l-stepper-input-disabled-bg | <em>$gray-2</em> | 禁用状态输入框背景色 |
| --l-stepper-solid-bg-color | <em>$primary-color</em> | solid主题背景色 |
| --l-stepper-button-bg-color | <em>$gray-1</em> | 按钮背景色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |