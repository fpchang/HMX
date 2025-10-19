<template>
	<view class="l-notice-bar" :class="['l-notice-bar--' + type]" :style="[styles, lStyle]">
		<view class="l-notice-bar__left" v-if="$slots['leftIcon'] || prefixIcon">
			<slot name="leftIcon">
				<l-icon class="l-notice-bar__icon" :color="leftIconColor || color" :size="leftIconSize || fontSize" :name="prefixIcon" />
			</slot>
		</view>
		<view ref="listRef" class="l-notice-bar__wrap " v-if="!vertical">
			<view class="l-notice-bar__content-scroll" v-if="marquee">
				<slot>
					<text ref="itemRef" 
						class="l-notice-bar__content" 
						:style="[contentStyle]"
						@transitionend="handleTransitionend"
						:class="contentClass">{{texts.join('　')}}</text>
				</slot>
			</view>
			<slot v-else>
				<text ref="itemRef" 
					class="l-notice-bar__content" 
					@transitionend="handleTransitionend"
					:class="contentClass">{{texts.join('　')}}</text>
			</slot>
		</view>
		<swiper data-swiper class="l-notice-bar__wrap" v-if="vertical && marquee" :vertical="true" :autoplay="true" :interval="interval">
			<swiper-item v-for="text in texts" :key="text" style="align-items: center; flex-direction: row;">
				<text class="l-notice-bar__content" :class="contentClass">{{text}}</text>
			</swiper-item>
		</swiper>
		<view class="l-notice-bar__right" v-if="$slots['rightIcon'] || rightIcon"
			@click="clickSuffixIcon">
			<slot name="rightIcon">
				<l-icon class="l-notice-bar__icon" :color="rightIconColor || color" :size="rightIconSize || fontSize" :name="rightIcon" />
			</slot>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * NoticeBar 公告通知组件
	 * @description 用于显示滚动公告、系统提示等信息，支持多种主题样式和动画效果
	 * <br>插件类型：LNoticeBarComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-notice-bar
	 * 
	 * @property {any} text 通知文本内容（支持HTML）
	 * @property {string} leftIcon 左侧图标名称/路径
	 * @property {string} rightIcon 右侧图标名称/路径
	 * @property {'info' | 'success' | 'warning' | 'danger'} type 主题类型
	 * @value info    信息通知（默认）
	 * @value success 成功通知
	 * @value warning 警告通知
	 * @value danger  危险通知
	 * @property {number} interval 滚动间隔时间（单位ms，默认：2000）
	 * @property {number} delay 动画初始延迟（单位ms，默认：0）
	 * @property {number} speed 横向滚动速率（单位px/s，默认：50）
	 * @property {number} loop 循环次数（0表示无限，默认：0）
	 * @property {string} color 文字颜色（默认跟随主题）
	 * @property {string} bgColor 背景颜色（默认跟随主题）
	 * @property {boolean} marquee 启用横向无缝滚动（默认：false）
	 * @property {boolean} vertical 垂直方向排列（图标在上方，默认：false）
	 * @property {boolean} wrapable 允许文本换行（默认：false）
	 * @property {string} leftIconColor 左侧图标颜色
	 * @property {string} leftIconSize 左侧图标尺寸（支持CSS单位）
	 * @property {string} fontSize 文字字号（支持CSS单位，默认：14px）
	 * @property {string} rightIconColor 右侧图标颜色
	 * @property {string} rightIconSize 右侧图标尺寸（支持CSS单位）
	 * @property {string} lStyle 自定义样式
	 * @event {Function} click 点击通知时触发
	 */
	
	import { defineComponent, ref, computed, onMounted, nextTick, getCurrentInstance } from '@/uni_modules/lime-shared/vue';
	import { getRect } from '@/uni_modules/lime-shared/getRect';
	import noticeBarProps from './props';
	export default defineComponent({
		name: 'l-notice-bar',
		props: noticeBarProps,
		emits: ['click'],
		setup(props, {emit}) {
			const instance = getCurrentInstance().proxy!
			// 主题图标
			const THEME_ICON = new Map<string, string>([
				['info', 'info-circle-filled'],
				['success', 'check-circle-filled'],
				['warning', 'info-circle-filled'],
				['danger', 'error-circle-filled'],
			])
			
			const prefixIcon = computed(() : string | boolean => {
				if (props.leftIcon == '' || props.leftIcon == 'true') return false
				return props.leftIcon || THEME_ICON.get(props.type)
			})
			
			const texts = computed(() : string[] => {
				let _texts : string[] = []
				if (typeof props.text == 'string') {
					_texts.push(props.text as string)
				} else if (Array.isArray(props.text)) {
					(props.text as any[]).forEach(text => {
						if (typeof text == 'string') {
							_texts.push(text as string)
						}
					})
				}
				return _texts
			})
			const styles = computed(() => {
				const style = {}
				if(props.bgColor) {
					style['background'] = props.bgColor!
				}
				if(props.color) {
					style['color'] = props.color!
				}
				if(props.fontSize) {
					style['font-size'] = props.fontSize!
				}
				return style
			})
			
			const contentClass = computed(() => {
				const cls = []
				const name = 'l-notice-bar__content'
				if(!props.wrapable && !props.marquee || props.marquee && props.vertical) {
					cls.push(`${name}-ellipsis`)
				}
				if(props.wrapable && !props.marquee) {
					cls.push(`${name}-wrapable`)
				}
				if(props.marquee && !props.vertical) {
					cls.push(`${name}-marquee`)
				}
				return cls
			})
			
			const loop = ref(props.loop)
			const offset = ref(0)
			const duration = ref(0)
			
			const contentStyle = computed(()=>{
				const style = {}
				style['transition-timing-function'] = 'linear'
				style['transition-duration'] = `${duration.value}s`
				style['transform'] = `translateX(${offset.value}px)`
				
				return style
				
			})
			
			const getDimensions = () => {
				return Promise.all([getRect('.l-notice-bar__wrap', instance), getRect('.l-notice-bar__content', instance)])
					.then(([list, item]) => [list.width, item.width])
			}
			const handleScrolling = () =>{
				if (!props.marquee || loop.value == 0) return;
				setTimeout(()=>{
					getDimensions().then(([listWidth, itemWidth])=>{
						if (itemWidth >= listWidth) {
							offset.value = -itemWidth;
							duration.value = itemWidth / props.speed;
						}
					})
				}, props.delay)
			}
			const handleTransitionend = async () => {
				if (loop.value == 0) return
				loop.value = --loop.value;
				const [listWidth, itemWidth] = await getDimensions()
				if (loop.value == 0) {
					offset.value = listWidth
					duration.value = 0
					setTimeout(() => {
						offset.value = 0
						duration.value = listWidth / props.speed
					}, 0)
					return;
				}
				offset.value = listWidth
				duration.value = 0
				
				setTimeout(() => {
					offset.value = -itemWidth
					duration.value = (itemWidth + listWidth) / props.speed
				}, props.interval)
			}
			const clickSuffixIcon = () => {
				emit('click')
			}
			
			onMounted(() => {
				nextTick(() => {
					handleScrolling();
				});
			});
			return {
				prefixIcon,
				styles,
				contentStyle,
				contentClass,
				texts,
				handleTransitionend,
				clickSuffixIcon
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>