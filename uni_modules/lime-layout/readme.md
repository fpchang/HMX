# lime-layout 布局
- 提供`row`/`col`来划分区块来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性。
- 插件依赖`lime-style`,`lime-shared`不喜勿下

## 文档
[layout](https://limex.qcoon.cn/components/layout.html)

## 安装
插件市场导入即可

## 代码演示
### 基础使用
- `span` 控制列宽（1-24）
- `offset` 设置列偏移量  

```html
<l-row>
	<l-col span="8"><text>span: 8</text></l-col>
	<l-col span="8"><text>span: 8</text></l-col>
	<l-col span="8"><text>span: 8</text></l-col>
	<l-col ></l-col>
</l-row>
<l-row>
	<l-col span="4"><text>span: 4</text></l-col>
	<l-col span="10" offset="4"><text>offset: 4, span: 10</text></l-col>
</l-row>
<l-row>
  <l-col offset="12" span="12"><text>offset: 12, span: 12</text></l-col>
</l-row>
<l-row gap="20">
  <l-col span="6"><text>span: 6</text></l-col>
  <l-col><text>span</text></l-col>
  <l-col span="auto"><text>span: auto</text></l-col>
</l-row>
```

### 间距控制
- 水平间距：gap="20"（单位支持rpx/px）
- 垂直间距：:gap="[20,20]"（[水平, 垂直]）

```html
<l-row gap="20">
	<l-col span="8"><text>span: 8</text></l-col>
	<l-col span="8"><text>span: 8</text></l-col>
	<l-col span="8"><text>span: 8</text></l-col>
</l-row>
<l-row :gap="[20,20]">
	<l-col span="12"><text>span: 8</text></l-col>
	<l-col span="12"><text>span: 8</text></l-col>
	<l-col span="12"><text>span: 8</text></l-col>
	<l-col span="12"><text>span: 8</text></l-col>
</l-row>
```


### 对齐方式
- 水平对齐：`justify="start | center | end | around | between | evenly"`
- 垂直对齐：`align="start | center | end | stretch"`  

```html
<!-- 水平对齐 -->
<l-row :gap="[0,10]" justify="start">
	<l-col span="6"><text>span: 6</text></l-col>
	<l-col span="6"><text>span: 6</text></l-col>
</l-row>
<l-row :gap="[0,10]" justify="center">
	<l-col span="6"><text>span: 6</text></l-col>
	<l-col span="6"><text>span: 6</text></l-col>
</l-row>
<l-row :gap="[0,10]" justify="end">
	<l-col span="6"><text>span: 6</text></l-col>
	<l-col span="6"><text>span: 6</text></l-col>
</l-row>
<!-- 垂直对齐 -->
<l-row :gap="[0,10]" align="start">
	<l-col span="12"><text>span: 6</text></l-col>
	<l-col span="12"><text>span: 6</text></l-col>
</l-row>
<l-row :gap="[0,10]" align="center">
	<l-col span="12"><text>span: 6</text></l-col>
	<l-col span="12"><text>span: 6</text></l-col>
</l-row>
<l-row :gap="[0,10]" align="end">
	<l-col span="12"><text>span: 6</text></l-col>
	<l-col span="12"><text>span: 6</text></l-col>
</l-row>
```

### 宽高比控制
通过配置`aspectRatio`属性，可以使`col`组件自动维持指定的宽度与高度比例，特别适合需要保持特定比例的媒体内容布局。

```html
<l-row :gap="[10,10]" align="start">
	<l-col span="8" :aspectRatio="3/4"><text style="background-color: #ddd; flex: 1">3/4</text></l-col>
	<l-col span="8" :aspectRatio="3/4"><text style="background-color: #ddd; flex: 1">3/4</text></l-col>
	<l-col span="8" :aspectRatio="3/4"><text style="background-color: #ddd; flex: 1">3/4</text></l-col>
</l-row>
```


### 列顺序
通过`order`控制列顺序（数值越大越靠后）。uniapp x app无效

```html
<l-row :gap="[0,10]" align="start">
	<l-col span="12"><text>span: 6</text></l-col>
	<l-col span="12" :order="-1"><text>span: 6</text></l-col>
</l-row>
<l-row :gap="[0,10]" align="center">
	<l-col :order="2"><text>span: 6</text></l-col>
	<l-col :order="1"><text>span: 6</text></l-col>
	<l-col><text>span: 6</text></l-col>
</l-row>
```

### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-layout/compoents/lime-layout 
<lime-layout />
```

### 插件标签
- 默认 l-layout 为 component
- 默认 lime-layout 为 demo

### Vue2
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API

### Row Props
| 属性名   | 类型                                 | 默认值  | 可选值                                                                 | 说明                                                                 |
|----------|--------------------------------------|---------|-----------------------------------------------------------------------|----------------------------------------------------------------------|
| gap      | Array<string\|number>\|string\|number | -       | 数字或带单位字符串（如：`20`/`'20rpx'`）                              | 列间距，数组格式时表示[垂直间距, 水平间距]                           |
| justify  | string                               | start   | start/center/end/around/between/evenly                               | 主轴对齐方式（水平方向）                                             |
| align    | string                               | start   | start/center/end/stretch                                              | 交叉轴对齐方式（垂直方向）                                           |
| wrap     | boolean                              | true    | true/false                                                            | 是否允许子元素换行                                                   |
| lStyle   | string\|Object                       | -       | CSS字符串或样式对象                                                   | 自定义容器样式                                                       |

### Col Props
| 属性名 | 类型                | 默认值 | 说明                                                                 |
|--------|---------------------|--------|----------------------------------------------------------------------|
| span   | number\|string      | -     | 列占比（1-24），设为`auto`时自动分配剩余空间，`none`会根据自身宽高来设置尺寸   |
| offset | number\|string      | 0      | 列偏移量（基于24栅格）                                               |
| order  | number              | 0      | 排序优先级（数值越大越靠后）                                         |
| aspectRatio  | number        | -      | 宽高比                                     |
| lStyle | string\|Object      | -      | 自定义列样式                                                        |



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)