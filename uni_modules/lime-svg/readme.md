---
name: lime-svg 矢量图标
description: 基于 UTS 实现的原生矢量图标插件，支持加载本地、网络、源文本和 Base64 格式的 SVG 图标，可自定义颜色。
tags:
  - svg
  - 图标
  - 矢量
  - 原生
componentTag: l-svg
plugin: lime-svg
category: 原生组件
dependencies:
  - lime-shared
---

# lime-svg 矢量图标

一款基于 UTS 实现的原生矢量图标插件，支持 uniapp 和 uniappx。该插件提供了两种渲染机制：原生插件和 WebView，可以根据需求选择合适的渲染方式。支持加载本地、网络、源文本和 Base64 格式的 SVG 图标，并且可以自定义图标颜色。

> 插件依赖：[lime-shared](https://ext.dcloud.net.cn/plugin?name=lime-shared)

## 安装方法

1. 在 uni-app 插件市场中搜索并导入 `lime-svg`
2. 由于普通授权版无法自定义基座，如需使用原生渲染请购买源码版
3. 在页面中使用 `l-svg` 组件（组件）或 `lime-svg`（演示）

::: tip 注意🔔
- uniappx 安卓和 iOS 在 `HBX4.81` 之前需要自定义基座，之后不需要
- 原生插件实现不支持动画，如需动画请使用 WebView 渲染（`web=true`）
:::

## 代码演示

### 基础使用

通过设置 `src` 来加载 SVG 图标，支持本地路径、网络 URL、SVG 源文本和 Base64 编码等多种方式。

```html
<!-- 本地文件加载 -->
<l-svg style="width: 150rpx;height: 150rpx;" src="/static/svg/a.svg"></l-svg>

<!-- 网络文件加载 -->
<l-svg style="width: 150rpx;height: 150rpx;" src="https://www.xmplus.cn/uploads/images/20221228/b9e9d45054ab5795992a1e92584a278b.svg"></l-svg>

<!-- SVG 源文本加载 -->
<l-svg style="width: 150rpx;height: 150rpx;" src='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15h1.5V9H5v1.5h1zm2.5 0H13V9H8.5zm1.5-1.5v-3h1.5v3zm4 1.5h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14zM3 21V3h18v18z"/></svg>'></l-svg>

<!-- Base64 编码加载 -->
<l-svg style="width: 150rpx;height: 150rpx;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgMTVoMS41VjlINXYxLjVoMXptMi41IDBIMTNWOUg4LjV6bTEuNS0xLjV2LTNoMS41djN6bTQgMS41aDEuNXYtMi4yNUwxNy4yNSAxNUgxOWwtMi4yNS0zTDE5IDloLTEuNzVsLTEuNzUgMi4yNVY5SDE0ek0zIDIxVjNoMTh2MTh6Ii8+PC9zdmc+"></l-svg>
```

### 颜色设置

通过设置 `color` 来改变 SVG 图标颜色，注意：只支持纯色图标，多色图标无效。

```html
<!-- 设置红色 -->
<l-svg
  style="width: 150rpx;height: 150rpx;"
  color="red"
  src='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15h1.5V9H5v1.5h1zm2.5 0H13V9H8.5zm1.5-1.5v-3h1.5v3zm4 1.5h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14zM3 21V3h18v18z"/></svg>'
></l-svg>

<!-- 设置红色（Base64） -->
<l-svg
  style="width: 150rpx;height: 150rpx;"
  color="red"
  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgMTVoMS41VjlINXYxLjVoMXptMi41IDBIMTNWOUg4LjV6bTEuNS0xLjV2LTNoMS41djN6bTQgMS41aDEuNXYtMi4yNUwxNy4yNSAxNUgxOWwtMi4yNS0zTDE5IDloLTEuNzVsLTEuNzUgMi4yNVY5SDE0ek0zIDIxVjNoMTh2MTh6Ii8+PC9zdmc+"
></l-svg>
```

### WebView 渲染

通过设置 `:web="true"` 使用 WebView 渲染，支持动画效果。

```html
<l-svg
  style="width: 150rpx;height: 150rpx;"
  :web="true"
  src='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15h1.5V9H5v1.5h1zm2.5 0H13V9H8.5zm1.5-1.5v-3h1.5v3zm4 1.5h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14zM3 21V3h18v18z"/></svg>'
></l-svg>
```

## API 文档

### Props 分类

#### 🎯 基础配置

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | SVG 图标的源，支持本地路径、网络 URL、SVG 源文本和 Base64 编码 | string | '' | - |

#### 🎨 样式与外观

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| color | 图标颜色，仅对纯色图标有效 | string | '' | 任意合法颜色值 |
| lClass | 根元素自定义类名（externalClasses） | string \| UTSJSONObject | - | - |
| lStyle | 根元素自定义样式 | string \| UTSJSONObject | - | - |

#### ⚙️ 行为与交互

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| inherit | 是否以继承颜色方式渲染图标 | boolean | false | true / false |

#### 🔧 高级配置

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| web | 是否使用 WebView 渲染，支持动画效果 | boolean | false |

### Events

| 事件名 | 说明 | 回调参数 | 类型说明 |
| --- | --- | --- | --- |
| load | SVG 路径加载完成时触发 | event | UniImageLoadEvent，包含 width、height |
| error | SVG 路径加载失败时触发 | event | UniImageErrorEvent，包含错误信息 |
| click | 点击图标时触发 | - | WebView 模式由 WebView 内部点击事件触发；非 WebView 模式由根元素点击触发（Web、小程序、uvue 原生均支持） |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--svg` | - | SVG 图片 URL，由组件内部根据 `src` 自动设置 |
| `--color` | - | WebView 模式下的图标颜色，由组件内部根据 `color` 属性自动设置 |

> 注：非 uni-app-x APP 端默认宽高为 `1em`，uni-app-x APP 端默认宽高为 `24px`，可通过 `lStyle` 或外部 CSS 覆盖。

### 使用示例

**方式一：通过 lStyle 属性直接设置**

在单个组件实例上直接设置样式。

```html
<l-svg
    src="/static/svg/a.svg"
    :lStyle="{
        width: '32px',
        height: '32px'
    }">
</l-svg>
```

**方式二：通过 lClass 配合 CSS 样式**

通过自定义类名设置样式。

```html
<l-svg lClass="custom-svg" src="/static/svg/a.svg" />

<style>
.custom-svg {
    width: 32px;
    height: 32px;
}
</style>
```

**⚠️ 重要提示**

```html
<!-- 错误写法：不要在自定义组件上直接使用 class -->
<l-svg class="custom-style" />

<!-- 正确写法：使用 lClass 或 lStyle -->
<l-svg lClass="custom-style" />
<l-svg :lStyle="{ width: '32px', height: '32px' }" />

<!-- 正确写法：在父级上设置 class -->
<view class="custom-style">
    <l-svg />
</view>
```

### 暗黑模式

该组件不依赖 CSS 变量进行主题适配，图标颜色完全由 `color` 属性控制。在暗黑模式下，可通过响应式变量动态设置 `color` 值以适配主题。

```html
<l-svg :color="isDark ? '#ffffff' : '#333333'" src="/static/svg/a.svg"></l-svg>
```

## Vue2 使用说明

插件使用了 `composition-api`，如需在 Vue2 项目中使用，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在 main.js 中添加）：

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## 快速预览

导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-svg/components/lime-svg -->
<lime-svg />
```

## 插件标签说明

| 标签类型 | 示例 | 说明 |
|---------|------|------|
| 组件标签 | `l-svg` | 默认组件标签，直接使用组件功能 |
| 演示标签 | `lime-svg` | 默认演示标签，查看完整演示效果 |

## 文档链接

📚 组件详细文档请访问以下站点：
- [矢量图标文档 - 站点1](https://limex.qcoon.cn/components/svg.html)
- [矢量图标文档 - 站点2](https://limeui.netlify.app/components/svg.html)
- [矢量图标文档 - 站点3](https://limeui.familyzone.top/components/svg.html)

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |
