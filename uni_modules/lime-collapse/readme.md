# lime-collapse 折叠面板组件
一个功能丰富的折叠面板组件，用于展示分组内容区块。支持手风琴模式、标题、副标题、图标、自定义内容等多种配置，可用于展示分类信息、FAQ问答、详情展示等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [折叠面板组件文档 - 站点1](https://limex.qcoon.cn/components/collapse.html)
- [折叠面板组件文档 - 站点2](https://limeui.netlify.app/components/collapse.html)
- [折叠面板组件文档 - 站点3](https://limeui.familyzone.top/components/collapse.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-collapse`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-collapse`和`l-collapse-panel`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示

### 基础用法
最简单的折叠面板用法，包含标题和内容。

```html
<l-collapse>
  <l-collapse-panel title="标题1">
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

### 手风琴模式
每次只能展开一个面板，其他面板会自动关闭。

```html
<l-collapse accordion>
  <l-collapse-panel title="标题1">
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

### 卡片风格
使用圆角卡片风格展示折叠面板。

```html
<l-collapse inset>
  <l-collapse-panel title="标题1">
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

### 带图标的面板
在面板左侧添加图标，可以设置图标的名称、颜色和大小。

```html
<l-collapse>
  <l-collapse-panel 
    title="标题1" 
    icon="home"
    iconColor="#1989fa"
    iconSize="24px"
  >
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

### 带图片的面板
在面板左侧添加图片。

```html
<l-collapse>
  <l-collapse-panel 
    title="标题1" 
    image="https://example.com/image.jpg"
    imageWidth="40px"
    imageHeight="40px"
  >
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

### 禁用面板
禁止特定面板的展开/收起操作。

```html
<l-collapse>
  <l-collapse-panel title="标题1" disabled>
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```


### 受控模式
通过v-model控制展开的面板。

```html
<l-collapse v-model="activeNames">
  <l-collapse-panel title="标题1" value="1">
    <text>这里是面板内容</text>
  </l-collapse-panel>
  <l-collapse-panel title="标题2" value="2">
    <text>这里是面板内容</text>
  </l-collapse-panel>
</l-collapse>
```

```js
const activeNames = ref([])
```



### 自定义内容

通过 `title` 插槽可以自定义标题栏的内容。插槽还有`icon`。通过设置 `icon` 属性在标题左侧展示[图标](https://ext.dcloud.net.cn/plugin?id=14057)，通过 `image` 属性在标题左侧展示图片。

```html
<l-collapse>
	<l-collapse-panel>
		<template #title>
		    <view style="flex-direction: row; align-items: center;">
				<text style="margin-right: 10rpx;">标题1</text> 
				<l-icon name="help-circle" size="32rpx" />
			</view>
		</template>
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
	<l-collapse-panel title="折叠标题" icon="map-aiming">
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
	<l-collapse-panel title="折叠标题" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png">
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
</l-collapse>
```



### 全部展开与全部切换
通过 `Collapse` 实例上的 `toggleAll` 方法可以实现全部展开与全部切换

```html
<l-collapse ref="collapseRef">
	<l-collapse-panel title="折叠标题">
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
	<l-collapse-panel title="折叠标题" :disabled="true">
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
	<l-collapse-panel title="折叠标题">
		<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
	</l-collapse-panel>
</l-collapse>

<button @click="openAll">全部展开</button>
<button @click="toggleAll">全部切换</button>
```

```js
// vue
const openAll = () => {
	this.$refs.collapseRef.toggleAll(true)
}
const toggleAll = () => {
	this.$refs.collapseRef.toggleAll(false)
}

// uvue
const openAll = () => {
	const collapseRef =  this.$refs['collapseRef'] as ComponentPublicInstance;
	collapseRef.$callMethod('toggleAll', true)
}
const toggleAll = () => {
	const collapseRef =  this.$refs['collapseRef'] as ComponentPublicInstance;
	collapseRef.$callMethod('toggleAll', false)
}
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-collapse/components/lime-collapse -->
<lime-collapse />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-collapse` | 折叠面板容器组件标签 |
| `l-collapse-panel` | 折叠面板项组件标签 |
| `lime-collapse` | 演示标签 |

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

### Collapse Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-modle  | 当前展开面板的 values  | _string \| number_ | `false` |
| inset | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| accordion | 手风琴效果，每个面板互斥展开，每次只展开一个面板 | _boolean_ | `false` |
| modelValue | 展开的面板集合 | _Array_ | `[]` |
| value | 展开的面板集合（v-model的别名） | _Array_ | `[]` |
| disabled | 是否禁用所有面板 | _boolean_ | `false` |

### CollapsePanel Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁止当前面板展开，优先级大于 Collapse 的同名属性 | _boolean_ | `false` |
| title | 面板标题 | _string_ | - |
| icon | 左侧图标，出现在单元格标题的左侧,[name 属性](https://ext.dcloud.net.cn/plugin?id=14057) | _string_ | - |
| image | 左侧图片地址 | _string_ | - |
| note | 和标题同行的说明文字 | _string_ | - |
| size | 面板大小，可选值：small、medium、large | _string_ | `'medium'` |
| iconColor | 左侧图标颜色 | _string_ | - |
| rightIconColor | 右侧图标颜色 | _string_ | - |
| iconSize | 左侧图标大小 | _string_ | - |
| rightIconSize | 右侧图标大小 | _string_ | - |
| imageWidth | 左侧图片宽度 | _string_ | - |
| imageHeight | 左侧图片高度 | _string_ | - |
| value | 当前面板唯一标识，如果值为空则取当前面板下标作为唯一标识 | _string \| number_ | - |
| bgColor | 面板背景色 | _string_ | - |

### Collapse Events 事件


| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| change  | 点击时触发 | _event: string|number[]_ |


### Collapse Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 折叠面板内容，通常是一组 l-collapse-panel 组件 |

### CollapsePanel Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 面板内容 |
| title      | 自定义左侧标题               |
| note      | 自定义右侧内容               |
| description | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| rightIcon | 自定义右侧图标               |


## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-collapse-inset-margin-x` | `$spacer` | 卡片风格时的水平外边距 |
| `--l-collapse-inset-margin-y` | `0` | 卡片风格时的垂直外边距 |
| `--l-collapse-border-radius` | `$border-radius-lg` | 卡片风格时的边框圆角 |
| `--l-collapse-panel-bg-color` | `$bg-color-container` | 面板背景色 |
| `--l-collapse-content-padding-x` | `$spacer` | 内容区域水平内边距 |
| `--l-collapse-content-padding-y` | `$spacer` | 内容区域垂直内边距 |
| `--l-collapse-content-line-height` | `1.5` | 内容区域行高 |
| `--l-collapse-content-font-size` | `$font-size` | 内容区域字体大小 |
| `--l-collapse-content-text-color` | `$text-color-1` | 内容区域文字颜色 |
| `--l-collapse-transition-duration` | `240ms` | 过渡动画持续时间 |
| `--l-collapse-right-icon-color` | `$text-color-4` | 右侧图标颜色 |
| `--l-collapse-right-icon-size` | `22px` | 右侧图标大小 |
| `--l-collapse-border-color` | `$border-color-2` | 边框颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |