# lime-swiper-dot 轮播图指示点组件
一个功能丰富的轮播图指示点组件，用于展示轮播图的当前位置。支持多种指示器类型、自定义颜色、标题显示等多种配置，可用于图片轮播、广告轮播、产品展示等多种场景。组件提供了丰富的自定义选项，可以满足各种轮播指示需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [轮播图指示点组件文档 - 站点1](https://limex.qcoon.cn/components/swiper-dot.html)
- [轮播图指示点组件文档 - 站点2](https://limeui.netlify.app/components/swiper-dot.html)
- [轮播图指示点组件文档 - 站点3](https://limeui.familyzone.top/components/swiper-dot.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-swiper-dot`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-swiper-dot`组件

## 代码演示

### 基础用法
最简单的轮播图指示点组件用法，使用相对定位的容器包裹轮播组件和指示器组件。

```html
<view style="position: relative">
  <swiper style="height: 300rpx" :current="current" @change="onChange" :autoplay="true" :interval="3000">
    <swiper-item class="slide slide1"><text class="text">1</text></swiper-item>
    <swiper-item class="slide slide2"><text class="text">2</text></swiper-item>
    <swiper-item class="slide slide3"><text class="text">3</text></swiper-item>
  </swiper>
  <l-swiper-dot :current="current" type="dot" :total="3" />
</view>
```

```js
const current = ref(0)
const type = ref('dot')
const onChange = (e: UniSwiperChangeEvent) => {
	current.value = e.detail.current
}
```

### 不同类型的指示器
通过`type`属性设置不同类型的指示器。

```html
<!-- 圆点指示器 -->
<l-swiper-dot :current="current" type="dot" :total="3" />

<!-- 条形指示器 -->
<l-swiper-dot :current="current" type="dot-bar" :total="3" />

<!-- 数字索引指示器 -->
<l-swiper-dot :current="current" type="index" :total="3" />

<!-- 分式指示器 -->
<l-swiper-dot :current="current" type="fraction" :total="3" />

<!-- 标题指示器 -->
<l-swiper-dot :current="current" type="title" :list="list" field="title" />
```

### 标题指示器
使用标题类型指示器，需要提供带有标题字段的数据列表。

```html
<view style="position: relative">
  <swiper style="height: 300rpx" :current="current" @change="onChange">
    <swiper-item v-for="(item, index) in list" :key="index" class="slide">
      <text class="text">{{index + 1}}</text>
    </swiper-item>
  </swiper>
  <l-swiper-dot :current="current" type="title" :list="list" field="title" />
</view>
```

```js
export default {
  data() {
    return {
      current: 0,
      list: [
        { title: '人生得意须尽欢，莫使金樽空对月' },
        { title: '但愿人长久，千里共婵娟' },
        { title: '无边落木萧萧下，不尽长江滚滚来' }
      ]
    }
  },
  methods: {
    onChange(e) {
      this.current = e.detail.current
    }
  }
}
```

### 自定义颜色
使用 `color`可设置文本颜色， `activeColor`可设置激活状态指示点颜色，`inactiveColor`默认背景色

```html
<view style="position: relative">
	<swiper style="height: 300rpx" :current="current" @change="onChange" :autoplay="true" :interval="3000">
		<swiper-item class="slide slide1"><text class="text">1</text></swiper-item>
		<swiper-item class="slide slide2"><text class="text">2</text></swiper-item>
		<swiper-item class="slide slide3"><text class="text">3</text></swiper-item>
	</swiper>
	<l-swiper-dot  activeColor="#ff6b6b" inactiveColor="#ffe66d" color="#2d3436"  :current="current" type="title" :list="list" field="title" />
</view>
```
```js
const current = ref(0)
const type = ref('dot')
const onChange = (e: UniSwiperChangeEvent) => {
	current.value = e.detail.current
}
const list = [
	{
		title: '人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。',
	},
	{
		title: '但愿人长久，千里共婵娟。',
	},
	{
		title: '无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。',
	},
]
```

### 自定义文字大小
通过`fontSize`属性设置指示器文字的大小。

```html
<l-swiper-dot 
  :current="current" 
  type="title" 
  :list="list" 
  field="title" 
  fontSize="16px" 
/>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-swiper-dot/components/lime-swiper-dot -->
<lime-swiper-dot />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-swiper-dot` | 组件标签 |
| `lime-swiper-dot` | 演示标签 |

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
| type | 指示器类型，可选值：dot、dot-bar、index、title、fraction | _string_ | - |
| total | 轮播项总数（非title类型时使用） | _number_ | `0` |
| current | 当前激活项索引（从0开始） | _number_ | `0` |
| field | 标题类型时使用的数据字段名（仅type="title"时生效） | _string_ | - |
| list | 数据源数组（title类型必需，其他类型可选） | _Array_ | `[]` |
| color | 全局文本颜色 | _string_ | - |
| activeColor | 激活状态指示点颜色 | _string_ | - |
| inactiveColor | 未激活状态指示点颜色 | _string_ | - |
| fontSize | 文字字体大小 | _string_ | - |

### 指示器类型说明

| 类型值 | 说明 |
| --- | --- |
| dot | 圆形指示点，最常见的指示器类型 |
| dot-bar | 条形指示器，激活状态会变长 |
| index | 数字索引指示器，显示当前项的数字 |
| title | 标题指示器，显示当前项的标题文本 |
| fraction | 分式指示器，以分数形式显示当前位置（如 1/5） |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-swiper-dot-fraction-right` | `$spacer-sm` | 分式指示器右侧定位偏移量 |
| `--l-swiper-dot-fraction-bottom` | `$spacer-sm` | 分式指示器底部定位偏移量 |
| `--l-swiper-dot-fraction-padding-x` | `$spacer-xs` | 分式指示器水平内边距 |
| `--l-swiper-dot-fraction-padding-y` | `$spacer-tn` | 分式指示器垂直内边距 |
| `--l-swiper-dot-title-padding-x` | `$spacer-xs` | 标题指示器水平内边距 |
| `--l-swiper-dot-title-padding-y` | `$spacer-xs` | 标题指示器垂直内边距 |
| `--l-swiper-dot-radius` | `$border-radius-hg` | 指示器圆角半径 |
| `--l-swiper-dot-text-color` | `white` | 指示器文字颜色 |
| `--l-swiper-dot-bg-color` | `rgba(0,0,0,0.3)` | 指示器默认背景色 |
| `--l-swiper-dot-active-bg-color` | `rgba(0,0,0,0.5)` | 激活状态指示器背景色 |
| `--l-swiper-dot-font-size` | `$font-size` | 指示器文字基准字号 |
| `--l-swiper-dot-line-height` | `$line-height` | 指示器文字行高 |
| `--l-swiper-dot-index-size` | `20px` | 数字索引指示器尺寸 |
| `--l-swiper-dot-gap` | `3px` | 指示点之间的间隔 |
| `--l-swiper-dot-size` | `6px` | 常规指示点尺寸 |
| `--l-swiper-dot-active-size` | `12px` | 激活状态指示点尺寸 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |