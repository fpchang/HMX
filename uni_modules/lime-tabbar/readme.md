# lime-tabbar 标签栏
用于在不同功能模块之间进行快速切换，位于页面底部。兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-shared`、`lime-badge`、`lime-icon`、`lime-svg`

## 文档链接
📚 组件详细文档请访问以下站点：
- [tabbar文档 - 站点1](https://limex.qcoon.cn/components/tabbar.html)
- [tabbar文档 - 站点2](https://limeui.netlify.app/components/tabbar.html)
- [tabbar文档 - 站点3](https://limeui.familyzone.top/components/tabbar.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-tabbar`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-tabbar`组件（组件）或`lime-tabbar`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::



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
<!-- 代码位于 uni_modules/lime-tabbar/components/lime-tabbar -->
<lime-tabbar />
```

## 插件标签说明
- `l-tabbar`：标签栏组件
- `lime-tabbar`：演示标签

## API文档

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的名称或索引值 | string | - |
| value | 当前选中标签的名称或索引值 | string | - |
| fixed | 是否固定在底部 | boolean | `true` |
| bordered | 是否显示外边框 | boolean | `true` |
| split | 是否显示分割线 | boolean | `false` |
| placeholder | 固定在底部时是否生成占位元素 | boolean | `true` |
| zIndex | 元素z-index | number | `885` |
| shape | 标签栏形状，可选`round` | string | `normal` |
| theme | 选项风格，可选`tag` | string | `normal` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | boolean | `true` |
| activeColor | 选中标签的颜色 | string | - |
| color | 未选中标签的颜色 | string | - |
| activeBgColor | 选中标签的背景颜色 | string | - |
| iconSize | 图标大小 | string | - |
| fontSize | 字体大小 | string | - |
| lStyle | 样式 | string | - |

### Tabbar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换标签时触发 | active: string |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 标签值，作为匹配的标识符 | _string_ | `-` |
| icon | 图标名称或图片链接，等同于 [Icon](https://ext.dcloud.net.cn/plugin?id=14057) 组件的 name 属性 | _string_ | `-` |
| disabled | 是否禁用 | _boolean_ | `false` |
| label | 标签文本 | _string_ | `` |
| badgeProps | 自定义徽标的属性，传入的对象会被透传给 [Badge](https://ext.dcloud.net.cn/plugin?id=13616) 组件的 props | _Object_ | `` |


### TabbarItem Slots

| 插槽名 | 说明 |
| --- | --- |
| icon | 自定义图标 |
| default | 默认插槽 |
| extra | 额外插槽，在文本下方 |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-tabbar-bg-color` | `$bg-color-container` | 标签栏背景色 |
| `--l-tabbar-border-color` | `$border-color-1` | 标签栏边框颜色 |
| `--l-tabbar-round-shadow` | `$shadow-3` | 圆角模式阴影效果 |
| `--l-tabbar-z-index` | `10` | 标签栏的 z-index 层级 |
| `--l-tabbar-height` | `80rpx` | 标签栏高度 |
| `--l-tabbar-round-margin-x` | `16px` | 圆角模式水平外边距 |
| `--l-tabbar-item-margin-x` | `0` | 标签项水平外边距 |
| `--l-tabbar-item-margin-y` | `8px` | 标签项垂直外边距 |
| `--l-tabbar-item-padding-x` | `12px` | 标签项水平内边距 |
| `--l-tabbar-item-padding-y` | `0` | 标签项垂直内边距 |
| `--l-tabbar-item-crowded-padding-x` | `8px` | 拥挤状态下标签项水平内边距 |
| `--l-tabbar-color` | `$text-color-1` | 标签项默认文字颜色 |
| `--l-tabbar-active-color` | `$primary-color` | 标签项激活状态文字颜色 |
| `--l-tabbar-font-size` | `32rpx` | 标签项默认文字大小 |
| `--l-tabbar-min-font-size` | `$font-size-sm` | 标签项最小文字大小 |
| `--l-tabbar-active-bg-color` | `$primary-color-1` | 标签项激活状态背景色 |
| `--l-tabbar-disabled-opacity` | `0.5` | 禁用状态透明度 |


## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |