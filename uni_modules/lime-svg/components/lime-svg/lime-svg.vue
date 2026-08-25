<template>
	<view class="pt-6 px-3 mb-3">
		<text class="text-2xl font-bold mb-2 text-primary flex">SVG 矢量图标</text>
		<text class="text-sm text-secondary mb-4 flex">支持本地、网络、源文本和 Base64 格式的 SVG，可动态着色</text>

		<view class="bg-surface p-4 mb-4 rounded-xl">
			<text class="text-lg font-bold mb-4 text-primary flex">基础用法</text>
			<text class="text-sm text-secondary mb-3 flex">支持本地路径、网络 URL、SVG 源文本和 Base64 编码</text>
			<view class="flex-row flex-wrap mb-2">
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" src="/static/svg/a.svg"></l-svg>
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" src="https://www.xmplus.cn/uploads/images/20221228/b9e9d45054ab5795992a1e92584a278b.svg"></l-svg>
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" color="#1635F4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgMTVoMS41VjlINXYxLjVoMXptMi41IDBIMTNWOUg4LjV6bTEuNS0xLjV2LTNoMS41djN6bTQgMS41aDEuNXYtMi4yNUwxNy4yNSAxNUgxOWwtMi4yNS0zTDE5IDloLTEuNzVsLTEuNzUgMi4yNVY5SDE0ek0zIDIxVjNoMTh2MTh6Ii8+PC9zdmc+"></l-svg>
			</view>
		</view>

		<view class="bg-surface p-4 mb-4 rounded-xl">
			<text class="text-lg font-bold mb-4 text-primary flex">颜色着色</text>
			<text class="text-sm text-secondary mb-3 flex">通过 color 属性改变纯色 SVG 图标颜色</text>
			<view class="flex-row flex-wrap mb-2">
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" color="#1635F4" src="/static/svg/a.svg"></l-svg>
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" color="#e25121" src="/static/svg/qq.svg"></l-svg>
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" color="#07c160" src="/static/svg/weixin.svg"></l-svg>
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" color="#000000" src="/static/svg/apple.svg"></l-svg>
			</view>
		</view>

		<view class="bg-surface p-4 mb-4 rounded-xl">
			<text class="text-lg font-bold mb-4 text-primary flex">WebView 渲染</text>
			<text class="text-sm text-secondary mb-3 flex">通过 :web=true 启用 WebView 渲染，支持动画</text>
			<view class="flex-row flex-wrap mb-2">
				<l-svg l-class="w-60px! h-60px! mr-3 mb-3" :web="true" src="https://www.xmplus.cn/uploads/images/20221228/b9e9d45054ab5795992a1e92584a278b.svg"></l-svg>
			</view>
		</view>

		<view class="bg-surface p-4 mb-4 rounded-xl">
			<text class="text-lg font-bold mb-4 text-primary flex">动态切换</text>
			<text class="text-sm text-secondary mb-3 flex">动态切换 src 和 color</text>
			<view class="flex-row flex-wrap items-center mb-2">
				<l-svg l-class="w-100px! h-100px! mr-3 mb-3" :src="isSwitch ? '/static/svg/qq.svg' : '/static/svg/weixin.svg'" :color="isSwitch ? '#1635F4' : '#07c160'"></l-svg>
				<button @click="isSwitch = !isSwitch">切换</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSwitch: false
			}
		}
	}
</script>
