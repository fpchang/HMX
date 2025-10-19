# lime-liquid 水波进度球组件
一个功能丰富的水波进度球组件，用于展示进度、水位或容量百分比。组件通过波浪动画效果模拟水波流动球支持自定义大小、颜色、外边框等多种配置，可用于水箱容量、电池电量、存储空间使用率等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [水波进度球组件文档 - 站点1](https://limex.qcoon.cn/components/liquid.html)
- [水波进度球组件文档 - 站点2](https://limeui.netlify.app/components/liquid.html)
- [水波进度球组件文档 - 站点3](https://limeui.familyzone.top/components/liquid.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-liquid`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-liquid`组件

## 代码演示

### 基础使用
通过`percent`设置需要达到的目标值，`current`为达到目标值的过渡值，示如`percent`为50时，从0到50之间的过渡值，由插件返回。
```vue
<l-liquid v-model:current="modelVale" :percent="target">
	<text>{{modelVale}}%</text>
</l-liquid>
```
```js
const target = ref(50)
const modelVale = ref(0)
```

### 自定义大小
设置水波进度球的大小。

```html
<l-liquid :percent="60" size="200rpx"></l-liquid>
```

### 自定义颜色
设置水波波纹球颜色。

```html
<l-liquid :percent="70" waveColor="#1989fa"></l-liquid>
```

### 显示外边框
设置outline属性，显示外边框。

```html
<l-liquid :percent="80" outline></l-liquid>
```

### 自定义圆角
设置radius属性，自定义圆角大小。

```html
<l-liquid :percent="40" radius="10px"></l-liquid>
```

### 自定义内部背景色
设置innerColor属性，自定义内部背景色。

```html
<l-liquid :percent="30" innerColor="#f5f5f5"></l-liquid>
```

### 自定义内容
使用默认插槽自定义水波进度球中间的内容。

```html
<l-liquid :percent="75">
  <view class="custom-content">
    <text>75%</text>
  </view>
</l-liquid>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-liquid/components/lime-liquid -->
<lime-liquid />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-liquid` |组件标签|
| `lime-liquid`| 演示标签|

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
| percent | 进度百分比 | _number_ | `10` |
| size | 组件尺寸，支持rpx/px单位 | _string_ | - |
| outline | 是否显示外边框 | _boolean_ | `false` |
| radius | 圆角半径 | _string_ | - |
| waveColor | 进度波纹颜色 | _string_ | - |
| innerColor | 内部背景色 | _string_ | - |
| duration | 动画过渡时间（ms） | _number_ | -500- |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 进度变化时触发 | _percent: number_ |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义水波进度球中间内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-liquid-bg-color` | `transparent` | 水波进度球背景色(uniappx app无效) |
| `--l-liquid-size` | `125px` | 水波进度球大小 |
| `--l-liquid-aspect-ratio` | `1` | 水波进度球宽高比(uniappx app无效) |
| `--l-liquid-border-radius` | `$border-radius-hg` | 水波进度球圆角 |
| `--l-liquid-inner-border-radius` | `$liquid-border-radius` | 内部容器圆角 |
| `--l-liquid-wave-color` | `$primary-color` | 波纹颜色(uniappx app无效) |
| `--l-liquid-border-distance` | `6px` | 边框与内容的距离 |
| `--l-liquid-border-width` | `6px` | 边框宽度 |
| `--l-liquid-border-color` | `$primary-color` | 边框颜色(uniappx app无效) |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |