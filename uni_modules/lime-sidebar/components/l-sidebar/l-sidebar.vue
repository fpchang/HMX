<template>
	<scroll-view class="l-sidebar" scroll-y :style="[styles]">
		<slot></slot>
		<!-- <view class="l-sidebar__content"></view> -->
		<view class="l-sidebar__padding" :class="lastItemRoundClass"></view>
	</scroll-view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Sidebar 侧边导航组件
	 * @description 用于实现垂直导航菜单，支持高亮选中状态和自定义样式
	 * <br>插件类型：LSidebarComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-sidebar
	 * 
	 * @property {string} width 侧边栏宽度
	 * @property {string} fontSize 文字大小
	 * @property {string} lineHeight 行高
	 * @property {string} textColor 文字颜色
	 * @property {string} disabledTextColor 禁用状态文字颜色
	 * @property {string} bgColor 背景颜色
	 * @property {string} selectedFontWeight 选中项字重
	 * @property {string} selectedTextColor 选中项文字颜色
	 * @property {string} selectedBorderWidth 选中项指示条宽度
	 * @property {string} selectedBorderHeight 选中项指示条高度
	 * @property {string} selectedBorderColor 选中项指示条颜色
	 * @property {string} selectedBgColor 选中项背景色
	 * @property {boolean} line 线条
	 * @property {boolean} round 圆角
	 * @event {Function} change 选项变化时触发（返回选中项索引）
	 */
	import { computed, defineComponent, provide, ref, type ComponentPublicInstance, type Ref,type ComputedRef  } from '@/uni_modules/lime-shared/vue';
	import SidebarProps from './props';
	import { name, SIDEBAR_KEY, SidebarProvide} from './common'

	/**
	 * LimeSidebar 侧边栏
	 * @description 侧边栏
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=13617
	 * @property {String} v-model 当前导航项的索引
	 * @event {Function} change 点击时触发
	 */
	export default defineComponent({
		// name,
		props: SidebarProps,
		emits: ['change', 'update:modelValue'],
		setup(props, {emit}) {
			const children: Ref<ComponentPublicInstance[]> = ref([]);
			const relation = (child: ComponentPublicInstance) => {
			      child && children.value.push(child);
			};
			const removeRelation = (child: ComponentPublicInstance) => {
				children.value = children.value.filter((item) => item !== child);
			};

			const currentValue: ComputedRef<number> = computed(() => {
				// #ifdef VUE3
				return +props.modelValue
				// #endif
				// #ifndef VUE3
				return +props.value
				// #endif
			});
			const lastItemRoundClass = computed(() => {
				return children.value.length - currentValue.value == 1 &&  props.round ? `${name}--top` : ''
			})
			const styles = computed(() => {
				const style = {}
				
				if(props.selectedBorderWidth) {
					style['--l-sidebar-selected-border-width'] = props.selectedBorderWidth
				}
				if(props.selectedBorderHeight) {
					style['--l-sidebar-selected-border-height'] = props.selectedBorderHeight
				}
				if(props.selectedBorderColor) {
					style['--l-sidebar-selected-border-color'] = props.selectedBorderColor
				}
				if(props.width) {
					style['--l-sidebar-width'] = props.width
				}
				if(props.fontSize) {
					style['--l-sidebar-font-size'] = props.fontSize
				}
				if(props.lineHeight) {
					style['--l-sidebar-line-height'] = props.lineHeight
				}
				if(props.textColor) {
					style['--l-sidebar-text-color'] = props.textColor
				}
				if(props.disabledTextColor) {
					style['--l-sidebar-disabled-text-color'] = props.disabledTextColor
				}
				if(props.bgColor) {
					style['--l-sidebar-background'] = props.bgColor
				}
				if(props.selectedTextColor) {
					style['--l-sidebar-selected-text-color'] = props.selectedTextColor
				}
				if(props.selectedBgColor) {
					style['--l-sidebar-selected-background'] = props.selectedBgColor
				}
				return style
				
			})
			const setActive = (value : number):void => {
				if (value !== currentValue.value) {
					// #ifdef VUE3
					emit('update:modelValue', value);
					// #endif
					// #ifndef VUE3
					emit('input', value);
					// #endif
					emit('change', value);
				}
			};

			provide<SidebarProvide>(SIDEBAR_KEY, {
				children,
				removeRelation,
				relation,
				currentValue,
				setActive,
				props
			})

			return {
				styles,
				lastItemRoundClass
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
