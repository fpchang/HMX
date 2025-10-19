# lime-date-strip 日期横条
一个用于展示周日历或一组日历信息的组件，支持多种切换方式和自定义样式。

> 插件依赖：`lime-style`、`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [日期横条文档 - 站点1](https://limex.qcoon.cn/components/date-strip.html)
- [日期横条文档 - 站点2](https://limeui.netlify.app/components/date-strip.html)
- [日期横条文档 - 站点3](https://limeui.familyzone.top/components/date-strip.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-date-strip`
2. 首次导入可能需要重新编译
3. 在页面中使用`l-date-strip`组件（组件）或`lime-date-strip`（演示）


## 代码演示

### 基础用法
通过`v-model`可以绑定选择的日历
```html
<l-date-strip v-model="value" @change="onChange"></l-date-strip>
```
```js
const value = new Date().getTime()

const onChange = (time: number) => {
	
}
```


### 切换方式
默认是以周为周期`（swiper）`的切换方式，通过`switchMode`设置为`none`可以换成`scroll-view`,这时是从`minDate`到`maxDate`的所有日期。

```html
<l-date-strip switchMode="none" :minDate="minDate" :maxDate="maxDate"></l-date-strip>
```
```js
const minDate: new Date(2022, 0, 10).getTime()
const maxDate: new Date(2027, 10, 27).getTime()
```

### 选中样式

通过 `shape` 可以设置为选中框的形状，可选值有:`circle`,`square`,`none`。

```html
<l-date-strip shape="circle"></l-date-strip>
```


### 自定义样式

通过 `bgColor` 可以设置背景色，`activeBgColor`可设置选中的背景色。

```html
<l-date-strip bgColor="yellow" activeBgColor="#000" ></l-date-strip>
```

### 自定义日期文案
通过传入 `format` 函数来对日历上每一格的内容进行格式化。

```html
<l-date-strip :format="customFormat"></l-date-strip>
```
```js
// uniapp 不需要设置类型
import type { DateStriPDay } from '@/uni_modules/lime-date-strip';
const customFormat = (day : DateStriPDay) : DateStriPDay => {
	const { date } = day;
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const curDate = date.getDate();

	day.suffix = '¥60';

	if (year == 2025) {
		if (month == 2) {
			const map = new Map<number, string>([
				[1, '初一'],
				[2, '初二'],
				[3, '初三'],
				[14, '情人节'],
				[15, '元宵节'],
			])
			if (map.has(curDate)) {
				day.prefix = map.get(curDate)!;
				day.suffix = '¥100';
			}
		}
	}

	return day;
};
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
<!-- 代码位于 uni_modules/lime-date-strip/components/lime-date-strip -->
<lime-date-strip />
```

## 插件标签说明
- `l-date-strip`：日期横条组件
- `lime-date-strip`：演示标签

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 选中的日期 | number | - |
| defaultValue | 选中的日期 | number | - |
| value | 选中的日期 | number | - |
| switchMode | 切换模式：<br>`none` 平铺展示所有日期，不展示切换按钮，<br>`week` 按周方式切换 | string | `week` |
| shape | 选中框形状：<br>`square` 方块，包含星期和日期，<br>`circle` 圆形，只包含日期， <br>`none` 文本高亮 | string | `square` |
| minDate | 可选择的最小日期 | number | - |
| maxDate | 可选择的最大日期 | number | 当前日期的31天 |
| height | 插件高度 | string | - |
| gridWidth | 每格日期宽度，仅switchMode为`none`生效 | string | - |
| activeBgColor | 选中框背景色 | string | - |
| activeColor | 选中框文本色 | string | - |
| bgColor | 横条背景色 | string | - |
| radius | 选中框圆角 | string | - |
| firstDayOfWeek | 第一天从星期几开始，默认 0 = 周日 | 0-6 | `0` |
| format | 日期格式化函数 | Function | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 点击时触发 | event: number |
| select | 点击时触发 | event: number |

## 主题定制

组件提供了下列CSS变量，可用于自定义样式。

| 变量名称 | 默认值 | 说明 |
|---------|--------|------|
| `--l-date-strip-bg-color` | `$bg-color-container` | 组件背景颜色 |
| `--l-date-strip-height` | `86px` | 组件整体高度 |
| `--l-date-strip-padding-x` | `0` | 水平内边距 |
| `--l-date-strip-padding-y` | `$spacer-xs` | 垂直内边距 |
| `--l-date-strip-font-size` | `$font-size-md` | 日期文字大小 |
| `--l-date-strip-color` | `$text-color-1` | 日期文字颜色 |
| `--l-date-strip-active-color` | `$primary-color` | 选中状态颜色 |
| `--l-date-strip-prefix-color` | `$text-color-3` | 前缀文字颜色 |
| `--l-date-strip-prefix-font-size` | `$font-size` | 前缀文字大小 |
| `--l-date-strip-suffix-color` | `$text-color-2` | 后缀文字颜色 |
| `--l-date-strip-suffix-font-size` | `$font-size-sm` | 后缀文字大小 |
| `--l-date-strip-grid-width` | `50px` | 网格项宽度 |
| `--l-date-strip-grid-square-padding-x` | `0` | 方形样式水平内边距 |
| `--l-date-strip-grid-square-padding-y` | `6px` | 方形样式垂直内边距 |
| `--l-date-strip-square-radius` | `$spacer-tn` | 方形圆角半径 |
| `--l-date-strip-grid-circle-radius` | `99px` | 圆形样式圆角半径 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：
| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |