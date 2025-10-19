# lime-count-down 倒计时组件

一个功能丰富的倒计时组件，用于展示剩余时间。支持自动开始、毫秒精度、自定义格式等多种配置，可用于限时抢购、活动倒计时等场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [倒计时组件文档 - 站点1](https://limex.qcoon.cn/components/count-down.html)
- [倒计时组件文档 - 站点2](https://limeui.netlify.app/components/count-down.html)
- [倒计时组件文档 - 站点3](https://limeui.familyzone.top/components/count-down.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-count-down`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-count-down`组件

## 代码演示

### 基础用法
最简单的倒计时组件用法，只需要设置剩余时间即可。

```html
<l-count-down :time="86400000"></l-count-down>
```

### 自定义格式
设置倒计时的显示格式。

```html
<l-count-down :time="86400000" format="DD天HH小时mm分ss秒"></l-count-down>
```

### 毫秒精度
启用毫秒精度倒计时。

```html
<l-count-down :time="86400000" millisecond></l-count-down>
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。

```html
<l-count-down :time="time">
	<template #default="{ hours, minutes, seconds }">
		<text class="block">{{ hours }}</text>
		<text class="colon">:</text>
		<text class="block">{{ minutes }}</text>
		<text class="colon">:</text>
		<text class="block">{{ seconds }}</text>
	</template>
</l-count-down>

<style>
  .colon {
    margin: 0 4px;
    color: #1989fa;
  }
  .block {
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
  }
</style>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```html
<l-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="onFinish"
/>

```

```js

const time = ref(30 * 60 * 60 * 1000)
const countDown = ref<LCountDownComponentPublicInstance | null>(null);

const start = () => {
	if (countDown.value == null) return
	countDown.value!.start();
};
const pause = () => {
	if (countDown.value == null) return
	countDown.value!.pause();
};
const reset = () => {
	if (countDown.value == null) return
	countDown.value!.reset();
};

const onFinish = () => console.log('倒计时结束');
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-count-down/components/l-count-down -->
<l-count-down />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-count-down` | 组件标签 |

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
| autoStart | 是否自动开始计时 | _boolean_ | `true` |
| format | 倒计时显示格式 | _string_ | `'HH:mm:ss'` |
| millisecond | 是否启用毫秒精度 | _boolean_ | - |
| time | 剩余时间（毫秒） | _number_ | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| finish | 倒计时结束时触发 | - |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义倒计时内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
| --- | --- | --- |
| `--l-count-down-text-color` | `$text-color-1` | 倒计时文字颜色 |
| `--l-count-down-font-size` | `$font-size-md` | 倒计时字体大小 |
| `--l-count-down-line-height` | `1.6666` | 倒计时行高 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |