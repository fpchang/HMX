# lime-scroll-x 横向滚动组件
一个功能丰富的横向滚动组件，用于展示横向滚动内容。支持自定义指示器、滑块颜色、宽度、高度等多种配置，可用于商品分类、导航菜单、图片轮播等多种场景。组件提供了丰富的自定义选项，可以满足各种横向滚动展示需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [横向滚动组件文档 - 站点1](https://limex.qcoon.cn/components/scroll-x.html)
- [横向滚动组件文档 - 站点2](https://limeui.netlify.app/components/scroll-x.html)
- [横向滚动组件文档 - 站点3](https://limeui.familyzone.top/components/scroll-x.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-scroll-x`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-scroll-x`组件

## 代码演示

### 基础用法
最简单的横向滚动组件用法，将需要横向滚动的内容放在组件内部。

```html
<l-scroll-x>
  <view class="grid">
    <view class="item" v-for="(item, index) in 10" :key="index">
      <image mode="widthFix" class="item-img" src="https://example.com/image.png"></image>
      <text class="item-text">商品{{index + 1}}</text>
    </view>
  </view>
</l-scroll-x>
```

```css
.grid {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.item-img {
  width: 40px;
}
.item-text {
  padding: 5px;
  font-size: 12px;
  white-space: nowrap;
}
```

### 自定义指示器样式
设置指示器的宽度、高度、颜色等属性。

```html
<l-scroll-x 
  track-width="100px" 
  track-height="6px" 
  track-color="#f5f5f5" 
  bar-width="30px" 
  bar-color="#1989fa"
>
  <view class="grid">
    <!-- 内容项 -->
  </view>
</l-scroll-x>
```

### 隐藏指示器
设置不显示底部指示器。

```html
<l-scroll-x :indicator="false">
  <view class="grid">
    <!-- 内容项 -->
  </view>
</l-scroll-x>
```



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-scroll-x/components/lime-scroll-x -->
<lime-scroll-x />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-scroll-x` | 组件标签 |
| `lime-scroll-x` | 演示标签 |

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
| trackWidth | 指示器轨道宽度 | _string_ | - |
| trackHeight | 指示器轨道高度 | _string_ | - |
| trackColor | 指示器轨道背景色 | _string_ | - |
| barColor | 指示器滑块颜色 | _string_ | - |
| barWidth | 指示器滑块宽度 | _string_ | - |
| indicator | 是否显示指示器 | _boolean_ | `true` |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | _event: Event_ |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 需要横向滚动的内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-scrollx-track-width` | `24px` | 指示器轨道宽度 |
| `--l-scrollx-track-height` | `4px` | 指示器轨道高度 |
| `--l-scrollx-track-color` | `$gray-3` | 指示器轨道背景色 |
| `--l-scrollx-bar-color` | `$primary-color` | 指示器滑块颜色 |
| `--l-scrollx-bar-width` | `12px` | 指示器滑块宽度 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |