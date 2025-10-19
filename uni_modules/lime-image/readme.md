# lime-image 图片 加强版
对内置image组件加强功能,兼容uniapp/uniappx  
本插件在原来的image组件上，增加如下功能：UI加载状态：加载中，加载失败  
插件依赖`lime-shared`、不喜勿下。


## 文档
 🚀 [image【站点1】](https://limex.qcoon.cn/components/image.html)
 🌍 [image【站点2】](https://limeui.netlify.app/components/image.html)
 🔥 [image【站点3】](https://limeui.familyzone.top/components/image.html)



## 安装
在插件市场导入插件即可在任意页面使用

**注意** 
* 🔔 本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。
* 🔔 不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在`lime-image`代码中注释掉即可

```html
// lime-image/components/l-image.uvue 第5行 注释掉即可。
<l-svg class="l-image" v-if="isSVG"  :src="src" :style="imageStyles" @load="onload" @error="onerror" :web="true"></l-svg>
```
## 文档
[image](https://limex.qcoon.cn/components/image.html)

## 代码演示
### 基础使用

```html
// mode
<l-image mode="widthFix" src="https://picsum.photos/200/300?random=lime" />
```

### 状态
```html
// 自定义加载状态
<l-image mode="widthFix" src="https://picsum.photos/200/300?random=lime">
	<template #loading>
		<text>加载中</text>
	</template>
	<template #error>
		<text>加载失败</text>
	</template>
</l-image>
```

### 形状
- shape: 有round，circle，square

```html
// 自定义加载状态
<l-image shape="round" src="https://picsum.photos/200/300?random=lime"></l-image>
```

### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
 // 代码位于 uni_modules/lime-image/compoents/lime-image 
<lime-image />
```

### 插件标签
- 默认 l-image 为 component
- 默认 lime-image 为 demo

### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## API

### Props
- 所有内置的props与原组件一致
- 所以就不细列出

| 参数                       | 说明                                                         | 类型             | 默认值       |
| --------------------------| ------------------------------------------------------------ | ---------------- | ------------ |
| src                      | 图片地址                                                      | <em>string</em>  | ``     |
| mode                     | 图片裁剪、缩放的模式，同原版                                   | <em>string</em>  | ``     |
| shape                    | 图片形状：`square`,`round`,`circle`                           | <em>string</em>  | `square`     |
| width                    | 宽度                          									| <em>number</em>  | ``     |
| height                   | 高度                          									| <em>number</em>  | ``     |

### Events
| 参数                       | 说明                                                         | 参数             | 
| --------------------------| ------------------------------------------------------------ | ---------------- |
| load              		| 加载成功  | `{details}` | 
| error              		| 加载失败  | `{error}` | 



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)