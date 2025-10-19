# lime-notice-bar 通知栏
- 公告栏通知栏 用于循环播放展示一组消息通知。兼容uniapp/uniappx(h5,ios,安卓)
- 插件依赖`lime-shared`、`lime-style`、`lime-icon`，不喜勿下

## 文档
[notice-bar](https://limex.qcoon.cn/components/notice-bar.html)

## 安装
插件市场导入即可，首次安装可能需要重新编译


**注意** 
*  本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。
*  不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在lime-icon代码中注释掉即可

```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

## 代码演示
### 基础使用

通过 `text` 属性设置通知栏的内容，可以是文本数组。。
```html
<l-notice-bar text="这是一条普通的通知信息"/>
```

### 纯文字

通过 `left-icon` 属性设置左侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)，默认是`info-circle-filled`,设置为空即可去掉图标。
```html
<l-notice-bar text="这是一条普通的通知信息" left-icon=''/>
```

### 右侧图标

通过 `right-icon` 属性设置右侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)，当点击右侧图标会触是`click`事件。
```html
<l-notice-bar text="这是一条普通的通知信息" right-icon="close" @click="handleClick" />
<l-notice-bar text="这是一条普通的通知信息" right-icon="arrow-right" @click="handleClick" />
```

### 多行展示
字较长时，可以通过设置 `wrapable` 属性来开启多行展示
```html
<l-notice-bar :wrapable="true" text="这是一条普通的通知信息这是一条普通的通知信息"/>
```

### 滚动播放

通过 `marquee` 属性设置为`true`自动开启滚动播放。
```html
<l-notice-bar :marquee="true" text="这是一条普通的通知信息这是一条普通的通知信息"/>
```

### 垂直播放

通过 `marquee` 属性设置为`true`，通过`vertical`属性设置为`true`可开启垂直播放，此时文本最好是数组。
```html
<l-notice-bar :marquee="true" :vertical="true" :text="['这是一条普通的通知信息这是一条普通的通知信息','这是一条普通的通知信息这是一条普通的通知信息']"/>
```

### 类型
类型有普通（info）、警示（warning）、成功（success）、错误（danger）
```html
<l-notice-bar type="info" text="这是一条普通的通知信息这是一条普通的通知信息"/>
<l-notice-bar type="success" text="这是一条普通的通知信息这是一条普通的通知信息"/>
<l-notice-bar type="danger" text="这是一条普通的通知信息这是一条普通的通知信息"/>
<l-notice-bar type="warning" text="这是一条普通的通知信息这是一条普通的通知信息"/>
```

### 自定义样式
通过`bg-color`设置是背景色，`color`设置文本颜色，`left-icon-color`设置左侧图标颜色
```html
<l-notice-bar bg-color="#3283ff" color="white" left-icon-color="white" text="这是一条普通的通知信息这是一条普通的通知信息"/>
```

### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-notice-bar/compoents/lime-notice-bar -->
<lime-notice-bar />
```


### 插件标签
- 默认 l-notice-bar 为 component
- 默认 lime-notice-bar 为 demo

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 通知文本内容。 | _string\|string[]_ | `-` |
| leftIcon | 左侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)。 | _string_ | `-` |
| rightIcon | 右侧[图标](https://ext.dcloud.net.cn/plugin?id=14057)。 | _string_ | `-` |
| type | 内置主题。可选项：info/success/warning/danger | _string_ | `info` |
| interval | 播放间隔 | _number_ | `2000` |
| delay | 动画延迟时间 | _number_ | `0` |
| speed | 滚动速率 (px/s) | _number_ | `50` |
| loop | 循环播放次数，值为 -1 表示循环播放 | _number_ | `-1` |
| color | 通知文本颜色 | _string_ | `-` |
| bgColor | 滚动条背景 | _string_ | `-` |
| marquee | 跑马灯效果 | _boolean_ | `false` |
| vertical | 跑马灯垂直播放 | _boolean_ | `false` |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |
| leftIconColor | 左侧图标颜色 | _string_ | `-` |
| leftIconSize | 左侧图标尺寸 | _string_ | `-` |
| fontSize | 文本字体大小 | _string_ | `-` |
| rightIconColor | 右侧图标颜色 | _string_ | `-` |
| rightIconSize | 右侧图标尺寸 | _string_ | `-` |
| lStyle | 自定义样式 | _string\|Object_ | `-` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。uvue app无效

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
--l-notice-bar-font-size | 28rpx | - 
--l-notice-bar-padding-x | 32rpx | - 
--l-notice-bar-padding-y | 26rpx | - 
--l-notice-bar-line-height | 44rpx | - 
--l-notice-bar-icon-font-size | 44rpx | - 
--l-notice-bar-info-color | $blue | - 
--l-notice-bar-info-bg-color | $blue-1 | - 
--l-notice-bar-success-color | $success-color | - 
--l-notice-bar-success-bg-color | $success-color-1 | - 
--l-notice-bar-warning-color | $warning-color | - 
--l-notice-bar-warning-bg-color | $warning-color-1 | - 
--l-notice-bar-danger-color | $error-color-6 | - 
--l-notice-bar-danger-bg-color | $error-color-1 | - 

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)