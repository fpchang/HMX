<template>
	<view 
		class="l-sorter" 
		:class="{
			'l-sorter--down': innerValue == -1,
			'l-sorter--up': innerValue == 1,
		}" 
		:style="[styles]"
		@click="onClick">
		<slot>
			<text class="l-sorter__label" :style="[labelStyle]" v-if="label">{{label}}</text>
		</slot>
		<slot name="arrow" :value="innerValue">
			<view class="l-sorter__inner" ref="innerRef"></view>
		</slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	import { defineComponent, ref, computed } from '@/uni_modules/lime-shared/vue';
	import sorterProps from './props'
	
	export default defineComponent({
		name: 'l-sorter',
		props: sorterProps,
		emits: ['change', 'update:modelValue', 'input'],
		setup(props, {emit}) {
			const modelValue = ref(props.defaultValue)
			const innerValue = computed({
				set(v: number) {
					modelValue.value = v
					emit('change', v)
					emit('update:modelValue', v)
					// #ifdef VUE2
					emit('input', v)
					// #endif
				},
				get():number {
					return props.value ?? props.modelValue ?? modelValue.value
				},
			} as WritableComputedOptions<number>)
			
			const styles = computed(()=>{
				const style:Record<string, string> = {}
				if(props.activeColor) {
					style['--l-sorter-arrow-active-color'] = props.activeColor
				}
				if(props.inactiveColor) {
					style['--l-sorter-arrow-color'] = props.inactiveColor
				}
				if(props.arrowSize) {
					style['--l-sorter-arrow-size'] = props.arrowSize
				}
				
				return style
			})
			
			const onClick = () => {
				let { allowReset, descFirst } = props;
				// 定义一个循环序列
				const sequence = descFirst ? [0, -1, 1] : [0, 1, -1];
				
				// 如果不允许重置，则移除序列中的0
				if (!allowReset) {
				    sequence.shift();
				}
				
				// 找到当前值在序列中的索引，并更新到下一个值
				const currentIndex = sequence.indexOf(innerValue.value);
				const nextIndex = (currentIndex + 1) % sequence.length;
				innerValue.value = sequence[nextIndex];
				  
			}
			
			return {
				styles,
				innerValue,
				onClick
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>
