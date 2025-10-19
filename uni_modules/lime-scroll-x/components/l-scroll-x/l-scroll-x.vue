<template>
	<view ref="scrollxRef" class="l-scroll-x">
		<scroll-view ref="scrollRef" 
			class="l-scroll-x__view" 
			direction="horizontal" 
			enable-flex
			:show-scrollbar="false"
			:scroll-with-animation="true" 
			:scroll-x="true"
			@scroll="scroll">
			<slot/>
		</scroll-view>
		<view ref="trackRef" class="l-scroll-x__track"  v-if="indicator" :style="[trackStyle]">
			<view ref="barRef" class="l-scroll-x__bar" :style="[barStyle]"></view>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * ScrollX 横向滚动容器组件
	 * @description 提供横向滚动功能，支持自定义滚动条样式和指示器
	 * <br>插件类型：LScrollXComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-scroll-x
	 * 
	 * @property {string} trackWidth 滚动轨道宽度
	 * @property {string} trackHeight 滚动轨道高度
	 * @property {string} trackColor 滚动轨道颜色
	 * @property {string} barColor 滚动条颜色
	 * @property {string} barWidth 滚动条宽度
	 * @property {boolean} indicator 是否显示滚动指示器（默认：true）
	 */
	import { defineComponent, computed, ref, getCurrentInstance } from '@/uni_modules/lime-shared/vue';
	import { getRect } from '@/uni_modules/lime-shared/getRect';
	import scrollxProps from './props';
	
	export default defineComponent({
		name: 'l-scroll-x',
		props: scrollxProps,
		setup(props) {
			const instance = getCurrentInstance().proxy!;
			const trackStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(props.trackColor != null) {
					style['background'] = props.trackColor!
				}
				if(props.trackHeight != null) {
					style['height'] = props.trackHeight!
				}
				if(props.trackWidth != null) {
					style['width'] = props.trackWidth!
				}
				return style
			})
			
			const x = ref(0)
			const barStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(props.barColor != null) {
					style['background'] = props.barColor!
				}
				if(props.barWidth != null) {
					style['width'] =  props.barWidth!
				}
				style['transform'] = `translateX(${x.value}px)`;
				return style
			})
			
			const scroll = (e:UniScrollEvent) => {
				Promise.all([
					getRect('.l-scroll-x__view' , instance),
					getRect('.l-scroll-x__track', instance),
					getRect('.l-scroll-x__bar', instance)
				]).then(([scroll, track, bar])=>{
					x.value = e.detail.scrollLeft / (e.detail.scrollWidth - scroll.width) * (track.width - bar.width);
				})
			}
			
			
			return {
				trackStyle,
				barStyle,
				scroll
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>
