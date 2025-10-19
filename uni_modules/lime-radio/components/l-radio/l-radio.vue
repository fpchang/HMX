<template>
	<view class="l-radio" :class="{'l-radio--disabled': isDisabled}" :style="[styles]" @click="onClick">
		<slot name="radio" :checked="radioChecked" :disabled="isDisabled">
			<slot name="icon" :checked="radioChecked" :disabled="isDisabled">
				<view class="l-radio__icon" ref="iconRef" 
				:class="['l-radio__icon--' + innerIcon, {
					'l-radio__icon--checked': radioChecked,
					'l-radio__icon--disabled': isDisabled
				}]" :style="[iconStyle]"></view>
			</slot>
			<view class="l-radio__label" :style="[labelStyle]" :class="{'l-radio__label--disabled': isDisabled}" v-if="label || $slots['default']">
				<slot>{{label}}</slot>
			</view>
		</slot>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Radio 单选框组件
	 * @description 用于在多个选项中选择单个结果，支持自定义图标和样式配置
	 * <br>插件类型：LRadioComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-radio
	 * 
	 * @property {boolean} allowUncheck 允许取消选中（默认：false）
	 * @property {boolean} checked 当前选中状态（支持v-model）
	 * @property {boolean} defaultChecked 默认选中状态（非受控属性）
	 * @property {boolean} disabled 禁用状态（优先级高于RadioGroup）
	 * @property {boolean} readonly 只读状态（优先级高于RadioGroup）
	 * @property {'circle' | 'line' | 'dot'} icon 单选图标样式
	 * @value circle 实心圆形图标（默认）
	 * @value line   空心环形图标
	 * @value dot    中心圆点图标
	 * @property {string} label 选项显示文本
	 * @property {string} name 表单字段名称
	 * @property {string | number | boolean} value 选项值
	 * @property {'small' | 'medium' | 'large'} size 组件尺寸
	 * @property {string} fontSize 文本字号（支持CSS单位）
	 * @property {string} iconSize 图标尺寸（支持CSS单位）
	 * @property {string} checkedColor 选中状态主色（默认：主题色）
	 * @property {string} iconBgColor 图标背景色
	 * @property {string} iconBorderColor 图标边框色
	 * @property {string} iconDisabledColor 禁用图标颜色
	 * @property {string} iconDisabledBgColor 禁用背景色
	 * @property {string | UTSJSONObject} labelStyle 文本自定义样式
	 * @event {Function} change 选中状态变化时触发（返回value和checked状态）
	 */
	
	import { defineComponent, computed, inject, Ref , ref} from '@/uni_modules/lime-shared/vue';
	import { RadioValue, LRadioProps } from './type'
	import radioProps from './props'

	const name = 'l-radio'
	export default defineComponent({
		// name,
		props: radioProps,
		emits: ['update:checked', 'update:modelValue', 'change', 'input'],
		setup(props, { emit }) {
			const formDisabled = inject<Ref<boolean|null>|null>('formDisabled', null)
			const formReadonly = inject<Ref<boolean|null>|null>('formReadonly', null)
			
			const radioGroupProps = inject<LRadioGroupComponentPublicInstance|null>('limeRadioGroupProps', null);
			const radioGroupValue = inject<ComputedRefImpl<any>|null>('limeRadioGroupValue', null);
			const radioGroupChange = inject<((value: any|null) => void)|null>('limeRadioGroupChange', null);
			const modelValue = ref(props.checked ?? props.modelValue)
			const innerChecked = computed({
				set(value: boolean){
					modelValue.value = value;
					emit('update:modelValue', value)
					emit('change', value)
					// #ifdef VUE2
					emit('input', value)
					// #endif
				},
				get(): boolean{
					return props.checked ?? props.modelValue ?? modelValue.value
				},
			} as WritableComputedOptions<boolean>)
			
			const isDisabled = computed(():boolean => (props.disabled || (formDisabled?.value ?? radioGroupProps?.disabled ?? false)))
			const isReadonly= computed(():boolean=>{
				if (props.readonly) return props.readonly;
				return formReadonly?.value || radioGroupProps?.readonly || false;
			})
			
			const radioChecked = computed(():boolean => innerChecked.value || (props.name && props.name == radioGroupValue?.value) || (props.value && props.value == radioGroupValue?.value));
			const finalAllowUncheck = computed(():boolean => props.allowUncheck || (radioGroupProps?.allowUncheck));
			
			// const innerIcon = computed(():string => radioGroupProps?.icon || props.icon)
			// const innerSize = computed(():string => radioGroupProps?.size || props.size)
			const innerIcon = computed(():string => props.icon ?? radioGroupProps?.icon ?? 'circle')
			const innerSize = computed(():string => props.size ?? radioGroupProps?.size ?? 'medium')
			
			const innerIconSize = computed(():string|null => props.iconSize || radioGroupProps?.iconSize)
			const innerFontSize = computed(():string|null => props.fontSize || radioGroupProps?.fontSize)
			const innerCheckedColor = computed(():string|null => props.checkedColor || radioGroupProps?.checkedColor)
			const innerIconBgColor = computed(():string => props.iconBgColor || radioGroupProps?.iconBgColor)
			const innerIconBorderColor = computed(():string => props.iconBorderColor || radioGroupProps?.iconBorderColor )
			const innerIconDisabledColor = computed(():string => props.iconDisabledColor || radioGroupProps?.iconDisabledColor)
			const innerIconDisabledBgColor = computed(():string => props.iconDisabledBgColor || radioGroupProps?.iconDisabledBgColor)
			
			
			const styles = computed(()=>{
				const style:Record<string, any> = {};
				if(radioGroupProps&& radioGroupProps.gap) {
					style[radioGroupProps.direction == 'horizontal' ? 'margin-right' : 'margin-bottom'] = radioGroupProps.gap!
				}
				
				if(innerCheckedColor.value) {
					style['--l-radio-icon-checked-color'] = innerCheckedColor.value!
				}
				if(innerIconBorderColor.value) {
					style['--l-radio-icon-border-color'] = innerIconBorderColor.value!
				}
				if(innerIconDisabledColor.value) {
					style['--l-radio-icon-disabled-color'] = innerIconDisabledColor.value!
				}
				if(innerIconDisabledBgColor.value) {
					style['--l-radio-icon-disabled-bg-color'] = innerIconDisabledBgColor.value!
				}
				if(innerFontSize.value) {
					style['--l-radio-font-size'] = innerFontSize.value!
				}
				if(innerIconBgColor.value) {
					style['--l-radio-icon-bg-color'] = innerIconBgColor.value!
				}
				return style
			})
			
			const iconStyle = computed(()=>{
				const style:Record<string, any> = {}
				if(innerIconSize.valuel) {
					style['width'] = innerIconSize.value!
					style['height'] = innerIconSize.value!
					style['--l-radio-icon-size'] = innerIconSize.value!
				}
				return style
			})
			
			
			
			const onClick = (e: UniPointerEvent) => {
				if(isDisabled.value || isReadonly.value) return;
				const _name = props.value || props.name
				if(radioGroupChange && _name) {
					const value = finalAllowUncheck.value && radioChecked.value ? null : _name;
					radioGroupChange(value);
				} else {
					const value = finalAllowUncheck.value ? !radioChecked.value : true;
					innerChecked.value = value
				}
			}
			
			return {
				styles,
				innerChecked,
				iconStyle,
				innerIcon,
				radioChecked,
				isDisabled,
				onClick,
				
			}
		}
	});
</script>
<style lang="scss">
	@import './index-u';
</style>