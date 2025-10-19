<template>
	<view class="l-row" :class="{'l-row--wrap': wrap}" :style="[styles, lStyle]">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	/**
	 * Row 行布局组件
	 * @description 用于创建弹性布局的行容器，支持多种对齐方式和间距控制
	 * <br>插件类型：LRowComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-row
	 * 
	 * @property {Array<string | number> | string | number} gap 列间距（支持多值设置）
	 * @property {'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'} justify 水平对齐方式（默认："start"）
	 * @value start
	 * @value center
	 * @value end
	 * @value around
	 * @value between
	 * @value evenly 
	 * @property {'start' | 'center' | 'end' | 'stretch'} align 垂直对齐方式（默认："start"）
	 * @value start
	 * @value center
	 * @value end
	 * @value stretch
	 * @property {boolean} wrap 是否自动换行（默认：false）
	 * @property {string | UTSJSONObject} lStyle 自定义样式（支持CSS字符串或JSON对象）
	 */
	
	
	import { defineComponent, computed, provide, type Ref} from '@/uni_modules/lime-shared/vue';
	import { unitConvert } from '@/uni_modules/lime-shared/unitConvert'
	import { flexJustifyContentMap, flexAlignItemsMap } from './layout'
	import rowProps from './props';
	
	export default defineComponent({
		props: rowProps,
		options: {
		    virtualHost: true,
		    styleIsolation: "shared"
		},
		setup(props) {
			
			const gutter = computed(() : number[] => {
				if(!props.gap) return [0, 0]
				if (Array.isArray(props.gap)) {
					return (props.gap).map((item) : number => unitConvert(item) * 0.5)
				}
				const value = unitConvert(props.gap) * 0.5
				return [0, value]
			})
			
		
			
			const styles = computed(() => {
				const style:Record<string, string> = {}
			
				const vertical = gutter.value[0] 
				const horizontal = gutter.value[1]
				if(vertical != 0) {
					style['margin-top'] = `${vertical * -1}px`
					style['margin-bottom'] = `${vertical * -1}px`
				}
				if(horizontal != 0) {
					style['margin-left'] = `${horizontal * -1}px`
					style['margin-right'] = `${horizontal * -1}px`
				}
				if (flexJustifyContentMap.has(props.justify)) {
					style['justify-content'] = flexJustifyContentMap.get(props.justify)!
				}
				if (flexAlignItemsMap.has(props.align)) {
					style['align-items'] = flexAlignItemsMap.get(props.align)!
				}
				if (props.wrap) {
					style['flex-wrap'] = 'wrap'
				}
			
				return style
			})
			
			provide('limeRow', gutter)
			
			return {
				styles
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>