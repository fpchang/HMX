# lime-scroll-x 
- 仿京东带指示器横向滚动，兼容uniapp/uniappx

## 文档
[scroll-x](https://limex.qcoon.cn/components/scroll-x.html)

## 安装
插件市场导入即可，首次导入可能需要重新编译

## 代码演示
### 基础使用

```html
<l-scroll-x>
	<view class="grid">
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
		<view class="item">
			<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
			<text class="item-text">京东超市</text>
		</view>
	</view>
</l-scroll-x>
```
```style
.grid {
	display: flex;
	flex-wrap: nowrap;
	position: relative;
	overflow: visible;
	flex-direction: row;
}
.item {
	// width: 80px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	padding: 10px;
	&-img {
		width: 40px;
	}
	&-text {
		padding: 5px;
		font-size: 12px;
		white-space: nowrap;
	}
}
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-scroll-x/compoents/lime-scroll-x 
<lime-scroll-x />
```

### 插件标签
- 默认 l-scroll-x 为 component
- 默认 lime-scroll-x 为 demo

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

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| trackWidth  | 指示器条宽度       | _string_  | `-`     |
| trackHeight  | 指示器条高度      | _string_  | `-`     |
| trackColor  | 指示器条背景       | _string_  | `-`     |
| barWidth  | 指示器条滑块宽度     | _string_  | `-`     |
| barColor  | 指示器条滑块颜色      | _string_  | `-`     |
| indicator  | 是否显示指示器     | _boolean_  | `true`     |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式)。uvue app无效。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-scrollx-track-width: | _24px_ | - |
| --l-scrollx-track-height: | _4px_ | - |
| --l-scrollx-track-color: | _rgba(0,0,0,.06)_ | - |
| --l-scrollx-bar-color: | _#fa2c19_ | - |
| --l-scrollx-bar-width: | _12px_ | - |



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)