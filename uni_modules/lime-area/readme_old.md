# lime-area 省市区选择 
省市区三级联动选择，通常与弹出层组件配合使用。  
插件依赖`lime-style`,`lime-shared`,`lime-loading`,`lime-picker`不喜勿下

## 文档
 🚀 [area【站点1】](https://limex.qcoon.cn/components/area.html)
 🌍 [area【站点2】](https://limeui.netlify.app/components/area.html)
 🔥 [area【站点3】](https://limeui.familyzone.top/components/area.html)



## 安装
插件市场导入即可。首次导入可能需要重新编译


## 代码演示

### 基础用法
初始化省市区组件时，需要通过 `localData` 属性传入省市区数据。在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 [Popup](https://ext.dcloud.net.cn/plugin?id=20769)
```html
<l-area 
	cancel-btn="取消" 
	confirm-btn="确定"
	title="标题" 
	:local-data="localData" >
</l-area>
```

### localData 格式

`localData` 为对象结构，包含 `province_list`、`city_list`、`county_list` 三个 key。

每项以地区码作为 key，省市区名字作为 value。地区码为 6 位数字字符，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。比如北京的地区码为 11，以 0 补足 6 位，为 110000。

示例数据如下：
```js
const areaList = {
  province_list: {
    '110000': '北京市',
    '120000': '天津市',
  },
  city_list: {
    '110100': '北京市',
    '120100': '天津市',
  },
  county_list: {
    '110101': '东城区',
    '110102': '西城区',
    // ....
  },
};
```


### 中国省市区数据
`lime-shared/areaData`提供了一份中国省市区数据, 该数据来源于 `Vant`
```js
import { areaList } from '@/uni_modules/lime-shared/areaData';
```
```html
<l-area 
	cancel-btn="取消" 
	confirm-btn="确定"
	title="标题" 
	:localData="areaList" >
</l-area>
```



### uniCloud
除了传入本地数据，也可以通过 `uniCloud` 获取`uniCloud`的`opendb-city-china`中国省市区数据<br>
- 1、开通`uniCloud`
- 2、创建`opendb-city-china`: 云函数/创建表/其他/opendb-city-china

```html
<l-area uniCloud></l-area>
```

### 控制选中项
通过 `v-model` 绑定当前选中的地区码。

```html
<l-area 
	v-model="value"
	cancel-btn="取消" 
	confirm-btn="确定"
	title="选择地区" 
	@confirm="onConfirm"
	:localData="areaList" >
</l-area>
```
```js
import { PickerConfirmEvent, PickerValue } from '@/uni_modules/lime-area'
import { areaList } from '@/uni_modules/lime-shared/areaData';
const value = ref<PickerValue[]>(['440000','440100','440114']);

const onConfirm = (context : PickerConfirmEvent) => {
	console.log('context', context)
}
```

### 配置显示列
可以通过 `columns-num` 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 `2`，则只会显示省市选择。
```html
<l-area :columns-num="2"></l-area>
```

### 查看示例
导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-area/compoents/lime-area -->
<lime-area />
```


### 插件标签
`l-area` 为 component
`lime-area` 为 demo

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

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项对应的值 | _string\|number[]_ | - |
| value | 当前选中项对应的值 | _string\|number[]_ | - |
| columns | 对象数组，配置每一列显示的数据 | _PickerColumn[]_ | `false` |
| cancelBtn | 取消按钮文字 | _string_ | `` |
| cancelStyle | 取消按钮样式 | _string_ | `` |
| confirmBtn | 确定按钮文字 | _string_ | `` |
| confirmStyle | 确定按钮样式 | _string_ | `` |
| title |  标题 | _string_ | `` |
| titleStyle |  标题样式 | _string_ | `` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| loadingColor | 加载图标颜色 | _string_ | `` |
| loadingMaskColor | 加载遮罩背景颜色 | _string_ | `` |
| loadingSize | 加载图标大小 | _string_ | `` |
| itemHeight | 每项高度 | _string_ | `50px` |
| itemColor | 每项文本颜色 | _string_ | `` |
| itemFontSize | 每项文本字体大小 | _string_ | `` |
| itemActiveColor | 每项文本选中颜色 | _string_ | `` |
| indicatorStyle | 选择器中间选中框的样式 | _string_ | `` |
| bgColor | 选择器背景色 | _string_ | `` |
| groupHeight | 选项组高度 | _string_ | `400rpx` |
| radius | 圆角 | _string_ |  |



### Events
| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| cancel | 点击取消按钮时触发 | __ |
| change | 选中变化时候触发 | _value: string\|number[]_ |
| confirm | 点击确认按钮时触发 | _{values: PickerValue[], indexs:number[], items:PickerColumnItem[]}:PickerConfirmEvent_ |



## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --l-picker-border-radius    | _24rpx_                  | -    |
| --l-picker-bg-color | _$bg-color-container_ | -    |
| --l-picker-toolbar-height | _116rpx_ | -    |
| --l-picker-cancel-color | _text-color-2_ | -    |
| --l-picker-confirm-color | _$primary-color_ | -    |
| --l-picker-button-font-size | _32rpx_ | -    |
| --l-picker-title-font-size | _36rpx_ | -    |
| --l-picker-title-font-weight | _700_ | -    |
| --l-picker-title-line-height | _52rpx_ | -    |
| --l-picker-title-color | _$text-color-1_ | -    |
| --l-picker-group-height | _400rpx_ | -    |
| --l-picker-indicator-bg-color | _$fill-4_ | -    |
| --l-picker-indicator-border-radius | _12rpx_ | -    |
| --l-picker-item-height | _50px_ | -    |
| --l-picker-item-color | _$text-color-1_ | -    |
| --l-picker-item-active-color | _$text-color-1_ | -    |
| --l-picker-item-active-color | _$text-color-1_ | -    |
| --l-picker-loading-mask-color | _rgba(255,255,255,.9)_ | -    |
| --l-picker-item-font-size | _$font-size-md_ | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)