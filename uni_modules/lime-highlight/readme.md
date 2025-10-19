# lime-highlight 文本高亮组件
一个功能丰富的文本高亮组件，用于在文本内容中高亮显示指定关键词。支持多关键词、大小写敏感、自动转义等多种配置，可用于搜索结果展示、关键词标记等多种场景。组件提供了丰富的自定义选项，可以满足各种文本高亮需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [文本高亮组件文档 - 站点1](https://limex.qcoon.cn/components/highlight.html)
- [文本高亮组件文档 - 站点2](https://limeui.netlify.app/components/highlight.html)
- [文本高亮组件文档 - 站点3](https://limeui.familyzone.top/components/highlight.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-highlight`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-highlight`组件

## 代码演示

### 基础用法
最简单的文本高亮组件用法，设置原始文本和需要高亮的关键词。

```html
<l-highlight text="这是一段包含关键词的文本" keywords="关键词"></l-highlight>
```

### 多关键词高亮
同时高亮多个关键词。

```html
<l-highlight 
  text="这是一段包含多个关键词的文本示例" 
  :keywords="['关键词', '示例']"
></l-highlight>
```



### 自定义高亮样式
设置高亮文本的样式。

```html
<l-highlight 
  text="这是一段包含关键词的文本" 
  keywords="关键词" 
  highlight-style="color: #ff5500; font-weight: bold;">
</l-highlight>
```

### 使用样式类
通过样式类自定义高亮和非高亮文本的样式。

```html
<l-highlight 
  text="这是一段包含关键词的文本" 
  keywords="关键词" 
  highlight-class="custom-highlight" 
  unhighlight-class="custom-text">
</l-highlight>

<style>
.custom-highlight {
  color: #ff5500;
  font-weight: bold;
  background-color: #ffe7d9;
}
.custom-text {
  color: #333;
}
</style>
```



### 自定义渲染
使用插槽自定义渲染高亮和非高亮部分。

```html
<l-highlight keywords="生活" highlight-style="color: red" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" >
	<template #default="{item}">
		<text :style="{color: item.highlight? '#07c160': '#8e69d3'}">{{item.text}}</text>
	</template>
</l-highlight>
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-highlight/components/lime-highlight -->
<lime-highlight />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-highlight` | 组件标签 |
| `lime-highlight` | 演示标签 |

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
| text | 原始文本内容 | _string_ | `""` |
| keywords | 需要高亮的关键词，支持字符串或字符串数组 | _string \| string[]_ | `[]` |
| autoEscape | 是否自动转义正则特殊字符 | _boolean_ | `true` |
| caseSensitive | 是否区分大小写 | _boolean_ | `false` |
| highlightStyle | 高亮部分的样式 | _string \| object_ | - |
| highlightClass | 高亮部分的样式类名 | _string_ | `''` |
| unhighlightClass | 普通文本的样式类名 | _string_ | `''` |

### Slots 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义渲染内容 | `{ item: { text: string, highlight: boolean, start: number, end: number } }` |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-highlight-text-color` | `$primary-color` | 高亮文本颜色 |
| `--l-highlight-normal-color` | `currentColor` | 普通文本颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |