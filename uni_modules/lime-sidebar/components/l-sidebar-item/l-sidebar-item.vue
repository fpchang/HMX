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
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	import { computed, defineComponent, inject, getCurrentInstance, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import SidebarItemProps from './props'
	import { name as prename, SIDEBAR_KEY, SidebarProvide } from '../l-sidebar/common';
	import { getClassStr } from '@/uni_modules/lime-shared/getClassStr'
	const name = `${prename}-item`

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
			const internalInstance = getCurrentInstance()// as ComponentInternalInstance;
			const { proxy } = internalInstance;
			const sideBarProvide = inject(SIDEBAR_KEY, undefined) as unknown as SidebarProvide;
			sideBarProvide.relation(proxy!)
			
			const useLine = computed(():boolean => sideBarProvide?.props.line == true)
			const useRound = computed(():boolean => sideBarProvide?.props.round == true)
			const currentValue = computed((): number => sideBarProvide?.currentValue.value ?? 0)
			
			const index = computed(() => sideBarProvide.children.value.indexOf(proxy!));
			const selected = computed(() => index.value === sideBarProvide.currentValue.value);
			const classes = computed(() => {
				return getClassStr({
					[`${name}--line`]: useLine.value,
					[`${name}--select`]: selected.value,
					[`${name}--disabled`]: props.disabled,
					[`${name}--top`]:    useRound.value && index.value - currentValue.value == 1,
					[`${name}--bottom`]: useRound.value && index.value - currentValue.value == -1,
				})
			})

			const onClick = () => {
				if(props.disabled) return
				emit('click', index.value)
				sideBarProvide.setActive(index.value)
			}
			onUnmounted(() => {
				sideBarProvide.removeRelation(proxy!);
			});

			return {
				props,
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
