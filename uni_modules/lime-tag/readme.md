# lime-tag 标签组件
一个功能丰富的标签组件，用于标记和分类。支持多种形状、尺寸、颜色和风格变体，可用于标记状态、分类、提示等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [标签组件文档 - 站点1](https://limex.qcoon.cn/components/tag.html)
- [标签组件文档 - 站点2](https://limeui.netlify.app/components/tag.html)
- [标签组件文档 - 站点3](https://limeui.familyzone.top/components/tag.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-tag`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-tag`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为8元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示
### 标签主题
通过 `type` 属性控制标签颜色。

```html
<l-tag type="primary">品牌色</l-tag>
<l-tag type="success">成功色</l-tag>
<l-tag type="warning">警告色</l-tag>
<l-tag type="danger">危险色</l-tag>
<l-tag>通用色</l-tag>
```

### 标签形状
通过 `shape` 属性控制标签形状。

```html
<l-tag shape="square" type="primary">方形</l-tag>
<l-tag shape="round" type="success">圆角</l-tag>
<l-tag shape="mark" type="primary">半圆</l-tag>
```


### 标签变种
通过`variant` 属性控制标签图标。

```html
<l-tag variant="light">高亮</l-tag>
<l-tag variant="light" type="primary">品牌</l-tag>
<l-tag variant="light" type="success">成功</l-tag>
<l-tag variant="light" type="warning">警告</l-tag>
<l-tag variant="light" type="danger">危险</l-tag>

<l-tag>深色</l-tag>
<l-tag type="primary">品牌</l-tag>
<l-tag type="success">成功</l-tag>
<l-tag type="warning">警告</l-tag>
<l-tag type="danger">危险</l-tag>

<l-tag variant="outline">描边</l-tag>
<l-tag variant="outline" type="primary">品牌</l-tag>
<l-tag variant="outline" type="success">成功</l-tag>
<l-tag variant="outline" type="warning">警告</l-tag>
<l-tag variant="outline" type="danger">危险</l-tag>

<l-tag variant="light-outline">光廓</l-tag>
<l-tag variant="light-outline" type="primary">品牌</l-tag>
<l-tag variant="light-outline" type="success">成功</l-tag>
<l-tag variant="light-outline" type="warning">警告</l-tag>
<l-tag variant="light-outline" type="danger">危险</l-tag>
```

### 标签图标
通过[icon](https://ext.dcloud.net.cn/plugin?id=14057) 属性控制标签图标。

```html
<l-tag icon="face-retouching" type="primary">标签</l-tag>
<l-tag icon="filter-3" variant="light">标签</l-tag>
<l-tag icon="markup" variant="outline">标签</l-tag>
```

### 标签尺寸
通过 `size` 属性控制标签大小。

```html
<l-tag size="mini" type="primary">细</l-tag>
<l-tag size="small" type="primary">小</l-tag>
<l-tag size="medium" type="primary">中</l-tag>
<l-tag size="large" type="warning">大</l-tag>
<l-tag size="extra-large" type="primary">加大</l-tag>
```

### 超长文本省略标签
通过`max-width` 属性,当内容超过时显示省略号。

```html
<l-tag max-width="130px" variant="light">听说超长可以省略听说超长</l-tag>
```

### 自定义颜色
通过 `color` 属性设置标签颜色，。

```html
<l-tag color="#7232dd" icon="face-retouching">标签</l-tag>
<l-tag color="linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36))" icon="filter-3">标签</l-tag>
<l-tag color="#7232dd" icon="markup" variant="outline">标签</l-tag>
```

### 可关标签
通过 `closable` 属性设置标签可关闭，通过 `@close`事件接收关闭事件。

```html
<l-tag v-if="show1" @close="show1 = false" :closable="true" icon="face-retouching" type="primary">标签</l-tag>
<l-tag v-if="show2" @close="show2 = false" :closable="true" icon="filter-3" variant="light">标签</l-tag>
<l-tag v-if="show3" @close="show3 = false" :closable="true" icon="markup" variant="outline">标签</l-tag>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-tag/components/lime-tag -->
<lime-tag />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-tag` |组件标签|
| `lime-tag`| 演示标签|

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
| content | 标签内容 | _string_ | - |
| type | 标签类型，可选值为 `default` `primary` `success` `warning` `danger` | _string_ | `default` |
| shape | 标签形状，可选值为 `square` `round` `mark` | _string_ | `square` |
| size | 标签尺寸，可选值为 `mini` `small` `medium` `large` `extra-large` | _string_ | `medium` |
| variant | 标签风格变体，可选值为 `solid` `light` `outline` `light-outline` | _string_ | `solid` |
| closable | 是否可关闭 | _boolean_ | `false` |
| disabled | 是否禁用 | _boolean_ | `false` |
| icon | 标签中的图标,[icon](https://ext.dcloud.net.cn/plugin?id=14057)  | _string_ | - |
| prefix | 前缀 | _string_ | - |
| maxWidth | 标签最大宽度，超出后显示省略号 | _string_ | - |
| color | 自定义标签颜色 | _string_ | - |
| textColor | 自定义文字颜色 | _string_ | - |
| fontSize | 自定义文字大小 | _string_ | - |
| radius | 自定义圆角大小 | _string_ | - |
| padding | 自定义内边距 | _string_ | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | _event: Event_ |
| close | 关闭标签时触发 | _event: Event_ |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 标签内容 |
| icon | 自定义图标 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-tag-solid-text-color` | `white` | 实心标签文字颜色 |
| `--l-tag-text-color` | `white` | 默认标签文字颜色 |
| `--l-tag-border-radius` | `$border-radius-sm` | 方形标签圆角大小 |
| `--l-tag-mark-border-radius` | `$tag-round-border-radius` | 标记型标签圆角大小 |
| `--l-tag-close-icon-color` | `$text-color-3` | 关闭图标颜色 |
| `--l-tag-default-color` | `$gray-11` | 默认标签颜色 |
| `--l-tag-default-light-color` | `$gray-1` | 默认浅色标签颜色 |
| `--l-tag-default-border-color` | `$gray-5` | 默认标签边框颜色 |
| `--l-tag-primary-color` | `$primary-color` | 主要标签颜色 |
| `--l-tag-primary-light-color` | `$primary-color-1` | 主要浅色标签颜色 |
| `--l-tag-success-color` | `$success-color` | 成功标签颜色 |
| `--l-tag-success-light-color` | `$success-color-1` | 成功浅色标签颜色 |
| `--l-tag-warning-color` | `$warning-color` | 警告标签颜色 |
| `--l-tag-warning-light-color` | `$warning-color-1` | 警告浅色标签颜色 |
| `--l-tag-danger-color` | `$error-color` | 危险标签颜色 |
| `--l-tag-danger-light-color` | `$error-color-1` | 危险浅色标签颜色 |
| `--l-tag-mini-padding-x` | `4px` | 迷你标签水平内边距 |
| `--l-tag-mini-padding-y` | `0` | 迷你标签垂直内边距 |
| `--l-tag-mini-font-size` | `9px` | 迷你标签字体大小 |
| `--l-tag-mini-icon-size` | `10px` | 迷你标签图标大小 |
| `--l-tag-mini-height` | `15px` | 迷你标签高度 |
| `--l-tag-small-padding-x` | `6px` | 小型标签水平内边距 |
| `--l-tag-small-padding-y` | `0` | 小型标签垂直内边距 |
| `--l-tag-small-font-size` | `$font-size-xs` | 小型标签字体大小 |
| `--l-tag-small-icon-size` | `12px` | 小型标签图标大小 |
| `--l-tag-small-height` | `20px` | 小型标签高度 |
| `--l-tag-medium-padding-x` | `8px` | 中型标签水平内边距 |
| `--l-tag-medium-padding-y` | `0` | 中型标签垂直内边距 |
| `--l-tag-medium-font-size` | `$font-size-sm` | 中型标签字体大小 |
| `--l-tag-medium-icon-size` | `14px` | 中型标签图标大小 |
| `--l-tag-medium-height` | `24px` | 中型标签高度 |
| `--l-tag-large-padding-x` | `8px` | 大型标签水平内边距 |
| `--l-tag-large-padding-y` | `0` | 大型标签垂直内边距 |
| `--l-tag-large-font-size` | `$font-size` | 大型标签字体大小 |
| `--l-tag-large-icon-size` | `16px` | 大型标签图标大小 |
| `--l-tag-large-height` | `28px` | 大型标签高度 |
| `--l-tag-extra-large-padding-x` | `15px` | 超大标签水平内边距 |
| `--l-tag-extra-large-padding-y` | `0` | 超大标签垂直内边距 |
| `--l-tag-extra-large-font-size` | `$font-size` | 超大标签字体大小 |
| `--l-tag-extra-large-icon-size` | `16px` | 超大标签图标大小 |
| `--l-tag-extra-large-height` | `40px` | 超大标签高度 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |