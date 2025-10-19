# lime-segmented 分段器组件

一个功能丰富的分段器组件，用于在不同视图间切换。支持多种样式、尺寸和自定义选项，可用于标签切换、分类筛选等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`


## 文档链接
📚 组件详细文档请访问以下站点：
- [分段器组件文档 - 站点1](https://limex.qcoon.cn/components/segmented.html)
- [分段器组件文档 - 站点2](https://limeui.netlify.app/components/segmented.html)
- [分段器组件文档 - 站点3](https://limeui.familyzone.top/components/segmented.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-segmented`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-segmented`组件

## 代码演示

### 基础用法
最简单的分段器组件用法，只需要设置选项数组即可。

```html
<l-segmented v-model="value" :options="options" />
```
```js
const value = ref(1);
const options = ['选项1','选项2','选项3','选项4'];
```

### 形状
通过`shape`设置分段器形状，可选值`round`。

```html
<l-segmented shape="round" />
```

### 类型
通过`type`设置分段器类型，可选值有`button`、`text`，默认值为`card`。

```html
<l-segmented v-model="value" type="button" />
<l-segmented v-model="value" type="text" />
```

### 尺寸
通过`size`设置分段器尺寸，可选值有`small`、`large`，默认值为`medium`。

```html
<l-segmented v-model="value" size="small" />
<l-segmented v-model="value" size="large" />
```

### 自定义样式
通过`color`设置文本颜色，`active-color`设置当前状态文本颜色，`bg-color`设置背景色，`slider-color`设置滑块背景色。

```html
<l-segmented 
  v-model="value" 
  type="button" 
  color="#34c471" 
  active-color="#fff" 
  bg-color="#f3fff8" 
  slider-color="#34c471" 
  :options="options" 
/>
```

### 受控模式
通过设置`value`属性和`click`事件实现异步控制。

```html
<l-segmented :value="value" :options="options" @click="handleClick" />
```

```js
const value = ref(1);
const handleClick = (index: number) => {
  uni.showLoading({ title: '校验中' });
  
  setTimeout(() => {
    uni.hideLoading();
    value.value = index;
  }, 1000);
};
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-segmented/components/lime-segmented -->
<lime-segmented />
```

### 插件标签说明
- 默认 `l-segmented` 为组件标签
- 默认 `lime-segmented` 为演示标签

## Vue2使用说明
本插件使用了`composition-api`，如需在Vue2项目中使用，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```



## API文档

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中分段的索引值 | _number_ | - |
| value | 当前选中分段的索引值 | _number_ | - |
| size | 分段器尺寸，可选值`small`、`medium`、`large` | _string_ | `medium` |
| shape | 分段器形状，可选值`normal`、`round` | _string_ | `normal` |
| disabled | 是否禁用分段器 | _boolean_ | `false` |
| type | 分段器类型，可选值`button`、`card`、`text` | _string_ | `card` |
| bgColor | 分段器背景色 | _string_ | - |
| color | 分段器文本颜色 | _string_ | - |
| activeColor | 当前选中分段的文本颜色 | _string_ | - |
| sliderColor | 分段器滑块背景色 | _string_ | - |
| fontSize | 分段器文字大小 | _string_ | - |
| height | 分段器高度 | _string_ | - |
| padding | 分段器内边距 | _string_ | - |
| immediate | 是否跳过首次动画 | _boolean_ | `false` |


### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 分段切换时触发 | index: 当前选中分段的索引 |
| click | 点击分段时触发 | index: 点击分段的索引 |


## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `--l-segmented-primary-color` | `$primary-color` | 主色（默认激活项边框/文字色） |
| `--l-segmented-bg-color` | `$fill-3` | 背景色 |
| `--l-segmented-padding-x` | `$spacer-tn` | 水平内边距 |
| `--l-segmented-padding-y` | `$spacer-tn` | 垂直内边距 |
| `--l-segmented-radius` | `$border-radius-sm` | 整体圆角大小 |
| `--l-segmented-text-color` | `$text-color-1` | 文字颜色 |
| `--l-segmented-active-bg-color` | `white` | 激活项背景色 |
| `--l-segmented-active-text-color` | `$primary-color` | 激活项文字颜色 |
| `--l-segmented-small-height` | `32px` | 小尺寸高度 |
| `--l-segmented-small-font-size` | `$font-size-sm` | 小尺寸文字大小 |
| `--l-segmented-medium-height` | `36px` | 中尺寸高度 |
| `--l-segmented-medium-font-size` | `$font-size` | 中尺寸文字大小 |
| `--l-segmented-large-height` | `40px` | 大尺寸高度 |
| `--l-segmented-large-font-size` | `$font-size-md` | 大尺寸文字大小 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![支付宝](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![微信支付](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |