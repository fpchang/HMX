# lime-circle 环形进度条组件
一个功能丰富的环形进度条组件，用于展示进度、比例或完成情况。支持自定义大小、颜色、线宽、仪表盘模式等多种配置，可用于倒计时、进度展示、数据比例等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [环形进度条组件文档 - 站点1](https://limex.qcoon.cn/components/circle.html)
- [环形进度条组件文档 - 站点2](https://limeui.netlify.app/components/circle.html)
- [环形进度条组件文档 - 站点3](https://limeui.familyzone.top/components/circle.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-circle`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-circle`组件

## 代码演示

### 基础用法
通过`percent`设置需要达到的目标值，`current`为达到目标值的过渡值，例如`percent`为50时，从0到50之间的过渡值，由插件返回。
```html
<l-circle v-model:current="modelVale" :percent="target">
	<text>{{modelVale}}%</text>
</l-circle>
```

### 自定义大小和线宽
设置环形进度条的大小和线宽。

```html
<l-circle 
  :percent="75" 
  size="150px" 
  :strokeWidth="8" 
  :trailWidth="8"
></l-circle>
```

### 自定义颜色
设置环形进度条的颜色和轨道颜色。

```html
<l-circle 
  :percent="80" 
  strokeColor="#1989fa" 
  trailColor="#ebedf0"
></l-circle>
```

### 渐变色
使用数组设置环形进度条的渐变色。

```html
<l-circle 
  :percent="65" 
  :strokeColor="['#3fecff', '#6149f6']"
></l-circle>
```

### 仪表盘模式
设置dashboard属性，显示为仪表盘形式。

```html
<l-circle 
  :percent="70" 
  dashboard
></l-circle>
```

### 自定义缺口
设置缺口角度和位置。

```html
<l-circle 
  :percent="60" 
  :gapDegree="60" 
  gapPosition="top"
></l-circle>
```

### 逆时针方向
设置clockwise属性为false，使进度条逆时针方向增长。

```html
<l-circle 
  :percent="55" 
  :clockwise="false"
></l-circle>
```

### canvas渲染
设置 `canvas` 使用canvas方式渲染

```html
<l-circle v-model:current="modelVale" :percent="target" canvas>
	<text>{{modelVale}}%</text>
</l-circle>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-circle/components/lime-circle -->
<lime-circle />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-circle` |组件标签|
| `lime-circle`| 演示标签|

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
| canvasId | 自定义canvas的id | _string_ | - |
| percent | 进度百分比 | _number_ | `0` |
| size | 环形进度条尺寸 | _string_ | `'120px'` |
| lineCap | 线条端点的形状 | _string_ | `'round'` |
| strokeWidth | 进度环线宽 | _number \| string_ | `6` |
| strokeColor | 进度环颜色，可以传入字符串或者数组 | _string \| string[]_ | - |
| trailWidth | 轨道环线宽 | _number \| string_ | `6` |
| trailColor | 轨道环颜色 | _string_ | - |
| dashboard | 是否显示为仪表盘 | _boolean_ | `false` |
| clockwise | 是否为顺时针方向 | _boolean_ | `true` |
| duration | 动画持续时间（毫秒） | _number_ | `300` |
| max | 最大值 | _number_ | `100` |
| gapDegree | 缺口角度 | _number_ | `90` |
| gapPosition | 缺口位置 | _string_ | `'bottom'` |
| canvas | 是否使用canvas渲染 | _boolean_ | `false` |


### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义环形进度条中间内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-circle-trail-base-color` | `$gray-3` | 轨道环基础颜色 |
| `--l-circle-trail-color` | `$circle-trail-base-color` | 轨道环颜色 |
| `--l-circle-trail-cap-size` | `6px` | 轨道环端点大小 |
| `--l-circle-stroke-base-color` | `$primary-color` | 进度环基础颜色 |
| `--l-circle-stroke-color` | `$circle-stroke-base-color` | 进度环颜色 |
| `--l-circle-stroke-cap-size` | `6px` | 进度环端点大小 |
| `--l-circle-stroke-cap-start-color` | `$circle-stroke-color` | 进度环起始端点颜色 |
| `--l-circle-stroke-cap-end-color` | `$circle-stroke-color` | 进度环结束端点颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |