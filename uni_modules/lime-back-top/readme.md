# lime-back-top 回到顶部组件
一个功能丰富的回到顶部组件，用于当页面过长往下滑动时，帮助用户快速回到页面顶部。支持自定义图标、文本、形状、位置等多种配置，可用于长列表、长文章、商品详情等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的交互设计需求。

> 插件依赖：`lime-shared`、`lime-style`、`lime-icon`

## 文档链接
📚 组件详细文档请访问以下站点：
- [回到顶部组件文档 - 站点1](https://limex.qcoon.cn/components/back-top.html)
- [回到顶部组件文档 - 站点2](https://limeui.netlify.app/components/back-top.html)
- [回到顶部组件文档 - 站点3](https://limeui.familyzone.top/components/back-top.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-back-top`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-back-top`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::


## 代码演示

### 基础用法
最简单的回到顶部组件用法，点击后自动滚动到页面顶部。

```html
<l-back-top />
```

### 带文本的回到顶部
添加文本提示，使用户更清楚按钮的功能。

```html
<l-back-top text="顶部" />
```

### 自定义图标
通过`icon`属性设置自定义图标。

```html
<l-back-top icon="arrow-up" />
```

### 不同形状
通过`shape`属性设置不同的形状，支持圆形和方形。

```html
<l-back-top shape="circle" />
<l-back-top shape="square" />
```

### 自定义显示距离
通过`offset`属性设置页面滚动多少距离后显示回到顶部按钮。

```html
<l-back-top :offset="300" />
```

### 自定义位置
通过`bottom`和`right`属性设置按钮在屏幕中的位置。

```html
<l-back-top :bottom="100" :right="30" />
```

### 在小程序中使用
由于uniappx对所有的元素都是默认是相对定位`position: relative;`，必须保证插件是在页面的根节点，或者监听页面的滚动事件把`scrollTop`传给插件。

```html
<!-- 方式1：根节点 必须为页面 -->
<l-back-top text="顶部" />

<!-- 方式2：监听页面的滚动事件 把scrollTop传给插件 -->
<l-back-top text="顶部" :scrollTop="scrollTop"/>
```

```js
// 监听页面滚动
onPageScroll(e) {
  this.scrollTop = e.scrollTop;
}
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-back-top/components/lime-back-top -->
<lime-back-top />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-back-top` | 组件标签 |
| `lime-back-top` | 演示标签 |

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

### Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fixed | 是否固定在屏幕右下方 | _boolean_ | `true` |
| icon | 图标名称，值为 false 表示不显示图标 | _string \| boolean_ | `'backtop'` |
| iconSize | 图标大小 | _string_ | - |
| text | 按钮文本 | _string_ | - |
| bottom | 距离页面底部的距离 | _number \| string_ | - |
| right | 距离页面右侧的距离 | _number \| string_ | - |
| duration | 回到顶部所需时间（ms），nvue无效 | _number_ | `100` |
| scrollTop | 页面滚动距离，在不支持嵌套的组件里使用时需要传入 | _number_ | `0` |
| offset | 页面滚动多高后显示组件，nvue无效 | _number_ | `200` |
| target | nvue需要定位滚动到指定对象，uvue需要指定容器的ID | _string_ | - |
| shape | 按钮形状，可选值：`circle`、`square` | _string_ | `'circle'` |
| lStyle | 自定义样式 | _string_ | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | - |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-back-top-font-size` | `$font-size-sm` | 文字大小 |
| `--l-back-top-icon-size` | `$font-size-lg` | 图标大小 |
| `--l-back-top-text-color` | `$text-color-2` | 文字颜色 |
| `--l-back-top-bg-color` | `$bg-color-elevated` | 背景颜色 |
| `--l-back-top-border-color` | `$border-color-1` | 边框颜色 |
| `--l-back-top-size` | `50px` | 按钮大小 |
| `--l-back-top-border-width` | `0.5px` | 边框宽度 |
| `--l-back-top-border-radius-circle` | `$border-radius-hg` | 圆形按钮边框圆角 |
| `--l-back-top-border-radius-square` | `$border-radius-sm` | 方形按钮边框圆角 |
| `--l-back-top-padding-x` | `$spacer-sm` | 水平内边距 |
| `--l-back-top-padding-y` | `$spacer-sm` | 垂直内边距 |
| `--l-back-top-position-right` | `$spacer` | 右侧定位距离 |
| `--l-back-top-position-bottom` | `$spacer-xl` | 底部定位距离 |
| `--l-back-top-z-index` | `1000` | 层级 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |