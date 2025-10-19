# lime-footer 页脚
- 用于展示页面底部信息，包含Logo、导航链接和版权信息等元素。
- 插件依赖`lime-style`,`lime-shared`不喜勿下

## 安装
插件市场导入即可

## 代码演示
### 基础使用
```html
<l-footer text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
```

### 链接页脚
```html
<l-footer 
	:links="[
		{name: '用户协议', url: '/pages/agreement'},
		{name: '隐私政策', url: '/pages/privacy'},
		{name: '联系我们', url: '/pages/contact'}
	]" 
  text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
```

### 品牌页脚
```html
<l-footer 
	:logo=" {
		icon: '/static/logo.64379736.png',
		title: '品牌名称',
	}" 
	text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
```


### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-footer/compoents/lime-footer 
<lime-footer />
```

### 插件标签
- 默认 l-footer 为 component
- 默认 lime-footer 为 demo

### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可.

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API
### Props

| 属性名      | 类型          | 默认值 | 必填 | 说明                                                                 |
|-------------|---------------|--------|------|----------------------------------------------------------------------|
| links       | `Array`       | `[]`   | 否   | 导航链接数组，格式：`{ name: string, url?: string, openType?: string }` |
| logo        | `Object`      | -      | 否   | Logo 配置对象，包含 `icon`（图标路径）、`title`（标题）、`url`（跳转链接） |
| text        | `String`      | -      | 否   | 底部版权信息文本                                                      |
| linkColor   | `String`      | -      | 否   | 链接文字颜色                            |
| lineColor   | `String`      | -      | 否   | 链接分隔线颜色                          |
| textColor   | `String`      | -      | 否   | 版权文本颜色                           |
| color       | `String`      | -      | 否   | LOGO文字颜色                   |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式)。uvue app无效。

| 名称                                  | 默认值                       | 描述                       |
|--------------------------------------|----------------------------|--------------------------|
| --l-footer-text-color               | $text-color-3             | 版权信息文本颜色             |
| --l-footer-text-font-size           | $font-size-sm             | 版权信息文本字号             |
| --l-footer-text-line-height         | 20px                      | 版权信息文本行高             |
| --l-footer-text-margin-top          | 8rpx                      | 版权信息上边距               |
| --l-footer-link-color               | $primary-color            | 链接文本颜色                 |
| --l-footer-link-font-size           | $font-size-sm             | 链接文本字号                 |
| --l-footer-link-line-height         | 20px                      | 链接文本行高                 |
| --l-footer-link-dividing-line-padding | $spacer-sm                | 链接分隔线左右间距           |
| --l-footer-link-dividing-line-color | $text-color-3             | 链接分隔线颜色               |
| --l-footer-logo-icon-width          | 48rpx                     | Logo图标宽度               |
| --l-footer-logo-icon-height         | 48rpx                     | Logo图标高度               |
| --l-footer-l-margin-right   | $spacer-xs                | Logo图标右侧间距           |
| --l-footer-logo-title-font-size     | $font-size-md             | Logo标题字号               |
| --l-footer-logo-title-url-width     | 256rpx                    | Logo标题链接宽度           |
| --l-footer-logo-title-line-height   | 48rpx                     | Logo标题行高               |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)