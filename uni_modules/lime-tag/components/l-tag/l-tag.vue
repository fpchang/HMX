<template>
	<view :class="classes" @click="handleClick" :style="[styles]" :data-show="show" @transitionend="transitionend">
		<view class="l-tag__icon" v-if="icon || $slots['icon']"><slot name="icon"><l-icon v-if="icon" :prefix="prefix" :name="icon"></l-icon></slot></view>
		<text class="l-tag__text"><slot/></text>
		<view class="l-tag__icon-close" v-if="closable && !disabled">
			<l-icon name="close" @click="onClickClose"></l-icon>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Tag 标签组件
	 * @description 用于信息标记和分类，支持多种样式风格和交互模式
	 * <br>插件类型：LTagComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-tag
	 * 
	 * @property {boolean} closable 是否可关闭（默认：false）
	 * @property {string} content 标签内容（支持HTML）
	 * @property {boolean} disabled 是否禁用（默认：false）
	 * @property {string} icon 图标名称（支持uni-icons或自定义图标）
	 * @property {string} prefix 图标类名前缀（默认："uni"）
	 * @property {string} maxWidth 最大宽度（支持CSS单位）
	 * @property {'square' | 'round' | 'mark'} shape 标签形状（默认："square"）
	 * @value square
	 * @value round
	 * @value mark
	 * @property {'small' | 'medium' | 'large'} size 标签尺寸（默认："medium"）
	 * @value small
	 * @value medium
	 * @value large
	 * @property {'default' | 'primary' | 'warning' | 'danger' | 'success'} type 标签类型（默认："default"）
	 * @value default
	 * @value primary
	 * @value warning
	 * @value danger
	 * @value success
	 * @property {'solid' | 'light' | 'outline' | 'light-outline'} variant 风格变体（默认："solid"）
	 * @value solid
	 * @value light
	 * @value outline
	 * @value light-outline
	 * @property {string} color 自定义背景/边框色（覆盖type颜色）
	 * @property {string} textColor 自定义文字颜色
	 * @property {string} fontSize 文字大小（支持CSS单位）
	 * @property {string} radius 圆角大小（支持CSS单位）
	 * @property {string} padding 内边距（支持CSS简写）
	 * @event {Function} close 点击关闭按钮时触发
	 * @event {Function} click 点击按钮时触发
	 */
	
	import { defineComponent, computed, ref } from '@/uni_modules/lime-shared/vue';
	// import { addUnit } from '@/uni_modules/lime-shared/addUnit';
	import LTagProps from './props';
	const name = 'l-tag'
	export default defineComponent({
		name,
		props: LTagProps,
		emits: ['click', 'close'],
		setup(props, {emit}) {
			const show = ref(true)
			const classes = computed(() => [
				`${name}`,
				// `${name}--${props.color ? 'primary' : props.type}`,
				`${name}--${props.type}`,
				`${name}--${props.shape}`,
				`${name}--${props.variant}`,
				`${name}--${props.size}`,
			])
			const styles = computed(()=>{
				const style:Record<string,any> = {}
				if(props.maxWidth){
					style['max-width'] = props.maxWidth
				}
				if(props.radius){
					style['border-radius'] = props.radius
				}
				if(props.padding){
					style['padding'] = props.padding
				}
				if(props.fontSize){
					style['font-size'] = props.fontSize
				}
				if(props.textColor){
					style['color'] = props.textColor
				}
				if(!show.value){
					style['opacity'] = 0
				}
				
				if(props.color){
					if(props.variant == 'solid') {
						style['--l-tag-default-color'] = props.color
						style['background'] = props.color
						style['color'] = props.textColor || 'white'
					} else if(['outline', 'light-outline'].includes(props.variant) ){
						style['--l-tag-default-color'] = props.color
						style['color'] = props.color
						style['border-color'] = props.color
					} 
				}
				
				if(props.textColor) {
					style['color'] = props.textColor
				}
				
				return style
			})
			const handleClick = (e: WechatMiniprogram.BaseEvent)=>{
				if (props.disabled) return;
				emit('click', e)
			}
			const onClickClose = (_: WechatMiniprogram.BaseEvent)=>{
				 if (props.disabled) return;
				show.value = false
			}
			const transitionend = ()=>{
				emit('close')
			}
			return {
				classes,
				styles,
				show,
				handleClick,
				onClickClose,
				transitionend
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>