<template>
	<scroll-view class="l-sidebar" :scroll-y="true" direction="vertical" :style="[styles]"
		:scroll-top="scrollTop" @scroll="onScroll">
		<slot></slot>
		<view class="l-sidebar__padding" :class="{'l-sidebar--top': round && lastItem }"></view>
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
	import { computed, defineComponent, provide, ref, watch , type ComponentPublicInstance, type Ref, type ComputedRef, getCurrentInstance  } from '@/uni_modules/lime-shared/vue';
	import SidebarProps from './props';
	import type { SidebarProps, LimeSidebarContext, LimeSidebarValue } from './type'
	import { sidebarContextSymbol } from './common'
	
	import { clamp } from '@/uni_modules/lime-shared/clamp'

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
		emits: ['change', 'update:modelValue', 'input'],
		setup(props, {emit}) {
			const instance  = getCurrentInstance().proxy!
			const sidebarItemMap = new Map<number, () => Promise<DOMRect> >();
			const children = ref<LSidebarItemComponentPublicInstance[]>([])
			const currentValue = ref<LimeSidebarValue>(props.value || props.modelValue || props.defaultValue || 0)
			const currentIndex = computed(() : number => Math.max(children.value.findIndex((item, index) : boolean => {
				if (item.value != null) return item.value == currentValue.value
				return index == currentValue.value
			}), 0))
			
			const lastItem = computed(() : boolean => {
				return children.value.length == currentIndex.value + 1
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
			
			const scrollTop = ref(0);
			
			let memoScrollTop = 0;
			const onScroll = (event : UniScrollEvent) => {
				memoScrollTop = event.detail.scrollTop;
			};
			
			const scrollIntoView = async () => {
				const child = children.value[currentIndex.value]
				const getRect = sidebarItemMap.get(child.$.uid)
				if (!getRect) return
				const itemRect = await getRect();
				const total = itemRect.height * children.value.length
				const scrollViewRect = await getRect('.l-sidebar', instance);
				const maxOffset = total - scrollViewRect.height;
			
				const offset = memoScrollTop + (itemRect.top - scrollViewRect.top) - (1 / 2) * scrollViewRect.height + itemRect.height / 2;
				scrollTop.value = clamp(offset, 0, maxOffset)
			}
			
			const onClickItem = (value : LimeSidebarValue) => {
				if (value == currentValue.value) return
				currentValue.value = value
				emit('change', value)
				emit('update:modelValue', value)
				// #ifdef VUE2
				emit('input', value)
				// #endif
				scrollIntoView()
			}
			
			watch(() : LimeSidebarValue | null => props.value || props.modelValue, (value : LimeSidebarValue | null) => {
				if (value == null || currentValue.value == value) return
				currentValue.value = value!
			
				scrollIntoView()
			})
			
			
			const register = (child : LSidebarItemComponentPublicInstance, getRect : () => Promise<DOMRect>) => {
				sidebarItemMap.set(child.$.uid, getRect)
				const index = children.value.findIndex(item => item == child);
				if (index == -1) {
					children.value.push(child);
				}
			}
			const unregister = (child : LSidebarItemComponentPublicInstance) => {
				// children.value = children.value.filter((item):boolean => item != value);
				const index = children.value.findIndex(item => item == child);
				if (index != -1) {
					children.value.splice(index, 1);
				}
				sidebarItemMap.delete(child.$.uid)
			}
			
			provide(sidebarContextSymbol, {
				currentValue,
				currentIndex,
				children,
				onClickItem,
				register,
				unregister,
				round: computed(() : boolean => props.round),
				line: computed(() : boolean => props.line),
			} as LimeSidebarContext)
			
			
			return {
				styles,
				onScroll,
				scrollTop,
				lastItem
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
