# lime-link 超链接
lime-link 超链接标签，可在应用内跳转链接，在app还能打开外部浏览器，兼容uniapp/uniappx   
插件依赖`lime-style`、`lime-call`、`lime-shared`、`lime-icon`不喜勿下

## 文档
 🚀 [link【站点1】](https://limex.qcoon.cn/components/link.html)
 🌍 [link【站点2】](https://limeui.netlify.app/components/link.html)
 🔥 [link【站点3】](https://limeui.familyzone.top/components/link.html)



## 安装
插件市场导入即可，首次导入可能需要重新编译

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用！   
若不需要[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)删除即可
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
通过`type`可设置链接主题色，可选值:`primary`、`danger`、`info`、`warning`、`success`、`default`,也通过通过`color`设置具体的颜色。
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
// #endif -->

// #ifdef APP-IOS
// 打开 AppStore 到搜索页
openSchema('itms-apps://search.itunes.apple.com//WebObjects//MZSearch.woa/wa/search?media=software&lterm=')

// 打开 iOS 地图坐标
openSchema('http://maps.apple.com/?q=Mexican+Restaurant&sll=50.894967,4.341626&z=10&t=s')
// #endif -->

// #endif -->
```



### 查看示例
导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-link/compoents/lime-link -->
<lime-link />
```


### 插件标签
默认 l-link 为 component  
默认 lime-link 为 demo

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
| url | 应用内跳转的链接。 | _string_ | `-` |
| href | 应用外跳转的链接。 | _string_ | `-` |
| openType | 应用内跳转方式：navigate/redirect/switchTab/reLaunch/navigateBack/exit'。 | _string_ | `navigate` |
| prefixIcon | 左侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)。 | _string_ | `-` |
| suffixIcon | 右侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)。 | _string_ | `-` |
| type | 内置主题。可选项：info/success/warning/danger/default | _string_ | `default` |
| disabled | 是否为禁用态 | _boolean_ | `false` |
| underline |  是否显示链接下划线 | _boolean_ | `false` |
| size | 尺寸。可选项：small/medium/large/具体数字 | _string_ | `-` |
| content | 链接内容 | _string_ | `-` |
| color | 自定义颜色 | _string_ | `-` |
| navigatorProps | 与 navigator 原生组件属性保持一致，具体使用参考：[navigator](https://doc.dcloud.net.cn/uni-app-x/component/navigator.html) | _Object_ | `-` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。uvue app无效

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
--l-link-default-color | $text-color-1 | - 
--l-link-primary-color | $primary-color | - 
--l-link-success-color | $success-color | - 
--l-link-warning-color | $warning-color | - 
--l-link-danger-color | $error-color | - 
--l-link-info-color | $info-color | - 
--l-link-icon-size | 28rpx | - 
--l-link-font-size | $font-size | - 

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)