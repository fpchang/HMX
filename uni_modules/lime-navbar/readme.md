# lime-navbar 导航栏
- 为页面提供导航功能，常用于页面顶部，兼容uniapp/uniappx
- 插件依赖`lime-style`，`lime-shared`,`lime-icon`,不喜勿下

## 文档
[navbar](https://limex.qcoon.cn/components/navbar.html)

## 安装
插件市场导入即可，首次安装可能需要重新编译

**注意** 
* 🔔 本插件依赖的[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在 uniapp x app中是原生插件，如果购买(收费为5元)则需要自定义基座，才能使用！uniapp可忽略。
* 🔔 不需要[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)在lime-icon代码中注释掉即可

```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

## 代码演示
### 基础使用
通过 `title` 属性设置导航栏标题。`fixed`属性设置导航栏固定在顶部默认为`true`
```html
<l-navbar title="标题文字" :fixed="false"></l-navbar>
```

### 返回上级
通过 `title` 属性设置导航栏标题。`left-arrow`设置显示返回箭头图标，通过`click-left`接收点击事件，`delta`设置后退按钮后退层数
```html
<l-navbar title="标题文字" :left-arrow="true" @click-left="onClickLeft"></l-navbar>
```
```js
const onClickLeft = () => {
	console.log('点击')
}
```

### 标题文字超出
通过 `title-max-length` 属性标题文字最大长度
```html
<l-navbar title="标题文字超出" :title-max-length="5" :fixed="false"></l-navbar>
```

### 自定义胶囊样式
通过 `capsule` 插槽自定义胶囊样式
```html
<l-navbar title="标题文字" :fixed="false">
    <template #capsule>
      <view class="custom-capsule">
        <l-icon name="chevron-left" size="20px" class="custom-capsule__icon" />
		<view style="width: 1px;height: 20px; background-color: #ddd; margin: 0 10px;"></view>
        <l-icon name="home" size="20px" class="custom-capsule__icon" />
      </view>
    </template>
    <template #right>
      <l-icon name="ellipsis" size="24px" />
    </template>
</l-navbar>
```
```css
.custom-capsule {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.custom-capsule__icon {
  position: relative;
  margin: 0;
}
```

### 带搜索导航栏
通过 `left` 插槽自定义左侧内容，通过 `right` 插槽自定义右侧内容
```html
<l-navbar title="标题文字" :fixed="false">
   <template #left>
		<view style="width: 80%;">
			<l-search placeholder="搜索预设文案?" shape="round"/>
		</view>
	</template>
	<template #right>
		<l-icon name="home" size="24px" />
		<view style="width: 10px;"></view>
		<l-icon name="ellipsis" size="24px" />
	</template>
</l-navbar>
```


### 自定义样式
通过 `bg-color` 设置背景色，`color`设置文本颜色
```html
<l-navbar title="标题文字" :fixed="false" :leftArrow="true" bg-color="#3283ff" color="white"></l-navbar>
```

### 额外插槽
需要弹窗从顶部出现时，并且弹窗的top为navbar高度时可使用`extra`插槽
```html
<l-navbar>
	<template #extra="{size}">
		<l-popup v-model="visible"
			:overlayStyle="{ top: size.height+ 'px' }"
			:l-style="{ top: size.height + 'px' }"
			:position="currentPlacement" 
			:closeable="true">
			<view style="padding: 100px;"></view>
		</l-popup>
	</template>
</l-navbar>
```



### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-navbar/compoents/lime-navbar -->
<lime-navbar />
```


### 插件标签
- 默认 l-navbar 为 component
- 默认 lime-navbar 为 demo

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
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetTop | 是否开启顶部安全区适配 | _boolean_ | `false` |
| fixed | 是否固定在顶部 | _boolean_ | `true` |
| leftArrow | 是否展示左侧箭头 | _boolean_ | `false` |
| delta | 后退按钮后退层数 | _number_ | `1` |
| title | 页面标题 | _string_ | `-` |
| titleMaxLength | 标题文字最大长度，超出的范围使用 `...` 表示 | _number_ | `-` |
| z-index | z-index 层级 | _number_ | `-` |
| bgColor | 背景色 | _string_ | `` |
| color | 文本色 | _string_ | `` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| back  | 返回触发 | _-_ |
| click-left  | 点击左侧图标触发 | _-_ |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| capsule | 左侧胶囊区域 |
| left | 左侧区域 |
| right | 右侧区域 |
| title | 标题区域 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，uvue app无效。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --l-navbar-color    | _$text-color-1_                  | -    |
| --l-navbar-bg-color | _$bg-color-container_ | -    |
| --l-navbar-height | _48px_ | -    |
| --l-navbar-z-index | _5001_ | -    |
| --l-navbar-right | _12px_ | -    |
| --l-navbar-left | _12px_ | -    |
| --l-navbar-padding-top | _0px_ | -    |
| --l-navbar-title-font-size | _18px_ | -    |
| --l-navbar-left-arrow-size | _24px_ | -    |
| --l-navbar-capsule-border-color | _$border-color-1_ | -    |
| --l-navbar-capsule-border-radius | _16px_ | -    |
| --l-navbar-capsule-width | _88px_ | -    |
| --l-navbar-capsule-height | _32px_ | -    |

## 常见问题
插件包含一下[lime-svg](https://ext.dcloud.net.cn/plugin?id=18519)为收费插件。如果你不需要svg，可以在lime-icon里注释掉，lime-svg为APP原生插件，收费为1元，源码为5元。如果你需要svg，可以考虑一下购买。
```html
// lime-icon/components/l-icon.uvue 第4行 注释掉即可。
<!-- <l-svg class="l-icon" :class="classes" :style="styles" :color="color" :src="iconUrl" v-else :web="web" @error="imageError" @load="imageload" @click="$emit('click')"></l-svg> -->
```

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)