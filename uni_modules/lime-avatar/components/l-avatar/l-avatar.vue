<template>
	<view class="l-avatar"
		v-if="show || collapseShow"  :class="classes" :style="[styles]">
		<view class="l-avatar__icon" v-if="!collapseShow && !$slots['default'] && icon" :style="[textStyle]">
			<l-icon :name="icon" />
		</view>
		<image class="l-avatar__image" v-if="!collapseShow && !$slots['default'] && src" :src="src" mode="aspectFill" />
		<text class="l-avatar__text" v-if="!collapseShow && !!$slots['default']" :style="[textStyle]"><slot/></text>
		<text class="l-avatar__text" v-if="collapseShow" :style="[textStyle]">{{collapseText}}</text>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Avatar 头像组件
	 * @description 用于展示用户头像，支持图片、图标或文本形式
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-avatar
	 * 
	 * @property {SizeEnum | string} size 尺寸配置
	 * @value 'small'    小尺寸（通常24px）
	 * @value 'medium'   中尺寸（通常32px）
	 * @value 'large'    大尺寸（通常48px）s
	 * @property {'square' | 'circle'} shape 形状
	 * @value square 方形
	 * @value circle 圆形
	 * @property {string} src 头像图片地址
	 * @property {string} icon 图标名称/路径
	 * @property {string} alt 替代文本（图片加载失败时显示）
	 * @property {string} fontSize 文本字体大小（例：'18px'）
	 * @property {string} color 背景颜色（当无图片/图标时生效）
	 * @property {string} textColor 文本颜色（当显示文本时生效）
	 */
	import { defineComponent, inject, getCurrentInstance, computed, onMounted, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import AvatarProps from './props'
	// #ifdef VUE2 && MP
	import { getClassStr } from '@/uni_modules/lime-shared/getClassStr';
	// #endif
	export default defineComponent({
		name: 'l-avatar',
		props: AvatarProps,
		setup(props) {
			const instance = getCurrentInstance()
			const parent = inject('limeAvatarGroup', null);
			
			const index = computed(():number => {
				return parent ? parent.children.value.indexOf(instance!.uid) : -1;
			})
			
			const classes = computed(()=>{
				const name = 'l-avatar';
				const size = parent?.props.size || props.size;
				
				const cls = {
					[`${name}--${parent?.props.shape || props.shape}`]: true,
					[`${name}--${size}`]: ['small','medium', 'large'].includes(size),
					[`${name}--overlapping`]: index.value > 0,
					[`${name}--border`]: index.value > -1,
				}
				// #ifdef VUE2 && MP
				return getClassStr(cls)
				// #endif
				return cls
			})
			
			const styles = computed(() => {
				const style:Record<string, any> = {};
				const size = parent?.props.size ?? props.size;
				
				if(!['small','medium', 'large'].includes(size)) {
					style['width'] = size
					style['height'] = size
				}
				
				if(parent?.props.cascading == 'left-up') {
					style['z-index'] = 50 - index.value
				}
				
				if(parent?.props.collapseColor) {
					style['background'] = parent.props.collapseColor!
					return style
				}
				if(props.color && !collapseShow.value) {
					style['background'] = props.color!
				}
				
				return style
			})
			
			const textStyle = computed(()=>{
				const style:Record<string, any> = {};
				
				if(collapseShow.value) {
					if(parent?.props.collapseFontSize) {
						style['font-size'] = parent.props.collapseFontSize!
					}
					if(parent?.props.collapseColor || parent?.props.collapseTextColor) {
						style['color'] = parent.props.collapseTextColor || 'white'
					}
					return style
				}
				
				if(props.fontSize) {
					style['font-size'] = props.fontSize!
				}
				if(props.color || props.textColor) {
					style['color'] = props.textColor || '#fff'
				}
				return style
			})
			
			const show = computed(():boolean => {
				return index.value == -1 || !parent || !parent.props.max  || index.value < parent.props.max!
			})
			const collapseShow = computed(():boolean => {
				return index.value == parent?.props.max
			})
			const collapseText = computed(():string => {
				return parent?.props.collapseText || `+${parent?.props.max || 0}`
			})
			
			
			onMounted(() => {
				if(instance && parent) {
					parent.children.value.push(instance.uid)
				}
			})
			onUnmounted(() => {
				if(instance && parent) {
					parent.children.value = parent.children.value.filter((it):boolean => it == instance.uid)
				}
			})
			
			
			return {
				classes,
				styles,
				show, 
				collapseShow,
				collapseText,
				textStyle
			}
			
		}
	})
	
	
</script>
<style lang="scss">
	@import './index';
</style>