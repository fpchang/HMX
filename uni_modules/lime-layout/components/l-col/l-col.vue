<template>
	<view class="l-col" :class="classes" :style="[styles, lStyle]">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	/**
	 * Col 列布局组件
	 * @description 用于创建弹性布局的列容器，必须作为 Row 的直接子元素使用
	 * <br>插件类型：LColComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-layout
	 * 
	 * @property {number | string | 'auto' | 'none'} span 列宽度（默认：24）
	 * @value auto
	 * @value none
	 * @value 1
	 * @value 2
	 * @value 3
	 * @value 4
	 * @value 5
	 * @value 6
	 * @value 7
	 * @value 8
	 * @value 9
	 * @value 10
	 * @value 11
	 * @value 12
	 * @value 13
	 * @value 14
	 * @value 15
	 * @value 16
	 * @value 17
	 * @value 18
	 * @value 19
	 * @value 20
	 * @value 21
	 * @value 22
	 * @value 23
	 * @value 24
	 * @property {number | string} offset 列偏移量（默认：0）
	 * @property {number} order 排序优先级（默认：0）
	 * @property {string | UTSJSONObject} lStyle 自定义样式（支持CSS字符串或JSON对象）
	 */
	
	import { defineComponent, inject, computed, type Ref} from '@/uni_modules/lime-shared/vue';
	import colProps from './props';
	export default defineComponent({
		options: {
		    virtualHost: true,
		    styleIsolation: "shared"
		},
		props: colProps,
		setup(props) {
			const gutter = inject('limeRow', null)
			
			const classes = computed(()=>{
				const cls = []
				if(props.span){
					cls.push(`l-col--${props.span}`)
				}
				if(props.offset){
					cls.push(`l-col--offset-${props.offset}`)
				}
				
				return cls
			})
			
			const styles = computed(()=> {
				const style = {}
				if(props.order != 0) {
					style['order'] = props.order
				}
				const vertical = gutter.value[0] 
				const horizontal = gutter.value[1]
				if(vertical != 0) {
					style['padding-top'] = `${vertical}px`
					style['padding-bottom'] = `${vertical}px`
				}
				if(horizontal != 0) {
					style['padding-left'] = `${horizontal}px`
					style['padding-right'] = `${horizontal}px`
				}
				
				if(props.aspectRatio > 0) {
					style['aspect-ratio'] = props.aspectRatio!
				}
				return style
			})
			
			return {
				classes,
				styles
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>