<template>
	<view class="l-back-top__wrap">
		<view ref="l-back-top__anchor" class="l-back-top__anchor" v-if="offset" :style="{bottom: (offset||0)*-1 + 'px'}"></view>		
		<view class="l-back-top l-class" :class="classes" :style="[styles, lStyle]" :aria-role="ariaRole || 'button'" @click="toTop">
			<view class="l-back-top__icon l-class-icon" aria-hidden v-if="icon || $slots.icon">
				<slot name="icon"><l-icon :name="icon"/></slot>
			</view>
			<slot>
				<text v-if="text" :class="`${name}__text`" class="l-class-text">{{text}}</text>
			</slot>
		</view>
	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	/**
	 * BackTop 返回顶部组件
	 * @description 用于快速返回页面顶部的操作按钮，支持自定义位置和滚动行为
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-back-top
	 * 
	 * @property {string} ariaRole ARIA角色标识（用于无障碍访问）
	 * @property {boolean} fixed 是否固定定位在视窗右下
	 * @property {string} icon 图标名称/路径（默认内置图标）
	 * @property {string} text 显示文本内容
	 * @property {'primary' | 'success' | 'warning' | 'danger' | 'default'} type 预设样式类型（预留字段）
	 * @value primary
	 * @value success
	 * @value warning
	 * @value danger
	 * @value default
	 * @property {number} offset 显示触发滚动高度（单位：px）
	 * @property {number} scrollTop 手动传入页面滚动高度（自动检测失效时使用）
	 * @property {number} duration 滚动动画时长（单位：ms）
	 * @property {'circle' | 'square'} shape 按钮形状
	 * @value circle	圆形状
	 * @value square 方形
	 * @property {number | string} iconSize 图标尺寸（支持数值/字符串单位）
	 * @property {number | string} right 右侧距离（默认16px）
	 * @property {Object | string} lStyle 自定义样式
	 * @property {number | string} bottom 底部距离（默认66px）
	 * @event {Function} click 点击按钮时触发
	 */
	import { ref, computed, getCurrentInstance, onMounted, onUnmounted, defineComponent, watch } from '@/uni_modules/lime-shared/vue'
	import BackTopProps from './props'
	import { addUnit } from '@/uni_modules/lime-shared/addUnit';
	import { useIntersectionObserver } from './utils'
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom')
	// #endif
	const name = 'l-back-top'
	export default defineComponent({
		name,
		props: BackTopProps,
		options: {
			addGlobalClass: true,
			virtualHost: true,
		},
		emits: ['click'],
		externalClasses: ['l-class', 'l-class-icon', 'l-class-text'],
		setup(props, { emit }) {
			const { fixed, bottom, right } = props;
			const context = getCurrentInstance().proxy!
			const show = ref(false)
			const classes = computed(() => ({
				[`is-${props.shape}`]: props.shape,
				[`is-fixed`]: fixed,
				[`is-show`]: show.value,
			}))

			const styles = computed(() => {
				const style:Record<string, any> = {}
				if(bottom) style.bottom = addUnit(bottom)
				if(right) style.right = addUnit(right)
				return style
			})
			const target = ref(null)
			const wrapCallback = (res: UniApp.ObserveResult) => {
				if (props.offset && !props.scrollTop) {
					show.value = res.boundingClientRect.top - res.relativeRect.top < 0 || res.intersectionRatio > 0;
				}
			};
			const toTop = () => {
				emit('click')
				// #ifdef APP-NVUE
				if(props.target) {
					dom.scrollToElement(context.parent.refs[props.target], {
						offset: 0
					})
				} else {
					console.error(`nvue页面需要指定滚动元素的ref`)
				}
				
				// #endif
				// #ifndef APP-NVUE
				uni.pageScrollTo({
					scrollTop: 0,
					duration: props.duration,
				})
				// #endif
				if(props.offset) {show.value = false}
			}
			
			const { stop } = useIntersectionObserver(target, wrapCallback, { context })
			// 如果存在scrollTop则使用
			const watchStop = watch(() => props.scrollTop, (value: number)=>{
				show.value = value < props.offset
			})
			onMounted(() => {
				if (props.offset) {
					// #ifdef APP-NVUE
					target.value = context.refs[`${name}__anchor`]
					// #endif
					// #ifndef APP-NVUE
					target.value = `.${name}__anchor`
					// #endif
				} else {
					show.value = true
					stop()
				}
			})
			onUnmounted(()=>{
				stop()
				watchStop()
			})
			return {
				classes,
				styles,
				toTop,
				name
			}
		}
	})
</script>

<style lang="scss">
	@import './index';
</style>