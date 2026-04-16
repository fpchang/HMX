<template>
	<view class="l-pagination" :class="{'l-pagination--disabled': disabled}" :style="[styles]">

		<view class="l-pagination__item-box" @click="update(innerValue - 1)" v-if="showPrevButton || $slots['prev']">
			<slot name="prev" :disabled="innerValue == 1 || disabled">
				<button class="l-pagination__item l-pagination__prev" :disabled="innerValue == 1 || disabled"
					:class="{'l-pagination__item--disabled': innerValue == 1 || disabled}">
					{{ prevText }}
				</button>
			</slot>
		</view>
		<text v-if="simple" class="l-pagination__simple">{{ innerValue}}/{{totalPages}}</text>
		<template v-if="!simple">
			<!-- #ifdef VUE2 -->
			<view v-for="(page, index) in pageItems" :key="page.key" @click="update(page.pageNumber)">
				<slot name="page" :label="page.label" :active="page.isActive">
					<button :style="[page.isActive && activeStyle]" class="l-pagination__item l-pagination__item--page"
						:class="{'l-pagination__item--active': page.isActive}">
						{{page.label}}
					</button>
				</slot>
			</view>
			<!-- #endif -->
			<!-- #ifdef VUE3 -->
			<view class="l-pagination__item-box" v-for="(page, index) in pageItems" :key="page.key"
				@click="update(page.pageNumber)">
				<slot name="page" :label="page.label" :active="page.isActive">
					<button :style="[page.isActive && activeStyle]" class="l-pagination__item l-pagination__item--page"
						:class="{'l-pagination__item--active': page.isActive}">
						{{page.label}}
					</button>
				</slot>
			</view>
			<!-- #endif -->
		</template>

		<view class="l-pagination__item-box" @click="update(innerValue + 1)" v-if="showNextButton || $slots['next']">
			<slot name="next" :disabled="innerValue == totalPages || disabled">
				<button class="l-pagination__item l-pagination__next" :disabled="innerValue == totalPages || disabled"
					:class="{'l-pagination__item--disabled': innerValue == totalPages || disabled}">
					{{ nextText }}
				</button>
			</slot>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Pagination 分页组件
	 * @description 提供数据分页浏览功能，支持多种样式配置和交互模式
	 * <br>插件类型：LPaginationComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-pagination
	 * 
	 * @property {number} total 数据总数（必填）
	 * @property {number} pageSize 每页数据量（默认：10）
	 * @property {number} pagerCount 显示页码按钮数（建议5-7，默认：5）
	 * @property {boolean} hideOnSinglePage 单页时隐藏组件（默认：false）
	 * @property {boolean} disabled 禁用分页功能（默认：false）
	 * @property {boolean} forceEllipses 显示省略号（默认：true）
	 * @property {string} prevText 上一页按钮文字（默认："上一页"）
	 * @property {string} nextText 下一页按钮文字（默认："下一页"）
	 * @property {boolean} simple 简洁模式（显示简化版分页，默认：false）
	 * @property {string} bgColor 背景色（默认：#ffffff）
	 * @property {string} color 文字颜色（默认：#333）
	 * @property {string} activeBgColor 当前页背景色（默认主题色）
	 * @property {string} activeColor 当前页文字颜色（默认：#ffffff）
	 * @property {string} fontSize 文字字号（支持CSS单位，默认：14px）
	 * @property {string} radius 圆角半径（支持CSS单位，默认：4px）
	 * @property {string} borderColor 边框颜色（默认：#eee）
	 * @property {boolean} showPrevButton 显示上一页按钮（默认：true）
	 * @property {boolean} showNextButton 显示下一页按钮（默认：true）
	 * @property {string} itemWidth 页码项宽度（默认：36px）
	 * @property {string} itemHeight 页码项高度（默认：32px）
	 * @event {Function} change 页码变化时触发（返回新页码）
	 */
	import { defineComponent, ref, computed } from '@/uni_modules/lime-shared/vue';
	import paginationProps from './props';
	import { generatePaginationItems } from './utils';

	export default defineComponent({
		// name: 'l-pagination',
		props: paginationProps,
		emits: ['change', 'input', 'update:modelValue'],
		setup(props, { emit }) {
			const innerValue = ref(0);
			// const innerValue = computed({
			// 	set(value: number) {
			// 		innerValue.value = value;
			// 		emit('update:modelValue', value)
			// 		// #ifdef VUE2
			// 		emit('input', value)
			// 		// #endif
			// 	},
			// 	get():number {
			// 		const _value = props.value || props.modelValue || innerValue.value ;
			// 		return _value > totalPages.value ? totalPages.value : _value
			// 	},
			// })
			// 监听 props 变化，同步到内部值
			watch(
				() => props.value || props.modelValue || innerValue.value,
				(newVal) => {
					innerValue.value = newVal > totalPages.value ? totalPages.value : newVal
				},
				{ immediate: true }
			)

			// 监听内部值变化，触发事件
			watch(
				() => innerValue.value,
				(newVal) => {
					console.log('innerValue changed:', newVal)
					emit('change', newVal)
					emit('update:modelValue', newVal)
					// #ifdef VUE2
					emit('input', newVal)
					// #endif
				}
			)

			const styles = computed(() => {
				const style : Record<string, any> = {}
				if (props.itemWidth) {
					style['--l-pagination-item-width'] = props.itemWidth!
				}
				if (props.itemHeight) {
					style['--l-pagination-item-height'] = props.itemHeight!
				}
				if (props.radius) {
					style['--l-pagination-border-radius'] = props.radius!
				}
				if (props.borderColor) {
					style['--l-pagination-border-color'] = props.borderColor!
				}

				if (props.fontSize) {
					style['--l-pagination-font-size'] = props.fontSize!
				}
				if (props.bgColor) {
					style['--l-pagination-bg-color'] = props.bgColor!
				}
				if (props.color) {
					style['--l-pagination-text-color'] = props.color!
				}
				if (props.activeBgColor) {
					style['--l-pagination-active-bg-color'] = props.activeBgColor!
				}
				if (props.activeColor) {
					style['--l-pagination-active-text-color'] = props.activeColor!
				}
				return style
			})
			const activeStyle = computed(() => {
				const style : Record<string, any> = {}
				if (props.activeBgColor) {
					style['--l-pagination-active-bg-color'] = props.activeBgColor!
					style['--l-pagination-border-color'] = props.activeBgColor!
				}
				return style
			})
			const totalPages = computed(() : number => {
				return Math.max(1, Math.ceil(props.total / props.pageSize))
			})
			const pageItems = computed(() : PaginationItem[] => {
				return generatePaginationItems(totalPages.value, props.pagerCount, innerValue.value, props.forceEllipses)
			})
			const update = (page : number) => {
				if (props.disabled) return
				const _page = Math.max(1, Math.min(page, totalPages.value));
				if (_page != innerValue.value) {
					innerValue.value = _page
					emit('change', _page)
				}
			}
			return {
				styles,
				activeStyle,
				innerValue,
				totalPages,
				pageItems,
				update
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>