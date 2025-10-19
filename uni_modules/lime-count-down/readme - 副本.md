# lime-count-down 倒计时
- 用于实时展示倒计时数值，支持毫秒精度。兼容uniapp/uniappx


## 文档
 🚀 [count-down【站点1】](https://limex.qcoon.cn/components/count-down.html)
 🌍 [count-down【站点2】](https://limeui.netlify.app/components/count-down.html)
 🔥 [count-down【站点3】](https://limeui.familyzone.top/components/count-down.html)



## 安装
市场导入插件即可在任意页面使用


## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

```html
<l-count-down :time="time" />
```

```js
const time = ref(30 * 60 * 60 * 1000);
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```html
<l-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```html
<l-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。

```html
<l-count-down :time="time">
	<template #default="{ hours, minutes, seconds }">
		<text class="block">{{ hours }}</text>
		<text class="colon">:</text>
		<text class="block">{{ minutes }}</text>
		<text class="colon">:</text>
		<text class="block">{{ seconds }}</text>
	</template>
</l-count-down>

<style>
  .colon {
    margin: 0 4px;
    color: #1989fa;
  }
  .block {
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
  }
</style>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```html
<l-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="onFinish"
/>

```

```js

const time = ref(30 * 60 * 60 * 1000)
const countDown = ref<LCountDownComponentPublicInstance | null>(null);

const start = () => {
	if (countDown.value == null) return
	countDown.value!.start();
};
const pause = () => {
	if (countDown.value == null) return
	countDown.value!.pause();
};
const reset = () => {
	if (countDown.value == null) return
	countDown.value!.reset();
};

const onFinish = () => console.log('倒计时结束');
```


### 查看示例
- 导入后直接使用这个标签查看演示效果
```vue
// 代码位于 uni_modules/lime-count-down/compoents/lime-count-down
<lime-count-down />
```


### 插件标签
- 默认 l-count-down 为 component
- 默认 lime-count-down 为 demo


## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number \| string_ | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| auto-start  | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名 | 说明             | 回调参数                   |
| ------ | ---------------- | -------------------------- |
| finish | 倒计时结束时触发 | -                          |
| change | 倒计时变化时触发 | _currentTime: CurrentTime_ |

### Slots

| 名称    | 说明       | 参数                       |
| ------- | ---------- | -------------------------- |
| default | 自定义内容 | _currentTime: CurrentTime_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 剩余总时间（单位毫秒） | _number_ |
| days         | 剩余天数               | _number_ |
| hours        | 剩余小时               | _number_ |
| minutes      | 剩余分钟               | _number_ |
| seconds      | 剩余秒数               | _number_ |
| milliseconds | 剩余毫秒               | _number_ |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若 `auto-start` 为 `true`，重设后会自动开始倒计时 | - | - |



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                         | 默认值                      | 描述 |
| ---------------------------- | --------------------------- | ---- |
| --l-count-down-text-color  | _rgba(0,0,0,0.88)_     | -    |
| --l-count-down-font-size   | _16px_   | -    |
| --l-count-down-line-height | _1.666_ | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)