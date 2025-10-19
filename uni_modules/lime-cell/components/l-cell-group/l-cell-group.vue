<template>
	<view>
		<text class="l-cell-group__title" v-if="title != null">{{title}}</text>
		<view class="l-cell-group" :class="{'l-cell-group--inset': inset}">
			<slot/>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * CellGroup 单元格分组容器
	 * @description 用于包裹多个 Cell 组件，提供统一的组样式和布局
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-cell-group
	 * 
	 * @property {string} title 分组标题文本
	 * @property {boolean} inset 是否采用内嵌式样式（带圆角和外边距）
	 */
	import { defineComponent, ref, provide } from '@/uni_modules/lime-shared/vue';
	import CellGroupProps from './props';
	
	export default defineComponent({
		// name: 'l-cell-group',
		props: CellGroupProps,
		setup(props) {
			const children = ref<number[]>([])
			
			provide('limeCellGroup', {
				children,
				props
			})
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>