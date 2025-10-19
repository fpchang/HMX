<template>
	<view class="l-step" ref="stepRef" :class="classes" @click="onClick">
		<view class="l-step__anchor" ref="anchorRef" :class="anchorClass">
			<view class="l-step__dot" :class="dotClass" :style="[dotStyle]" v-if="dot"></view>
			<view class="l-step__icon l-step__icon-text" :class="'l-step__icon--' + currentStatus" v-else-if="icon || $slots['icon']">
				<slot name="icon" :status="currentStatus">
					<l-icon :name="icon" v-if="icon" size="40rpx" :color="iconColor"></l-icon>
				</slot>
			</view>
			<view class="l-step__circle" :class="circleClass" v-else  :style="[circleStyle]">
				<view class="l-step__circle-text l-step__circle-icon" :class="'l-step__circle-text--' + currentStatus" v-if="currentStatus == 'finish'"><l-icon  :color="iconColor" name="check" /></view>
				<view class="l-step__circle-text l-step__circle-icon" :class="'l-step__circle-text--' + currentStatus" v-else-if="currentStatus == 'error'"><l-icon  name="close" /></view>
				<text class="l-step__circle-text" v-else>{{index + 1}}</text>
			</view>
		</view>
		<view class="l-step__content" :class="contentClass">
			<slot />
			<view class="l-step__title" :class="tilteClass" :style="[titleStyle]"  v-if="title || $slots['title'] || $slots['title-right']">
				<slot name="title">{{title}}</slot>
				<slot name="title-right" v-if="layout == 'vertical'"></slot>
			</view>
			<view class="l-step__description" :class="descriptionClass" v-if="content || $slots['content']">
				<slot name="content">{{content}}</slot>
			</view>
			<view class="l-step__extra" :class="extraClass" v-if=" $slots['extra']">
				<slot name="extra" />
			</view>
		</view>
		<view class="l-step__line" ref="lineRef" :class="separatorClass" :style="[lineStyle]" v-if="!isLastChild"></view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Step 步骤项组件
	 * @description 用于构建Steps组件的单个步骤项，必须作为Steps的子组件使用
	 * <br>插件类型：LStepComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-steps
	 * 
	 * @property {string} content 步骤描述内容
	 * @property {string} icon 自定义图标（内置图标将被覆盖）
	 * @property {string} title 步骤标题（必填）
	 * @property {string} titleRight 标题右侧附加信息（垂直布局有效）
	 * @property {'wait' | 'process' | 'finish' | 'error'} status 步骤状态（默认从父Steps继承）
	 * @value wait
	 * @value process
	 * @value finish
	 * @value error
	 */
	import { defineComponent, inject, getCurrentInstance, computed, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import stepProps from './props';
	
	export default defineComponent({
		name: 'l-step',
		props: stepProps,
		setup(props) {
			const name = 'l-step'
			const parent = inject<StepsProvide|null>('limeSteps', null);
			const instance = getCurrentInstance()!
			parent?.relation?.(instance.uid)
			
			const current = computed(():number => {
				if(parent == null) return 0
				return parent.current.value// ?? parent.props.defaultCurrent ?? 0
			});
			const index = computed(():number => {
				if(parent == null) return 0
				return parent.children.value.indexOf(instance.uid)
			});
			const isLastChild = computed(():boolean => {
				if(parent == null) return false
				return index.value == (parent.props.sequence == 'positive' ?  parent.children.value.length - 1 : 0)
			});
			const readonly = computed(():boolean => parent?.props.readonly ?? false);
			const layout = computed(():string => parent?.props.layout ?? 'horizontal');
			const type = computed(():string => parent?.props.type ?? 'default');
			const sequence = computed(():string => parent?.props.sequence ?? 'positive');
			const stepsStatus = computed(():StepStatus => parent?.props.status ?? 'process');
			const dot = computed(() => type.value == 'dot');
			const currentStatus = computed(():StepStatus => {
				if(props.status != 'wait') return props.status
				if (index.value == current.value) return stepsStatus.value;
				if (index.value < current.value) return 'finish';
				return props.status
			})
			
			const classes = computed(() => {
				let cls = ''
				cls += `${name}--${layout.value} `
				cls += (readonly.value ? `${name}--default` : '')
				cls += `${name}--${currentStatus.value} `
				return cls
			})
			const anchorClass = computed(()=>{
				return `${name}__anchor--${layout.value}`
			})
			const dotClass = computed(() => {
				return `${name}__dot--${currentStatus.value}`
			});
			const iconClass = computed(() => {
				return  props.icon ? `${name}__icon--${currentStatus.value}` : ''
			});
			const circleClass = computed(() => {
				return !props.icon ? `${name}__circle--${currentStatus.value}` : ''
			});
			const contentClass = computed(() => {
				let cls = ''
				cls += `${name}__content--${layout.value} `
				cls += isLastChild.value ? `${name}__content--last` : ''
				
				return cls
			});
			const tilteClass = computed(() => {
				let cls = ''
				cls += `${name}__title--${currentStatus.value} `
				cls += `${name}__title--${layout.value} `
				
				return cls
			});
			const descriptionClass = computed(() => {
				let cls = ''
				cls += `${name}__description--${currentStatus.value} `
				cls += `${name}__description--${layout.value} `
				
				return cls
			});
			const extraClass = computed(() => {
				let cls = ''
				cls += `${name}__extra--${currentStatus.value} `
				cls += `${name}__extra--${layout.value} `
				
				return cls
			});
			const separatorClass = computed(() => {
				let cls = ''
				cls += `${name}__line--${currentStatus.value} `
				cls += `${name}__line--${layout.value} `
				cls += `${name}__line--${sequence.value} `
				cls += `${name}__line--${type.value} `
				
				return cls
			});
			
			const dotStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(currentStatus.value == 'process' && parent?.props.activeColor) {
					style['background'] =  parent.props.activeColor!
				}
				if(currentStatus.value == 'finish' && parent?.props.activeColor) {
					style['border-color'] = parent.props.activeColor!
				}
				if(currentStatus.value == 'wait' && parent?.props.waitColor) {
					style['border-color'] = parent.props.waitColor!
				}
				
				return style
			})
			const circleStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(currentStatus.value == 'process' && parent?.props.activeColor) {
					style['background'] = parent.props.activeColor!
				}
				if(currentStatus.value == 'finish' && parent?.props.finishBgColor) {
					style['background'] = parent.props.finishBgColor!
				}
				
				if(currentStatus.value == 'wait' && parent?.props.waitBgColor) {
					style['background'] = parent.props.waitBgColor!
				}
				return style
			})
			const titleStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(['process'].includes(currentStatus.value) && parent?.props.activeColor) {
					style['color'] = parent.props.activeColor!
				}
				if(['wait'].includes(currentStatus.value) && parent?.props.waitColor) {
					style['color'] = parent.props.waitColor!
				}
				return style
			})
			const lineStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(parent && parent?.props.waitColor) {
					style['--l-step-line-color']=  parent!.props.waitColor
				}
				if(['finish', 'error'].includes(currentStatus.value) && parent?.props.activeColor) {
					style['--l-step-finish-line-color'] = parent.props.activeColor!
				}
				return style
			})
			const iconColor = computed(():string|null=>{
				if(['process', 'finish'].includes(currentStatus.value) && parent?.props.activeColor) {
					return parent.props.activeColor
				}
				return parent?.props.waitColor
			})
			
			
			
			const onClick = (_e: UniPointerEvent) => {
				 if (!readonly.value && parent) {
				    parent.onClickItem(index.value);
				}
			}
			
			
			onUnmounted(()=>{
				if(!parent) return;
				parent.removeRelation(instance.uid)
			})
			
			
			return {
				index,
				layout,
				currentStatus,
				dot,
				isLastChild,
				classes,
				anchorClass,
				dotClass,
				iconClass,
				circleClass,
				contentClass,
				tilteClass,
				descriptionClass,
				extraClass,
				separatorClass,
				dotStyle,
				circleStyle,
				titleStyle,
				lineStyle,
				iconColor,
				onClick
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>

