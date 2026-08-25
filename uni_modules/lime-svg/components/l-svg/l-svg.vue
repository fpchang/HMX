<template>
	<!-- #ifdef APP-NVUE -->
	<web-view class="l-svg" ref="webRef" @error="handleWebViewError" :style="styles" @pagefinish="handleWebViewLoad" @onPostMessage="handleWebViewMessage"
		src="/uni_modules/lime-svg/hybrid/html/index.html"></web-view>
	<!-- #endif -->

	<!-- #ifndef APP-NVUE -->
	<view class="l-svg" :class="[{'l-svg--inherit': isInherit}, lClass]" :style="styles" @click="$emit('click')">
		<image class="l-svg-img" :src="svgUrl" @load="onLoad" @error="onError"></image>
	</view>
	<!-- #endif -->
</template>

<script lang="ts">
	// @ts-nocheck
	/**
	 * Svg SVG组件
	 * @description 用于渲染SVG路径元素，支持动态颜色和继承属性
	 * <br>插件类型：LSvgComponentPublicInstance
	 * @tutorial `https://ext.dcloud.net.cn/plugin?name=lime-svg`
	 *
	 * @property {string} [src=''] SVG 图标的源，支持本地路径、网络 URL、SVG 源文本和 Base64 编码
	 * @property {string} [color=''] 图标颜色，仅对纯色图标有效
	 * @property {boolean} [web=false] 是否使用 WebView 渲染，支持动画效果
	 * @property {boolean} [inherit=false] 是否以继承颜色方式渲染图标
	 * @property {string | UTSJSONObject} [lClass] 根元素自定义类名
	 * @property {string | UTSJSONObject} [lStyle] 根元素自定义样式
	 * @event {Function} load SVG 路径加载完成时触发
	 * @event {Function} error SVG 路径加载失败时触发
	 * @event {Function} click 点击图标时触发
	 */
	import svgProps from './props'
	import { defineComponent, getCurrentInstance } from '@/uni_modules/lime-shared/vue'
	import { useSvgStyles } from './useSvgStyles'
	// #ifndef APP-NVUE
	import { useSvgPath } from './useSvgPath'
	// #endif
	// #ifdef APP-NVUE
	import { useSvgWebView } from './useSvgWebView'
	// #endif

	export default defineComponent({
		// name: 'l-svg',
		props: svgProps,
		emits: ['load', 'error', 'click'],
		setup(props, { emit }) {
			const instance = getCurrentInstance()!.proxy!
			const { svgUrl, isInherit, styles } = useSvgStyles(props)

			const onLoad = (e: any) => {
				// #ifdef WEB
				svgUrl.value = instance.$el.querySelector('img').src
				// #endif
				emit('load')
			}

			const onError = () => {
				emit('error')
			}

			// APP-NVUE webview 渲染
			// #ifdef APP-NVUE
			const { webRef, handleWebViewError, handleWebViewLoad, handleWebViewMessage } = useSvgWebView(props, svgUrl)
			// #endif

			// 小程序 WEB
			// #ifndef APP-NVUE
			useSvgPath(props, svgUrl)
			// #endif


			return {
				svgUrl,
				onLoad,
				onError,
				styles,
				// #ifdef APP-NVUE
				webRef,
				handleWebViewError,
				handleWebViewLoad,
				handleWebViewMessage,
				// #endif
				// #ifndef APP-NVUE
				isInherit,
				// #endif
			}
		}
	})
</script>

<style lang="scss">
	@import './index';
</style>
