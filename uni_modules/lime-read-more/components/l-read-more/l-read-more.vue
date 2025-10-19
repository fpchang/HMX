<template>
	<view class="l-read-more">
		<view class="l-read-more__content" :style="{height: displayHeight}">
			<view class="l-read-more__inner">
				<slot></slot>
			</view>
			<view class="l-read-more__mask" :style="[
				{
					opacity: show ? 0 : 1
				},
				maskColor && maskColor.length > 1 ? {
					background: 'linear-gradient(to top, '+ maskColor[0] +', '+ maskColor[1] +')'
				} : {}
			]"></view>
		</view>
		<view class="l-read-more__handle" :class="{'l-read-more__handle--disabled': disabled}" @click="onClick">
			<slot name="handle">
				<text class="l-read-more__handle-text" :style="[
					textColor ? {color: textColor} :{},
					fontSize ? {fontSize: fontSize} :{}
				]">{{!show ? expandText: collapseText}}</text>
				<l-icon class="l-read-more__handle-icon" :color="textColor" :size="fontSize" :name="!show ? expandIcon: collapseIcon"></l-icon>
			</slot>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * ReadMore 阅读更多组件
	 * @description 用于长文本的展开/收起功能，支持渐变遮罩效果
	 * <br>插件类型：LReadMoreComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-read-more
	 * 
	 * @property {boolean} disabled 禁用展开功能（默认：false）
	 * @property {string} expandText 展开按钮文字（默认："展开更多"）
	 * @property {string} expandIcon 展开按钮图标（支持图标名称/图片路径）
	 * @property {string} collapseText 收起按钮文字（默认："收起"）
	 * @property {string} collapseIcon 收起按钮图标（支持图标名称/图片路径）
	 * @property {string} height 折叠时最大高度（支持CSS单位，默认："100px"）
	 * @property {string} fontSize 文本字号（支持CSS单位，默认："15px"）
	 * @property {string} textColor 文本颜色（默认："rgba(0,0,0,0.45)"）
	 * @property {string[]} maskColor 渐变遮罩颜色（默认：["white", "rgba(255, 255, 255, 0.3)"]）
	 * @event {Function} expand 点击展开时触发
	 * @event {Function} collapse 点击收起时触发
	 */
	import { defineComponent, onMounted, nextTick,computed, onUnmounted, getCurrentInstance, ref, watch } from '@/uni_modules/lime-shared/vue'
	import Props from './props'
	export default defineComponent({
		name: "l-read-more",
		emits: ['change', 'click', 'input', 'update:modelValue'],
		props: Props,
		
		setup(props, {emit}) {
			const instance = getCurrentInstance()
			// const show = computed(() => {
			// 	return props.modelValue || props.value
			// })
			const show = ref(props.modelValue || props.value)
			const displayHeight = ref(props.height)
			const change = () => {
				if(show.value) {
					uni.createSelectorQuery().in(instance?.proxy).select('.l-read-more__inner').boundingClientRect((res)=> {
						const {height} = res as any
						displayHeight.value = height + 'px';
					}).exec()
				} else {
					displayHeight.value = props.height
				}
			}
			const onClick = () => {
				if(props.disabled) return
				show.value = !show.value
				change()
				emit('change', show.value)
				emit('update:modelValue', show.value)
				// #ifdef VUE2
				emit('input', show.value)
				// #endif
				
			}
			
			const stop = watch(()=> [props.modelValue, props.value], (v) => {
				show.value = v[0] || v[1]
				change()
			})
			
			onMounted(() => {
				nextTick(change)
			})
			
			onUnmounted(() => {
				stop()
			})
			return {
				show,
				onClick,
				displayHeight
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>