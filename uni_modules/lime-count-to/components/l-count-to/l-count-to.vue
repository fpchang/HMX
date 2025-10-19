<template>
	<slot name="formatted" :value="formattedValue"><text>{{ formattedValue.integer }}{{formattedValue.decimal ? formattedValue.decimalSeparator : ''}}{{ formattedValue.decimal }}</text>
</slot>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * CountTo 数字滚动组件
	 * @description 用于展示数字动态变化效果，支持自定义格式和动画曲线
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-count-to
	 * 
	 * @property {number} from 起始数值（必填）
	 * @property {number} to 目标数值（必填）
	 * @property {number} precision 小数精度（默认：0）
	 * @property {boolean} showSeparator 是否显示千位分隔符
	 * @property {boolean} active 是否启用动画（默认：true）
	 * @property {number} duration 动画持续时间（单位：毫秒，默认：1500）
	 * @property {EasingFunction} timingFunction 自定义缓动函数（默认：cubicOut）
	 * @property {'group3' | 'group4'} separator 分隔模式
	 * @value 'group3' 千分位分隔（每3位，默认）
	 * @value 'group4' 万分位分隔（每4位）
	 * @property {number} fps 动画帧率（默认：60，建议30-120）
	 * @event {Function} finish 动画完成时触发
	 */
	
	import { defineComponent, watchEffect, computed, ref, onMounted  } from '@/uni_modules/lime-shared/vue';
	import countToProps from './props'
	import { FormattedTypes } from './type';
	import { tween, TweenProps, round } from './utils'
	
	const name = 'l-count-to'
	export default defineComponent({
		name,
		props: countToProps,
		emits: ['finish'],
		setup(props, { emit, expose }) {
			let animating = false
			
			const displayedValueRef = ref(props.from)
			const onUpdate = (currentValue : number) : void => {
				displayedValueRef.value = currentValue
			}
			const onFinish = () : void => {
				displayedValueRef.value = props.to
				animating = false
				emit('finish')
			}
			const animate = (from : number, to : number) => {
				animating = true
				displayedValueRef.value = props.from
				if (from != to) {
					tween({
						from,
						to,
						fps: props.fps,
						duration: props.duration,
						onUpdate,
						onFinish,
						timingFunction: props.timingFunction 
					} as TweenProps)
				}
			}
			
			const formattedValue = computed(() : FormattedTypes => {
				const formatted : string = round(displayedValueRef.value, props.precision).toFixed(props.precision)
				const splitValue = formatted.split('.')
			
				// const numberFormatter = new Intl.NumberFormat(mergedLocaleRef.value)
				// const decimalSeparator = numberFormatter
				// 	.formatToParts(0.5)
				// 	.find(part => part.type === 'decimal')
				// 	?.value
				// const integer = props.showSeparator
				// 	? numberFormatter.format(Number(splitValue[0]))
				// 	: splitValue[0]
				// const decimal = splitValue[1]
			
				const integer = props.showSeparator
					? props.separator == 'group4'
						? splitValue[0].replace(/(?!^)(?=(\d{4})+$)/g, ',')
						: splitValue[0].replace(/(?!^)(?=(\d{3})+$)/g, ',')
					: splitValue[0]
			
				const decimal = splitValue.length > 1 ? splitValue[1] : ''
			
				return {
					integer,
					decimal,
					decimalSeparator: '.'
				} as FormattedTypes
			})
			
			
			const play = () => {
				if (animating) return
				animate(props.from, props.to)
			}
			onMounted(() => {
			    watchEffect(() => {
			        if (!props.active) return
			        animate(props.from, props.to)
			    })
			})
			
			// #ifdef VUE3
			expose({
				play
			})
			 // #endif
			return {
			  formattedValue,
			  // #ifdef VUE2
			  play
			  // #endif
			}
			
		}
	})
</script>
<style>
</style>