# lime-steps 步骤条
- 用于任务步骤展示或任务进度展示，让用户了解当前的操作在整体流程中的位置
- 插件依赖`lime-style`,`lime-shared`,`lime-icon`,`lime-svg`不喜勿下

## 文档
  [steps【站点1】](https://limex.qcoon.cn/components/steps.html)
  [steps【站点2】](https://limeui.netlify.app/components/steps.html)
  [steps【站点3】](https://limeui.familyzone.top/components/steps.html)



## 安装
插件市场导入,首次导入可能需要重新编辑

**注意** 
*  本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。
*  不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在lime-icon代码中注释掉即可

```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

::: tip 注意🔔
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 文档
[steps](https://limex.qcoon.cn/components/steps.html)

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



### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-steps/compoents/lime-steps 
<lime-steps />
```

### 插件标签
- 默认 l-steps 为 component
- 默认 l-step 为 component
- 默认 lime-steps 为 demo

### Vue2使用��vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API

### Steps Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| v-model  | 当前步骤对应的索引值  | _number_  | `0`     |
| current  | 当前步骤对应的索引值  | _number_  | `0`     |
| status  | 用于控制 `current` 指向的步骤条的状态。可选项：wait/process/finish/error | _string_ | `process` |
| layout | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | _string_ | `horizontal` |
| readonly | 只读状态 | _boolean_ | `false` |
| type | 步骤条风格。可选项：default/dot | _string_ | `default` |
| activeColor | 当前步骤和已完成步骤的颜色 | _string_ | `` |
| waitColor | 未激活步骤的颜色 | _string_ | `` |
| waitBgColor | 未激活步骤的背景颜色 | _string_ | `-` |
| finishBgColor | 已完成步骤的背景颜色 | _string_ | `-` |

### Step Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 步骤描述 | _string_ | - |
| icon | 图标，默认显示内置图标 | _string_ | - |
| title | 标题 | _string_ | `` |
| status | 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：wait/process/finish/error | _boolean_ | `wait` |

### Steps Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| change  | 当前步骤发生变化时触发 | _index: number_ |

### Step Slots
| 名称 | 说明             | 值            |
| ------ | ---------------- | ------------------- |
| icon  | 图标 | _status_ |
| title  | 标题 | - |
| content  | 步骤描述 | - |
| extra  | 额外 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式)。uvue app无效。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-step-dot-size: | _16rpx_ | - |
| --l-step-circle-size: | _44rpx_ | - |
| --l-step-circle-font-size: | _28rpx_ | - |
| --l-step-circle-icon-size: | _32rpx_ | - |
| --l-step-description-color: | _$text-color-3_ | - |
| --l-step-wait-circle-bg-color: | _$gray-1_ | - |
| --l-step-wait-circle-color: | _$text-color-3_ | - |
| --l-step-wait-title-color: | _$text-color-3_ | - |
| --l-step-wait-icon-color: | _$text-color-3_ | - |
| --l-step-wait-dot-border-color: | _$gray-4_ | - |
| --l-step-process-circle-color: | _white_ | - |
| --l-step-process-circle-bg-color: | _$primary-color_ | - |
| --l-step-process-title-color: | _$primary-color_ | - |
| --l-step-process-icon-color: | _$primary-color_ | - |
| --l-step-process-dot-border-color: | _$primary-color_ | - |
| --l-step-finish-circle-color: | _$primary-color_ | - |
| --l-step-finish-circle-bg-color: | _$primary-color-1_ | - |
| --l-step-finish-title-color: | _$primary-color-1_ | - |
| --l-step-finish-icon-color: | _$primary-color_ | - |
| --l-step-finish-dot-border-color: | _$primary-color_ | - |
| --l-step-error-circle-color: | _$error-color_ | - |
| --l-step-error-circle-bg-color: | _$error-color-1_ | - |
| --l-step-error-title-color: | _$error-color-1_ | - |
| --l-step-error-icon-color: | _$error-color_ | - |
| --l-step-error-dot-border-color: | _$error-color_ | - |
| --l-step-line-color: | _$gray-4_ | - |
| --l-step-finish-line-color: | _$primary-color_ | - |

## 常见问题
插件包含一下[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)为收费插件。如果你不需要svg，可以在lime-icon里注释掉，lime-svg为APP原生插件，收费为1元，源码为5元。如果你需要svg，可以考虑一下购买。
```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)