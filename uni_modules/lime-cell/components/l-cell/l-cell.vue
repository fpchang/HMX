<template>
	<view class="l-cell" ref="cellRef" :style="{'background': bgColor}"
		:class="[
			!bordered || isLastChild ? `l-cell--borderless`: '',
			`l-cell--${align}`,
			size && `l-cell--${size}`,
			lClass
		]" 
		:hover-class="hover ? 'l-cell--hover' : ''"  hover-stay-time="70" @click="onClick">
		<view class="l-cell__left l-cell__left" v-if="$slots['icon'] || image || icon">
			<view class="l-cell__left-icon" v-if="icon">
				<l-icon :l-class="lClassLeftIcon" :size="iconSize" :color="iconColor" :name="icon" />
			</view>
			<image class="l-cell__left-image" :style="{width: imageWidth, height:imageHeight}" v-if="image" :src="image" mode="aspectFill" />
			<slot name="icon"></slot>
		</view>
		<view class="l-cell__title">
			<text class="l-cell__title-text" v-if="title">{{title}} <text v-if="required" class="l-cell--required">*</text></text>
			<slot name="title"></slot>
			<view class="l-cell__description" :class="{ 'l-cell__description--spacer':  title || $slots['title'] }"   v-if="$slots['description'] || description" >
				<text v-if="description" class="l-cell__description-text">{{description}}</text>
				<slot name="description"></slot>
			</view>
		</view>
		<view class="l-cell__note" v-if="$slots['note'] || $slots['default'] || note" >
			<slot>
				<text v-if="note" class="l-cell__note-text">{{note}}</text>
			</slot>
			<slot name="note"></slot>
		</view>
		<view class="l-cell__right" v-if="$slots['rightIcon'] || arrow || rightIcon">
			<view class="l-cell__right-icon" v-if="arrow || rightIcon">
				<l-icon :l-class="lClassRightIcon" v-if="arrow" :color="rightIconColor" :size="rightIconSize" name="chevron-right" />
				<l-icon :l-class="lClassRightIcon" v-else-if="rightIcon" :color="rightIconColor" :size="rightIconSize" :name="rightIcon"/>
			</view>
			<slot name="rightIcon"></slot>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Cell 单元格组件
	 * @description 用于列表项的信息展示，支持图标、图片、导航等丰富布局
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-cell
	 * 
	 * @property {'small' | 'medium' | 'large'} size 单元格尺寸
	 * @value small   紧凑型（行高40px）
	 * @value medium  标准型（行高48px，默认）
	 * @value large   宽松型（行高56px）
	 * @property {string} title 主标题内容（支持HTML）
	 * @property {string} description 辅助说明文本（显示在标题下方）
	 * @property {boolean} bordered 是否显示下边框分割线
	 * @property {boolean} hover 是否启用点击反馈效果
	 * @property {string} icon 左侧图标名称/路径（支持字体图标和图片）
	 * @property {string} image 左侧图片地址（优先级高于icon）
	 * @property {string} note 标题右侧备注文本
	 * @property {boolean} required 是否显示必填星号（标题左侧）
	 * @property {boolean} arrow 是否显示右侧箭头图标
	 * @property {string} rightIcon 右侧自定义图标（覆盖arrow设置）
	 * @property {string} url 跳转链接地址（留空禁用跳转）
	 * @property {'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateTo'} openType 跳转方式
	 * @value switchTab
	 * @value reLaunch
	 * @value redirectTo
	 * @value navigateTo
	 * @property {'top' | 'middle' | 'bottom'} align 内容垂直对齐方式
	 * @value top
	 * @value middle
	 * @value bottom
	 * @property {string} iconColor 左侧图标颜色（支持CSS颜色值）
	 * @property {string} rightIconColor 右侧图标颜色（支持CSS颜色值）
	 * @property {string} iconSize 左侧图标尺寸（默认：20px）
	 * @property {string} rightIconSize 右侧图标尺寸（默认：16px）
	 * @property {string} imageWidth 左侧图片宽度（默认：32px）
	 * @property {string} imageHeight 左侧图片高度（默认：32px）
	 * @property {string} bgColor 背景颜色（支持CSS颜色值）
	 * @property {string} lClass 根节点自定义类名
	 * @property {string} lClassLeftIcon 左侧图标容器类名
	 * @property {string} lClassRightIcon 右侧图标容器类名
	 * @event {Function} click 点击单元格时触发
	 */
	import { computed, defineComponent, getCurrentInstance, onMounted, onUnmounted, inject } from '@/uni_modules/lime-shared/vue';
	import cellProps from './props';
	
	export default defineComponent({
		// name: 'l-cell',
		props: cellProps,
		emits: ['click'],
		setup(props, {emit}) {
			const instance = getCurrentInstance()
			const parent = inject('limeCellGroup', null)
			
			const isLastChild = computed(():boolean => {
				if(!parent) return false
				const index = parent.children.value.findIndex((it):boolean => it == instance?.uid)
				return index != -1 && index == parent.children.value.length - 1;
			})
			
			// const classes = computed(()=>{
			// 	const name = 'l-cell'
			
			// 	return {
			// 		[`${name}--borderless`]: !props.bordered || isLastChild.value,
			// 		[`${name}--${props.align}`]: true,
			// 		[`${name}--${props.size}`]: Boolean(props.size),
			// 	}
			// })
			
			const onClick = (e) => {
				emit('click', e)
				if(!props.url) return
				uni[props.openType]({
					url: props.url
				})
			}
			
			onMounted(()=> {
				if(instance != null && parent != null) {
					parent.children.value.push(instance.uid)
				}
			})
			
			onUnmounted(() => {
				if(instance != null && parent != null) {
					parent.children.value = parent.children.value.filter((it):boolean => it != instance.uid)
				}
			})
			
			return {
				isLastChild,
				// classes,
				onClick
			}	
		}
	})
	
	
</script>
<style lang="scss">
	@import './index';
</style>