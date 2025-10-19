# lime-avatar 头像组件
一个功能丰富的头像组件，用于展示用户头像或图标。支持多种形状、尺寸、颜色等配置，可用于用户信息展示、评论列表、聊天界面等多种场景。组件提供了丰富的自定义选项，可以满足各种头像展示需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [头像组件文档 - 站点1](https://limex.qcoon.cn/components/avatar.html)
- [头像组件文档 - 站点2](https://limeui.netlify.app/components/avatar.html)
- [头像组件文档 - 站点3](https://limeui.familyzone.top/components/avatar.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-avatar`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-avatar`和`l-avatar-group`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::


## 代码演示

### 基础用法
最简单的头像组件用法，显示图片头像。

```html
<l-avatar src="https://example.com/avatar.jpg"></l-avatar>
```

### 不同形状
头像支持圆形和方形两种形状。

```html
<l-avatar src="https://example.com/avatar.jpg" shape="circle"></l-avatar>
<l-avatar src="https://example.com/avatar.jpg" shape="square"></l-avatar>
```

### 不同尺寸
头像支持多种预设尺寸，也可以自定义大小。

```html
<l-avatar src="https://example.com/avatar.jpg" size="small"></l-avatar>
<l-avatar src="https://example.com/avatar.jpg" size="medium"></l-avatar>
<l-avatar src="https://example.com/avatar.jpg" size="large"></l-avatar>
<l-avatar src="https://example.com/avatar.jpg" size="48px"></l-avatar>
```

### 图标头像
使用图标作为头像内容。

```html
<l-avatar icon="user"></l-avatar>
```

### 文字头像
使用文字作为头像内容。

```html
<l-avatar>A</l-avatar>
```

### 自定义颜色
设置头像的背景颜色和文字颜色。

```html
<l-avatar color="#1989fa" text-color="#ffffff">A</l-avatar>
```

### 头像组
多个头像组合展示，可以用于团队成员展示等场景。

```html
<l-avatar-group>
  <l-avatar src="https://example.com/avatar1.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar2.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar3.jpg"></l-avatar>
</l-avatar-group>
```

### 头像组最大显示数量
通过`max`设置最多显示多少个，超过后显示一个折叠的头像，如`+5`,通过`collapseText`可设置折叠头像显示的内容。
```html
<l-avatar-group :max="5" collapseFontSize="20rpx"  collapseText="更多" cascading="left-up">
	<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar1.png"></l-avatar>
	<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar2.png"></l-avatar>
	<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar3.png"></l-avatar>
	<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar4.png"></l-avatar>
	<l-avatar color="#3283ff">陈</l-avatar>
	<l-avatar color="#3283ff">王</l-avatar>
	<l-avatar color="#3283ff">李</l-avatar>
	<l-avatar color="#3283ff">黄</l-avatar>
</l-avatar-group>
```

### 头像组层叠方向
设置头像组中头像的层叠方向。

```html
<l-avatar-group cascading="left-up">
  <l-avatar src="https://example.com/avatar1.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar2.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar3.jpg"></l-avatar>
</l-avatar-group>

<l-avatar-group cascading="right-up">
  <l-avatar src="https://example.com/avatar1.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar2.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar3.jpg"></l-avatar>
</l-avatar-group>
```

### 自定义折叠头像
自定义超出最大显示数量时的折叠头像样式。

```html
<l-avatar-group 
  :max="3" 
  collapse-text="+2" 
  collapse-color="#1989fa" 
  collapse-text-color="#ffffff"
>
  <l-avatar src="https://example.com/avatar1.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar2.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar3.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar4.jpg"></l-avatar>
  <l-avatar src="https://example.com/avatar5.jpg"></l-avatar>
</l-avatar-group>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-avatar/components/lime-avatar -->
<lime-avatar />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-avatar` | 头像组件标签 |
| `l-avatar-group` | 头像组组件标签 |
| `lime-avatar` | 演示标签 |

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

### Avatar Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 头像尺寸，可选值为 `small`、`medium`、`large` 或具体尺寸如 `24px` | _string_ | `medium` |
| shape | 头像形状，可选值为 `circle`、`square` | _string_ | `circle` |
| src | 图片地址 | _string_ | - |
| icon | 图标名称,[图标](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| fontSize | 文字大小 | _string_ | - |
| color | 背景颜色 | _string_ | - |
| textColor | 文字颜色 | _string_ | - |

### AvatarGroup Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cascading | 图片之间的层叠关系，可选值为 `left-up`、`right-up` | _string_ | `right-up` |
| max | 能够同时显示的最多头像数量 | _number_ | - |
| shape | 头像形状，可选值为 `circle`、`square` | _string_ | - |
| size | 头像尺寸，可选值为 `small`、`medium`、`large` 或具体尺寸如 `24px` | _string_ | `medium` |
| collapseText | 折叠头像上显示的文字 | _string_ | - |
| collapseFontSize | 折叠头像上文字的大小 | _string_ | - |
| collapseColor | 折叠头像的背景颜色 | _string_ | - |
| collapseTextColor | 折叠头像上文字的颜色 | _string_ | - |

### Avatar Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义头像内容，一般用于展示文字或自定义图标 |

### AvatarGroup Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 头像组内容，一般放置多个 l-avatar 组件 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-avatar-bg-color` | `$primary-color-1` | 头像背景颜色 |
| `--l-avatar-text-color` | `$primary-color` | 头像文字颜色 |
| `--l-avatar-circle-border-radius` | `$border-radius-hg` | 圆形头像边框圆角 |
| `--l-avatar-square-border-radius` | `$border-radius-md` | 方形头像边框圆角 |
| `--l-avatar-small-size` | `36px` | 小尺寸头像大小 |
| `--l-avatar-medium-size` | `48px` | 中尺寸头像大小 |
| `--l-avatar-large-size` | `64px` | 大尺寸头像大小 |
| `--l-avatar-small-font-size` | `14px` | 小尺寸头像文字大小 |
| `--l-avatar-medium-font-size` | `18px` | 中尺寸头像文字大小 |
| `--l-avatar-large-font-size` | `30px` | 大尺寸头像文字大小 |
| `--l-avatar-small-icon-size` | `20px` | 小尺寸头像图标大小 |
| `--l-avatar-medium-icon-size` | `24px` | 中尺寸头像图标大小 |
| `--l-avatar-large-icon-size` | `32px` | 大尺寸头像图标大小 |
| `--l-avatar-small-border-width` | `1px` | 小尺寸头像边框宽度 |
| `--l-avatar-medium-border-width` | `2px` | 中尺寸头像边框宽度 |
| `--l-avatar-large-border-width` | `3px` | 大尺寸头像边框宽度 |
| `--l-avatar-border-color` | `#fff` | 头像边框颜色 |
| `--l-avatar-group-overlapping` | `-8px` | 头像组重叠距离 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |