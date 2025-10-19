# lime-cell 单元格
一个功能丰富的单元格组件，用于各个类别行的信息展示，可组成列表。组件兼容uni-app和uni-app x，支持多种布局和样式，适用于各种场景的信息展示和交互。

> 插件依赖：`lime-shared`、`lime-icon`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [单元格组件文档 - 站点1](https://limex.qcoon.cn/components/cell.html)
- [单元格组件文档 - 站点2](https://limeui.netlify.app/components/cell.html)
- [单元格组件文档 - 站点3](https://limeui.familyzone.top/components/cell.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-cell`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-cell`和`l-cell-group`组件（组件）或`lime-cell`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，若不需要删除即可
:::

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<l-cell-group>
  <l-cell title="单行标题" :arrow="true"></l-cell>
  <l-cell title="单行标题" :arrow="true" :hover="true" :required="true" />
</l-cell-group>
```

```js
export default {
  data() {
    return {
      // 示例数据
    }
  },
  methods: {
    onCellClick(event) {
      console.log('单元格点击', event);
    }
  }
}
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

```html
<l-cell-group inset>
  <l-cell title="单行标题" note="辅助信息" :arrow="true" />
  <l-cell title="单行标题" description="一段很长很长的内容文字" :arrow="true"></l-cell>
</l-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<l-cell title="单行标题" note="辅助信息" size="small" />
<l-cell title="单行标题" note="辅助信息" size="small" description="一段很长很长的内容文字" />
```

### 图标图片

通过 `icon` 属性在标题左侧展示[图标](https://ext.dcloud.net.cn/plugin?id=14057)，通过 `image` 属性在标题左侧展示图片。

```html
<l-cell title="单行标题" icon="animation-1" :arrow="true" :hover="true" />
<l-cell title="多行带头像" description="一段很长很长的内容文字" :arrow="true">
  <template #icon>
    <l-avatar shape="circle" src="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
  </template>
</l-cell>
<l-cell title="多行带图片" description="一段很长很长的内容文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
```

### 展示箭头

设置 `arrow` 属性后会在单元格右侧显示箭头。

```html
<l-cell title="单元格" :arrow="true" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转。通过`openType`设置跳转类型。

```html
<l-cell title="URL 跳转" :arrow="true" url="/pages/test/index" />
<l-cell title="重定向跳转" :arrow="true" url="/pages/test/index" openType="redirectTo" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<l-cell-group title="分组1">
  <l-cell title="单行标题" />
</l-cell-group>
<l-cell-group title="分组2">
  <l-cell title="单行标题" />
</l-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<l-cell value="内容" :arrow="true">
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <text class="custom-title">单行标题</text>
    <l-tag type="primary">标签</l-tag>
  </template>
</l-cell>

<l-cell title="左侧图标">
  <!-- 使用 icon 插槽来自定义左侧图标 -->
  <template #icon>
    <l-icon name="search" />
  </template>
</l-cell>

<l-cell title="右侧图标">
  <!-- 使用 rightIcon 插槽来自定义右侧图标 -->
  <template #rightIcon>
    <l-icon name="search" />
  </template>
</l-cell>

<l-cell title="辅助信息">
  <!-- 使用 note 插槽来自定义右侧辅助信息 -->
  <template #note>
    <l-badge :content="20" />
  </template>
</l-cell>

<l-cell title="内容描述">
  <!-- 使用 description 插槽来自定义下方内容描述 -->
  <template #description>
    <text>多行高度不定，长文本自动换行，该选项的描述是一段很长的内容</text>
  </template>
</l-cell>
```

### 对齐方式

通过 `align` 可以设置内容的对齐方式，可选项：top/middle/bottom，默认是middle。

```html
<l-cell align="bottom" title="单行标题" note="内容" description="一段很长很长的内容文字" />
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-cell/components/lime-cell -->
<lime-cell />
```

### 插件标签说明
- 默认 `l-cell` 为组件标签
- 默认 `l-cell-group` 为组件标签
- 默认 `lime-cell` 为演示标签

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

### CellGroup Props

| 参数   | 说明                   | 类型             | 默认值    |
| ------ | ---------------------- | ---------------- | --------- |
| title  | 分组标题               | <em>string</em>  | `-`       |
| inset  | 是否展示为圆角卡片风格 | <em>boolean</em> | `false`   |

### Cell Props

| 参数            | 说明                                                                                      | 类型             | 默认值        |
| --------------- | ----------------------------------------------------------------------------------------- | ---------------- | ------------- |
| title           | 左侧标题                                                                                  | <em>string</em>  | -             |
| note            | 右侧内容                                                                                  | <em>string</em>  | -             |
| description     | 标题下方的描述信息                                                                        | <em>string</em>  | -             |
| size            | 单元格大小，可选值为 `small`                                                              | <em>string</em>  | -             |
| icon            | 左侧图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057)   | <em>string</em>  | -             |
| iconColor       | 左侧图标颜色                                                                              | <em>string</em>  | -             |
| iconSize        | 左侧图标尺寸                                                                              | <em>string</em>  | -             |
| rightIcon       | 右侧图标名称，等同于 Icon 组件的 [name 属性](https://ext.dcloud.net.cn/plugin?id=14057)   | <em>string</em>  | -             |
| rightIconColor  | 右侧图标颜色                                                                              | <em>string</em>  | -             |
| rightIconSize   | 右侧图标尺寸                                                                              | <em>string</em>  | -             |
| image           | 左侧图片链接                                                                              | <em>string</em>  | -             |
| url             | 点击后跳转的链接地址                                                                      | <em>string</em>  | -             |
| bordered        | 是否显示内边框                                                                            | <em>boolean</em> | `true`        |
| required        | 是否显示表单必填星号                                                                      | <em>boolean</em> | `false`       |
| arrow           | 是否展示右侧箭头                                                                          | <em>boolean</em> | `false`       |
| hover           | 是否开启点击反馈                                                                          | <em>boolean</em> | `false`       |
| openType        | 链接跳转类型，可选值：switchTab/reLaunch/redirectTo                                       | <em>string</em>  | `navigateTo`  |
| align           | 内容的对齐方式，可选项：top/middle/bottom                                                 | <em>string</em>  | `middle`      |
| imageWidth      | 图片宽度                                                                                  | <em>string</em>  | `-`           |
| imageHeight     | 图片高度                                                                                  | <em>string</em>  | `-`           |
| bgColor         | 背景色                                                                                    | <em>string</em>  | `-`           |

### Cell Events

| 事件名 | 说明             | 回调参数                      |
| ------ | ---------------- | ----------------------------- |
| click  | 点击单元格时触发 | <em>event: UniPointerEvent</em> |

### Cell Slots

| 名称        | 说明                     |
| ----------- | ------------------------ |
| title       | 自定义左侧标题           |
| note        | 自定义右侧内容           |
| default     | 同上，自定义右侧内容     |
| description | 自定义标题下方的描述信息 |
| icon        | 自定义左侧图标           |
| rightIcon   | 自定义右侧图标           |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式

| 名称                                  | 默认值                  | 描述                     |
| ------------------------------------- | ----------------------- | ------------------------ |
| --l-cell-height                       | _auto_                  | 单元格高度               |
| --l-cell-line-height                  | _1.56_                  | 单元格行高               |
| --l-cell-padding-y                    | _32rpx_                 | 单元格垂直内边距         |
| --l-cell-padding-x                    | _32rpx_                 | 单元格水平内边距         |
| --l-cell-bg-color                     | _white_                 | 单元格背景色             |
| --l-cell-hover-color                  | _--l-gray-1_            | 单元格悬停颜色           |
| --l-cell-border-color                 | _--l-border-color-2_    | 单元格边框颜色           |
| --l-cell-border-left-space            | _--l-cell-padding-y_    | 单元格左边框间距         |
| --l-cell-border-right-space           | _0_                     | 单元格右边框间距         |
| --l-cell-description-color            | _--l-text-color-3_      | 描述文本颜色             |
| --l-cell-description-font-size        | _--l-font-size_         | 描述文本字体大小         |
| --l-cell-description-small-font-size  | _--l-font-size-sm_      | 小尺寸描述文本字体大小   |
| --l-cell-description-line-height      | _--l-line-height_       | 描述文本行高             |
| --l-cell-note-color                   | _--l-text-color-4_      | 辅助信息颜色             |
| --l-cell-note-font-size               | _--l-font-size-md_      | 辅助信息字体大小         |
| --l-cell-note-small-font-size         | _--l-font-size_         | 小尺寸辅助信息字体大小   |
| --l-cell-title-color                  | _--l-text-color-1_      | 标题颜色                 |
| --l-cell-title-font-size              | _--l-font-size-md_      | 标题字体大小             |
| --l-cell-title-small-font-size        | _--l-font-size_         | 小尺寸标题字体大小       |
| --l-cell-left-icon-color              | _--l-primary-color_     | 左侧图标颜色             |
| --l-cell-left-icon-size               | _46rpx_                 | 左侧图标尺寸             |
| --l-cell-left-small-icon-size         | _42rpx_                 | 小尺寸左侧图标尺寸       |
| --l-cell-right-icon-color             | _--l-text-color-4_      | 右侧图标颜色             |
| --l-cell-right-icon-size              | _44rpx_                 | 右侧图标尺寸             |
| --l-cell-required-color               | _--l-error-color-6_     | 必填星号颜色             |
| --l-cell-required-font-size           | _--l-font-size-md_      | 必填星号字体大小         |
| --l-cell-image-width                  | _96rpx_                 | 图片宽度                 |
| --l-cell-image-height                 | _96rpx_                 | 图片高度                 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |