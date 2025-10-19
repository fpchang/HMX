<template>
	<view class="l-load-more" @click="onClick" :style="[styles]">
		<slot v-if="status == 'remaining'" name="remaining">
			<text class="l-load-more__text">{{remainingText}}</text>
		</slot>
		<slot v-if="status == 'loading'" name="loading">
			<l-loading>{{loadingText}}</l-loading>
		</slot>
		<slot v-if="status == 'finished'" name="finished">
			<text class="l-load-more__text">{{finishedText}}</text>
		</slot>
		<slot v-if="status == 'error'" name="error">
			<text class="l-load-more__text">{{errorText}}</text>
		</slot>
	</view>
</template>
<script lang="ts">
	// @ts-ignore
	/**
	 * LoadMore 加载更多组件
	 * @description 用于列表底部加载状态提示，支持多种交互状态
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-load-more
	 * 
	 * @property {'remaining' | 'loading' | 'finished' | 'error'} status 当前状态
	 * @value remaining  还有更多数据可加载（显示"点击加载"）
	 * @value loading    正在加载中（显示加载动画）
	 * @value finished   全部加载完成（显示"没有更多了"）
	 * @value error      加载失败（显示错误提示）
	 * @property {string} remainingText 未加载状态提示文字（默认："点击加载更多"）
	 * @property {string} loadingText 加载中提示文字（默认："正在加载..."）
	 * @property {string} finishedText 加载完成提示文字（默认："没有更多数据"）
	 * @property {string} errorText 错误状态提示文字（默认："加载失败，点击重试"）
	 * @property {string} loadingColor 加载图标颜色（默认：主题色）
	 * @property {string} loadingSize 加载图标尺寸（支持CSS单位，默认：16px）
	 * @property {string} color 文字颜色（默认：#969799）
	 * @property {string} fontSize 文字字号（支持CSS单位，默认：12px）
	 * @event {Function} load-more 状态为remaining时点击触发
	 * @event {Function} reload 状态为error时点击触发
	 */
	import { defineComponent, computed } from '@/uni_modules/lime-shared/vue';
	import loadMoreProps from './props';
	export default defineComponent({
		props: loadMoreProps,
		emits: ['load-more', 'reload'],
		setup(props, {emit}) {
			const styles = computed(()=>{
				const style:Record<string, string> = {}
				// #ifndef APP
				if(props.color) {
					style['--l-load-more-text-color'] = props.color
				}
				if(props.fontSize) {
					style['--l-load-more-font-size'] = props.fontSize
				}
				if(props.loadingSize) {
					style['--l-loading-size'] = props.loadingSize
				}
				if(props.loadingColor) {
					style['--l-loading-color'] = props.loadingColor
				}
				// #endif
				return style
			})
			
			const onClick = () => {
				if (props.status == "remaining") {
					emit("load-more");
				} else if (props.status == "error") {
					emit("reload");
				}
			};
			return {
				styles,
				onClick
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>