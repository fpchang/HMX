# lime-overlay 遮罩层
一个遮罩层组件，通过遮罩层可以强调部分内容，支持自定义内容和样式。

> 插件依赖：`lime-style`、`lime-shared`、`lime-transition`

## 文档链接
📚 组件详细文档请访问以下站点：
- [遮罩层文档 - 站点1](https://limex.qcoon.cn/components/overlay.html)
- [遮罩层文档 - 站点2](https://limeui.netlify.app/components/overlay.html)
- [遮罩层文档 - 站点3](https://limeui.familyzone.top/components/overlay.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-overlay`
2. 首次导入可能需要重新编译
3. 在页面使用`l-overlay`(组件)


## 代码演示
### 基础用法
```html
<button @click="onClick">显示</button>
<l-overlay :visible="show" @click="onClick"></l-overlay>
```
```js
const show =    refl(lflalse);
const onClick = () => {
	show.value = !show.value
}
```

### 嵌入内容
通过默认插槽可以在遮罩层上嵌入任意内容。
```html
<button @click="onClick">显示</button>
<l-overlay :visible="show" @click="onClick">
	<view class="wrapper">
		<view class="block" />
	</view>
</l-overlay>
```
```js
const show = ref(false);
const onClick = () => {
	show.value = !show.value
}
```

## Vue2使用说明
在main.js中添加：
```js
// main.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```
详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)



## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-overlay/components/lime-overlay -->
<lime-overlay />
```

## 插件标签说明
- `l-overlay`：遮罩层组件
- `lime-overlay`：演示标签

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否展示遮罩层 | boolean | `false` |
| z-index | z-index 层级 | number | `1000` |
| duration | 动画时长，单位ms，设置为 0 可以禁用动画 | number | `300` |
| lStyle | 自定义样式 | string | - |
| destoryOnClose | 隐藏时是否销毁 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |

## 主题定制
组件提供了下列CSS变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
|------|--------|------|
| `--l-overlay-z-index` | `998` | 遮罩层的层级，控制显示在页面中的层级高度 |
| `--l-overlay-bg-color` | `rgba(0, 0, 0, 0.6)` | 遮罩层的背景颜色和透明度 |
| `--l-overlay-blur` | `4px` | 遮罩层的模糊效果程度 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |