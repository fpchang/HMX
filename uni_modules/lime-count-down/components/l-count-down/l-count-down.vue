<template>
	<slot
		:days="current.days"
		:hours="current.hours"	
		:total="current.total"	
		:minutes="current.minutes"	
		:seconds="current.seconds"	
		:milliseconds="current.milliseconds">
		<text class="l-count-down">{{timeText}}</text>
	</slot>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * CountDown 倒计时组件
	 * @description 用于展示倒计时场景，支持自定义时间格式和毫秒级渲染
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-count-down
	 * 
	 * @property {number} time 倒计时时长（单位：毫秒）
	 * @property {string} format 时间格式（默认：'HH:mm:ss'）
	 * @value 'HH:mm:ss'      显示时分秒
	 * @value 'HH:mm'         显示时分
	 * @value 'mm:ss'         显示分秒
	 * @value 'HH:mm:ss.SSS'  显示毫秒（需开启millisecond）
	 * @property {boolean} autoStart 是否自动开始倒计时
	 * @property {boolean} millisecond 是否启用毫秒级渲染
	 * @event {Function} finish 倒计时完成时触发
	 * @event {Function} change 倒计时变化时触发（每秒/每毫秒触发）
	 */
	import { computed, defineComponent, watch, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import { useCountDown, CurrentTime, UseCountDownOptions } from './useCountDown'
	import CountDownProps from './props';
	import { parseFormat } from './utils'
	
	const name = 'l-count-down'
	export default defineComponent({
		name,
		props: CountDownProps,
		emits: ['change', 'finish'],
		setup(props, {emit, expose}) {
			const { start, pause, reset, current } = useCountDown({
				time: props.time,
				millisecond: props.millisecond,
				onChange: (current : CurrentTime) => { emit('change', current) },
				onFinish: () => { emit('finish') },
			} as UseCountDownOptions);
			
			const timeText = computed(() : string => parseFormat(props.format, current.value));
			const resetTime = () => {
				reset(props.time);
			
				if (props.autoStart) {
					start();
				}
			};
			const stopWatch = watch(() : number => props.time, resetTime, { immediate: true });
			
			onUnmounted(() => {
				stopWatch()
			})
			
			// #ifdef VUE3
			expose({
				pause,
				start,
				reset
			})
			// #endif
			
			
			return {
				timeText,
				current,
				// #ifndef VUE3
				pause,
				start,
				reset
				// #endif
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>