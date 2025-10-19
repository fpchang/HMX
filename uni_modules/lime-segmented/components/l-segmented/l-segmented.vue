<template>
	<view class="l-segmented" 
		:style="[styles]"
		:class="[
			'l-segmented--' + shape,
			'l-segmented--' + type,
			disabled ? 'l-segmented--disabled' : '']" >
		<text class="l-segmented__item" v-for="(text, index) in options" :key="text" 
			:style="[
				textStyle,
				{
					color: index == activeValue ? activeColor: color,
					background: index == activeValue && type == 'button' ? sliderColor :'',
				}]"
			:class="[{
				'l-segmented__item--first': index == 0,
				'l-segmented__item--last': index == options.length - 1,
				'l-segmented__item--active': index == activeValue,
				'l-segmented__item--disabled': disabled},  
				'l-segmented__item--' + size,
				'l-segmented__item--' + shape,
				]"
			@click="handleClick(index)">{{text}}</text>
		<view class="l-segmented__slider" 
			v-if="type != 'button'"
			:style="[sliderStyle]"
			:class="[{
				'l-segmented__slider--transition': initialized && immediate || !immediate,
				'l-segmented__slider--disabled':  disabled},
				'l-segmented__slider--' + shape,
				'l-segmented__slider--' + type]">
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Segmented 分段控制器组件
	 * @description 用于在多个选项间快速切换，支持多种样式风格
	 * <br>插件类型：LSegmentedComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-segmented
	 * 
	 * @property {string[]} options 选项列表（必填）
	 * @property {number} value 当前选中索引（支持v-model）
	 * @property {'small' | 'medium' | 'large'} size 组件尺寸（默认：'medium'）
	 * @value small
	 * @value medium
	 * @value large
	 * @property {'normal' | 'round'} shape 组件形状（默认：'normal'）
	 * @value normal
	 * @value round
	 * @property {boolean} disabled 是否禁用（默认：false）
	 * @property {'button' | 'card' | 'text'} type 显示类型（默认：'card'）
	 * @value button
	 * @value card
	 * @value text
	 * @property {string} bgColor 背景颜色（默认：#f5f5f5）
	 * @property {string} activeColor 选中项颜色（默认：主题色）
	 * @property {string} color 文字颜色（默认：#333）
	 * @property {string} sliderColor 滑块颜色（优先级高于activeColor）
	 * @property {string} fontSize 文字大小（支持CSS单位）
	 * @property {string} height 组件高度（支持CSS单位）
	 * @property {string} padding 内边距（支持CSS简写）
	 * @property {boolean} immediate 是否跳过首次动画（默认：false）
	 * @event {Function} change 选项变化时触发（返回选中索引）
	 * @event {Function} click 点击时触发
	 */
	import { defineComponent, ref, computed, watch, nextTick, onMounted,onUnmounted, reactive, getCurrentInstance } from '@/uni_modules/lime-shared/vue';
	import { getRect, getAllRect } from '@/uni_modules/lime-shared/getRect'
	import segmentedProps from './props';
	
	export default defineComponent({
		name: 'l-segmented',
		emits: ['change', 'input', 'click', 'update:modelValue'],
		props: segmentedProps,
		setup(props, {emit}) {
			const instance = getCurrentInstance().proxy!
			const modelValue = ref(0)
			const slider = reactive({
				x: 0,
				width: 0,
				height: null
			})
			const activeValue = computed({
				set(value: number) {
					modelValue.value = value;
					emit('change', value)
					emit('update:modelValue', value)
					// #ifdef VUE2
					emit('input', value)
					// #endif
				},
				get():number {
					return props.value ?? props.modelValue ?? modelValue.value 
				}
			} as WritableComputedOptions<number>)
			
			
			const styles = computed(() => {
				const style:Record<string, any> = {}
				if(props.bgColor) {
					style['background'] = props.bgColor!
				}
				if(props.type == 'button' && props.sliderColor) {
					style['border-color'] = props.sliderColor
				}
				if(props.padding) {
					style['padding'] = props.padding!
				}
				return style
			})
			
			const textStyle = computed(() =>{
				const style:Record<string, any> = {}
				if(props.height) {
					style['height'] = props.height
					style['line-height'] = props.height
				}
				if(props.fontSize) {
					style['font-size'] = props.fontSize
				}
				if(props.color) {
					style['color'] = props.color
				}
				if(props.sliderColor && props.type == 'button') {
					style['border-left-color'] = props.sliderColor
				}
				return style
			})
			
			const sliderStyle = computed(() =>{
				const style:Record<string, any> = {}
				if(props.sliderColor) {
					style['background'] = props.sliderColor
				}
				style['transform'] = `translateX(${slider.x}px)`;
				style['width'] = `${slider.width}px`
				style['height'] = `${slider.height}px`
				return style
			})
			const initialized = ref(false)
			const updateStyle = () => {
				nextTick(()=>{
					Promise.all([getRect('.l-segmented', instance), getAllRect('.l-segmented__item', instance)]).then(([parent,children])=>{
						const item = children[activeValue.value];
						const offset = item.left - parent.left ;
						const half = props.type == 'text' ? item.width / 2 : 0;
						if(props.type == 'card') {
							slider.height = item.height
						}
						slider.width = props.type == 'text' ? half : item.width;
						slider.x = offset + half / 2
						
						if (!initialized.value && props.immediate) {
							setTimeout(() => {
								initialized.value = true
							},10)
						}
						
					})
				})
			}
			
			const handleClick = (index: number) => {
				if(props.disabled) return
				activeValue.value = index;
				emit('click', index)
			}
			
			const stopWatch = watch(activeValue, ()=>{
				updateStyle()
			})
			
			onMounted(()=>{
				updateStyle()
			})
			onUnmounted(stopWatch)
			
			return {
				activeValue,
				styles,
				textStyle,
				sliderStyle,
				handleClick,
				initialized
			}
		}
	})
	
	
</script>
<style lang="scss">
	@import './index';
</style>
