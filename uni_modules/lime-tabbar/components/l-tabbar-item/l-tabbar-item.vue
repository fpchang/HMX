<template>
	<view class="l-tabbar-item" :class="classes">
		<view :class="contentClass" @click="toggle">
			<view class="l-tabbar-item__icon-wrap" :style="[iconStyle]" v-if="icon || $slots.icon">
				<template v-if="(icon || $slots.icon) && (badgeProps.dot || badgeProps.content)" >
					<l-badge
						:dot="badgeProps.dot || false" 
						:max="badgeProps.max || 99" 
						:offset="badgeProps.offset || [0, 0]"
						:content="badgeProps.content || 0">
						<slot name="icon">
							<l-icon :name="icon"></l-icon>
						</slot>
					</l-badge>
				</template>
				<template v-else-if="icon || $slots.icon">
					<slot name="icon">
						<l-icon :name="icon"></l-icon>
					</slot>
				</template>
			</view>
			<view class="l-tabbar-item__text" 
			v-if="label || $slots.default"
			:class="{
				'l-tabbar-item__text--small': !!(icon || $slots.icon), 
				'l-tabbar-item__text--only': !(icon || $slots.icon),
				'l-tabbar-item__text--ellipsis': ellipsis
				}">
				<slot>{{label}}</slot>
			</view>
			<slot name="extra"></slot>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * TabbarItem 底部导航项组件
	 * @description 用于构建Tabbar的单个导航项，必须作为Tabbar的子组件使用
	 * <br>插件类型：LTabbarItemComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-tabbar
	 * 
	 * @property {Object} badgeProps 徽标配置（支持uni-badge所有属性）
	 * @property {string} icon 图标名称（支持uni-icons或自定义图标）
	 * @property {string} value 唯一标识符（用于v-model绑定）
	 * @property {string} label 文本标签
	 * @property {boolean} disabled 是否禁用（默认：false）
	 * @property {boolean} ellipsis 是否超一行省略（默认：false）
	 */
	
	import {ref, defineComponent, computed, inject, getCurrentInstance, onUnmounted} from '@/uni_modules/lime-shared/vue';
	import tabbarProps from './props'
	import {addUnit} from '@/uni_modules/lime-shared/addUnit'
	
	export default defineComponent({
		props: tabbarProps,
		setup(props) {
			const name = `l-tabbar-item`
			const context = getCurrentInstance()
			const { split, shape, theme, defaultIndex, activeValue, updateChild, children, iconSize } = inject('tab-bar');
			defaultIndex.value += 1
			const currentName = props.value || defaultIndex.value
			children.value.push(context.uid)
			// 拥挤
			const crowded = computed(() => children.value.length > 3) 
			const isChecked = computed(() => {
			    return currentName === activeValue.value;
			});
			const classes = computed(() => {
				const cls = [`${name}--${shape.value}`];
				if(split.value) {
					cls.push(`${name}--split`)
				}
				if(!props.icon) {
					cls.push(`${name}--text-only`)
				}
				if(crowded.value) {
					cls.push(`${name}--crowded`)
				}
				return cls.join(' ')
			})
			const contentClass = computed(() => {
				const cls = [`${name}__content`, `${name}__content--${theme.value}`];
				if(isChecked.value) {
					cls.push(`${name}__content--checked`)
				}
				if(props.disabled) {
					cls.push(`${name}__content--disabled`)
				}
				return cls.join(' ')
			})
			
			const iconStyle = computed(() => {
				const size = addUnit(iconSize.value || (props.icon && !context.slots.default ? 24 : 20)) 
				return {
					height: size,
					fontSize: size
				}
			})
			const toggle = () => {
				if(props.disabled) return
				updateChild(currentName);
			}
			
			onUnmounted(() => {
				const index = children.value.indexOf(context.uid);
				children.value.splice(index, 1);
			})
			return {
				classes,
				contentClass,
				iconStyle,
				toggle
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
