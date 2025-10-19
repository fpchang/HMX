# lime-cell 单元格
单元格用于各个类别行的信息展示，列表项，可组成列表。兼容uniapp/uniappx   
插件依赖`lime-shared`、`lime-icon`、`lime-style`、不喜勿下


## 文档
 🚀 [cell【站点1】](https://limex.qcoon.cn/components/cell.html)
 🌍 [cell【站点2】](https://limeui.netlify.app/components/cell.html)
 🔥 [cell【站点3】](https://limeui.familyzone.top/components/cell.html)



## 安装
插件市场导入即可，第一次导入可能还需要重新编译

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用！   
若不需要[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)删除即可
:::

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<l-cell-group>
  <l-cell title="单行标题" :arrow="true"></l-cell>
  <l-cell title="单行标题" :arrow="true" :hover="true" :required="true" />
</l-cell-group>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

```html
<l-cell-group inset>
  <l-cell title="单行标题" note="辅助信息" :arrow="true" />
  <l-cell title="单行标题" description="一段很长很长的内容文字" :arrow="true"></l-cell>
</l-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<van-cell title="单行标题" note="辅助信息" size="small" />
<van-cell title="单行标题" note="辅助信息" size="small" description="一段很长很长的内容文字" />
```

### 图标图片

通过 `icon` 属性在标题左侧展示[图标](https://ext.dcloud.net.cn/plugin?id=14057)，通过 `image` 属性在标题左侧展示图片。

```html
<l-cell title="单行标题" icon="animation-1" :arrow="true" :hover="true" />
<l-cell title="多行带头像" description="一段很长很长的内容文字" :arrow="true">
	<template #icon>
	    <l-avatar shape="circle" src="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	</template>
</l-cell>
<l-cell title="多行带图片" description="一段很长很长的内容文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
```

### 展示箭头

设置 `arrow` 属性后会在单元格右侧显示箭头。

```html
<van-cell title="单元格" :arrow="true" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转。通过`openType`设置跳转类型

```html
<l-cell title="URL 跳转" :arrow="true" url="/pages/test/index" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<l-cell-group title="分组1">
  <l-cell title="单行标题" />
</l-cell-group>
<l-cell-group title="分组2">
  <l-cell title="单行标题" />
</l-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<l-cell value="内容" :arrow="true">
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <text class="custom-title">单行标题</text>
    <l-tag type="primary">标签</l-tag>
  </template>
</l-cell>



<l-cell title="左侧图标">
  <!-- 使用 icon 插槽来自定义左侧图标 -->
  <template #icon>
    <l-icon name="search" />
  </template>
</l-cell>



<l-cell title="右侧图标">
  <!-- 使用 rightIcon 插槽来自定义右侧图标 -->
  <template #rightIcon>
    <l-icon name="search" />
  </template>
</l-cell>

<l-cell title="辅助信息">
  <!-- 使用 note 插槽来自定义右侧辅助信息 -->
  <template #note>
    <l-badge :content="20" />
  </template>
</l-cell>

<l-cell title="内容描述">
  <!-- 使用 description 插槽来自定义下方内容描述 -->
  <template #description>
    <text>多行高度不定，长文本自动换行，该选项的描述是一段很长的内容</text>
  </template>
</l-cell>
```

### 对齐方式

通过 `align` 可以设置内容的对齐方式，可选项：top/middle/bottom,默认是middle。

```html
<l-cell align="bottom" title="单行标题" note="内容" description="一段很长很长的内容文字" />
```

### 查看示例
导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-cell/compoents/lime-cell 
<lime-cell />
```

### 插件标签
默认 l-cell 为 component  
默认 l-cell-group 为 component  
默认 lime-cell 为 demo

### Vue2使用
插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置     
关键代码是: 在main.js中 在vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  | `-`     |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _string_ | - |
| note | 右侧内容 | _string_ | - |
| description | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `small` | _string_ | - |
| icon | 左侧图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| iconColor | 左侧图标颜色 | _string_ | - |
| iconSize | 左侧图标尺寸 | _string_ | - |
| rightIcon | 右侧图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| rightIconColor | 右侧图标颜色 | _string_ | - |
| rightIconSize | 右侧图标尺寸 | _string_ | - |
| image | 左侧图片链接 | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| bordered | 是否显示内边框 | _boolean_ | `true` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| arrow | 是否展示右侧箭头 | _boolean_ | `false` |
| hover | 是否开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| openType | 链接跳转类型,可选值：switchTab/reLaunch/redirectTo | _string_ | `navigateTo` |
| align | 内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | _string_ | `middle` |
| imageWidth | 图片宽度 | _string_ | `-` |
| imageHeight | 图片高度 | _string_ | `-` |
| bgColor | 背景色 | _string_ | `-` |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: UniPointerEvent_ |


### Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| note      | 自定义右侧内容               |
| default      | 同上，自定义右侧内容               |
| description | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| rightIcon | 自定义右侧图标               |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式)。uvue app无效。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-cell-height: | _auto_ | - |
| --l-cell-line-height: | _1.56_ | - |
| --l-cell-padding-y: | _32rpx_ | - |
| --l-cell-padding-x: | _32rpx_ | - |
| --l-cell-bg-color: | _white_ | - |
| --l-cell-hover-color: | _--l-gray-1_ | - |
| --l-cell-border-color: | _--l-border-color-2_ | - |
| --l-cell-border-left-space: | _--l-cell-padding-y_ | - |
| --l-cell-border-right-space: | _0_ | - |
| --l-cell-description-color: | _--l-text-color-3_ | - |
| --l-cell-description-font-size: | _--l-font-size_ | - |
| --l-cell-description-small-font-size: | _--l-font-size-sm_ | - |
| --l-cell-description-line-height: | _--l-line-height_ | - |
| --l-cell-note-color: | _--l-text-color-4_ | - |
| --l-cell-note-font-size: | _--l-font-size-md_ | - |
| --l-cell-note-small-font-size: | _--l-font-size_ | - |
| --l-cell-title-color: | _--l-text-color-1_ | - |
| --l-cell-title-font-size: | _--l-font-size-md_ | - |
| --l-cell-title-small-font-size: | _--l-font-size_ | - |
| --l-cell-left-icon-color: | _--l-primary-color_ | - |
| --l-cell-left-icon-size: | _46rpx_ | - |
| --l-cell-left-small-icon-size: | _42rpx_ | - |
| --l-cell-right-icon-color: | _--l-text-color-4_ | - |
| --l-cell-right-icon-size: | _44rpx_ | - |
| --l-cell-required-color: | _--l-error-color-6_ | - |
| --l-cell-required-font-size: | _--l-font-size-md_ | - |
| --l-cell-image-width: | _96rpx_ | - |
| --l-cell-image-height: | _96rpx_ | - |

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)