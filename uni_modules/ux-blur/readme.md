
<p align="center">
    <img alt="logo" src="https://www.uxframe.cn/logo/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">UxFrame Blur 高斯模糊组件 1.0.4</h3>

## 特别说明

如果您已经购买了[UxFrame 低代码高性能UI框架](https://ext.dcloud.net.cn/plugin?id=16148), 则无需再次购买本插件，请点击上方`进入交流群`联系我免费获取离线版插件！

### 使用方式

``` html

<template>
	<scroll-view style="flex: 1;">
		<view class="h1">a</view>
		<view class="h2">a</view>
		<view id="mask" class="body">
			<image class="logo" src="/static/logo.png"></image>
			<!-- 覆盖在需要模糊的组件上方 -->
			<ux-blur class="mask" :view="navView"></ux-blur>
			<text class="text" style="z-index: 1;">模糊上面的文字</text>
		</view>
		<view class="h1">c</view>
		<view class="h2">d</view>
	</scroll-view>
</template>

<script setup>
	const navView = ref<any | null>(null)
	
	onLoad(() => {
		// 可以指定模糊的对象view
		setTimeout(function() {
			let el = uni.getElementById('mask')
			// #ifdef APP-ANDROID
			// navView.value = el?.getAndroidView()
			// #endif
			
			// #ifdef APP-IOS
			// navView.value = el?.getIOSView()
			// #endif
		}, 400);
	})
</script>

```

## 文档教程 ⬇️

[https://www.uxframe.cn](https://www.uxframe.cn)
