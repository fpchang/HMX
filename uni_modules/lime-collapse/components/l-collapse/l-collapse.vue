<template>
	<view class="l-collapse" :class="{'l-collapse--inset': inset}">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Collapse 折叠面板容器组件
	 * @description 用于管理多个折叠面板的展开状态，支持手风琴模式和卡片风格
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-collapse
	 * 
	 * @property {boolean} inset 是否显示为圆角卡片样式
	 * @property {boolean} accordion 是否启用手风琴模式（同时只能展开一个面板）
	 * @property {Array<string | number>} modelValue 当前展开项的值数组（支持v-model）
	 * @property {Array<string | number>} value 当前展开项的值数组（兼容旧版）
	 * @property {boolean} disabled 是否禁用全部面板
	 * @event {Function} change 面板展开状态变化时触发（返回当前激活数组）
	 */
	import { defineComponent, computed, provide, ref } from '@/uni_modules/lime-shared/vue';
	import collapseProps from './props';
	import type { Numeric } from './type'
	export default defineComponent({
		name: 'l-collapse',
		emits: ['input','update:modelValue','change'],
		props: collapseProps,
		setup(props, {emit, expose}) {
			const children = ref([])
			const innerValueRef = ref<Numeric[]>(props.value || props.modelValue || [])
			const activeValue = computed({
				set(value: Numeric[]) {
					innerValueRef.value = value;
					if(props.modelValue) {
						emit('update:modelValue', value)
					}
					// #ifdef VUE2
					emit('input', value)
					// #endif
					emit('change', value)
				},
				get():Numeric[] {
					if(props.value?.length || props.modelValue?.length) {
						innerValueRef.value = props.value || props.modelValue;
					}
					return innerValueRef.value
				}
			})
			const disabled = computed(():boolean => props.disabled);
			const calcActiveValues = (activeValues: Numeric[], panelValue: Numeric, expandMutex: boolean):Numeric[] => {
			    const hit = activeValues.indexOf(panelValue);
			
			    if (hit > -1) {
			        return activeValues.filter((item):boolean => item !== panelValue);
			    }
			
			    return expandMutex ? [panelValue] : activeValues.concat(panelValue);
			};
			const onPanelChange = (value: any) => {
				if(Array.isArray(activeValue.value)){
					const val = calcActiveValues(activeValue.value, value, props.accordion);
					activeValue.value = val
				}
			}
			const toggleAll = (options: boolean) => {
				if (props.accordion) return;
				const enabledPanels:Numeric[] = []
				children.value.forEach((it:LCollapsePanelComponentPublicInstance, index:number) => {
					const value = it.value || index
					if(it.disabled) return
					if(options) {
						enabledPanels.push(value)
					} else if(!activeValue.value.includes(value)){
						enabledPanels.push(value)
					}
				})
				activeValue.value = enabledPanels
			}
			
			// #ifdef VUE3
			expose({
				toggleAll
			})
			// #endif
			provide('limeCollapse', {
				children,
				activeValue,
				disabled,
				onPanelChange,
			})
			
			
			return {
				// #ifdef VUE2
				toggleAll
				// #endif
			}
		}
	})
</script>
<style>
</style>
