# lime-pagination 分页
- 分页器用于分隔长列表，每次只加载一个页面。兼容uniapp/uniappx
- 插件依赖`lime-style`,`lime-shared`不喜勿下

## 文档
  [pagination【站点1】](https://limex.qcoon.cn/components/pagination.html)
  [pagination【站点2】](https://limeui.netlify.app/components/pagination.html)
  [pagination【站点3】](https://limeui.familyzone.top/components/pagination.html)

## 安装
插件市场导入即可，首次安装可能需要重新编译


## 代码演示
### 基础使用
通过 `v-model` 来绑定当前页码。`total`设置数据总量，`page-size`设置每页数量，`pager-count`设置按钮数量。
```html
<l-pagination v-model="currentPage" :total="24" :page-size="5" :pager-count="3" />
```
```js
const currentPage = ref(1)
```

### 简单模式
通过 `simple` 设置为简单模式
```html
<l-pagination v-model="currentPage" :total="24"  :simple="true"/>
```

### 显示省略号
设置 `force-ellipses` 后会展示省略号按钮，点击后可以快速跳转。`showPrevButton`设置是否显示上一页按钮。`showNextButton`设置是否显示下一页按钮
```html
<l-pagination 
	v-model="currentPage" 
	:total="204" 
	:page-size="5" 
	:pagerCount="5" 
	:showPrevButton="false"
	:showNextButton="false"
	force-ellipses/>
```

### 禁用
设置 `disabled` 禁用分页器，
```html
<l-pagination 
	v-model="currentPage" 
	:total="204" 
	:page-size="5" 
	:pagerCount="5" 
	:showPrevButton="false"
	:showNextButton="false"
	:disabled="true"
	force-ellipses/>
```

### 自定义
插件提供了三个插槽：`prev`,`page`,`next`可以高度自由自定义样式
```html
<l-pagination
	v-model="currentPage" 
	:total="204" 
	:pageSize="5" 
	:pagerCount="3" 
	force-ellipses>
	<template #prev="{disabled}">
		<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px"></text>
	</template>
	<template #page="{label, active}">
		<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px; margin: 0 5px;">{{label}}</text>
	</template>
	<template #next="{disabled}">
		<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px"></text>
	</template>
</l-pagination>
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-pagination/compoents/lime-pagination -->
<lime-pagination />
```


### 插件标签
- 默认 l-pagination 为 component
- 默认 lime-pagination 为 demo

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

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前页码 | _number_ | `-` |
| total | 总记录数，用于计算总页数 | _number_ | `` |
| pageSize | 每页显示的记录数 | _number_ | `10` |
| pagerCount | 显示的页码按钮数量 | _number_ | `5` |
| disabled | 是否禁用分页 | _boolean_ | `false` |
| forceEllipses | 是否显示省略号 | _boolean_ | `false` |
| simple | 是否为简单分页 | _boolean_ | `false` |
| showPrevButton | 是否展示上一页按钮 | _boolean_ | `true` |
| showNextButton | 是否展示下一页按钮 | _boolean_ | `true` |
| prevText | 上一页按钮文字 | _string_ | `上一页` |
| nextText | 下一页按钮文字 | _string_ | `下一页` |
| bgColor | 背景色 | _string_ | `-` |
| color | 文本色 | _string_ | `-` |
| activeBgColor | 激活背景色 | _string_ | `-` |
| activeColor | 激活文本色 | _string_ | `-` |
| fontSize | 字体尺寸 | _string_ | `-` |
| radius | 圆角 | _string_ | `-` |
| borderColor | 描边色 | _string_ | `-` |
| itemWidth | 每项宽度 | _string_ | `-` |
| itemHeight | 每项高度 | _string_ | `-` |

### Events

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| change    | 切换分页触发           | -event:page- |

### Slots

| 名称            | 说明         |
| --------------- | ------------ |
| prev  | 上一页插槽：`{disabled}`     |
| next | 下一页插槽：`{disabled}`  |
| page | 页码插槽：`{label, active}`  |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| --l-pagination-font-size         | _$font-size-md_            | -    |
| --l-pagination-item-width         | _40px_            | -    |
| --l-pagination-item-height         | _40px_            | -    |
| --l-pagination-text-color         | _$text-color-2_            | -    |
| --l-pagination-bg-color         | _$gray-1_            | -    |
| --l-pagination-active-bg-color         | _$primary-color_            | -    |
| --l-pagination-active-text-color         | _white_            | -    |
| --l-pagination-border-radius         | _5px_            | -    |
| --l-pagination-disabled-opacity         | _0.5_            | -    |
| --l-pagination-disabled-color         | _$font-size-md_            | -    |
| --l-pagination-font-size         | _$text-color-4_            | -    |
| --l-pagination-disabled-bg-color         | _$bg-color-page_            | -    |
| --l-pagination-simple-color        | _$text-color-2_            | -    |
| --l-pagination-gap         | _3px_            | -    |
| --l-pagination-border-color         | _transparent_            | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)