# lime-highlight 高亮文本
- 参照 vant 实现的文本高亮, 作用是高亮指定文本内容
- 插件依赖`lime-shared`、`lime-style`不喜勿下


## 文档
 🚀 [highlight【站点1】](https://limex.qcoon.cn/components/highlight.html)
 🌍 [highlight【站点2】](https://limeui.netlify.app/components/highlight.html)
 🔥 [highlight【站点3】](https://limeui.familyzone.top/components/highlight.html)


## 安装
插件市场导入即可，首次导入可能需要重新编译

## 代码演示
### 基本使用
你可以通过 `keywords` 指定需要高亮的关键字，通过 `text` 指定文本。

```html
<l-highlight keywords="难题" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
```

### 多字符匹配
如果需要指定多个关键字，以数组的形式传入 `keywords`。

```html
<l-highlight :keywords="['难题', '终有一天', '答案']" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
```

### 设置高亮标签类名
通过 `highlight-class` 可以设置高亮标签的类名，以便自定义样式。

```html
<l-highlight keywords="生活" highlight-class="custom-class" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
```

### 设置高亮样式
通过 `highlight-style` 可以设置高亮标签的样式。

```html
<l-highlight keywords="生活" highlight-class="custom-class" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
```

### 插槽
通过 插槽 可以自由设置样式。

```html
<l-highlight keywords="生活" highlight-style="color: red" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" >
	<template #default="{item}">
		<text :style="{color: item.highlight? '#07c160': '#8e69d3'}">{{item.text}}</text>
	</template>
</l-highlight>
```



## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| auto-escape | 是否自动转义 | _boolean_ | `true` |
| case-sensitive | 是否区分大小写 | _boolean_ | `false` |
| highlight-class | 高亮元素的类名 | _string_ | - |
| highlight-style | 高亮元素的样式 | _string_ | - |
| keywords | 期望高亮的文本 | _string \| string[]_ | - |
| text | 源文本 | _string_ | - |
| unhighlight-class | 非高亮元素的类名 | _string_ | - |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)