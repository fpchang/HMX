# lime-sorter 排序按钮
- 用于显示一个可以点击的按钮, 用于排序数据
- 插件依赖`lime-shared`,`lime-style`不喜勿下

## 文档
[sorter](https://limex.qcoon.cn/components/sorter.html)

## 安装
插件市场导入即可，首次导入可能需要重新编译

## 代码演示
### 基础操作
通过默认插槽或`label`设置按钮文本
```html
<l-sorter>价格</l-sorter>
```

### 允许重置
双箭头状态下(默认状态)通过设置 `allow-reset` 允许重置按钮为未选中状态
```html
<l-sorter allow-reset>价格</l-sorter>
```


### 降序优先
通过设置 `desc-first` 优先切换为降序，默认为升序。

```html
<l-sorter desc-first>价格</l-sorter>
```

### 自定义样式
通过插槽实现更个性的样式，可通过`arrow`插槽传递出来的`value`值判断需要显示的内容，0：默认，1：升序，-1：降序

```html
<l-sorter>
	<text>价格</text>
	<template #arrow="{value}">
		<view style="margin-left: 4px; flex-direction: row;">
			<text v-show="value == 1 || value == 0" style="font-size: 10px; font-weight: bold;">↿</text>
			<text v-show="value == -1 || value == 0" style="font-size: 10px; font-weight: bold">⇂</text>
		</view>
	</template>
</l-sorter>
```


### 插件标签
- 默认 l-sorter 为 component
- 默认 lime-sorter 为 demo
- 
### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的箭头方向：1 升序，0 重置状态，-1 降序。 | _number_ |  |
| v-model | 选中的箭头方向：1 升序，0 重置状态，-1 降序。 | _number_ |  |
| defaultValue | 选中的箭头方向：1 升序，0 重置状态，-1 降序。 | _number_ | `0` |
| label | 排序按钮展示的文案。 | _string_ |  |
| labelStyle | label样式。 | _string_ |  |
| allowReset | 当展示双箭头时，是否允许手动重置按钮 | _boolean_ | `false` |
| descFirst | 是否优先切换为降序，如果不开启则默认优先切换为升序。 | _boolean_ | `false` |
| activeColor | 箭头激活色。 | _string_ |  |
| inactiveColor | 箭头非激活色。 | _string_ |  |
| arrowSize | 箭头尺寸。 | _string_ |  |

#### Slots

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| default   | 默认显示的内容 |
| arrow   | 箭头插槽 |

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)