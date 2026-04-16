<template>
	<text v-if="type == 'fraction'" class="l-swiper-dot" :class="'l-swiper-dot__' + type" :style="[styles]">
		{{currentIndex}}/{{totalSlides}}
	</text>
	<text v-else-if="type == 'title'" class="l-swiper-dot" :class="'l-swiper-dot__' + type" :style="[styles]">
		{{currentIndex}}/{{totalSlides}}
		{{currentSlideTitle}}
	</text>
	<view v-else class="l-swiper-dot" :class="'l-swiper-dot__' + type">
		<text
			class="l-swiper-dot__item" 
			:class="{
				'l-swiper-dot__item--active': index == current
			}"
			:style="[styles,  index == current && activeColor ? { 
				'background': activeColor
			}: {}]"
			v-for="(_, index) in totalSlides" :key="index">
			<template v-if="type == 'index'">
				{{ index + 1}}
			</template>
		</text>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * SwiperDot 轮播图指示器组件
	 * @description 用于轮播图(Swiper)的多种样式指示器，支持多种显示模式
	 * <br>插件类型：LSwiperDotComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-swiper-dot
	 * 
	 * @property {'dot' | 'dot-bar' | 'index' | 'title' | 'fraction'} type 指示器类型（默认："dot"）
	 * @value dot
	 * @value dot-bar
	 * @value index
	 * @value title
	 * @value fraction
	 * @property {number} total 总项目数（必填）
	 * @property {number} current 当前激活项索引（从0开始）
	 * @property {string} field 标题字段名（type="title"时必填）
	 * @property {any[]} list 数据源数组（type="title"时必填）
	 * @property {string} color 全局文本颜色
	 * @property {string} activeColor 激活状态颜色
	 * @property {string} inactiveColor 未激活状态颜色
	 * @property {string} fontSize 文字字号
	 */
	import { computed, defineComponent } from '@/uni_modules/lime-shared/vue';
	import swiperDotProps from './props';
	
	export default defineComponent({
		props: swiperDotProps,
		setup(props) {
			const totalSlides = computed(():number => props.list?.length || props.total);
			const currentIndex = computed(():number => props.current + 1);
			const currentSlideTitle = computed(():string => {
				if(!props.list || props.list!.length <= props.current) return ''
				const slide = props.list[props.current]
				if(typeof slide == 'string') return `${slide}`
				if(typeof slide == 'object') {
					const fieldValue = slide[props.field]
					if(!fieldValue) return ''
					 return `${fieldValue}`
				}
				return ''
			}); 
			
			const styles = computed(()=>{
				const style:Record<string, any> = {}
				
				if(props.color) {
					style['color'] = props.color!
				}
				if(props.inactiveColor) {
					style['background'] = props.inactiveColor!
				}
				if(props.fontSize) {
					style['font-size'] = props.fontSize!
				}
				return style
			})
			
			
			return {
				totalSlides,
				currentIndex,
				currentSlideTitle,
				styles
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>
