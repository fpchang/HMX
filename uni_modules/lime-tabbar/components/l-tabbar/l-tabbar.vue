<template>
	<view>
		<view class="l-tabbar" :class="tabBarClass" :style="[styles]">
			<slot></slot>
		</view>
		<view v-if="fixed && placeholder" :style="{height: rootHeight + 'px'}"></view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Tabbar 底部导航栏组件
	 * @description 用于实现应用底部导航功能，支持多种样式风格和交互效果
	 * <br>插件类型：LTabbarComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-tabbar
	 * 
	 * @property {boolean} bordered 显示外边框（默认：true）
	 * @property {boolean} fixed 固定在底部（默认：true）
	 * @property {boolean} safeAreaInsetBottom 适配iPhoneX底部安全区（默认：true）
	 * @property {'normal' | 'round'} shape 标签栏形状（默认："normal"）
	 * @value normal
	 * @value round
	 * @property {boolean} split 显示分割线（默认：true）
	 * @property {'normal' | 'tag'} theme 选项风格（默认："normal"）
	 * @value normal
	 * @value tag
	 * @property {string} value 当前选中值（兼容旧版）
	 * @property {string} defaultValue 默认选中值（非受控属性）
	 * @property {string} modelValue 当前选中值（推荐使用v-model）
	 * @property {boolean} placeholder 固定时生成占位元素（默认：false）
	 * @property {string} activeColor 选中项颜色（默认：主题色）
	 * @property {string} color 未选中项颜色（默认："#7d7e80"）
	 * @property {string} lStyle 自定义样式（CSS字符串）
	 * @property {string} activeBgColor 选中项背景色
	 * @property {string} bgColor 背景颜色
	 * @property {number} zIndex 层级（默认：100）
	 * @property {string} iconSize 图标尺寸（支持CSS单位）
	 * @property {string} fontSize 文字大小（支持CSS单位）
	 * @event {Function} change 选项变化时触发（返回选中值）
	 */
	
	import { ref, defineComponent, computed, Ref, provide, toRefs, onMounted, getCurrentInstance } from '@/uni_modules/lime-shared/vue';
	import TabbarProps from './props'
	import { getRect } from '@/uni_modules/lime-shared/getRect'
	const name = `l-tabbar`
	export default defineComponent({
		// name,
		props: TabbarProps,
		emits: ['change', 'input', 'update:modelValue'],
		setup(props, { emit }) {
			const instance = getCurrentInstance()!.proxy!
			const innerValue = ref('0');
			const activeValue = computed({
				set(value: string) {
					innerValue.value = value
					emit('change', value)
					emit('update:modelValue', value)
					// #ifdef VUE2
					emit('input', value)
					// #endif
				},
				get():string {
					return props.value ?? props.modelValue ?? innerValue.value
				}
			});
			const defaultIndex : Ref<number> = ref(-1);
			const rootHeight = ref(0);
			const children = ref([])
			const tabBarClass = computed(() => [
				// `${name}`,
				{
					[`${name}--bordered`]: props.bordered,
					[`${name}--fixed`]: props.fixed,
					[`${name}--safe`]: props.safeAreaInsetBottom,
				},
				`${name}--${props.shape}`,
			]);
			const styles = computed(()=>{
				const style:Record<string, string> = {};
				if(props.zIndex) {
					style['z-index'] = props.zIndex!
				}
				if(props.bgColor) {
					style['background'] = props.bgColor!
				}
				return style
			})
			const updateChild = (currentValue: number | string) => {
			    activeValue.value = currentValue;
			};
			onMounted(() => {
				if(!(props.placeholder && props.fixed)) return;
				
				getRect(`.${name}`, instance).then(res => {
					rootHeight.value = res.height
				})
			})
			provide('tab-bar', {
			      ...toRefs(props),
			      defaultIndex,
			      activeValue,
			      updateChild,
				  children
			    });
			return {
				rootHeight,
				styles,
				tabBarClass
			}
		}
	})
</script>
<style lang="scss">
	@import './index-u';
</style>