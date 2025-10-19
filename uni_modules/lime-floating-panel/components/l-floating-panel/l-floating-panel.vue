<template>
	<movable-area class="l-floating-panel-area" :style="[areaStyles]" :data-initialized="initialized">
		<movable-view 
			class="l-floating-panel" 
			direction="vertical" 
			inertia 
			out-of-bounds 
			:damping="80" 
			:friction="100"
			:disabled="isDraggable"
			:y="currentY"
			:animation="isAnimation"
			@change="onTouchmove"
			@touchstart="onTouchstart"
			@touchend="onTouchend"
			@touchcancel="onTouchend"
			:style="[styles]">
			<view class="l-floating-panel__header" data-handle="true">
				<view class="l-floating-panel__header-bar" :style="{'background': barColor}"></view>
			</view>
			<view class="l-floating-panel__content">
				<slot></slot>
			</view>
		</movable-view>
	</movable-area>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * FloatingPanel 浮动面板组件
	 * @description 用于实现可拖拽交互的浮动内容区域（类似底部抽屉）
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-floating-panel
	 * 
	 * @property {number} height 面板最大高度（单位px，建议使用窗口高度百分比）
	 * @property {number[]} anchors 停靠锚点位置数组（单位px）
	 * @property {number} defaultAnchor 默认停靠位置索引
	 * @property {boolean} animation 是否启用过渡动画
	 * @property {number} duration 动画时长（单位ms）
	 * @property {boolean} contentDraggable 是否允许通过拖拽内容区域控制面板
	 * @property {boolean} safeAreaInsetBottom 是否启用底部安全区域适配
	 * @property {string} [bgColor] 面板背景色（支持十六进制/rgba）
	 * @property {string} [barColor] 顶部拖拽条颜色
	 * 
	 * @event {Function} heightChange 高度变化时触发
	 * @event {Function} change 拖拽过程中触发
	 */
	import { defineComponent, computed, ref , onMounted, onUnmounted, watch} from '@/uni_modules/lime-shared/vue';
	import floatingPanelProps from './props'
	import {addUnit} from '@/uni_modules/lime-shared/addUnit';
	import {sleep} from '@/uni_modules/lime-shared/sleep';
	import {closest} from '@/uni_modules/lime-shared/closest';
	const name = 'l-floating-panel'
	/**
	 * LimeFloatingPanel 浮动面板
	 * @description 浮动在页面底部的面板，可以上下拖动来浏览内容
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=13407
	 * @property {Number} height 插件返回的高度
	 * @property {Array} anchors 设置自定义锚点 默认值 [100, windowHeight * 0.6]
	 * @property {Number} defaultAnchor 设置开始锚点的下标
	 * @property {Boolean} animation 是否开启动画
	 * @property {Boolean} contentDraggable = true 允许拖拽内容容器 默认 true
	 * @property {Boolean} safeAreaInsetBottom = true 是否开启底部安全区域 默认 true 
	 * @event {Function} heightChange 高度变化时触发  
	 */
	export default defineComponent({
		name,
		props: floatingPanelProps,
		emits: ['heightChange', 'change', 'update:height'],
		setup(props, {emit, expose}) {
			const {windowHeight, safeAreaInsets } = uni.getSystemInfoSync()
			const isDraggable = ref(!props.contentDraggable)
			const isAnimation = ref(false)
			const dragging = ref(false)
			
			const initialized = ref(false)
			const boundary = computed(() => {
				const anchors = props.anchors as number[]||[];
				return {
					min: anchors[0] ?? 100,
					max:
						anchors[anchors.length - 1] ??
						Math.round(windowHeight * 0.6),
				}
			});
			const calcY = (y: number) => boundary.value.max - y
			const anchors = computed(() => {
				const anchors = props.anchors as number[]||[];
				return anchors.length >= 2
			        ? anchors
			        : [boundary.value.min, boundary.value.max]
			})
			const areaStyles = computed(() => {
				return ({
					height: addUnit(boundary.value.max * 2 - boundary.value.min),
					bottom: addUnit(boundary.value.max * -1 + boundary.value.min +(props.safeAreaInsetBottom ? safeAreaInsets.bottom:0)),
					opacity: initialized.value ? 1 : 0
				}) 
			})
			const styles = computed(() => {
				return ({
					height: addUnit(boundary.value.max) ,
					background: props.baColor
				})
			})
			
			const currentY = ref(calcY(props.anchors[props.defaultAnchor]) ?? calcY(boundary.value.min))
			let moveYs = []
			let startY = 0
			const onTouchstart = (e:  WechatMiniprogram.TouchEvent) => {
				startY = e.touches[0].clientY
				dragging.value = true
				moveYs.length = 0
				const { handle } = e.target.dataset
				if(!props.contentDraggable && Boolean(handle)) {
					isDraggable.value = false
					return
				}
				
			}
			const onTouchmove = (e: WechatMiniprogram.MovableViewChange) => {
				const {y}  = e.detail
				if(dragging.value) {
					moveYs.push(y)
				}
				const height = calcY(y) 
				emit('update:height',height)
			}
			
			const setCurrentY = (target: number) => {
				currentY.value = target + 0.1;
				// h5要延迟才能触发
				sleep(50).then(() => {
					currentY.value = target
					const height = calcY(target)
					let index = anchors.value.findIndex(item => item == height)
					
					emit('heightChange', { height });
					emit('change', { height, index });
				})
			}
			const toAnchor = (index: number) => {
				if(index >= 0 && index < anchors.value.length) {
					setCurrentY(calcY(anchors.value[index]))
				}
			}
			const reDraggable = () => {
				if(!props.contentDraggable) {
					sleep(50).then(() => isDraggable.value = true)
				}
			}
			const onTouchend = (e: WechatMiniprogram.TouchEvent) => {
				let moveY = 0
				dragging.value = false
				const { handle } = e.target.dataset
				const isClick = Math.abs(e.changedTouches[0].clientY - startY) < 10
				if(isClick && !Boolean(handle)) {
					reDraggable()
					return
				}
				if(isClick) {
					const index = anchors.value.findIndex(item => item == calcY(currentY.value)) + 1
					// setCurrentY(calcY(anchors.value[index % anchors.value.length]))
					toAnchor(index % anchors.value.length)
					reDraggable()
					return
				} else if(moveYs.length) {
					moveY = moveYs[moveYs.length-1]
				}
				moveYs.length = 0
				reDraggable()
				setCurrentY(calcY(closest(anchors.value, calcY(moveY))))
			}
			
			const stopWatch = watch(() => props.anchors, () => {
				const index = anchors.value.findIndex(item => item == calcY(currentY.value)) + 1
				toAnchor(index)
			})
			onMounted(() => {
				isAnimation.value = props.animation
				sleep(50).then(() => initialized.value = true)
			})
			
			onUnmounted(() => {
				stopWatch()
			})
			// #ifdef VUE3
			expose({
				toAnchor
			})
			// #endif
			
			return {
				initialized,
				areaStyles,
				styles,
				isDraggable,
				isAnimation,
				currentY,
				onTouchstart,
				onTouchmove,
				onTouchend,
				// #ifndef VUE3
				toAnchor
				// #endif
			}
		}
	})
</script>
<style lang="scss">
	@import './index.scss';
</style>
