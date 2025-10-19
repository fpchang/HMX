# lime-radio 单选框
一个功能丰富的单选框组件，用于在一组备选项中进行单选。组件支持v-model双向数据绑定，提供多种自定义样式选项，包括不同形状、颜色和大小的单选框。组件支持单独使用和组合使用，可以搭配单元格组件使用，兼容uniapp/uniappx。

> 插件依赖：`lime-style`、`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [单选框文档 - 站点1](https://limex.qcoon.cn/components/radio.html)
- [单选框文档 - 站点2](https://limeui.netlify.app/components/radio.html)
- [单选框文档 - 站点3](https://limeui.familyzone.top/components/radio.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-radio`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-radio`和`l-radio-group`组件

## 代码演示

### 基础演示
通过`allowUncheck`可设置单个是否允许取消选中。

```html
<l-radio allowUncheck>单选框</l-radio>
```

### 选项组
通过 v-model 绑定值当前选中项的 `value`或`name`，vue2使用的`value`被占用，故可以使用`name`。

```html
<!-- Vue3使用value属性 -->
<l-radio-group v-model="checked" @change="onChange">
  <l-radio value="Beijing" label="北京" />
  <l-radio value="Shanghai" label="上海" />
  <l-radio value="Guangzhou" label="广州" />
  <l-radio value="Shenzen" label="深圳" />
</l-radio-group>

<!-- Vue2使用name属性 -->
<l-radio-group v-model="checked" @change="onChange">
  <l-radio name="Beijing" label="北京" />
  <l-radio name="Shanghai" label="上海" />
  <l-radio name="Guangzhou" label="广州" />
  <l-radio name="Shenzen" label="深圳" />
</l-radio-group>
```

```js
const checked = ref('Beijing');

const onChange = (value: any) => {
  console.log('onChange', value);
};
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
<!-- 圆点形单选框 -->
<l-radio-group icon="dot">
  <l-radio value="Beijing" label="北京" />
  <l-radio value="Guangzhou" label="广州" />
  <l-radio value="Shenzen" label="深圳" />
</l-radio-group>

<!-- 线勾形单选框 -->
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
      <image 
        v-show="checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
      ></image>
      <image 
        v-show="!checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"
      ></image>
    </template>
  </l-radio>
  <l-radio value="Guangzhou" label="广州">
    <template #icon="{checked}">
      <image 
        v-show="checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
      ></image>
      <image 
        v-show="!checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"
      ></image>
    </template>
  </l-radio>
  <l-radio value="Shenzen" label="深圳">
    <template #icon="{checked}">
      <image 
        v-show="checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
      ></image>
      <image 
        v-show="!checked" 
        style="width:20px; height:20px" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"
      ></image>
    </template>
  </l-radio>
</l-radio-group>
```

### 搭配单元格组件使用
搭配单元格组件使用时，需要再引入 [lime-cell](https://ext.dcloud.net.cn/plugin?id=20494) 组件。并且 radio-group 的 `direction`设置`vertical`让内容垂直布局。

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

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-radio/components/lime-radio -->
<lime-radio />
```

## 插件标签说明
- 默认 `l-radio` 为组件标签
- 默认 `lime-radio` 为演示标签

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

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，通常为一个唯一的字符串或数字 | <em>string\|number</em> | - |
| value | 单选按钮的值 | <em>any</em> | - |
| allowUncheck | 是否允许取消选中 | <em>boolean</em> | `false` |
| checked | 是否选中 | <em>boolean</em> | `false` |
| disabled | 是否为禁用态 | <em>boolean</em> | `false` |
| readonly | 是否为只读 | <em>boolean</em> | `false` |
| icon | 自定义选中图标和非选中图标，可选值：`circle`、`line`、`dot` | <em>string</em> | `circle` |
| label | 主文案 | <em>string</em> | - |
| fontSize | 文本大小 | <em>string</em> | - |
| iconSize | 图标大小 | <em>string</em> | - |
| checkedColor | 选中状态颜色 | <em>string</em> | - |
| iconBgColor | 图标背景颜色 | <em>string</em> | - |
| iconBorderColor | 图标描边颜色 | <em>string</em> | - |
| iconDisabledColor | 图标禁用颜色 | <em>string</em> | - |
| iconDisabledBgColor | 图标禁用背景颜色 | <em>string</em> | - |
| labelStyle | 文本样式 | <em>string\|object</em> | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 标识符，通常为一个唯一的字符串或数字 | <em>string\|number</em> | - |
| name | 标识符，通常为一个唯一的字符串或数字 | <em>string\|number</em> | - |
| value | 单选按钮的值 | <em>any</em> | - |
| allowUncheck | 是否允许取消选中 | <em>boolean</em> | `false` |
| disabled | 是否为禁用态 | <em>boolean</em> | `false` |
| readonly | 是否为只读 | <em>boolean</em> | `false` |
| direction | 排列方向，可选值为`vertical` | <em>string</em> | `horizontal` |
| fontSize | 文本大小 | <em>string</em> | - |
| iconSize | 图标大小 | <em>string</em> | - |
| checkedColor | 选中状态颜色 | <em>string</em> | - |
| iconBgColor | 图标背景颜色 | <em>string</em> | - |
| iconBorderColor | 图标描边颜色 | <em>string</em> | - |
| iconDisabledColor | 图标禁用颜色 | <em>string</em> | - |
| iconDisabledBgColor | 图标禁用背景颜色 | <em>string</em> | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | <em>currentValue: any</em> |

### Radio Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义文本 | - |
| radio | 整体 | <em>{ checked: boolean, disabled: boolean }</em> |
| icon | 自定义图标 | <em>{ checked: boolean, disabled: boolean }</em> |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-radio-icon-size` | `20px` | 标准尺寸单选框图标大小 |
| `--l-radio-font-size` | `16px` | 标准尺寸文本字体大小 |
| `--l-radio-small-icon-size` | `14px` | 小尺寸单选框图标大小 |
| `--l-radio-small-font-size` | `15px` | 小尺寸文本字体大小 |
| `--l-radio-large-icon-size` | `22px` | 大尺寸单选框图标大小 |
| `--l-radio-large-font-size` | `18px` | 大尺寸文本字体大小 |
| `--l-radio-icon-border-width` | `1px` | 单选框边框宽度 |
| `--l-radio-icon-border-radius` | `999px` | 单选框圆角半径（圆形） |
| `--l-radio-icon-bg-color` | `$bg-color-container` | 单选框背景色 |
| `--l-radio-icon-border-color` | `$gray-5` | 单选框边框颜色 |
| `--l-radio-icon-disabled-color` | `$gray-5` | 禁用状态颜色 |
| `--l-radio-icon-disabled-bg-color` | `$gray-1` | 禁用状态背景色 |
| `--l-radio-icon-checked-color` | `$primary-color` | 选中状态颜色 |
| `--l-radio-text-color` | `$text-color-1` | 文本颜色 |
| `--l-radio-icon-text-gap` | `$spacer-xs` | 图标与文本间距 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |