<template>
	<!-- #ifdef APP-VUE -->
	<view 
		class="l-popover__wrapper" 
		@click.stop="handleClick" 
		ref="referenceRef" 
		:appCloseOnClickOutside="closeOnClickOutside"
		:change:appCloseOnClickOutside="popover.appCloseOnClickOutside"
		:appDestroy="destroy"
		:change:appDestroy="popover.appDestroy"
		:style="{zIndex}">
	<!-- #endif -->
	<!-- #ifndef APP-VUE -->
	<view 
		class="l-popover__wrapper" 
		@click.stop="handleClick" 
		ref="referenceRef" 
		:style="{zIndex}">
	<!-- #endif -->
		<slot/>
		<view 
			v-show="display" 
			class="l-popover" 
			:class="['l-popover--' + innerPlacement, 'l-popover--' + theme, classes]" 
			:style="[popoverStyle, styles]"
			ref="popoverRef" 
			@transitionend="finished">
			<view class="l-popover__arrow"
				v-if="showArrow" 
				:class="['l-popover__arrow--' + innerPlacement]">
			 </view>
			<view class="l-popover__content"  :class="['l-popover__content--' + innerPlacement]">
				<slot name="content">
					<text class="l-popover__text">{{content}}</text>
				</slot>
			</view>
		</view>
		<!-- #ifndef APP || WEB -->
		<view class="l-popover__mark" v-if="currentVisible && closeOnClickOutside" @touchstart="handleMark"></view>
		<!-- #endif -->
	</view>
</template>
<!-- #ifdef APP-VUE -->
<script module="popover" lang="renderjs">
	export default {
		data() {
			return {}
		},
		methods: {
			// #ifdef APP-VUE
			appDestroy(flag) {
				if(flag) {
					window.removeEventListener('click', this.appOutsideClick.bind(this))
				}
			},
			appCloseOnClickOutside(flag) {
				if(flag) {
					window.addEventListener('click', this.appOutsideClick.bind(this))
				} else {
					window.removeEventListener('click', this.appOutsideClick.bind(this))
				}
			},
			appOutsideClick() {
				// 使用redirectTo会导致报错 故延时处理
				setTimeout(() =>{
					this.$ownerInstance?.callMethod?.('outsideClick', {})
				},400);
			},
			// #endif
		},
		mounted() {
			
		},
	}
</script>
<!-- #endif -->
<script lang="ts">
	// @ts-nocheck
	/**
	 * Popover 气泡弹出层组件
	 * @description 用于显示上下文相关的信息或操作菜单，支持多种定位方式和主题样式
	 * <br>插件类型：LPopoverComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-popover
	 * 
	 * @property {boolean} closeOnClickOutside 点击外部关闭（默认：true）
	 * @property {string} content 显示内容
	 * @property {string} placement 弹出位置（默认：'top'）
	 * @value top          顶部居中
	 * @value top-left     顶部左侧
	 * @value top-right    顶部右侧
	 * @value bottom       底部居中
	 * @value bottom-left  底部左侧
	 * @value bottom-right 底部右侧
	 * @value left         左侧居中
	 * @value left-top     左侧上方
	 * @value left-bottom  左侧下方
	 * @value right        右侧居中
	 * @value right-top    右侧上方
	 * @value right-bottom 右侧下方
	 * @property {boolean} showArrow 显示定位箭头（默认：true）
	 * @property {'dark' | 'light'} theme 主题样式
	 * @property {'dark' | 'light'} theme 主题样式（默认：'dark'）
	 * @value light   
	 * @value dark 
	 * @property {boolean} visible 控制显示/隐藏（支持v-model）
	 * @property {string} color 自定义主色（覆盖主题色）
	 */
	import { reactive, defineComponent, ref, computed,  onMounted, nextTick, onBeforeUnmount, getCurrentInstance } from '@/uni_modules/lime-shared/vue';
	import { useTransition, type UseTransitionOptions, type TransitionEmitStatus } from '@/uni_modules/lime-transition';
	import { getRect } from '@/uni_modules/lime-shared/getRect'
	import { pushToQueue, removeFromQueue, closeOther,} from '@/uni_modules/lime-popover';
	import { calculateWidthAndAdjustPlacement } from './utils';
	
	import popoverProps from './props';
	
	export default defineComponent({
		name: 'l-popover',
		props: popoverProps,
		setup(props, {expose}) {
			const instance = getCurrentInstance()!
			pushToQueue(instance.proxy!);
			
			const zIndex = ref(2);
			const innerPlacement = ref(props.placement)
			const modelValue = ref(props.visible)
			const currentVisible = computed({
				set(v: boolean) {
					if(v == modelValue.value) return
					modelValue.value = v;
				},
				get() : boolean {
					return props.visible ?? modelValue.value
				}
			} as WritableComputedOptions<boolean>)
			const popoverStyle = reactive({
				// #ifndef APP || WEB
				position: 'fixed',
				width: 'auto',
				// #endif
			})
			
			const styles = computed(()=>{
				const style:Record<string, any> = {}
				if(!['light', 'dark'].includes(props.theme)) {
					style['--l-popover-bg-color'] = props.theme
					style['--l-popover-color'] = props.color ?? 'white'
				}
				return style
			})
			
			const updatePosition = (updateWidth: boolean) => {
				const {windowWidth} = uni.getWindowInfo()
				Promise.all([
					getRect('.l-popover__wrapper', instance.proxy!),
					getRect('.l-popover', instance.proxy!),
				]).then(([referenceRect, popoverRect])=>{
					popoverStyle.position = 'absolute';
					const availableLeft = referenceRect.left - 8; // 左侧可用宽度（减去边距）
					const availableRight = windowWidth - 8 - referenceRect.right; // 右侧可用宽度（减去边距）
					const {placement, finalWidth } = calculateWidthAndAdjustPlacement(props.placement, availableLeft, availableRight, popoverRect.width)
					
					if(innerPlacement.value != placement) {
						innerPlacement.value = placement
					}
					popoverStyle.width = `${finalWidth}px`;
				})
			}
			
			const { display, classes, finished, toggle} = useTransition({
				defaultName: 'popover-animation',
				emits: (name:TransitionEmitStatus) => { 
					if(name == 'after-leave') {
						popoverStyle.width = 'auto';
						popoverStyle.position = 'fixed';
						zIndex.value = 2
						innerPlacement.value = props.placement
					}
				},
				onNextTick: (name:TransitionEmitStatus):Promise<void> => {
					return new Promise((resolve)=>{
						if(name == 'enter') {
							nextTick(()=>{
								setTimeout(()=>{
									updatePosition(true)
									resolve()
								}, 50)
							})
						} else {
							resolve()
						}
					})
				},
				// visible: (): boolean => currentVisible.value,
				duration: 300,
			} as UseTransitionOptions)
			
			const close = () => {
				currentVisible.value = false;
				toggle(currentVisible.value)
			}
			
			const handleClick = (e: UniPointerEvent) => {
				if(props.disabled) return
				e.stopPropagation()
				// #ifdef WEB || APP-VUE
				closeOther(instance.proxy!)
				// #endif
				currentVisible.value = !currentVisible.value
				toggle(currentVisible.value)
				if(currentVisible.value) {
					zIndex.value = 3
				} else {
					close()
				}
			}
			
			const handleMark = (e: UniTouchEvent)=>{
				e.preventDefault()
				close()
			}
			
			let timer = -1
			const outsideClick = (e: UniPointerEvent)=> {
				if(!props.closeOnClickOutside || !currentVisible.value ) return
				clearTimeout(timer)
				timer = setTimeout(()=>{
					close()
				},100)
				// close()
			}
			
			onMounted(()=>{
				nextTick(()=>{
					// #ifdef WEB
					window.addEventListener('click', outsideClick)
					// #endif
				})
			})
			
			const destroy = ref(false)
			onBeforeUnmount(()=>{
				close()
				// #ifdef WEB
				window.removeEventListener('click', outsideClick)
				// #endif
				// #ifdef  APP-VUE
				destroy.value = true
				// #endif
				removeFromQueue(instance.proxy!)
			})
			
			// #ifdef VUE3
			expose({
				close
			})
			// #endif
			return {
				zIndex,
				popoverStyle,
				styles,
				classes,
				display,
				finished,
				handleClick,
				handleMark,
				innerPlacement, 
				currentVisible,
				outsideClick,
				destroy,
				// #ifdef VUE2
				close
				// #endif
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>
