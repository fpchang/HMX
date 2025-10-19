# lime-pagination 分页组件
一个功能丰富的分页组件，用于分隔长列表，每次只加载一个页面。支持简单模式、省略号显示、自定义按钮等多种配置，可用于各种需要分页的场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-style`、`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [分页组件文档 - 站点1](https://limex.qcoon.cn/components/pagination.html)
- [分页组件文档 - 站点2](https://limeui.netlify.app/components/pagination.html)
- [分页组件文档 - 站点3](https://limeui.familyzone.top/components/pagination.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-pagination`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-pagination`组件

## 代码演示

### 基础用法
最简单的分页组件用法，通过 `v-model` 来绑定当前页码。

```html
<l-pagination v-model="currentPage" :total="24" :page-size="5" :pager-count="3" />
```

```js
const currentPage = ref(1)
```

### 简单模式
通过 `simple` 设置为简单模式，只显示当前页码和总页数。

```html
<l-pagination v-model="currentPage" :total="24" :simple="true" />
```

### 显示省略号
设置 `force-ellipses` 后会展示省略号按钮，点击后可以快速跳转。

```html
<l-pagination 
  v-model="currentPage" 
  :total="204" 
  :page-size="5" 
  :pager-count="5" 
  force-ellipses
/>
```

### 隐藏前进后退按钮
通过 `showPrevButton` 和 `showNextButton` 控制是否显示上一页和下一页按钮。

```html
<l-pagination 
  v-model="currentPage" 
  :total="204" 
  :page-size="5" 
  :pager-count="5" 
  :show-prev-button="false"
  :show-next-button="false"
  force-ellipses
/>
```

### 禁用状态
设置 `disabled` 禁用分页器。

```html
<l-pagination 
  v-model="currentPage" 
  :total="204" 
  :page-size="5" 
  :pager-count="5" 
  :disabled="true"
  force-ellipses
/>
```

### 自定义分页按钮
插件提供了三个插槽：`prev`、`page`、`next`，可以高度自由自定义样式。

```html
<l-pagination
  v-model="currentPage" 
  :total="204" 
  :page-size="5" 
  :pager-count="3" 
  force-ellipses
>
  <template #prev="{disabled}">
    <text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px">←</text>
  </template>
  <template #page="{label, active}">
    <text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px; margin: 0 5px;">{{label}}</text>
  </template>
  <template #next="{disabled}">
    <text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px">→</text>
  </template>
</l-pagination>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-pagination/components/lime-pagination -->
<lime-pagination />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-pagination` | 组件标签 |
| `lime-pagination` | 演示标签 |

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
| v-model | 当前页码 | _number_ | - |
| total | 总记录数，用于计算总页数 | _number_ | `0` |
| pageSize | 每页显示的记录数 | _number_ | `10` |
| pagerCount | 显示的页码按钮数量 | _number_ | `5` |
| hideOnSinglePage | 如果只有一页，是否隐藏分页器 | _boolean_ | `false` |
| disabled | 是否禁用分页 | _boolean_ | `false` |
| forceEllipses | 是否显示省略号 | _boolean_ | `false` |
| simple | 是否为简单分页 | _boolean_ | `false` |
| showPrevButton | 是否展示上一页按钮 | _boolean_ | `true` |
| showNextButton | 是否展示下一页按钮 | _boolean_ | `true` |
| prevText | 上一页按钮文字 | _string_ | `上一页` |
| nextText | 下一页按钮文字 | _string_ | `下一页` |
| bgColor | 背景色 | _string_ | - |
| color | 文本色 | _string_ | - |
| activeBgColor | 激活背景色 | _string_ | - |
| activeColor | 激活文本色 | _string_ | - |
| fontSize | 字体尺寸 | _string_ | - |
| radius | 圆角 | _string_ | - |
| borderColor | 描边色 | _string_ | - |
| itemWidth | 每项宽度 | _string_ | - |
| itemHeight | 每项高度 | _string_ | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换分页触发 | _page: number_ |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| prev | 上一页按钮插槽，参数：`{disabled}` |
| next | 下一页按钮插槽，参数：`{disabled}` |
| page | 页码按钮插槽，参数：`{label, active}` |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-pagination-font-size` | _$font-size-md_ | 分页器字体大小 |
| `--l-pagination-item-width` | _40px_ | 分页按钮宽度 |
| `--l-pagination-item-height` | _40px_ | 分页按钮高度 |
| `--l-pagination-text-color` | _$text-color-2_ | 分页按钮文本颜色 |
| `--l-pagination-bg-color` | _$gray-1_ | 分页按钮背景色 |
| `--l-pagination-active-bg-color` | _$primary-color_ | 激活状态背景色 |
| `--l-pagination-active-text-color` | _white_ | 激活状态文本颜色 |
| `--l-pagination-border-radius` | _5px_ | 分页按钮圆角 |
| `--l-pagination-disabled-opacity` | _0.5_ | 禁用状态透明度 |
| `--l-pagination-disabled-color` | _$text-color-4_ | 禁用状态文本颜色 |
| `--l-pagination-disabled-bg-color` | _$gray-2_ | 禁用状态背景色 |
| `--l-pagination-simple-text-color` | _$text-color-1_ | 简单模式文本颜色 |
| `--l-pagination-gap` | _6px_ | 分页按钮间距 |
| `--l-pagination-border-color` | _transparent_ | 分页按钮边框颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |