# lime-switch 开关
一个功能丰富的开关组件，用于控制某个功能的开启和关闭状态。组件支持多种自定义选项，包括禁用状态、加载状态、形状选择、占位内容、自定义尺寸和颜色等，兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-loading`、`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [开关文档 - 站点1](https://limex.qcoon.cn/components/switch.html)
- [开关文档 - 站点2](https://limeui.netlify.app/components/switch.html)
- [开关文档 - 站点3](https://limeui.familyzone.top/components/switch.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-switch`
2. 插件市场导入即可，首次使用可能需要重新编译
3. 在页面中使用`l-switch`组件（组件）或`lime-switch`（演示）

## 代码演示

### 基础使用
通过 `v-model` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```html
<l-switch v-model="checked"></l-switch>
```

```js
const checked = ref(false)
```

### 禁用状态
通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
<l-switch v-model="checked" disabled></l-switch>
```

### 加载状态
通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
<l-switch v-model="checked" loading></l-switch>
```

### 形状选择
通过 `round` 属性设置开关形状，`true` 为圆形（默认），`false` 为方形。

```html
<l-switch :round="false"></l-switch>
<l-switch></l-switch>
```

### 占位内容
通过 `placeholder` 属性可设置占位内容，格式为`[开启时内容，关闭时内容]`。

```html
<l-switch :defaultValue="true" :placeholder="['人生得意须尽欢', '莫使金樽空对月']"></l-switch>
```

### 自定义尺寸
通过 `dotSize`、`height` 和 `width` 属性自定义开关尺寸：
- `dotSize`：按钮的尺寸
- `height`：开关的高度
- `width`：开关的最小宽度

```html
<l-switch dotSize="14px" height="18px" width="32px"></l-switch>
<l-switch dotSize="14px" height="22px" width="40px"></l-switch>
<l-switch dotSize="18px" height="26px" width="48px"></l-switch>
```

### 自定义颜色
通过 `checkedColor` 和 `uncheckedColor` 属性自定义开关颜色：
- `checkedColor`：打开时的背景色
- `uncheckedColor`：关闭时的背景色

```html
<l-switch checkedColor="#ffb300" uncheckedColor="#33c471" 
         :placeholder="['长风破浪会有时', '直挂云帆济沧海']"></l-switch>
```

### 自定义图标
通过`icon`插槽自定义按钮上的图标，插槽参数`checked`表示当前开关状态。

```html
<l-switch>
    <template #icon="{checked}">
        <text style="font-size:13px" v-show="checked">开</text>
        <text style="font-size:13px" v-show="!checked">关</text>
    </template>
</l-switch>
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-switch/components/lime-switch -->
<lime-switch />
```

## 插件标签说明
- 默认 `l-switch` 为组件标签
- 默认 `lime-switch` 为演示标签

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
| v-model | 开关选中状态 | <em>boolean</em> | `false` |
| value | 开关选中状态 | <em>boolean</em> | - |
| defaultValue | 开关默认选中状态 | <em>boolean</em> | - |
| disabled | 是否禁用 | <em>boolean</em> | `false` |
| readonly | 是否只读 | <em>boolean</em> | `false` |
| loading | 是否加载中 | <em>boolean</em> | `false` |
| round | 是否为圆形 | <em>boolean</em> | `true` |
| rubberBand | 按钮是否有橡皮筋效果 | <em>boolean</em> | `true` |
| placeholder | 占位内容，格式为`[开启时内容，关闭时内容]` | <em>string[]</em> | `[]` |
| fontSize | 字体大小 | <em>string</em> | - |
| width | 开关最小宽度 | <em>string</em> | - |
| height | 开关高度 | <em>string</em> | - |
| dotSize | 按钮尺寸 | <em>string</em> | - |
| dotPressedSize | 设置rubberBand后，按下按钮尺寸 | <em>string</em> | - |
| checkedColor | 打开时的背景色 | <em>string</em> | - |
| disabledColor | 禁用背景色 | <em>string</em> | - |
| checkedDisabledColor | 打开禁用背景色 | <em>string</em> | - |
| uncheckedColor | 关闭背景色 | <em>string</em> | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 开关状态切换时触发 | <em>currentValue: boolean</em> |

### Slots

| 名称 | 说明 |
| --- | --- |
| icon | 按钮图标插槽，参数：`checked`表示当前开关状态 |

## 主题定制
组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-switch-checked-color` | `$primary-color` | 开启状态背景色 |
| `--l-switch-checked-disabled-color` | `$primary-color-3` | 禁用开启状态背景色 |
| `--l-switch-unchecked-color` | `$gray-4` | 关闭状态背景色 |
| `--l-switch-unchecked-disabled-color` | `$gray-2` | 禁用关闭状态背景色 |
| `--l-switch-disabled-opacity` | `0.8` | 禁用状态透明度 |
| `--l-switch-width` | `46px` | 开关总宽度 |
| `--l-switch-height` | `28px` | 开关总高度 |
| `--l-switch-dot-size` | `22px` | 开关圆点直径 |
| `--l-switch-dot-size-pressed` | 平台相关 | 按下状态圆点尺寸 |
| `--l-switch-square-radius` | `4px` | 方形开关圆角 |
| `--l-switch-round-radius` | `99px` | 圆形开关圆角 |
| `--l-switch-dot-square-radius` | `3px` | 方形圆点圆角 |
| `--l-switch-dot-round-radius` | `99px` | 圆形圆点圆角 |
| `--l-switch-dot-bg-color` | `white` | 圆点背景色 |
| `--l-switch-dot-shadow` | `$shadow-1` | 圆点阴影效果 |
| `--l-switch-font-size` | `14px` | 文本字体大小 |
| `--l-switch-text-color` | `white` | 文本颜色 |


## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |