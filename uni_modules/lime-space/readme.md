# lime-space 间距
- 设置组件之间的间距。
- 非uvue端使用的是flex gap实现，可能存在兼容问题

## 文档
[space](https://limex.qcoon.cn/components/space.html)

## 安装
插件市场导入即可

## 代码演示

### 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 `8px`。

```html
<l-space>
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
</l-space>
```

### 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

```html
<l-space direction="vertical" :fill="true">
	<l-button type="primary" :data-block="true">品牌色</l-button>
	<l-button type="primary" :data-block="true">品牌色</l-button>
	<l-button type="warning" :data-block="true">品牌色</l-button>
</l-space>
```

### 自定义间距

通过调整 `size` 的值来控制间距的大小。传入 `number` 类型时，会默认使用 `px` 单位；也可以传入带有单位的值。

```html
<!-- 20px -->
<l-space :size="20">
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
</l-space>

<!-- 数组 -->
<l-space :size="[10,20]">
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
</l-space>
```

### 对齐方式

通过调整 `align` 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`，在水平模式下的默认值为 `center`。

```html
<radio-group @change="onChange" style="flex-direction: row;">
	<radio style="padding: 20rpx" class="radio" value="start">start</radio>
	<radio style="padding: 20rpx" class="radio" value="center">center</radio>
	<radio style="padding: 20rpx" class="radio" value="end">end</radio>
	<radio style="padding: 20rpx" class="radio" value="baseline">baseline</radio>
</radio-group>
<l-space :align="align">
	<l-button type="primary">{{align}}</l-button>
	<view style="padding: 40px 20px; background: #eee">Block</view>
</l-space>
```

```js
export default {
	data() {
		return {
			align: 'center'
		}
	},
	methods: {
		onChange(e: RadioGroupChangeEvent){
			this.align = e.detail.value
		}
	},
	mounted() {
		
	}
}
```

### 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

```html
<l-space :wrap="true">
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
	<l-button type="primary">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
	<l-button type="warning">品牌色</l-button>
</l-space>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | _vertical \| horizontal_ | `horizontal` |
| size | 间距大小，如 `20` `20rpx` `[20, 20]`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | _number \| string \| number[] \| string[]_ | `8` |
| align | 设置子元素的对齐方式 | _start \| end \| center \| baseline_ | - |
| wrap | 是否自动换行，仅适用于水平方向排列 | _boolean_ | `false` |
| fill | 是否让 Space 变为一个块级元素，填充整个父元素 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 间距组件内容 |


