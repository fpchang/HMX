# lime-steps 步骤条组件
一个功能丰富的步骤条组件，用于展示流程进度。支持横向和纵向布局、自定义状态、主题定制等多种配置，可用于展示订单流程、任务进度等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [步骤条组件文档 - 站点1](https://limex.qcoon.cn/components/steps.html)
- [步骤条组件文档 - 站点2](https://limeui.netlify.app/components/steps.html)
- [步骤条组件文档 - 站点3](https://limeui.familyzone.top/components/steps.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-steps`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-steps`和`l-step`组件

::: tip 注意🔔
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示
### 基础
`current` 属性表示当前步骤的索引，从 0 起计。
```html
<l-steps :current="current" @change="change">
	<l-step title="买家下单" content="辅助信息"></l-step>
	<l-step title="商家接单" content="辅助信息"></l-step>
	<l-step title="买家提货" content="辅助信息"></l-step>
	<l-step title="交易完成" content="辅助信息"></l-step>
</l-steps>
```
```js
const current = ref(1);
const change = (value : number) => {
	current.value = value;
}
```

### 图标
通过 `icon` 属性设置[图标](https://ext.dcloud.net.cn/plugin?id=14057)。
```html
<l-steps :current="current" @change="change">
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

### 图标
通过 `type` 属性设置`dot` 可以小圆点的简略模式。
```html
<l-steps :current="current"  type="dot" @change="change">
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

### 状态
通过`status`属性设置状态, 共支持 4 种状态：未完成（`wait`）、已完成（`finish`）、进行中（`process`）、错误（`error`）。
```html
<l-steps :current="current"  @change="change">
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息" status="error"></l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

### 自定义样式
通过`activeColor`属性设置当前激活色,`finishBgColor`可以设置完成的背景色。
```html
<l-steps :current="current"  @change="change" activeColor="#FFB400" finishBgColor="rgba(255, 180, 0, 0.1)">
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

### 竖向步骤条
可以通过设置 `layout` 属性来改变步骤条的显示方向。
```html
<l-steps :current="current"  @change="change" layout="vertical" >
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

### 竖向自定义内容
可以通过 `extra` 插槽可自定义额外内容。
```html
<l-steps :current="current"  @change="change" layout="vertical" >
	<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
	<l-step icon="cart" title="商家接单" content="辅助信息">
		<template #extra>
			<view>
				<image
					src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ"
					alt="图标"
					style="width: 100%;"
					mode="widthFix"/>
			</view>
		</template>
	</l-step>
	<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
	<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
</l-steps>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-steps/components/lime-steps -->
<lime-steps />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-steps` | 步骤条组件标签 |
| `l-step` | 步骤组件标签 |
| `lime-steps` | 演示标签 |

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


### steps Props 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤 | _number_ | `-` |
| value | 自定义步骤值 | _number_ | `-` |
| modelValue | 受控属性 | _number_ | `-` |
| defaultCurrent | 默认当前步骤 | _number_ | `-` |
| status | 当前步骤状态 | _string_ | `'process'` |
| layout | 布局方向 | _string_ | `'horizontal'` |
| readonly | 是否只读 | _boolean_ | `false` |
| sequence | 步骤顺序 | _string_ | `'positive'` |
| type | 步骤条风格 | _string_ | `'default'` |
| activeColor | 激活状态颜色 | _string_ | `-` |
| finishBgColor | 完成状态背景色 | _string_ | `-` |
| waitColor | 等待状态颜色 | _string_ | `-` |
| waitBgColor | 等待状态背景色 | _string_ | `-` |

### Steps Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| change  | 当前步骤发生变化时触发 | _index: number_ |

### step Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 步骤描述 | _string_ | `-` |
| icon | 图标名称 | _string_ | `-` |
| title | 标题 | _string_ | `-` |
| titleRight | 标题右侧信息 | _string_ | `-` |
| status | 步骤状态 | _string_ | `'wait'` |

### Step Slots
| 名称 | 说明             | 值            |
| ------ | ---------------- | ------------------- |
| icon  | 图标 | _status_ |
| title  | 标题 | - |
| content  | 步骤描述 | - |
| extra  | 额外 | - |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-step-dot-size` | `8px` | 点状步骤条的大小 |
| `--l-step-circle-size` | `22px` | 圆形步骤条的大小 |
| `--l-step-circle-font-size` | `$font-size` | 圆形步骤条的字体大小 |
| `--l-step-circle-icon-size` | `$font-size-md` | 圆形步骤条的图标大小 |
| `--l-step-description-color` | `$text-color-3` | 步骤描述文字颜色 |
| `--l-step-wait-circle-bg-color` | `$gray-1` | 等待状态背景色 |
| `--l-step-wait-circle-color` | `$text-color-3` | 等待状态文字颜色 |
| `--l-step-wait-title-color` | `$text-color-3` | 等待状态标题颜色 |
| `--l-step-wait-icon-color` | `$text-color-3` | 等待状态图标颜色 |
| `--l-step-wait-dot-border-color` | `$gray-4` | 等待状态点状边框颜色 |
| `--l-step-process-circle-color` | `white` | 进行中状态文字颜色 |
| `--l-step-process-circle-bg-color` | `$primary-color` | 进行中状态背景色 |
| `--l-step-process-title-color` | `$primary-color` | 进行中状态标题颜色 |
| `--l-step-process-icon-color` | `$primary-color` | 进行中状态图标颜色 |
| `--l-step-process-dot-border-color` | `$primary-color` | 进行中状态点状边框颜色 |
| `--l-step-finish-circle-color` | `$primary-color` | 完成状态文字颜色 |
| `--l-step-finish-circle-bg-color` | `$primary-color-1` | 完成状态背景色 |
| `--l-step-finish-title-color` | `$text-color-1` | 完成状态标题颜色 |
| `--l-step-finish-icon-color` | `$primary-color` | 完成状态图标颜色 |
| `--l-step-finish-dot-border-color` | `$primary-color` | 完成状态点状边框颜色 |
| `--l-step-error-circle-color` | `$error-color` | 错误状态文字颜色 |
| `--l-step-error-circle-bg-color` | `$error-color-1` | 错误状态背景色 |
| `--l-step-error-title-color` | `$error-color` | 错误状态标题颜色 |
| `--l-step-error-icon-color` | `$error-color` | 错误状态图标颜色 |
| `--l-step-error-dot-border-color` | `$error-color` | 错误状态点状边框颜色 |
| `--l-step-line-color` | `$gray-4` | 步骤条连接线颜色 |
| `--l-step-finish-line-color` | `$primary-color` | 完成状态连接线颜色 |


## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |