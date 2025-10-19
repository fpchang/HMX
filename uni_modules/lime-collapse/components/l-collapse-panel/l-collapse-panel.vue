<template>
	<view class="l-collapse-panel" 
		:style="{ background: bgColor }"
		:class="{
			'l-collapse-panel--active' : isActive, 
			'l-collapse-panel--disabled' : isDisabled, 
			'l-collapse-panel--borderless' : isLastChild }">
		<view ref="headRef" class="l-collapse-panel__header" @click="handleClick">
			<l-cell 
				:title="title" 
				:note="note" 
				:image="image" 
				:imageWidth="imageWidth"
				:imageHeight="imageHeight" 
				:icon="icon" 
				:size="size"
				:iconColor="iconColor" 
				:bordered="!isActive">
				<template #icon v-if="$slots['icon']">
					<slot name="icon"></slot>
				</template>
				<template #title v-if="$slots['title']">
					<slot name="title"></slot>
				</template>
				<template #note v-if="$slots['note']">
					<slot name="note"></slot>
				</template>
				<template #rightIcon>
					<view class="l-collapse-panel__right" :class="{'l-collapse-panel--expanded': isActive}" >
						<slot name="rightIcon">
							<l-icon class="l-collapse-panel__right-icon" :color="rightIconColor" :size="rightIconSize" name="chevron-down"></l-icon>
						</slot>
					</view>
				</template>
			</l-cell>
		</view>
		<view class="l-collapse-panel__wrapper" :style="{height: wrapperHeight}" @transitionend="onTransitionEnd" >
			<view :style="{display: !init && !isActive ? 'none' : ''}" class="l-collapse-panel__content">
				<slot></slot>
			</view>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * CollapsePanel 折叠面板项组件
	 * @description 作为Collapse容器的子项，用于展示可折叠内容区域
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-collapse
	 * 
	 * @property {boolean} disabled 禁用当前面板（优先级高于父组件）
	 * @property {string} title 面板标题内容（支持插槽）
	 * @property {string} icon 左侧图标名称/路径
	 * @property {string} image 左侧图片地址（优先级高于icon）
	 * @property {string} note 标题右侧说明文本
	 * @property {'small' | 'medium' | 'large'} size 尺寸（继承父组件）
	 * @value small
	 * @value medium
	 * @value large
	 * @property {string} iconColor 左侧图标颜色（支持CSS颜色值）
	 * @property {string} rightIconColor 右侧箭头颜色
	 * @property {string} iconSize 左侧图标尺寸（默认：20px）
	 * @property {string} rightIconSize 右侧箭头尺寸（默认：16px）
	 * @property {string} imageWidth 图片宽度（默认：32px）
	 * @property {string} imageHeight 图片高度（默认：32px）
	 * @property {any} value 面板唯一标识符（必填，推荐字符串）
	 * @property {string} bgColor 面板背景颜色（支持CSS颜色值）
	 */
	import { defineComponent, getCurrentInstance, inject, computed, ref, nextTick, watch, onBeforeMount, onMounted, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import collapsePanelProps from './props'
	import type { Numeric } from './type'
	import { getRect } from '@/uni_modules/lime-shared/getRect'
	export default defineComponent({
		name: 'l-collapse-panel',
		props: collapsePanelProps,
		setup(props, {expose}) {
			const instance = getCurrentInstance()
			const parent = inject('limeCollapse', null)
			
			// 下标
			const index = computed(():number=> {
				return parent?.children.value?.findIndex((it):boolean => it == instance?.proxy) ?? -1
			})
			// 是否最后一个节点
			const isLastChild = computed(():boolean => {
				if(parent == null || index.value == -1) return false
				return index.value == parent.children.value.length - 1;
			})
			// 唯一Key
			const value = computed(():Numeric => {
				return props.value ?? index.value
			})
			// 活跃
			const isActive = computed(():boolean=> {
				return parent?.activeValue.value.findIndex((it):boolean => it == value.value) > -1
			})
			// 禁用
			const isDisabled = computed(():boolean => (parent?.disabled.value || props.disabled));
			
			
			const wrapperHeight = ref('');
			let isToggle = true;
			let init = ref(false)
			
			const handleClick = (e: UniPointerEvent) => {
				e.stopPropagation();
				if (isDisabled.value) return;
				parent?.onPanelChange?.(value.value);
			}
			
			const setContentWrapperHeight = async () => {
				// const { height: headHeight } = await getRect('.l-collapse-panel__header', instance?.proxy)
				// const { height: bodyHeight } = await getRect('.l-collapse-panel__content', instance?.proxy)
				const { height } = await getRect('.l-collapse-panel__content', instance?.proxy)
			    wrapperHeight.value = `${height}px`;
			};
			const updatePanelState = () => {
				nextTick(async () =>{
					// const { height: headHeight } = await getRect('.l-collapse-panel__header', instance?.proxy)
					if(!isActive.value) {
						isToggle = false;
						wrapperHeight.value = `0px`;
						return;
					}
					if (isToggle) {
					    isToggle = false;
					    wrapperHeight.value = 'auto';
					    return;
					}
					setContentWrapperHeight();
				})
			}
			const onTransitionEnd = () => {
				if (isActive.value) {
				    wrapperHeight.value = 'auto';
				}
			}
			const stopWatch = watch(isActive, (_:boolean) => {
				if(wrapperHeight.value == 'auto') {
					setContentWrapperHeight();
				}
				setTimeout(() => {
					nextTick(()=>{
						updatePanelState()
					})
				},1000/30);
				
			})
			
			// #ifdef VUE3
			expose({
				itemValue: value
			})
			// #endif
			onBeforeMount(()=>{
				if(!parent || !instance) return
				parent.children.value.push(instance.proxy)
			})
			onMounted(()=>{
				nextTick(()=>{
					init.value = true;
				})
				updatePanelState()
			})
			onUnmounted(()=> {
				stopWatch()
				if(!parent || !instance) return
				parent.children.value = parent.children.value.filter((it):boolean => it != instance.proxy);
			})
			
			
			return {
				init,
				isActive,
				handleClick,
				wrapperHeight,
				onTransitionEnd,
				isDisabled,
				isLastChild,
				// #ifdef VUE2
				itemValue: value,
				// #endif
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>

