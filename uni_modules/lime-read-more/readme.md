# lime-read-more 阅读更多组件
一个功能丰富的阅读更多组件，用于展示长文本内容。支持自定义展开/收起文本、图标、高度、颜色等多种配置，可用于文章预览、产品描述、用户评论等多种场景。组件提供了丰富的自定义选项，可以满足各种内容展示需求。

> 插件依赖：`lime-icon`、`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [阅读更多组件文档 - 站点1](https://limex.qcoon.cn/components/read-more.html)
- [阅读更多组件文档 - 站点2](https://limeui.netlify.app/components/read-more.html)
- [阅读更多组件文档 - 站点3](https://limeui.familyzone.top/components/read-more.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-read-more`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-read-more`组件

::: tip 注意🔔 
本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。

如果不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在项目里删除即可
:::

## 代码演示

### 基础用法
最简单的阅读更多组件用法，将长文本内容放在组件内部。

```html
<l-read-more>
  <view>
    <text>那一天我二十一岁，在我一生的黄金时代，我还有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我知道，生活就是个缓慢受槌的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了槌的牛一样。可是我二十一岁生日时没预见到这一点。我觉得自己会永远生猛下去，什么也槌不了我。——王小波《黄金时代》</text>
  </view>
</l-read-more>
```

### 自定义展开/收起文本
设置展开和收起时显示的文本内容。

```html
<l-read-more 
  expand-text="查看全文" 
  collapse-text="收起内容"
>
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 自定义展开/收起图标
设置展开和收起时显示的图标。

```html
<l-read-more 
  expand-icon="arrow-down" 
  collapse-icon="arrow-up"
>
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 自定义收起高度
设置收起状态时内容的显示高度。

```html
<l-read-more height="150px">
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 自定义文本颜色和字体大小
设置展开/收起按钮的文本颜色和字体大小。

```html
<l-read-more 
  text-color="#1989fa" 
  font-size="16px"
>
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 自定义遮罩颜色
设置收起状态时底部遮罩的渐变颜色。

```html
<l-read-more 
  :mask-color="['#ffffff', 'rgba(255, 255, 255, 0.5)']"
>
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 禁用状态
设置组件为禁用状态，禁用后无法点击展开或收起。

```html
<l-read-more :disabled="true">
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

### 使用v-model控制展开/收起
通过v-model双向绑定控制组件的展开/收起状态。

```html
<l-read-more v-model="isExpanded">
  <view>
    <text>长文本内容...</text>
  </view>
</l-read-more>
```

```js
export default {
  data() {
    return {
      isExpanded: false
    }
  }
}
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-read-more/components/lime-read-more -->
<lime-read-more />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-read-more` | 组件标签 |
| `lime-read-more` | 演示标签 |

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
| modelValue | 是否展开，可使用v-model双向绑定 | _boolean_ | `false` |
| value | 是否展开（兼容旧版本） | _boolean_ | `false` |
| disabled | 是否禁用，禁用后无法点击展开或收起 | _boolean_ | `false` |
| expandText | 展开按钮的文本 | _string_ | `'展开更多'` |
| expandIcon | 展开按钮的图标名称 | _string_ | `'chevron-down'` |
| collapseText | 收起按钮的文本 | _string_ | `'收起'` |
| collapseIcon | 收起按钮的图标名称 | _string_ | `'chevron-up'` |
| height | 收起状态时的内容高度 | _string_ | `'100px'` |
| fontSize | 展开/收起按钮的字体大小 | _string_ | - |
| textColor | 展开/收起按钮的文本颜色 | _string_ | - |
| maskColor | 遮罩的渐变颜色数组 | _Array_ | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 展开/收起状态变化时触发 | _value: boolean_ |
| click | 点击展开/收起按钮时触发 | - |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 需要展示的内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-read-more-handle-color` | `$text-color-3` | 展开/收起按钮的文本颜色 |
| `--l-read-more-handle-disabled-color` | `$text-color-3` | 禁用状态下按钮的文本颜色 |
| `--l-read-more-handle-padding` | `10px` | 展开/收起按钮的内边距 |
| `--l-read-more-handle-gap` | `4px` | 按钮文本与图标之间的间距 |
| `--l-read-more-read-start` | `rgba(255, 255, 255, 0.9)` | 遮罩渐变的起始颜色 |
| `--l-read-more-read-end` | `rgba(255, 255, 255, 0.3)` | 遮罩渐变的结束颜色 |
| `--l-read-more-font-size` | `$font-size` | 按钮文本的字体大小 |
| `--l-read-more-icon-size` | `$font-size-md` | 按钮图标的大小 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |