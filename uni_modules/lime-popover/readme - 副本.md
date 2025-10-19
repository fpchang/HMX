# lime-popover 气泡弹出框
- 用于文字提示的气泡框。弹出式的气泡菜单。兼容uniapp/uniappx
- 插件依赖`lime-style`,`lime-shared`,`lime-transition`不喜勿下


## 文档
  [popover【站点1】](https://limex.qcoon.cn/components/popover.html)
  [popover【站点2】](https://limeui.netlify.app/components/popover.html)
  [popover【站点3】](https://limeui.familyzone.top/components/popover.html)



## 安装
在插件市场导入即可，首次导入可能需要重新编译

## 代码演示
### 基础用法
当 Popover 弹出时，会基于 默认 插槽的内容进行定位

```html
<l-popover content="弹出气泡内容">
	<button type="primary">浅色风格</button>
</l-popover>
```


### 自定义内容
通过`content`插槽，可以在 Popover 内部放置任意内容。

```html
<l-popover>
	<button type="primary">浅色风格</button>
	<template #content>
		<view>
			<text style="color: aliceblue;">内容内容内内容</text>
		</view>
	</template>
</l-popover>
```

### 组件样式
Popover 内置浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。也可以将 `theme`设置成任意颜色值,改变背景色，通过`color`设置文本色。

```html
<l-popover theme="dark" content="内容">
	<button type="primary">浅色风格</button>
</l-popover>
<l-popover theme="red" color="white" content="内容">
	<button type="primary">浅色风格</button>
</l-popover>
```

### 弹出位置
通过 `placement` 属性来控制气泡的弹出位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom

```html
<l-popover placement="bottom-left" content="内容">
	<button type="primary">底部左</button>
</l-popover>
```

### 手动关闭
由于小程序无法监听点击自己以外的地方(`WEB`和`APP`无此问题)，故使用了`mask`层，会导致点击其它按钮时会先点击mask层，造成要点击2下才点中的感觉。所以组件也提供了一个主动关闭的函数。在页面的根元素上绑定点击事件。

```html
<view class="page" @click="closeAll">
	<l-popover :closeOnClickOutside="false"  theme="dark" content="内容" placement="bottom">
		<button type="primary">底部</button>
	</l-popover>
</view>
```
```js
import { closeOutside } from '@/uni_modules/lime-popover'
const closeAll = () => {
	closeOutside()
}
```



### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-popover/compoents/lime-popover -->
<lime-popover />
```


### 插件标签
- 默认 l-popover 为 component
- 默认 lime-popover 为 demo

### Vue2使用
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可
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
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| content | 文本内容 | _string_ | `` |
| color | 文本u颜色 | _string_ | `` |
| placement | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | _string_ | `top` |
| showArrow | 是否显示浮层箭头 | _boolean_ | `true` |
| theme | 弹出气泡主题。可选项：dark/light/任意色值 | _string_ | `light` |
| visible | 是否显示气泡框。 | _boolean_ | `` |
| disabled | 是否禁用。 | _boolean_ | `false` |




### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
|  default | 默认插槽 |
|  content | 内容插槽 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --l-popover-padding    | _12px_                  | -    |
| --l-popover-content-line-height | _24px_ | -    |
| --l-popover-arrow-size | _8px_ | -    |
| --l-popover-content-margin | _8px_ | -    |
| --l-popover-color | _$text-color-1_ | -    |
| --l-popover-bg-color | _$bg-color-container_ | -    |



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)

