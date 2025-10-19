# lime-switch 开关
用于控制某个功能的开启和关闭。可嵌套内容、禁用以及颜色配置，兼容uniapp/uniappx  
插件依赖`lime-style`,`lime-loading`,`lime-shared`,不喜勿下

## 文档
 🚀 [switch【站点1】](https://limex.qcoon.cn/components/switch.html)
 🌍 [switch【站点2】](https://limeui.netlify.app/components/switch.html)
 🔥 [switch【站点3】](https://limeui.familyzone.top/components/switch.html)

## 安装
插件市场导入即可，首次使用可能需要重新编译


## 代码演示
### 基础使用
通过 `v-model` 绑定开关的选中状态，true 表示开，false 表示关。

```html
 <l-switch v-model="checked"></l-switch>
```
```js
 const checked = ref(false)
```
 
 
### 禁用状态
通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
 <l-switch v-model="checked" disabled></l-switch>
```
 
### 加载状态
通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
 <l-switch v-model="checked" loading></l-switch>
```
 
### 形状
通过 `round` 属性设置为`false`可以设为方形。

```html
<l-switch :round="false"></l-switch>
<l-switch></l-switch>
```
 
 
### 占位符
通过 `placeholder` 属性可设置占位内容，[开启时内容，关闭时内容]。

```html
<l-switch :defaultValue="true" :placeholder="['人生得意须尽欢', '莫使金樽空对月']"></l-switch>
```
 
 ### 自定义尺寸
通过 `dotSize` 属性可设按钮的尺寸，`height`可以设置开关的高度，`width`可设置开关的最小宽度。

```html
<l-switch dotSize="14px" height="18px" width="32px"></l-switch>
<l-switch dotSize="14px" height="22px" width="40px"></l-switch>
<l-switch dotSize="18px" height="26px" width="48px"></l-switch>
```

 
### 自定义颜色
`checkedColor` 属性表示打开时的背景色，`uncheckedColor`表示关闭时的背景色。

```html
<l-switch  checkedColor="#ffb300" uncheckedColor="#33c471" :placeholder="['长风破浪会有时', '直挂云帆济沧海']"></l-switch>
```

### 自定义图标
可通过`icon`插槽设置按钮上的图标

```html
<l-switch>
	<template #icon="{checked}">
		<text></text>
	</template>
</l-switch>
<l-switch>
	<template #icon="{checked}">
		<text style="font-size:13px" v-show="checked">开</text>
		<text style="font-size:13px" v-show="!checked">关</text>
	</template>
</l-switch>
```


### 插件标签
`l-switch` 为 component  
`lime-switch` 为 demo

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
| v-model | 开关选中状态 | _boolean_ | `false` |
| value | 开关选中状态 | _boolean_ | - |
| defaultValue | 开关选中状态 | _boolean_ | - |
| disabled | 是否禁用 | _boolean_ | `false` |
| readonly | 只读 | _boolean_ | `false` |
| loading | 是否加载 | _boolean_ | `false` |
| round | 是否为圆形 | _boolean_ | `true` |
| rubberBand | 按钮是否有橡皮筋效果 | _boolean_ | `true` |
| placeholder | 占位内容，`[开启时内容，关闭时内容]`。 | _string[]_ | `[]` |
| fontSize | 字体大小 | _string_ | `-` |
| width | 开关最小宽度 | _string_ | `-` |
| height | 开关高度 | _string_ | `-` |
| height | 开关高度 | _string_ | `-` |
| dotSize | 按钮尺寸 | _string_ | `-` |
| dotPressedSize | 设置rubberBand后，按下按钮尺寸 | _string_ | `-` |
| checkedColor | 打开时的背景色 | _string_ | `-` |
| disabledColor | 禁用背景色 | _string_ | `-` |
| checkedDisabledColor | 打开禁用背景色 | _string_ | `-` |
| uncheckedColor | 关闭背景色 | _string_ | `-` |



### Events

| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| change | 开关状态切换时触发 | _currentValue: boolean_ |

#### Slots

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| icon   | 按钮图标插槽 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式)。uvue app无效。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-switch-checked-color: | _$primary-color_ | - |
| --l-switch-checked-disabled-color: | _$primary-color-3_ | - |
| --l-switch-unchecked-color: | _$gray-4_ | - |
| --l-switch-unchecked-disabled-color: | _$gray-2_ | - |
| --l-switch-width: | _90rpx_ | - |
| --l-switch-height: | _56rpx_ | - |
| --l-switch-radius: | _99px_ | - |
| --l-switch-dot-bg-color: | _white_ | - |
| --l-switch-dot-size: | _44rpx_ | - |
| --l-switch-dot-shadow: | _$shadow-1_ | - |
| --l-switch-dot-radius: | _99px_ | - |
| --l-swtich-font-size: | _28rpx_ | - |
| --l-swtich-text-color: | _white_ | - |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)