<template>
	<view
		class="l-sidebar-item"
		:class="classes"
		:tabindex="disabled ? undefined : 0"
		:aria-selected="selected"
		@click="onClick">
			<l-badge :content="badge" :dot="dot" :max="badgeProps && badgeProps.max">
				<slot name="title"><text>{{title}}</text></slot>
			</l-badge>
			<slot></slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	import { computed, defineComponent, inject, getCurrentInstance, onBeforeUnmount } from '@/uni_modules/lime-shared/vue';
	import SidebarItemProps from './props'
	import type { LimeSidebarContext, LimeSidebarValue } from '../l-sidebar/type'
	import { sidebarContextSymbol } from '../l-sidebar/common'
	
	import { getClassStr } from '@/uni_modules/lime-shared/getClassStr'
	import { getRect } from '@/uni_modules/lime-shared/getRect'

	/**
	 * LimeSidebarItem 侧边栏项
	 * @description 配合侧边栏
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=13617
	 * @property {String} title 标题
	 * @property {String,Number} badge 图标右上角徽标的内容
	 * @property {Boolean} disabled 是否禁用该项
	 * @property {Boolean} dot 是否显示右上角小红点
	 * @event {Function} click 点击时触发
	 */
	export default defineComponent({
		// name,
		props: SidebarItemProps,
		emits: ['click'],
		setup(props, {emit}) {
			const context = inject<LimeSidebarContext|null>(sidebarContextSymbol, null);
			const instance = getCurrentInstance()!.proxy!
			if (context == null) {
				throw new Error("SidebarItem must be included in Sidebar.");
			}
			
			// 获取元素位置信息的函数
			const getElementRect = () : Promise<DOMRect> => {
				return getRect('.l-sidebar-item', instance);
			};
			
			
			context?.register(instance as LSidebarItemComponentPublicInstance, getElementRect);
			
			const index = computed(() : number => {
				return Math.max(context?.children.value.indexOf(instance) || 0, 0)
			})
			const currentValue = computed((): LimeSidebarValue => context?.currentValue.value || 0)
			const currentIndex = computed((): number => context?.currentIndex.value || 0)
			
			const useLine = computed(() : boolean => context?.line.value == true)
			const useRound = computed(() : boolean => context?.round.value == true)
			const selected = computed(() : boolean => {
				if(props.value != null) {
					return props.value == context?.currentValue.value
				}
				return index.value == context?.currentIndex.value
			})
			
			const classes = computed(():Map<string, any> => {
				const name = `l-sidebar-item`
				return getClassStr({
					[`${name}--line`]: useLine.value,
					[`${name}--select`]: selected.value,
					[`${name}--disabled`]: props.disabled,
					[`${name}--top`]:    useRound.value && index.value - currentValue.value == 1,
					[`${name}--bottom`]: useRound.value && index.value - currentValue.value == -1,
				})
			})
			
			
			const onClick = () => {
				if(props.disabled || context == null) return
				const value = props.value || index.value
				emit('click', value)
				context?.onClickItem(value)
			}
			
			onBeforeUnmount(()=>{
				if(context == null) return
				context?.unregister(instance as LSidebarItemComponentPublicInstance)
			})

			return {
				classes,
				selected,
				onClick
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
