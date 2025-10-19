<template>
	<view class="l-steps" :class="classes">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Steps 步骤条组件
	 * @description 用于展示操作流程的步骤进度，支持水平和垂直方向
	 * <br>插件类型：LStepsComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-steps
	 * 
	 * @property {number} current 当前步骤索引（支持v-model）
	 * @property {number} defaultCurrent 默认当前步骤（非受控属性）
	 * @property {'wait' | 'process' | 'finish' | 'error'} status 当前步骤状态（默认："process"）
	 * @value wait
	 * @value process
	 * @value finish
	 * @value error
	 * @property {'horizontal' | 'vertical'} layout 步骤条方向（默认："horizontal"）
	 * @value horizontal
	 * @value vertical
	 * @property {boolean} readonly 只读模式（默认：false）
	 * @property {'positive' | 'reverse'} sequence 步骤顺序（默认："positive"）
	 * @property {'default' | 'dot'} type 步骤条风格（默认："default"）
	 * @value default
	 * @value dot
	 * @property {string} activeColor 激活状态颜色（默认：主题色）
	 * @property {string} finishBgColor 已完成步骤背景色
	 * @property {string} waitColor 未开始步骤文字颜色（默认："#999"）
	 * @property {string} waitBgColor 未开始步骤背景色
	 * @event {Function} change 步骤变化时触发（返回当前步骤索引）
	 */
	
	import { defineComponent, ref, computed, provide } from '@/uni_modules/lime-shared/vue';
	import stepsProps from './props';
	import {StepsProvide} from './type';
	
	export default defineComponent({
		name: 'l-steps',
		props: stepsProps,
		emits: ['change', 'input', 'update:modelValue'],
		setup(props, {emit}) {
			const name = 'l-steps'
			const modelValue = ref(0)
			const current = computed({
				set(value: number) {
					modelValue.value = value;
					emit('change', value)
					emit('update:modelValue', value)
					// #ifdef VUE2
					emit('input', value)
					// #endif
				},
				get():number {
					return props.current || props.modelValue || modelValue.value
				}
			} as WritableComputedOptions<number>)
			
			const classes = computed(()=>{
				let cls = ''
				
				cls += `${name}--${props.layout} `
				cls += `${name}--${props.sequence} `
				cls += props.readonly ? `${name}--readonly`: ''
				
				return cls
			})
			
			const children = ref<number[]>([])
			const relation = (child: number) =>{
				children.value.push(child)
			}
			const removeRelation = (child: number) => {
				children.value = children.value.filter((item):boolean => item != child)
			}
			const onClickItem = (cur: number) =>{
				current.value = cur
			}
			
			provide('limeSteps', {
				props,
				current,
				children,
				onClickItem,
				relation,
				removeRelation
			} as StepsProvide)
			
			return {
				classes
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>

