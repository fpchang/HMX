# lime-floating-panel 浮动面板
浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [浮动面板文档 - 站点1](https://limex.qcoon.cn/components/floating-panel.html)
- [浮动面板文档 - 站点2](https://limeui.netlify.app/components/floating-panel.html)
- [浮动面板文档 - 站点3](https://limeui.familyzone.top/components/floating-panel.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-floating-panel`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-floating-panel`组件

## 代码演示

### 基础用法
FloatingPanel 的默认高度为 `100px`，用户可以拖动来展开面板，使高度达到 `60%` 的屏幕高度。

```html
<l-floating-panel>
  <view>内容</view>
</l-floating-panel>
```

### 自定义锚点
你可以通过 `anchors` 属性来设置 FloatingPanel 的锚点位置，并通过 `v-model:height` 来控制当前面板的显示高度。

```html
<!-- vue3 使用 v-model:height -->
<!-- vue2 使用 :height.sync -->
<l-floating-panel v-model:height="height" :anchors="anchors">
  <view style="text-align: center; padding: 15px">
    <p>面板显示高度 {{ height.toFixed(0) }} px</p>
  </view>
</l-floating-panel>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const {windowHeight} = uni.getSystemInfoSync()
    const anchors = [
      100,
      Math.round(0.4 * windowHeight),
      Math.round(0.7 * windowHeight),
    ];
    const height = ref(anchors[0]);

    return { anchors, height };
  },
};
```

### 仅头部拖拽
默认情况下，FloatingPanel 的头部区域和内容区域都可以被拖拽，你可以通过 `content-draggable` 属性来禁用内容区域的拖拽。

```html
<l-floating-panel :content-draggable="false">
  <view style="text-align: center; padding: 15px">
    <text>内容不可拖拽</text>
  </view>
</l-floating-panel>
```

### 设置初始锚点位
默认情况下，FloatingPanel 的初始锚点位为0，可以通过设置 `defaultAnchor` 改变初始锚点位。

```html
<l-floating-panel :defaultAnchor="1">
  <view style="text-align: center; padding: 15px">
    <text>内容</text>
  </view>
</l-floating-panel>
```

### 跳到指定锚点位
FloatingPanel 暴露 `toAnchor` 方法，可以跳到指定的锚点位。

```html
<l-floating-panel ref="floatingPanelRef">
  <view style="text-align: center; padding: 15px">
    <text>内容</text>
  </view>
</l-floating-panel>
<button @click="to">跳到1</button>
```

```js
const floatingPanelRef = ref(null)

const to = () => floatingPanelRef.value.toAnchor(1)
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-floating-panel/components/lime-floating-panel -->
<lime-floating-panel />
```

### 插件标签说明
- 默认 `l-floating-panel` 为组件标签
- 默认 `lime-floating-panel` 为演示标签

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

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:height | 当前面板的显示高度 | _number \| string_ | `0` |
| anchors | 设置自定义锚点, 单位 `px` | _number[]_ | `[100, windowHeight * 0.6]` |
| animation | 是否开启动画 |  _boolean_ | `true` |
| content-draggable | 允许拖拽内容容器 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启底部安全区域 | _boolean_ | `true` |
| defaultAnchor | 默认的锚点下标，如果指定了就在会`anchors`里找到相应的高度 | _number_ | `0` |
| bgColor | 面板背景色 | <em>string</em> | - |
| barColor | 顶部拖拽条颜色 | <em>string</em> | - |
| duration | 动画时长（单位ms） | <em>number</em> | - |



### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| heightChange | 面板显示高度改变且结束拖动后触发 | `{ height: number }` |
| change | 面板显示高度改变且结束拖动后触发 | `{ height: number, index: number }` |

### Slots 

| 名称 | 说明 |
| --- | --- |
| default | 自定义面板内容 |

### 方法

通过 ref 可以获取到 FloatingPanel 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toAnchor | 跳转到指定锚点位置 | index: number | - |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-floating-panel-border-radius` | `$border-radius-xl` | 面板圆角大小 |
| `--l-floating-panel-header-height` | `30px` | 面板头部高度 |
| `--l-floating-panel-z-index` | `999` | 面板层级 |
| `--l-floating-panel-bg-color` | `$bg-color-elevated` | 面板背景色 |
| `--l-floating-panel-bar-width` | `30px` | 拖拽条宽度 |
| `--l-floating-panel-bar-height` | `3px` | 拖拽条高度 |
| `--l-floating-panel-bar-color` | `$fill-1` | 拖拽条颜色 |
| `--l-floating-panel-bar-radius` | `3px` | 拖拽条圆角 |
## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |
