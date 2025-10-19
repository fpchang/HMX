# lime-divider 分割线
一个分割线组件，用于将内容分隔为多个区域，支持水平和垂直分割线，可以在分割线中间插入文本内容。
> 插件依赖: `lime-style`,`lime-shared`


## 文档链接
📚 组件详细文档请访问以下站点：
- [分割线文档 - 站点1](https://limex.qcoon.cn/components/divider.html)
- [分割线文档 - 站点2](https://limeui.netlify.app/components/divider.html)
- [分割线文档 - 站点3](https://limeui.familyzone.top/components/divider.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-divider`
2. 首次导入可能需要重新编译


## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<l-divider />
```

### 展示文本

通过插槽在可以分割线中间插入内容。可使用`content`或默认插槽

```html
<l-divider>文本</l-divider>
<l-divider content="文本"></l-divider>
```

### 内容位置

通过 `align` 指定内容所在位置。

```html
<l-divider align="left">文本</l-divider>
<l-divider align="right">文本</l-divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<l-divider dashed>文本</l-divider>
```

### 自定义样式

可以直接通过 `color`设置线条颜色，`text-color` 属性设置文本颜色。

```html
<l-divider >文本</l-divider>
```

### 垂直

```html
文本
<l-divider vertical />
文本
<l-divider vertical dashed />
文本
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
<!-- 代码位于 uni_modules/lime-divider/components/lime-divider -->
<lime-divider />
```

## 插件标签说明
- `l-divider`：分割线组件
- `lime-divider`：演示标签

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否使用虚线 | boolean | `false` |
| content | 文本内容 | string | - |
| align | 内容位置，可选值为 `left` `right` | string | `center` |
| vertical | 是否为垂直分割线 | boolean | `false` |
| color | 线条颜色 | string | - |
| textColor | 文本颜色 | string | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义文本内容 |

## 主题定制

组件提供了下列CSS变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-divider-color` | `$border-color-2` | 分割线颜色 |
| `--l-divider-text-color` | `$text-color-3` | 分割线文本颜色 |
| `--l-divider-font-size` | `12px` | 分割线文本大小 |
| `--l-divider-line-height` | `20px` | 分割线文本行高 |
| `--l-divider-line-style` | `solid` | 分割线样式（solid/dashed等） |
| `--l-divider-margin` | `10px` | 分割线外边距 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |