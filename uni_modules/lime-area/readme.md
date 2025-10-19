# lime-area 省市区选择
一个省市区三级联动选择组件，通常与弹出层组件配合使用。

> 插件依赖：`lime-style`、`lime-shared`、`lime-loading`、`lime-picker`

## 文档链接
📚 组件详细文档请访问以下站点：
- [省市区选择文档 - 站点1](https://limex.qcoon.cn/components/area.html)
- [省市区选择文档 - 站点2](https://limeui.netlify.app/components/area.html)
- [省市区选择文档 - 站点3](https://limeui.familyzone.top/components/area.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-area`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-area`组件（组件）或`lime-area`（演示）

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

## Vue2使用说明
本插件使用了`composition-api`，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
```js
// main.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-area/components/lime-area -->
<lime-area />
```

## 插件标签说明
- `l-area`：省市区选择组件
- `lime-area`：演示标签

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项对应的值 | string\|number[] | - |
| value | 当前选中项对应的值 | string\|number[] | - |
| columns | 对象数组，配置每一列显示的数据 | PickerColumn[] | `false` |
| local-data | 省市区数据 | Object | - |
| columns-num | 显示列数，1-省，2-省市，3-省市区 | number | `3` |
| uniCloud | 是否使用uniCloud数据 | boolean | `false` |
| cancel-btn | 取消按钮文字 | string | - |
| cancel-style | 取消按钮样式 | string | - |
| confirm-btn | 确定按钮文字 | string | - |
| confirm-style | 确定按钮样式 | string | - |
| title | 标题 | string | - |
| title-style | 标题样式 | string | - |
| loading | 是否显示加载状态 | boolean | `false` |
| loading-color | 加载图标颜色 | string | - |
| loading-mask-color | 加载遮罩背景颜色 | string | - |
| loading-size | 加载图标大小 | string | - |
| item-height | 每项高度 | string | `50px` |
| item-color | 每项文本颜色 | string | - |
| item-font-size | 每项文本字体大小 | string | - |
| item-active-color | 每项文本选中颜色 | string | - |
| indicator-style | 选择器中间选中框的样式 | string | - |
| bg-color | 选择器背景色 | string | - |
| group-height | 选项组高度 | string | `400rpx` |
| radius | 圆角 | string | - |

### Events

| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| cancel | 点击取消按钮时触发 | __ |
| change | 选中变化时候触发 | _value: string\|number[]_ |
| confirm | 点击确认按钮时触发 | _{values: PickerValue[], indexs:number[], items:PickerColumnItem[]}:PickerConfirmEvent_ |

### 方法
通过 ref 可以获取到 Area 实例并调用实例方法: 

| 方法名 | 说明                     | 返回值               |
| ------ | ------------------------ | ---------------------- |
| confirm | 停止惯性滚动并触发 `confirm` 事件 | __ |
| getSelectedOptions | 获取当前选中的选项 | PickerConfirmEvent[] |

```js
const pickerRef = ref<LAreaComponentPublicInstance|null>(null)
pickerRef.value?.confirm()
const res =  pickerRef.value?.getSelectedOptions()
```

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

|--------|--------|------|
| `--l-picker-border-radius` | `$border-radius-xl` | 选择器整体圆角 |
| `--l-picker-bg-color` | `$bg-color-container` | 选择器背景色 |
| `--l-picker-toolbar-height` | `58px` | 工具栏高度 |
| `--l-picker-cancel-color` | `$text-color-2` | 取消按钮文字颜色 |
| `--l-picker-confirm-color` | `$primary-color` | 确认按钮文字颜色 |
| `--l-picker-button-font-size` | `$font-size-md` | 按钮文字大小 |
| `--l-picker-title-font-size` | `18px` | 标题文字大小 |
| `--l-picker-title-font-weight` | `700` | 标题文字粗细 |
| `--l-picker-title-line-height` | `26px` | 标题行高 |
| `--l-picker-title-color` | `$text-color-1` | 标题文字颜色 |
| `--l-picker-group-height` | `200px` | 选择器内容区高度 |
| `--l-picker-indicator-bg-color` | `$fill-4` | 选中指示器背景色 |
| `--l-picker-indicator-border-radius` | `6px` | 选中指示器圆角 |
| `--l-picker-item-height` | `50px` | 每个选项高度 |
| `--l-picker-item-color` | `$text-color-1` | 选项文字颜色 |
| `--l-picker-item-active-color` | `$text-color-1` | 选中项文字颜色 |
| `--l-picker-item-active-font-weight` | `700` | 选中项文字粗细 |
| `--l-picker-item-font-size` | `$font-size-md` | 选项文字大小 |
| `--l-picker-loading-mask-color` | `rgba(255,255,255,.9)` | 加载遮罩颜色 |
| `--l-picker-loading-color` | `$primary-color` | 加载动画颜色 |



## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |