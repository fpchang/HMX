# xs-combox 组件使用说明

`xs-combox` 是一个基于 UniApp 的下拉选择输入框组件，支持本地/远程数据、搜索、清空、禁用、自定义显示等功能。

## 目录

- [安装](#安装)
- [基础用法](#基础用法)
- [属性说明](#属性说明)
- [事件说明](#事件说明)
- [插槽说明](#插槽说明)
- [样式自定义](#样式自定义)
- [示例](#示例)

---

## 安装

将 `uni_modules/xs-combox` 目录复制到你的 `uni_modules` 目录下，无需额外安装依赖。

## 基础用法

```vue
<template>
  <xs-combox
    v-model="selected"
    :options="options"
    placeholder="请选择"
  />
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { label: '选项一', value: 1 },
  { label: '选项二', value: 2 }
]
</script>
```

## 属性说明

| 属性名            | 类型                          | 默认值         | 说明 |
|-------------------|-------------------------------|----------------|------|
| v-model           | String/Number                 |                | 绑定选中值 |
| options           | Array                         | []             | 选项列表，支持对象、字符串、数字 |
| placeholder       | String                        | '请选择'       | 输入框占位符 |
| allowClear        | Boolean                       | true           | 是否显示清除按钮 |
| allowSearch       | Boolean                       | true           | 是否允许搜索 |
| retainSearchValue | Boolean                       | false          | 是否保留搜索值 |
| loading           | Boolean                       | false          | 是否显示加载中 |
| fieldLabel        | String/Function               | 'label'        | 选项对象的显示字段或函数 |
| fieldValue        | String/Function               | 'value'        | 选项对象的值字段或函数 |
| filterOption      | Boolean/Function              | true           | 是否本地过滤或自定义过滤函数 |
| placeholderClass  | String                        |                | 占位符样式类名 |
| bordered          | Boolean                       | false          | 是否显示边框 |
| disabled          | Boolean                       | false          | 是否禁用 |
| zIndex            | Number                        | 99              | 弹出层层级（新版，推荐使用） |
| single            | Boolean                       | true            | 是否为单选模式（暂仅支持单选） |

### options 说明

- 支持三种类型：对象、字符串、数字。
- 对象时，需指定 `fieldLabel` 和 `fieldValue` 字段或函数。

### filterOption 用法

- `true`：默认本地过滤（模糊匹配 label）。
- `false`：不进行本地过滤。
- `Function`：自定义过滤逻辑，参数为输入值，返回布尔。

## 事件说明

| 事件名   | 说明           | 回调参数         |
|----------|----------------|-----------------|
| search   | 搜索时触发     | 输入值          |
| select   | 选中选项时触发 | 选中项          |
| clear    | 清空时触发     | 无              |

## 插槽说明

| 插槽名         | 说明                         |
|----------------|------------------------------|
| prefixIcon     | 输入框前缀图标               |
| empty          | 无数据时自定义内容           |
| default        | 自定义下拉项，作用域：item, index |

### 下拉项自定义示例

```vue
<xs-combox
  v-model="selected"
  :options="options"
>
  <template #default="{ item, index }">
    <view style="color: red;">{{ item.label }} - {{ item.value }}</view>
  </template>
</xs-combox>
```

## 样式自定义

- 通过 `bordered` 属性控制边框。
- 通过 `placeholderClass` 自定义占位符样式。
- 支持 `scoped` 样式覆盖类名：`.xs-combox`、`.xs-combox-wrapper`、`.xs-combox-selector` 等。
- 支持通过 `prefixIcon` 插槽自定义输入框前缀内容。
- 下拉面板支持关闭按钮，点击“关闭”可收起下拉列表。
- 输入框聚焦时自动清空搜索内容，失焦时可保留或还原。
- 支持 `openSelector()`、`closeSelector()`、`toggleSelector()` 方法手动控制下拉面板显示。

## 进阶用法示例

### 远程搜索

```vue
<xs-combox
  v-model="selected"
  :options="remoteOptions"
  :loading="loading"
  :filterOption="false"
  @search="onSearch"
/>
```

```js
const remoteOptions = ref([])
const loading = ref(false)
function onSearch(val) {
  loading.value = true
  // 异步获取数据
  fetchOptions(val).then(list => {
    remoteOptions.value = list
    loading.value = false
  })
}
```

---

## 组件暴露方法

- `toggleSelector()`：手动打开/关闭下拉面板
- `openSelector()`：手动打开下拉面板
- `closeSelector()`：手动关闭下拉面板

```js
const comboxRef = ref()
comboxRef.value.toggleSelector()
comboxRef.value.openSelector()
comboxRef.value.closeSelector()
```

---

## 其他说明

- 依赖 `uni-icons`、`uni-load-more` 组件。
- 支持移动端和小程序平台。
- 注意如果不弹出选择框，父元素不要设置overflow-hidden。

---

如需更多自定义需求，请参考源码或联系作者。 