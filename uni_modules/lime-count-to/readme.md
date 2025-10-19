# lime-count-to 数字滚动组件
一个功能丰富的数字滚动动画组件，用于展示数字变化的动态效果。支持设置起始值、结束值、精度、分隔符、动画持续时间等多种配置，可用于展示计数器、统计数据、金额变化等多种场景。组件提供了丰富的自定义选项，可以满足各种数字动画展示需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [数字滚动组件文档 - 站点1](https://limex.qcoon.cn/components/count-to.html)
- [数字滚动组件文档 - 站点2](https://limeui.netlify.app/components/count-to.html)
- [数字滚动组件文档 - 站点3](https://limeui.familyzone.top/components/count-to.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-count-to`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-count-to`组件

## 代码演示

### 基础用法
最简单的数字滚动组件用法，只需要设置目标值即可。

```html
<l-count-to :to="1000"></l-count-to>
```

### 设置起始值和结束值
指定数字从哪个值开始滚动到目标值。

```html
<l-count-to :from="0" :to="1000"></l-count-to>
```

### 设置精度
控制小数点后显示的位数。

```html
<l-count-to :to="1000.56789" :precision="2"></l-count-to>
```

### 使用分隔符
为大数字添加千位分隔符，使数字更易读。

```html
<l-count-to :to="1000000" show-separator></l-count-to>
```

### 万分位分隔符
通过`separator`设置为`group4`显示万分位分隔符，国内习惯万分位分割

```html
<l-count-to :to="1000000" show-separator separator="group4"></l-count-to>
```

### 设置动画持续时间
控制数字滚动动画的持续时间。

```html
<l-count-to :to="1000" :duration="3000"></l-count-to>
```

### 插槽
通过`formatted`插槽导出的`value`可以更个性定制样式
```html
<l-count-to :show-separator="true" :from="0.0" :to="699700.699" :precision="3">
	<template #formatted={value}>
		<text style="background-color: antiquewhite;">
			<text style="font-size: 32rpx">￥</text>
			<text style="font-size: 52rpx" :key="value.integer">{{value.integer}}</text>
			<text style="font-size: 32rpx">.</text>
			<text style="font-size: 32rpx">{{value.decimal}}</text>
		</text>
	</template>
</l-count-to>
```

### 结束的回调
动画结束会触发`finish`事件可
```html
<l-count-to :show-separator="true"  :from="0" :to="100000000" @finish="handleFinish" />
```
```js
const handleFinish = () => {
	console.log('结束')
}
```


### 手动播放
可以通过调用插件内部方法控制播放
```html
<l-count-to ref="countToRef" :active="false" :show-separator="true"  :from="0" :to="100000000" />
<button size="mini" @click="play"> 播放</button>
```
```js
const countToRef = ref<LCountToComponentPublicInstance|null>(null)

const play = () => {
	if(countToRef.value == null) return
	countToRef.value!.play()
}
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-count-to/components/lime-count-to -->
<lime-count-to />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-count-to` | 组件标签 |
| `lime-count-to` | 演示标签 |

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
| to | 目标数值 | _number_ | `0` |
| from | 起始数值 | _number_ | `0` |
| precision | 数值精度，小数点后的位数 | _number_ | `0` |
| showSeparator | 是否显示分隔符 | _boolean_ | `false` |
| separator | 分隔符类型，默认为千位分隔 | _string_ | `'group3'` |
| locale | 国际化设置，用于格式化数字 | _string_ | - |
| active | 是否激活动画 | _boolean_ | `true` |
| duration | 动画持续时间（毫秒） | _number_ | `2000` |
| timingFunction | 动画缓动函数 | _function_ | `null` |
| fps | 动画帧率，0表示使用默认帧率 | _number_ | `0` |

### Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| finish  | 动画结束触发 | __ |


### Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| formatted      | 默认插槽{value:{integer, decimal, decimalSeparator}}    |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |