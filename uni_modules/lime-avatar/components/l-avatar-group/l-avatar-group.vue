<template>
	<view class="l-avatar-group">
		<slot></slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * AvatarGroup 头像组组件
	 * @description 用于展示一组头像，支持数量限制和折叠显示
	 * <br>插件类型：LAvatarGroupComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-avatar
	 * 
	 * @property {'left-up' | 'right-up'} cascading 层叠方向（默认："right-up"）
	 * @value left-up
	 * @value right-up
	 * @property {number} max 最大显示数量（超出部分折叠）
	 * @property {'square' | 'circle'} shape 头像形状（默认："circle"）
	 * @value square
	 * @value circle
	 * @property {'small' | 'medium' | 'large'} size 头像尺寸（默认："medium"）
	 * @value small
	 * @value medium
	 * @value large
	 * @property {string} collapseText 折叠提示文字（默认："+N"）
	 * @property {string} collapseFontSize 折叠文字大小（支持CSS单位）
	 * @property {string} collapseColor 折叠项背景色
	 * @property {string} collapseTextColor 折叠文字颜色
	 */
	import { defineComponent, ref, provide } from '@/uni_modules/lime-shared/vue';
	import AvatarGroupProps from './props';
	
	export default defineComponent({
		name: 'l-avatar-group',
		props: AvatarGroupProps,
		setup(props) {
			const children = ref<number[]>([])
			provide('limeAvatarGroup', {
				children,
				props
			})
			
		}
	})
	
</script>
<style lang="scss">
	.-avatar-group {
		display: inline-flex;
	}
</style>
