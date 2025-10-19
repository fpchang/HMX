<template>
	<view class="l-tabbar-item" :class="classes">
		<view :class="contentClass" :style="[contentStyles]" @click="toggle">
			<view class="l-tabbar-item__icon-wrap" :style="[iconStyle]" v-if="icon">
			<!-- 	<l-badge 
					v-if="(icon || $slots.icon) && (badgeProps.dot || badgeProps.content)" 
					:dot="badgeProps.dot || false" 
					:max="badgeProps.max || 99" 
					:content="badgeProps.content || 0">
					<slot icon="icon"></slot>
					<l-icon :name="icon"></l-icon>
				</l-badge>
				<slot icon="icon" v-else-if="$slots.icon"></slot>
				<l-icon v-else-if="icon" :name="icon"></l-icon> -->
				
				
				<template v-if="(icon || $slots.icon) && (badgeProps.dot || badgeProps.content)" >
					<l-badge
						:dot="badgeProps.dot || false" 
						:max="badgeProps.max || 99" 
						:offset="badgeProps.offset || [0, 0]"
						:content="badgeProps.content || 0">
						<slot name="icon">
							<l-icon :name="icon" ></l-icon>
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
			:class="{
				'l-tabbar-item__text--small': !!icon, 
				'l-tabbar-item__text--only': !icon,
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
	const name = `l-tabbar-item`
	export default defineComponent({
		name,
		props: tabbarProps,
		setup(props) {
			const context = getCurrentInstance()
			const { split, shape, theme, defaultIndex, activeValue, updateChild, children, activeColor, color, activeBgColor, iconSize, fontSize } = inject('tab-bar');
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
				// return {
				// 	// [`${name}`]: true,
				// 	[`${name}--split`]: split.value,
				// 	[`${name}--text-only`]: !props.icon,
				// 	[`${name}--crowded`]: crowded.value,
				// 	[`${name}--${shape.value}`]: true,
				// }
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
				// return {
				// 	[`${name}__content`]: true,
				// 	[`${name}__content--checked`]: isChecked.value,
				// 	[`${name}__content--disabled`]: props.disabled,
				// 	[`${name}__content--${theme.value}`]: true,
				// }
			})
			const contentStyles = computed(() => {
				const style:Record<string, string> = {}
				if(fontSize.value) {
					style['font-size'] = fontSize.value
				}
				if(activeBgColor.value) {
					style['background'] = activeBgColor.value
				}
				
				if(activeColor.value || color.value) {
					style['color'] = isChecked.value ? activeColor.value : color.value
				} 
				if(activeColor.value) {
					style['--l-tabbar-active-color'] =  activeColor.value
				}
				if(color.value) {
					style['--l-tabbar-color'] =  color.value
				}
				return style
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
				contentStyles,
				iconStyle,
				
				toggle
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>
