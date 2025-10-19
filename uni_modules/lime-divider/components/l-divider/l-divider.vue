<template>
	<view class="l-divider" 
		:class="[
			'l-divider--' + (vertical ? 'vertical' : 'horizontal'),
			'l-divider--' + align,
			dashed ? 'l-divider--dashed' : '']"
		:style="{
			'border-color': color,
			color: textColor
		}"
		>
		<!-- #ifdef APP-NVUE -->
		<view class="l-divider__before"></view>
		<!-- #endif -->
		<view class="l-divider__content" v-if="$slots.default || content">
			<slot>{{content}}</slot>
		</view>
		<!-- #ifdef APP-NVUE -->
		<view class="l-divider__after"></view>
		<!-- #endif -->
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * LimeDivider 分割线
	 * @description 分割线
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-divider
	 * @property {Boolean} dashed 是否使用虚线
	 * @property {String} content 文本
	 * @property {Boolean} align = [left|right|center] 内容位置
	 * @value left	 align 靠左
	 * @value right	 align 靠右
	 * @value center align 居中
	 */
	import {defineComponent} from '@/uni_modules/lime-shared/vue';
	import DividerProps from './props'
	const name = 'l-divider'
	
	export default defineComponent({
		name,
		props: DividerProps,
		setup(props) {
			return {}	
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
