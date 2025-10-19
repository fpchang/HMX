# lime-radio 单选框
在一组备选项中进行单选。  
插件依赖`lime-style`,`lime-shared`不喜勿下

## 文档
 🚀 [radio【站点1】](https://limex.qcoon.cn/components/radio.html)
 🌍 [radio【站点2】](https://limeui.netlify.app/components/radio.html)
 🔥 [radio【站点3】](https://limeui.familyzone.top/components/radio.html)




## 安装
插件市场导入即可，首次导入可能需要重新编译

## 代码演示
### 基础演示
通过`allowUncheck`可设置单个是否允许取消选中
```html
<l-radio allowUncheck>单选框</l-radio>
```

### 选项组
通过 v-model 绑定值当前选中项的 `value`或`name`,vue2使用的`value`被占用，故可以使用`name`。
```html
<l-radio-group v-model="checked" @change="onChange">
	<l-radio value="Beijing" label="北京" />
	<l-radio value="Shanghai" label="上海" />
	<l-radio value="Guangzhou" label="广州" />
	<l-radio value="Shenzen" label="深圳" />
</l-radio-group>
<!-- vue2使用的`value`被占用，故可以使用`name` -->
<l-radio-group v-model="checked" @change="onChange">
	<l-radio name="Beijing" label="北京" />
	<l-radio name="Shanghai" label="上海" />
	<l-radio name="Guangzhou" label="广州" />
	<l-radio name="Shenzen" label="深圳" />
</l-radio-group>
```
```js
const checked = ref('Beijing');
```

### 禁用
通过 `disabled` 属性禁止选项切换，在 Radio 上设置 `disabled` 可以禁用单个选项。
```html
<l-radio-group v-model="checked" disabled>
	<l-radio value="Beijing" label="北京" />
	<l-radio value="Shanghai" label="上海" />
	<l-radio value="Guangzhou" label="广州" />
	<l-radio value="Shenzen" label="深圳" />
</l-radio-group>
```

### 样式
`icon` 属性可选值为 `line` 和 `dot`，单选框形状分别对应线勾和圆点形。
```html
<l-radio-group icon="dot">
	<l-radio value="Beijing" label="北京" />
	<l-radio value="Guangzhou" label="广州" />
	<l-radio value="Shenzen" label="深圳" />
</l-radio-group>
<l-radio-group icon="line">
	<l-radio value="Beijing" label="北京" />
	<l-radio value="Guangzhou" label="广州" />
	<l-radio value="Shenzen" label="深圳" />
</l-radio-group>
```

### 自定义颜色
通过 `checked-color` 属性设置选中状态的图标颜色。
```html
<l-radio-group checked-color="#ee0a24">
	<l-radio value="Beijing" label="北京" />
	<l-radio value="Guangzhou" label="广州" />
	<l-radio value="Shenzen" label="深圳" />
</l-radio-group>
```

### 自定义大小
通过 `icon-size` 属性可以自定义图标的大小。
```html
<l-radio-group>
	<l-radio icon-size="44px" value="Beijing" label="北京" />
	<l-radio icon-size="34px" value="Guangzhou" label="广州" />
	<l-radio icon-size="24px" value="Shenzen" label="深圳" />
</l-radio-group>
```

### 自定义图标

通过 icon 插槽自定义图标，并通过 slotProps 判断是否为选中状态。
```html
<l-radio-group>
	<l-radio value="Beijing" label="北京">
		<template #icon="{checked}">
			<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
			<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
		</template>
	</l-radio>
	<l-radio value="Guangzhou" label="广州">
		<template #icon="{checked}">
			<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
			<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
		</template>
	</l-radio>
	<l-radio value="Shenzen" label="深圳">
		<template #icon="{checked}">
			<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
			<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
		</template>
	</l-radio>
</l-radio-group>
```


###  搭配单元格组件使用
搭配单元格组件使用时，需要再引入 [lime-cell](https://ext.dcloud.net.cn/plugin?id=20494) 组件。并且 radio-group 的 `direction`设置`vertical`让内容垂直布局
```html
<l-radio-group v-model="checked" direction="vertical">
	<l-cell-group inset>
		<l-cell title="单选框 1" @click="checked = '1'">
			<template #rightIcon>
				<l-radio value="1" />
			</template>
		</l-cell>
		<l-cell title="单选框 2" @click="checked = '2'">
			<template #rightIcon>
				<l-radio value="2" />
			</template>
		</l-cell>
	</l-cell-group>
</l-radio-group>
```


### 插件标签
`l-radio` 为 component  
`lime-radio` 为 demo

### Vue2使用
插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置   
关键代码是: 在main.js中 在vue2部分加上这一段即可

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，通常为一个唯一的字符串或数字 | _string\|number_ | - |
| value | 单选按钮的值 | _any_ | - |
| allowUncheck | 是否允许取消选中 | _boolean_ | `false` |
| checked | 是否选中 | _boolean_ | `false` |
| disabled | 是否为禁用态 | _boolean_ | `false` |
| readonly | 是否为只读 | _boolean_ | `false` |
| icon | 自定义选中图标和非选中图标可选值`'circle' | 'line' | 'dot'` | _string_ | `circle` |
| label | 主文案 | _string_ | `` |
| fontSize | 文本大小 | _string_ | `` |
| iconSize | 图标大小 | _string_ | `` |
| checkedColor | 选中状态颜色 | _string_ | `` |
| iconBgColor | 图标背景颜色 | _string_ | `` |
| iconBorderColor | 图标描边颜色 | _string_ | `` |
| iconDisabledColor | 图标禁用颜色 | _string_ | `` |
| iconDisabledBgColor | 图标禁用背景颜色 | _string_ | `` |
| labelStyle | 文本样式 | _string\|object_ | `` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 标识符，通常为一个唯一的字符串或数字 | _string\|number_ | - |
| name | 标识符，通常为一个唯一的字符串或数字 | _string\|number_ | - |
| value | 单选按钮的值 | _any_ | - |
| allowUncheck | 是否允许取消选中 | _boolean_ | `false` |
| disabled | 是否为禁用态 | _boolean_ | `false` |
| readonly | 是否为只读 | _boolean_ | `false` |
| direction | 排列方向，可选值为vertical | _string_ | `horizontal` |
| fontSize | 文本大小 | _string_ | `` |
| iconSize | 图标大小 | _string_ | `` |
| checkedColor | 选中状态颜色 | _string_ | `` |
| iconBgColor | 图标背景颜色 | _string_ | `` |
| iconBorderColor | 图标描边颜色 | _string_ | `` |
| iconDisabledColor | 图标禁用颜色 | _string_ | `` |
| iconDisabledBgColor | 图标禁用背景颜色 | _string_ | `` |

### Events

| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| change | 当绑定值变化时触发的事件 | _currentValue: any_ |


### Radio Slots

| 插槽名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| default | 自定义文本 | _-_ |
| radio | 整体 | _{ checked: boolean, disabled: boolean }_ |
| icon | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --l-radio-icon-size    | _40rpx_                  | -    |
| --l-radio-font-size | _32rpx_ | -    |
| --l-radio-icon-bg-color | _white_ | -    |
| --l-radio-border-icon-color | _$gray-5_ | -    |
| --l-radio-icon-disabled-color | _$gray-5_ | -    |
| --l-radio-icon-disabled-bg-color | _$gray-1_ | -    |
| --l-radio-icon-checked-color | _$primary-color_ | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)