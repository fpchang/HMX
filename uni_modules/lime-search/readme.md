# lime-search 搜索
一个功能丰富的搜索组件，用于用户输入搜索信息，并进行页面内容搜索。组件支持v-model双向数据绑定，提供多种自定义样式选项，包括不同形状、颜色和大小的搜索框，支持多种事件监听和插槽自定义，兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-shared`、`lime-icon`、`lime-svg`

## 文档链接
📚 组件详细文档请访问以下站点：
- [搜索文档 - 站点1](https://limex.qcoon.cn/components/search.html)
- [搜索文档 - 站点2](https://limeui.netlify.app/components/search.html)
- [搜索文档 - 站点3](https://limeui.familyzone.top/components/search.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-search`
2. 插件市场导入即可，首次导入可能需要重新编译
3. 在页面中使用`l-search`组件（组件）或`lime-search`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示

### 基础使用
`v-model` 用于控制搜索框中的文字。

```html
<l-search class="search" v-model="value" placeholder="请输入关键字" />
```

```js
const value = ref('')
```

### 事件监听
Search 组件提供了多种事件监听，包括 `change`、`blur`、`clear`、`focus`、`submit`、`action-click`，通过`action`属性设置右侧操作按钮文字。

```html
<l-search
    v-model="value"
    placeholder="请输入关键字"
    action="取消"
    @change="onChange"
    @blur="onBlur"
    @clear="onClear"
    @focus="onFocus"
    @submit="onSubmit"
    @action-click="onActionClick">
</l-search>
```

```js
const value = ref('');
const onChange = (value: string) => {
	console.log(`onChange`, value)
}
const onBlur = (value: string) => {
	console.log(`onBlur`, value)
}
const onClear = (value: string) => {
	console.log(`onClear`, value)
}
const onFocus = (value: string) => {
	console.log(`onFocus`, value)
}
const onSubmit = (value: string) => {
	console.log(`onSubmit`, value)
}
const onActionClick = () => {
	console.log('click')
}
```

### 内容居中
通过 `center` 属性设置搜索框内容的居中显示。

```html
<l-search class="search" v-model="value" :center="true" placeholder="请输入关键字" />
```

### 禁用
通过 `disabled` 属性设置搜索框为禁用状态。

```html
<l-search class="search" v-model="value" :disabled="true" placeholder="请输入关键字" />
```

### 形状
通过 `shape` 属性设置搜索框形状，可选值为 `square`（方形）或 `round`（圆形）。

```html
<l-search class="search" v-model="value" shape="round" placeholder="请输入关键字" />
```

### 自定义
可通过插槽实现复杂的布局，例如自定义左侧内容和右侧图标。

```html
<l-search 
    class="search" 
    padding="16rpx 5rpx 16rpx 24rpx" 
    v-model="value" 
    shape="round" 
    placeholder="请输入关键字">
    <template #left>
        <text style="padding-right: 10px; color: #666">地址</text>
    </template>
    <template #right-icon>
        <l-button type="primary" size="small" shape="round">搜索</l-button>
    </template>
</l-search>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-search/components/lime-search -->
<lime-search />
```

## 插件标签说明
- 默认 `l-search` 为组件标签
- 默认 `lime-search` 为演示标签

## Vue2使用说明
插件使用了`composition-api`，如果你希望在Vue2中使用，请按官方教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键代码是在main.js中的Vue2部分添加以下代码：

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 值 | <em>string</em> | - |
| v-model | 值 | <em>string</em> | - |
| action | 自定义右侧操作按钮文字 | <em>string</em> | - |
| adjustPosition | 键盘弹起时，是否自动上推页面 | <em>boolean</em> | - |
| alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | <em>boolean</em> | - |
| center | 搜索框内容是否居中 | <em>boolean</em> | `false` |
| clearable | 是否启用清除控件 | <em>boolean</em> | `true` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | <em>boolean</em> | `false` |
| disabled | 是否禁用 | <em>boolean</em> | `false` |
| focus | 是否聚焦 | <em>boolean</em> | `false` |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | <em>boolean</em> | `false` |
| confirmType | 设置键盘右下角按钮的文字，仅在type='text'时生效，[详见文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) | <em>string</em> | `search` |
| cursor | 指定 focus 时的光标位置 | <em>number</em> | - |
| cursorSpacing | 搜索框聚焦时底部与键盘的距离 | <em>number</em> | `0` |
| leftIcon | 左侧图标 | <em>string</em> | - |
| maxcharacter | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | <em>number</em> | - |
| maxlength | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | <em>number</em> | `-1` |
| placeholder | 占位符 | <em>string</em> | - |
| placeholderClass | 指定 placeholder 的样式类 | <em>string</em> | - |
| placeholderStyle | 指定 placeholder 的样式 | <em>string</em> | - |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | <em>number</em> | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | <em>number</em> | - |
| shape | 搜索框形状，可选值：`square`、`round` | <em>string</em> | - |
| type | 拉起键盘的类型 | <em>string</em> | - |
| lStyle | 样式 | <em>string\|object</em> | - |
| cursorColor | 光标颜色 | <em>string</em> | - |
| padding | 内边距 | <em>string</em> | - |
| radius | 圆角 | <em>string</em> | - |
| height | 高度 | <em>string</em> | - |
| bgColor | 背景色 | <em>string</em> | - |
| fontSize | 文本字体大小 | <em>string</em> | - |
| textColor | 文本颜色 | <em>string</em> | - |
| iconColor | 图标颜色 | <em>string</em> | - |
| clearIconColor | 删除图标颜色 | <em>string</em> | - |
| lContentStyle | 自定义内容节点样式 | <em>string\|object</em> | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| action-click | 点击右侧操作按钮时触发 | - |
| change | 输入时触发 | <em>value: string</em> |
| blur | 输入框失去焦点时触发 | <em>value: string</em> |
| clear | 点击清除按钮后触发 | - |
| focus | 输入框获得焦点时触发 | <em>value: string</em> |
| submit | 确定搜索时触发 | <em>value: string</em> |

### Slots

| 名称 | 说明 |
| --- | --- |
| left | 自定义左侧内容（搜索框外） |
| action | 自定义右侧内容（搜索框外） |
| left-icon | 自定义左侧图标（搜索框内） |
| right-icon | 自定义右侧图标（搜索框内） |

## 主题定制
组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-search-bg-color` | `$fill-3` | 搜索框背景颜色 |
| `--l-search-text-color` | `$text-color-1` | 搜索文本颜色 |
| `--l-search-label-color` | `$text-color-1` | 搜索标签颜色 |
| `--l-search-font-size` | `$font-size-md` | 搜索框字体大小 |
| `--l-search-height` | `40px` | 搜索框高度 |
| `--l-search-padding-x` | `12px` | 搜索框水平内边距 |
| `--l-search-padding-y` | `8px` | 搜索框垂直内边距 |
| `--l-search-placeholder-color` | `$text-color-3` | 占位文本颜色 |
| `--l-search-icon-color` | `$text-color-4` | 搜索图标颜色 |
| `--l-search-action-color` | `$primary-color` | 操作按钮颜色 |
| `--l-search-clear-icon-color` | `$text-color-4` | 清除按钮颜色 |
| `--l-search-square-radius` | `$border-radius` | 方形搜索框圆角 |
| `--l-search-round-radius` | `99px` | 圆形搜索框圆角 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |