<template>
	<view class="l-image-wrapper" :class="classes" :style="[isLoading || isFailed ? styles : {} ]">
		<view class="l-image__state" v-show="isLoading || isFailed">
			<!-- 加载中占位 -->
			<template v-if="isLoading">
				<slot name="loading">
					<!-- #ifndef APP-NVUE -->
					<view class="l-image__loading"></view>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<loading-indicator class="l-image__loading" :animating="true"/>
					<!-- #endif -->
				</slot>
			</template>
			<!-- 加载失败占位 -->
			<template v-else-if="isFailed">
				<slot name="error">
					<!-- #ifndef APP-NVUE -->
					<view class="l-image__error"></view>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<icon size="38" class="l-image__error" type="cancel" color="rgba(0,0,0,0.25)" />
					<!-- #endif -->
				</slot>
			</template>
		</view>
		<image 
			id="image"
			ref="image"
			class="l-image" 
			:hidden="isLoading || isFailed"
			:style="[styles]"
			:mode="mode" 
			:src="src" 
			:webp="webp" 
			:lazy-load="lazyLoad" 
			@load="onload"
			@error="onerror" 
			:show-menu-by-longpress="showMenuByLongpress">
		</image>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	import { watch, getCurrentInstance, inject, defineComponent, SetupContext, computed, ref, reactive ,onMounted, nextTick } from '@/uni_modules/lime-shared/vue';
	import ImageProps from './props';
	import { useImage } from './useImage';
	import { addUnit } from '@/uni_modules/lime-shared/addUnit'
	import { unitConvert } from '@/uni_modules/lime-shared/unitConvert'
	const name = 'l-image'
	/**
	 * LimeImage 图片
	 * @description 加强版image插件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=12228
	 * @property {String} mode 缩放的模式
	 * @value scaleToFill	不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
	 * @value aspectFit	保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
	 * @value aspectFill	保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
	 * @value widthFix	宽度不变，高度自动变化，保持原图宽高比不变
	 * @value heightFix	高度不变，宽度自动变化，保持原图宽高比不变 App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3
	 * @value top	不缩放图片，只显示图片的顶部区域
	 * @value bottom	不缩放图片，只显示图片的底部区域
	 * @value center	不缩放图片，只显示图片的中间区域
	 * @value left	不缩放图片，只显示图片的左边区域
	 * @value right	不缩放图片，只显示图片的右边区域
	 * @value top left	不缩放图片，只显示图片的左上边区域
	 * @value top right	不缩放图片，只显示图片的右上边区域
	 * @value bottom left	不缩放图片，只显示图片的左下边区域
	 * @value bottom right	不缩放图片，只显示图片的右下边区域
	 * @property {String} src 图片地址
	 * @property {Boolean} lazyLoad 懒加载
	 * @property {Boolean} fadeShow 
	 * @property {Boolean} webp 
	 * @property {Boolean} showMenuByLongpress 
	 * @property {Boolean} draggable 
	 * @property {String} height 图片高度
	 * @property {String} width 图片宽度
	 * @property {String} shape = [square|round|circle]  形状
	 * @value square	shape 方形
	 * @value round	    shape 圆角方形
	 * @value circle	shape 圆形
	 * @property {String} parentId 
	 * @property {String} injectId 
	 * @property {String} color Nvue Svg 使用 
	 * @event {Function} load 加载完成触发
	 * @event {Function} error 加载失败触发
	 */
	export default defineComponent({
		name,
		externalClasses: ['l-class'],
		options: {
			addGlobalClass: true,
			virtualHost: true,
		},
		props: ImageProps,
		emits: ['load', 'error'],
		setup(props, { emit, expose } : SetupContext) {
			let preSrc = ''
			
			const context = getCurrentInstance()
			const classes = computed(() => ({
				// [`${name}`]: true,
				[`${name}--shape-${props.shape}`]: true,
			}));
		
			const styles = computed(() => {
				const style = {}
				if(props.width) {
					style['width'] = addUnit(props.width)
				}
				if(props.height) {
					style['height'] = addUnit(props.height)
				}
				return style
			})
			
			const isLoading = ref(true)
			const isFailed = ref(false)
			
			const update = () => {
				preSrc = props.src
				if(!props.src) {
					if(props.src == '') {
						isLoading.value = false
						isFailed.value = true
					}
					emit('error', { errMsg: '图片链接为空' })
				} else {
					isLoading.value = true
					isFailed.value = false
				}
			}
			update()
			
			const onload = (e : any) => {
				nextTick(() => {
					// getRect('#image', context).then(rect => {
					// 	const { height, width } = rect;
					// 	image.width = pic.width = width
					// 	image.height = pic.height = height
					// })
					// 时机不好把控
				})
				isLoading.value = false
				isFailed.value = false
				emit('load', e)
			}
			const onerror = (e : Event) => {
				isLoading.value = false
				isFailed.value = true
				emit('error', e)
			}
			
			watch(() => props.src, (v) => {
				if(v === preSrc) return
				update()
			})
			
			
			return {
				classes,
				styles,
				isLoading,
				isFailed,
				onload,
				onerror
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>