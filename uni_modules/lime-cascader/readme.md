# lime-cascader 级联选择
一个功能丰富的级联选择组件，用于多层级数据选择，主要为树形结构，可展示更多的数据。组件支持自定义字段名、自定义选项上方内容、自定义颜色等多种配置，并提供了中国省市区数据和uniCloud数据源支持。兼容uniapp/uniappx。

> 插件依赖：`lime-popup`、`lime-style`、`lime-shared`、`lime-tabs`、`lime-icon`、`lime-svg`

## 文档链接
📚 组件详细文档请访问以下站点：
- [级联选择文档 - 站点1](https://limex.qcoon.cn/components/cascader.html)
- [级联选择文档 - 站点2](https://limeui.netlify.app/components/cascader.html)
- [级联选择文档 - 站点3](https://limeui.familyzone.top/components/cascader.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-cascader`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-cascader`组件

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::
## 代码演示
示例使用了`uts`及`vue3 setup`语法，`uniapp`可以把数据类型去掉即可。

### 基础使用
级联选择组件通过设置`visible`弹出选择器。

```html
<view class="cell" @click="visible = true">
  <text>地址</text>
  <text v-show="fieldValue == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue != null">{{fieldValue}}</text>
</view>
<l-cascader 
  v-model:visible="visible" 
  v-model="cascaderValue" 
  :options="options" 
  title="请选择所在地区" 
  @change="onChange"/>
```

```js
const visible = ref(false)
// 设置默认值，如 110000
const cascaderValue = ref('');
const fieldValue = ref<string|null>(null);
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    label: '北京市',
    value: '110000',
    children: [
      {
        value: '110100',
        label: '北京市',
        children: [
          { value: '110101', label: '东城区' },
          { value: '110102', label: '西城区' },
          { value: '110105', label: '朝阳区' },
          // 更多区域...
        ],
      },
    ],
  },
  {
    label: '天津市',
    value: '120000',
    children: [
      {
        value: '120100',
        label: '天津市',
        children: [
          { value: '120101', label: '和平区' },
          { value: '120102', label: '河东区' },
          // 更多区域...
        ],
      },
    ],
  },
];
// 全部选项选择后，会触发 change 事件
const onChange = (value: string, options: UTSJSONObject[]) => {
  fieldValue.value = options.map((item: UTSJSONObject):any|null => (item['label'])).join('/');
};
```

### 带初始值
通过设置`value`或`v-model`设置默认值，选择项的值。

```html
<view class="cell" @click="visible2 = true">
  <text>地址</text>
  <text v-show="fieldValue2 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue2 != null">{{fieldValue2}}</text>
</view>
<l-cascader 
  v-model:visible="visible2" 
  v-model="cascaderValue2" 
  :options="options2" 
  title="请选择所在地区" 
  @change="onChange2"/>
```

```js
const visible2 = ref(false)
// 设置默认值
const cascaderValue2 = ref('120119');
const fieldValue2 = ref<string|null>(null);
const options2 = areaList;
const onChange2 = (value: string, options: UTSJSONObject[]) => {
  fieldValue2.value = options.map((item: UTSJSONObject):any|null => (item['label'])).join('/');
};
```

### 自定义字段名
通过设置`keys`属性可以自定义 `options` 里的字段名称。

```html
<view class="cell" @click="visible3 = true">
  <text>地址</text>
  <text v-show="fieldValue3 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue3 != null">{{fieldValue3}}</text>
</view>
<l-cascader 
  v-model:visible="visible3" 
  v-model="cascaderValue3" 
  :options="options3" 
  :keys="keys"
  title="请选择所在地区" 
  @change="onChange3"/>
```

```js
const visible3 = ref(false)
const cascaderValue3 = ref('');
const fieldValue3 = ref<string|null>(null);
const options3 = [
  {
    name: '北京市',
    code: '110000',
    items: [
      {
        code: '110100',
        name: '北京市',
        items: [
          { code: '110101', name: '东城区' },
          { code: '110102', name: '西城区' },
          // 更多区域...
        ],
      },
    ],
  },
  // 更多省份...
];

const keys = {label: 'name', value: 'code', children: 'items'}
const onChange3 = (value: string, options: UTSJSONObject[]) => {
  fieldValue3.value = options.map((item: UTSJSONObject):any|null => (item['name'])).join('/');
};
```

### 自定义选项上方内容
通过设置`subTitles`属性每级展示的次标题。

```html
<view class="cell" @click="visible4 = true">
  <text>地址</text>
  <text v-show="fieldValue4 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue4 != null">{{fieldValue4}}</text>
</view>
<l-cascader 
  v-model:visible="visible4" 
  v-model="cascaderValue4" 
  :options="options4" 
  :subTitles="subTitles"
  title="请选择所在地区" 
  @change="onChange4"/>
```

```js
const visible4 = ref(false)
const cascaderValue4 = ref('');
const fieldValue4 = ref<string|null>(null);
const options4 = areaList;
const subTitles = ['请选择省份', '请选择城市', '请选择区/县'];
const onChange4 = (value: string, options: UTSJSONObject[]) => {
  fieldValue4.value = options.map((item: UTSJSONObject):any|null => (item['label'])).join('/');
};
```

### 自定义颜色
通过设置`active-color`属性来设置选中状态的高亮颜色。

```html
<view class="cell" @click="visible5 = true">
  <text>地址</text>
  <text v-show="fieldValue5 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue5 != null">{{fieldValue5}}</text>
</view>
<l-cascader 
  v-model:visible="visible5" 
  v-model="cascaderValue5" 
  :options="options5" 
  active-color="#34c471"
  title="请选择所在地区" 
  @change="onChange5"/>
```

### 中国省市区数据
`lime-shared/areaData`提供了一份中国省市区数据，该数据来源于 `Vant`。

```js
import { useCascaderAreaData } from '@/uni_modules/lime-shared/areaData'
const options7 = useCascaderAreaData();
const subTitles = ['请选择省份', '请选择城市', '请选择区/县'];
const visible7 = ref(false)
const cascaderValue7 = ref('');
const fieldValue7 = ref<string|null>(null);
const onChange7 = (value: string, options: UTSJSONObject[]) => {
  fieldValue7.value = options.map((item: UTSJSONObject):any|null => (item['label'])).join('/');
};
```

```html
<view class="cell" @click="visible7 = true">
  <text>地址</text>
  <text v-show="fieldValue7 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue7 != null">{{fieldValue7}}</text>
</view>
<l-cascader 
  v-model:visible="visible7" 
  v-model="cascaderValue7" 
  :options="options7" 
  :subTitles="subTitles"
  title="请选择所在地区" 
  @change="onChange7"/>
```

### uniCloud数据源
除了加载本地数据，还可以设置`uniCloud`，会加载`opendb-city-china`(中国城市省市区数据，含港澳台)表，在[uniCloud](https://unicloud.dcloud.net.cn/)控制台使用opendb创建。

```html
<view class="cell" @click="visible6 = true">
  <text>地址</text>
  <text v-show="fieldValue6 == null" style="color: #999;">请选择地址 ></text>
  <text v-show="fieldValue6 != null">{{fieldValue6}}</text>
</view>
<l-cascader 
  v-model:visible="visible6" 
  v-model="cascaderValue6" 
  :options="options6" 
  :subTitles="subTitles"
  :keys="{label: 'name', value: 'code'}"
  title="请选择所在地区" 
  @pick="onPick6"
  @change="onChange6"/>
```

```js
const visible6 = ref(false)
const cascaderValue6 = ref('');
const fieldValue6 = ref<string|null>(null);

const onChange6 = (value: string, options: UTSJSONObject[]) => {
  fieldValue6.value = options.map((item: UTSJSONObject):any|null => (item['name'])).join('/');
};
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-cascader/components/lime-cascader -->
<lime-cascader />
```

## 插件标签说明
- 默认 `l-cascader` 为组件标签
- 默认 `lime-cascader` 为演示标签

## Vue2使用说明
插件使用了`composition-api`，如果你希望在Vue2中使用，请按官方教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键代码是在main.js中的Vue2部分添加以下代码：

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 是否显示级联选择器 | <em>boolean</em> | `false` |
| v-model | 值 | <em>string</em> | `-` |
| subTitles | 每级展示的次标题 | <em>string[]</em> | `-` |
| placeholder | 未选中时的提示文案 | <em>string</em> | `选择选项` |
| keys | 用来定义 `value / label` 在 `options` 中对应的字段别名 | <em>{label,value,children}</em> | `{}` |
| title | 标题 | <em>string</em> | `-` |
| options | 可选项数据源 | <em>array</em> | `-` |
| closeable | 是否显示关闭按钮 | <em>boolean</em> | `-` |
| bgColor | 背景色 | <em>string</em> | `-` |
| activeColor | 激活色 | <em>string</em> | `-` |
| iconSize | 图标尺寸 | <em>string</em> | `-` |
| color | 文本色 | <em>string</em> | `-` |
| fontSize | 字体大小 | <em>string</em> | `-` |
| confirmBtn | 确认按钮，可自定义。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 [Button](https://ext.dcloud.net.cn/plugin?id=20481) 组件属性 | <em>string \| Object</em> | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| pick | 选择后触发 | `(level: number, index: number, value: string, selectedIndexes: number[])` |
| change | 值发生变更时触发 | `(value: string, options: UTSJSONObject[])` |
| close | 关闭时触发 | - |

## 主题定制

组件提供了以下CSS变量，可用于定制主题：

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --l-cascader-title-color | $text-color-1 | 标题文本颜色 |
| --l-cascader-icon-color | $primary-color | 图标颜色 |
| --l-cascader-icon-size | 24px | 图标大小 |
| --l-cascader-bg-color | $bg-color-container | 背景颜色 |
| --l-cascader-border-radius | $border-radius-lg | 边框圆角 |
| --l-cascader-height | 320px | 级联选择器高度 |
| --l-cascader-cell-height | 50px | 单元格高度 |
| --l-cascader-cell-padding-x | 16px | 单元格水平内边距 |
| --l-cascader-cell-padding-y | 14px | 单元格垂直内边距 |
| --l-cascader-cell-title-color | $text-color-1 | 单元格标题颜色 |
| --l-cascader-cell-title-font-size | $font-size-md | 单元格标题字体大小 |
| --l-cascader-disabled-color | $text-color-3 | 禁用状态颜色 |
| --l-cascader-title-height | 48px | 标题高度 |
| --l-cascader-title-padding-top | $spacer | 标题上内边距 |
| --l-cascader-title-padding-bottom | $spacer-xs | 标题下内边距 |
| --l-cascader-title-font-size | 18px | 标题字体大小 |
| --l-cascader-options-title-color | $text-color-3 | 选项标题颜色 |
| --l-cascader-close-icon-color | $text-color-2 | 关闭图标颜色 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |