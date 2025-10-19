# lime-link 超链接
一个功能丰富的超链接组件，可在应用内跳转链接，在APP端还能打开外部浏览器、拨打电话等功能。组件兼容uni-app和uni-app x，提供了多种样式和交互选项，满足各种场景下的链接需求。

> 插件依赖：`lime-style`、`lime-call`、`lime-shared`、`lime-icon`

## 文档链接
📚 组件详细文档请访问以下站点：
- [超链接组件文档 - 站点1](https://limex.qcoon.cn/components/link.html)
- [超链接组件文档 - 站点2](https://limeui.netlify.app/components/link.html)
- [超链接组件文档 - 站点3](https://limeui.familyzone.top/components/link.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-link`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-link`组件（组件）或`lime-link`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可
:::

## 代码演示

### 基础使用
通过`url`可设置在应用内跳转，`href`可在APP端打开外部浏览器拨号等功能。

```html
<l-link type="primary" url="/pages/test/index">内部跳转</l-link>
<l-link href="https://www.baidu.com">外部跳转</l-link>
<l-link type="primary" href="tel://177xxxxxx">拨号</l-link>
<l-link>跳转链接</l-link>
```


### 下划线
通过`underline`可设置下划线。

```html
<l-link underline type="primary" url="/pages/test/index">跳转链接</l-link>
<l-link underline>跳转链接</l-link>
```

### 图标
通过`prefix-icon`可设置前置图标，`suffix-icon`可设置后置图标，[图标库](https://ext.dcloud.net.cn/plugin?id=14057)。

```html
<l-link url="/pages/test/index" prefix-icon="link">跳转链接</l-link>
<l-link suffix-icon="jump">跳转链接</l-link>
```

### 尺寸
通过`size`可设置文本和图标的大小，可选值：`small`,`large`默认为`medium`,也可以设置具体的值如`30px`。

```html
<l-link type="primary" size="large" url="/pages/test/index" prefix-icon="link">跳转链接</l-link>
<l-link prefix-icon="link">跳转链接</l-link>
<l-link prefix-icon="link" size="small">跳转链接</l-link>
<l-link prefix-icon="link" size="30px">自定义大小</l-link>
```

### 颜色
通过`type`可设置链接主题色，可选值:`primary`、`danger`、`info`、`warning`、`success`、`default`,也可以通过`color`设置具体的颜色。

```html
<l-link size="large" prefix-icon="link">跳转链接</l-link>
<l-link type="primary" prefix-icon="link">跳转链接</l-link>
<l-link type="danger" prefix-icon="link">跳转链接</l-link>
<l-link type="info" prefix-icon="link">跳转链接</l-link>
<l-link type="warning" prefix-icon="link">跳转链接</l-link>
<l-link type="success" prefix-icon="link">跳转链接</l-link>
<l-link color="#ee0a24" prefix-icon="link">自定义颜色</l-link>
```

### 打开外部链接API
在APP端，如果只想使用API打开外部链接，可以使用下面代码。该代码来源于[uts-openSchema](https://ext.dcloud.net.cn/plugin?id=17828)

```js
import { openSchema, canOpenURL } from '@/uni_modules/lime-link'

// #ifdef UNI-APP-X
// 使用外部浏览器打开指定URL
openSchema('https://uniapp.dcloud.io/uni-app-x')

// #ifdef APP-ANDROID
// Android 使用应用商店打开指定App
openSchema('market://details?id=com.tencent.mm')

// Android 打开地图坐标
// 可以先用canOpenURL判断是否安装了地图软件
if (canOpenURL('androidamap://')) {
  openSchema('androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0')
} else {
  console.log('未安装高德地图')
}
// #endif

// #ifdef APP-IOS
// 打开 AppStore 到搜索页
openSchema('itms-apps://search.itunes.apple.com//WebObjects//MZSearch.woa/wa/search?media=software&lterm=')

// 打开 iOS 地图坐标
openSchema('http://maps.apple.com/?q=Mexican+Restaurant&sll=50.894967,4.341626&z=10&t=s')
// #endif

// #endif
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-link/components/lime-link -->
<lime-link />
```


## Vue2使用说明
本插件使用了`composition-api`，如需在Vue2项目中使用，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
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
| url | 应用内跳转的链接 | <em>string</em> | - |
| href | 应用外跳转的链接 | <em>string</em> | - |
| openType | 应用内跳转方式，可选值：navigate/redirect/switchTab/reLaunch/navigateBack/exit | <em>string</em> | `navigate` |
| prefixIcon | 左侧[图标](https://ext.dcloud.net.cn/plugin?id=14057) | <em>string</em> | - |
| suffixIcon | 右侧[图标](https://ext.dcloud.net.cn/plugin?id=14057) | <em>string</em> | - |
| type | 内置主题，可选值：primary/info/success/warning/danger/default | <em>string</em> | `default` |
| disabled | 是否为禁用态 | <em>boolean</em> | `false` |
| underline | 是否显示链接下划线 | <em>boolean</em> | `false` |
| size | 尺寸，可选值：small/medium/large/具体数字 | <em>string</em> | `medium` |
| content | 链接内容 | <em>string</em> | - |
| color | 自定义颜色 | <em>string</em> | - |
| navigatorProps | 与 navigator 原生组件属性保持一致，具体使用参考：[navigator](https://doc.dcloud.net.cn/uni-app-x/component/navigator.html) | <em>Object</em> | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击链接时触发 | <em>event: Event</em> |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 链接内容 |
| prefix | 前置内容 |
| suffix | 后置内容 |

## 主题定制


组件提供了下列 CSS 变量，可用于自定义样式。注意：在uvue app中无效。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --l-link-default-color | $text-color-1 | 默认链接颜色 |
| --l-link-primary-color | $primary-color | 主要链接颜色 |
| --l-link-success-color | $success-color | 成功链接颜色 |
| --l-link-warning-color | $warning-color | 警告链接颜色 |
| --l-link-danger-color | $error-color | 危险链接颜色 |
| --l-link-info-color | $info-color | 信息链接颜色 |
| --l-link-icon-size | 28rpx | 图标大小 |
| --l-link-font-size | $font-size | 字体大小 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |