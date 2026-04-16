# lime-grid 宫格
一个宫格布局组件，用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。兼容uniapp/uniappx(h5,ios,安卓)。

> 插件依赖：`lime-style`,`lime-shared`   

### 基础功能
- 支持自定义列数
- 支持页面导航跳转
- 支持设置格子间距
- 支持带描述文字的宫格
- 支持内容横向排列
- 支持带边框宫格
- 支持提示信息（小红点、徽标）
- 支持卡片风格

## 文档链接
📚 组件详细文档请访问以下站点：
- [宫格文档 - 站点1](https://limex.qcoon.cn/components/grid.html)
- [宫格文档 - 站点2](https://limeui.netlify.app/components/grid.html)
- [宫格文档 - 站点3](https://limeui.familyzone.top/components/grid.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-grid`
2. 首次导入可能需要重新编译

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示
### 基础使用
通过`icon`属性设置格子内的图标，通过`image`属性设置格子图片，`text`属性设置文字内容。

```html
<l-grid>
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
	<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
</l-grid>
```

### 自定义列数
默认一行展示四个格子，可以通过`column`自定义列数。

```html
<l-grid :column="5">
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
	<l-grid-item text="最多四字" image="https://tdesign.gtimg.com/mobile/demos/avatar5.png" />
</l-grid>
```

### 页面导航
可以通过`url`属性进行页面跳转，通过`openType`属性控制跳转类型。

```html
<l-grid :column="3">
	<l-grid-item text="跳到首页" url="/pages/index/index" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="跳到首页" url="/pages/index/index" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="跳到首页" url="/pages/index/index" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
</l-grid>
```

### 格子间距
通过`gutter`属性设置格子之间的距离。

```html
<l-grid :gutter="10">
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
</l-grid>
```

### 带描述宫格
通过`description`属性详细描述

```html
<l-grid :column="3">
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="最多六个文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
</l-grid>
```

### 内容横排
通过`layout`属性设置为`horizontal`，可以让宫格的内容呈横向排列。

```html
<l-grid :column="2" align="left">
	<l-grid-item text="标题文字" description="描述文字" layout="horizontal" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" description="描述文字" layout="horizontal" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
</l-grid>
```

### 带边框宫格
通过`border`属性设置为`true`可给格子加描边。

```html
<l-grid :column="3" :border="true">
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar5.png" />
	<l-grid-item text="标题文字" description="描述文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
</l-grid>
```

### 提示信息
设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标。

```html
<l-grid>
	<l-grid-item text="标题文字" :dot="true" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" badge="5" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
	<l-grid-item text="标题文字" badge="15" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
	<l-grid-item text="标题文字" badge="New" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
</l-grid>
```


### 插槽
`icon`插槽，`text`插槽,`description`插槽
```html
<l-grid>
	<l-grid-item text="标题文字">
		<template #icon>
			<l-icon name="undertake-hold-up" size="48rpx"></l-icon>
		</template>
	</l-grid-item>
	<l-grid-item icon="undertake-hold-up">
		<template #text>
			<text>标题文字</text>
		</template>
	</l-grid-item>
	<l-grid-item text="标题文字" icon="undertake-hold-up">
		<template #description>
			<text>详情描述</text>
		</template>
	</l-grid-item>
</l-grid>
```


### 卡片
通过`inset`属性可以设置为卡片
```html
<l-grid :inset="true">
	<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
	<l-grid-item text="标题文字" icon="star"/>
	<l-grid-item text="标题文字" icon="download"/>
	<l-grid-item text="标题文字" icon="edit"/>
</l-grid>
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
<!-- 代码位于 uni_modules/lime-grid/components/lime-grid -->
<lime-grid />
```

## 插件标签说明
- `l-grid`：宫格容器组件
- `l-grid-item`：宫格项组件
- `lime-grid`：演示标签

## API文档

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| inset | 是否展示为圆角卡片风格 | boolean | `false` |
| align | 内容的对齐方式，可选值：left/center | string | `center` |
| bgColor | 每个格子的背景色 | string | - |
| padding | 每个格子的padding | string | - |
| hover | 是否开启点击反馈 | boolean | `false` |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 标题 | string | - |
| description | 标题下方的描述信息 | string | - |
| icon | 图标名称，等同于Icon组件的name属性 | string | - |
| iconColor | 图标颜色 | string | - |
| prefix | 图标前缀，用于自定义图标 | string | - |
| iconSize | 图标尺寸 | string | - |
| layout | 内容布局方式，可选值：vertical/horizontal | string | `vertical` |
| image | 图片链接 | string | - |
| url | 点击后跳转的链接地址 | string | - |
| dot | 是否显示图标右上角小红点 | boolean | `false` |
| badge | 图标右上角徽标的内容 | string \| number | - |
| bordered | 是否显示内边框 | boolean | `true` |
| disabled | 是否禁用点击反馈 | boolean | `false` |
| openType | 链接跳转类型，可选值：switchTab/reLaunch/redirectTo | string | `navigateTo` |
| imageWidth | 图片宽度 | string | - |
| imageHeight | 图片高度 | string | - |
| bgColor | 背景色 | string | - |
| borderColor | 描边色 | string | - |
| padding | 边距 | string | - |
| lStyle | 自定义样式 | string | - |
| lImageStyle | 自定义图片样式 | string\|object | - |
| lTitleStyle | 自定义标题样式 | string\|object | - |
| lDescriptionStyle | 自定义简介样式 | string\|object | - |
| lClass | 自定义类名 | string | - |
| lIconClass | 自定义图标类名 | string | - |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格时触发 | event: UniPointerEvent |

### GridItem Slots

| 名称 | 说明 |
| --- | --- |
| title | 自定义左侧标题 |
| description | 自定义标题下方的描述信息 |
| icon | 自定义左侧图标 |
| extra | 自定义额外底部的槽 |

## 主题定制

组件提供了下列CSS变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-grid-item-padding-top` | `16px` | 网格项顶部内边距 |
| `--l-grid-item-padding-bottom` | `12px` | 网格项底部内边距 |
| `--l-grid-item-bg-color` | `white` | 网格项背景色 |
| `--l-grid-item-image-bg-color` | `$fill-4` | 网格项图片背景色 |
| `--l-grid-item-image-border-radius` | `$border-radius` | 网格项图片圆角大小 |
| `--l-grid-item-image-width` | `48px` | 网格项图片默认宽度 |
| `--l-grid-item-image-small-width` | `16px` | 网格项图片小尺寸宽度 |
| `--l-grid-item-image-middle-width` | `40px` | 网格项图片中等尺寸宽度 |
| `--l-grid-item-text-color` | `$text-color-1` | 网格项文字颜色 |
| `--l-grid-item-text-font-size` | `14px` | 网格项文字默认字号 |
| `--l-grid-item-text-small-font-size` | `12px` | 网格项文字小尺寸字号 |
| `--l-grid-item-text-line-height` | `22px` | 网格项文字行高 |
| `--l-grid-item-text-padding-top` | `8px` | 文字与上方元素的间距 |
| `--l-grid-item-description-font-size` | `12px` | 描述文字字号 |
| `--l-grid-item-description-line-height` | `40rpx` | 描述文字行高 |
| `--l-grid-item-description-color` | `$text-color-3` | 描述文字颜色 |
| `--l-grid-item-description-padding-top` | `4px` | 描述文字与主文字的间距 |
| `--l-grid-item-hover-bg-color` | `$fill-4` | 网格项悬停时背景色 |
| `--l-grid-item-horizontal-text-padding-left` | `12px` | 水平布局时文字左侧间距 |
| `--l-grid-item-horizontal-text-description-top` | `2px` | 水平布局时描述文字与主文字的垂直间距 |
| `--l-grid-item-border-color` | `$border-color-1` | 网格项边框颜色 |
| `--l-grid-item-icon-size` | `24px` | 网格项图标尺寸 |
| `--l-grid-item-icon-color` | `$text-color-1` | 网格项图标颜色 |
| `--l-grid-inset-margin-x` | `16` | 网格容器左右外边距 |
| `--l-grid-inset-margin-y` | `0` | 网格容器上下外边距 |
| `--l-grid-inset-border-radius` | `$border-radius-lg` | 网格容器圆角大小 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |