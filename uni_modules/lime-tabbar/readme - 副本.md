# lime-tabbar 标签栏
- 用于在不同功能模块之间进行快速切换，位于页面底部。兼容uniapp/uniappx
- 插件依赖`lime-style`,`lime-shared`,`lime-badge`,`lime-icon`,`lime-svg`不喜勿下。


## 文档
  [tabbar【站点1】](https://limex.qcoon.cn/components/tabbar.html)
  [tabbar【站点2】](https://limeui.netlify.app/components/tabbar.html)
  [tabbar【站点3】](https://limeui.familyzone.top/components/tabbar.html)


## 安装
在插件市场导入即可，首次安装可能需要重新编译


**注意** 
*  本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。
*  如果不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在lime-icon代码中注释掉即可

```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

## 代码演示
### 基础使用
`v-model` 默认绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签。
```html
<l-tabbar v-model="active">
	<l-tabbar-item icon="home">首页</l-tabbar-item>
	<l-tabbar-item icon="app">应用</l-tabbar-item>
	<l-tabbar-item icon="chat">聊天</l-tabbar-item>
	<l-tabbar-item icon="user">我的</l-tabbar-item>
</l-tabbar>
```
```js
const active = ref('0')
```

### 通过值匹配
在标签指定 `value` 属性的情况下，`v-model` 的值为当前标签的 `value`。
```html
<l-tabbar v-model="active">
	<l-tabbar-item icon="home" value="home">首页</l-tabbar-item>
	<l-tabbar-item icon="app" value="app">应用</l-tabbar-item>
	<l-tabbar-item icon="chat" value="chat">聊天</l-tabbar-item>
	<l-tabbar-item icon="user" value="user">我的</l-tabbar-item>
</l-tabbar>
```
```js
const active = ref('home')
```

### 徽标提示
设置 [lime-badge](https://ext.dcloud.net.cn/plugin?id=13616)插件的 `badgeProps` 在图标右上角展示相应的徽标。
```html
<l-tabbar v-model="active">
	<l-tabbar-item icon="home" :badgeProps="{ content: 16, max:5 }" value="home">首页</l-tabbar-item>
	<l-tabbar-item icon="app"  :badgeProps="{ dot: true }" value="app">应用</l-tabbar-item>
	<l-tabbar-item icon="chat" :badgeProps="{ content: 'New', offset: [10,-2] }" value="chat">聊天</l-tabbar-item>
	<l-tabbar-item icon="user" :badgeProps="{ content: '···' }" value="user">我的</l-tabbar-item>
</l-tabbar>
```
```js
const active = ref('home')
```

### 自定义图标
设置`icon`属性可设置图标，图标可看 [lime-icon](https://ext.dcloud.net.cn/plugin?id=14057)或`icon插槽`。
```html
<l-tabbar v-model="active">
	<l-tabbar-item icon="home" value="home">
		<template #icon>
			<image style="width: 20px;height: 20px;" v-show="active == 'home'" :src="activeImg" ></image>
			<image style="width: 20px;height: 20px;" v-show="active != 'home'" :src="inactiveImg" ></image>
		</template>
	</l-tabbar-item>
	<l-tabbar-item icon="app"  value="app">应用</l-tabbar-item>
	<l-tabbar-item icon="chat" value="chat">聊天</l-tabbar-item>
	<l-tabbar-item icon="user" value="user">我的</l-tabbar-item>
</l-tabbar>
```
```js
const active = ref('home')
const activeImg = 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png'
const inactiveImg = 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
```

### 自定义颜色
通过 `active-color` 属性设置选中标签的颜色，通过 `color` 属性设置未选中标签的颜色。
```html
<l-tabbar activeColor="red" color="#999">
	<l-tabbar-item icon="home" value="home"></l-tabbar-item>
	<l-tabbar-item icon="app" value="app"></l-tabbar-item>
	<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
	<l-tabbar-item icon="user" value="user"></l-tabbar-item>
</l-tabbar>
```


### 监听切换事件
通过 `change` 事件来监听选中标签的变化。
```html
<l-tabbar v-model="active" @change="change">
	<l-tabbar-item icon="home" value="home"></l-tabbar-item>
	<l-tabbar-item icon="app" value="app"></l-tabbar-item>
	<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
	<l-tabbar-item icon="user" value="user"></l-tabbar-item>
</l-tabbar>
```
```js
const change = (value : string) => {
	console.log('value', value)
}
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-tabbar/compoents/lime-tabbar -->
<lime-tabbar />
```


### 插件标签
- 默认 l-tabbar 为 component
- 默认 lime-tabbar 为 demo

### Vue2使用
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的名称或索引值 | _string_ | `-` |
| value | 当前选中标签的名称或索引值 | _string_ | `-` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| bordered | 是否显示外边框 | _boolean_ | `true` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number_ | `885` |
| shape | 标签栏的形状,可选`round` | _boolean_ | `normal` |
| safeAreaInsetBottom | 是否开启底部安全区适配，设置 fixed 时默认开启 | _boolean_ | `true` |
| activeColor | 选中标签的颜色 | _string_ | `-` |
| color | 未选中标签的颜色 | _string_ | `-` |
| activeBgColor | 选中标签的背景颜色 | _string_ | `-` |
| iconSize | 图标大小 | _string_ | `-` |
| lStyle | 样式 | _string_ | `-` |

### Tabbar Events

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| change    | 切换标签时触发           | active: string |


### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 标签值，作为匹配的标识符 | _string_ | `-` |
| icon | 图标名称或图片链接，等同于 [Icon](https://ext.dcloud.net.cn/plugin?id=14057) 组件的 name 属性 | _string_ | `-` |
| disabled | 是否禁用 | _boolean_ | `false` |
| label | 标签文本 | _string_ | `` |
| badgeProps | 自定义徽标的属性，传入的对象会被透传给 [Badge](https://ext.dcloud.net.cn/plugin?id=13616) 组件的 props | _Object_ | `` |


### TabbarItem Slots

| 名称            | 说明         |
| --------------- | ------------ |
| icon         | 自定义图标     |



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| --l-tabbar-bg-color         | _$bg-color-container_            | -    |
| --l-tabbar-border-color         | _$border-color-1_            | -    |
| --l-tabbar-round-shadow        | _$shadow-3_            | -    |
| --l-tabbar-z-index        | _10_            | -    |
| --l-tabbar-height        | _80rpx_            | -    |
| --l-tabbar-color        | _$text-color-1_            | -    |
| --l-tabbar-active-color        | _$primary-color_            | -    |
| --l-tabbar-font-size        | _32rpx_            | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)