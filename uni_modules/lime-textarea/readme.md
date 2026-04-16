# lime-textarea 文本域组件
一个功能丰富的文本域组件，用于多行文本输入。支持自动增高、字数统计、标签布局等多种配置，可用于留言、评论、反馈等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的文本输入需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [文本域组件文档 - 站点1](https://limex.qcoon.cn/components/textarea.html)
- [文本域组件文档 - 站点2](https://limeui.netlify.app/components/textarea.html)
- [文本域组件文档 - 站点3](https://limeui.familyzone.top/components/textarea.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-textarea`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-textarea`组件

## 代码演示

### 基础使用
通过`v-model`双向绑定，或通过`change`事件接收输入文本
```html
<l-textarea v-model="value" placeholder="请输入文字" @change="change"></l-textarea>
```
```js
const value = ref('');
const change = (value: string) => {
	
}
```

### 带标题
通过`label`属性设置标题
```html
<l-textarea label="标签文字" placeholder="请输入文字"></l-textarea>
```

### 自动增高
通过`autosize`设置为`true`为自动增高，uniappx 鸿蒙next不支持
```html
<l-textarea label="标签文字" placeholder="请输入文字" :autosize="true"></l-textarea>
```

### 字符限制
通过`maxlength`设置最大文本字数，通过`indicator`设置为`true`可显示字数
```html
<l-textarea label="标签文字" placeholder="请输入文字"  :maxlength="500" :indicator="true"></l-textarea>
```

### 禁用
通过`disabled`设置可禁止输入
```html
<l-textarea label="标签文字" placeholder="请输入文字" :disabled="true"></l-textarea>
```

### 竖排布局
通过`layout`可设置布局方向
```html
<l-textarea label="标签文字" placeholder="请输入文字" layout="vertical"></l-textarea>
```

### 经典边框样式
设置classic属性，使用经典边框样式。

```html
<l-textarea 
  v-model="value" 
  classic
  placeholder="经典边框样式"
></l-textarea>
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-textarea/components/lime-textarea -->
<lime-textarea />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-textarea` |组件标签|
| `lime-textarea`| 演示标签|

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
| v-model | 文本 | _string_ | `` |
| value | 文本框值 | _string_ | - |
| adjustPosition | 键盘弹起时，是否自动上推页面 | _boolean_ | `true` |
| autofocus | 自动聚焦，拉起键盘 | _boolean_ |  `false` |
| autosize | 是否自动增高 | _boolean_ | `false` |
| bordered | 是否显示外边框 | _boolean_ | `true` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | _boolean_ | - |
| confirmType | 设置键盘右下角按钮的文字, [可参考](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html)  | _'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'_ | - |
| cursor | 指定 focus 时的光标位置 | _number_ | - |
| cursorSpacing | 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 | _number_ | - |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距 | _boolean_ | - |
| disabled | 是否禁用文本框 | _boolean_ | `false` |
| readonly | 是否只读 | _boolean_ | `false` |
| fixed | 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true | _boolean_ | - |
| defaultFixed | 默认是否固定 | _boolean_ | - |
| focus | 自动聚焦 | _boolean_ | - |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | _boolean_ | `false` |
| indicator | 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效 | _boolean_ | - |
| label | 左侧文本 | _string_ | - |
| maxlength | 用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度 | _number_ | - |
| placeholder | 占位符 | _string_ | - |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | _number_ | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | _number_ | - |
| showConfirmBar | 是否显示键盘上方带有"完成"按钮那一栏 | _boolean_ |  `true` |
| layout | 标题输入框布局方式 | _'vertical' \| 'horizontal'_ | `horizontal` |
| placeholderStyle | 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight | _string_ | - |
| lStyle | 自定义样式 | _string_ | - |
| labelStyle | 标签自定义样式 | _string_ | - |
| indicatorStyle | 计数器自定义样式 | _string_ | - |
| innerStyle | 内部文本域自定义样式 | _string_ | - |
| classic | 是否使用经典边框样式 | _boolean_ |  `false` |
| borderColor | 边框颜色 | _string_ | - |
| focusedBorderColor | 聚焦状态边框颜色 | _string_ | - |
| focused | 是否处于聚焦状态 | _boolean_ | - |

### Events 事件

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| change  | 输入内容变化时触发     | _value:string_ |
| blur  | 失去焦点时触发 | _event: UniTextareaBlurEvent_ |
| focus  | 获得焦点时触发 | _event: UniTextareaFocusEvent_ |
| keyboardheightchange  | 获得焦点时触发 | _event:UniInputKeyboardHeightChangeEvent_ |
| linechange  | 行高发生变化时触发 | _event: UniTextareaLineChangeEvent_ |
| confirm  | 点击完成时触发 | _event: UniInputConfirmEvent_ |


### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| label | 自定义标签内容 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-textarea-padding-y` | `$spacer` | 文本框垂直方向间距 |
| `--l-textarea-padding-x` | `$spacer` | 文本框水平方向间距 |
| `--l-textarea-text-line-height` | `24px` | 输入框文本行高 |
| `--l-textarea-label-line-height` | 根据平台不同有所差异 | 标签文本行高 |
| `--l-textarea-label-width` | `64px` | 标签文本宽度 |
| `--l-textarea-label-padding-right` | `$spacer` | 标签右侧内边距 |
| `--l-textarea-label-padding-bottom` | `$spacer-xs` | 标签底部内边距 |
| `--l-textarea-indicator-text-line-height` | `20px` | 计数器文本行高 |
| `--l-textarea-indicator-text-padding-top` | `$spacer-xs` | 计数器文本顶部间距 |
| `--l-textarea-indicator-text-align` | `right` | 计数器文本对齐方式 |
| `--l-textarea-border-width` | `1px` | 文本框边框大小 |
| `--l-textarea-indicator-text-font-size` | `$spacer-sm` | 计数器文本大小 |
| `--l-textarea-label-font-size` | `$font-size` | 标签文本大小 |
| `--l-textarea-label-large-font-size` | `$font-size-md` | 大号标签文本大小 |
| `--l-textarea-text-font-size` | `$font-size-md` | 输入框文本大小 |
| `--l-textarea-placeholder-font-size` | `$font-size-md` | 占位符文本大小 |
| `--l-textarea-bg-color` | `$bg-color-container` | 文本框背景颜色 |
| `--l-textarea-placeholder-color` | `$text-color-3` | 占位符文本颜色 |
| `--l-textarea-text-color` | `$text-color-1` | 输入框文本颜色 |
| `--l-textarea-label-color` | `$text-color-1` | 标签文本颜色 |
| `--l-textarea-indicator-text-color` | `$text-color-3` | 计数器文本颜色 |
| `--l-textarea-border-radius` | `$border-radius` | 文本框圆角大小 |
| `--l-textarea-border-color` | `$border-color-1` | 文本框边框颜色 |
| `--l-textarea-focused-border-color` | `$primary-color` | 聚焦状态边框颜色 |
| `--l-textarea-disabled-text-color` | `$text-color-4` | 文本框禁用状态时的输入文本颜色 |
| `--l-textarea-border-left-space` | `$spacer` | 边框左侧间距 |
| `--l-textarea-border-right-space` | `0` | 边框右侧间距 |
| `--l-textarea-classic-padding-x` | `$spacer` | 经典样式水平内边距 |
| `--l-textarea-classic-padding-y` | `$spacer-sm` | 经典样式垂直内边距 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |