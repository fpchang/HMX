<template>
	<view class="l-stepper" 
		:class="[
			`l-stepper--${size}`
		]">
		<view 
			class="l-stepper__minus" 
			:class="[
				`l-stepper__icon--${size}`,
				`l-stepper__minus--${theme}`,
				`l-stepper__minus--${size}`,
				minusDisabled ? `l-stepper--${theme}-disabled`: ''
			]" 
			:style="[iconStyle, minusStyle]"
			data-type="minus"
			@touchstart="touchstart"
			@touchend="touchend"
			@click.stop="minusValue">
			<l-icon class="l-stepper__icon l-stepper__minus-icon" name="remove"></l-icon>
		</view>
		<input class="l-stepper__input" 
			:class="[
				`l-stepper__input--${size}`,
				`l-stepper__input--${theme}`,
				innerDisabled ? `l-stepper--${theme}-disabled` : ''
			]" 
			:type="integer ? 'number': 'digit'" 
			:key="inputKey"
			:style="[inputStyles, inputStyle]"
			:cursor-color="cursorColor"
			:disabled="disableInput || innerDisabled" 
			:value="stepperValue"
			@focus="handleFocus" 
			@blur="handleBlur"
			@input="handleInput" />
		<view 
			class="l-stepper__plus" 
			:class="[
				`l-stepper__icon--${size}`,
				`l-stepper__plus--${theme}`,
				`l-stepper__plus--${size}`,
				plusDisabled ? `l-stepper--${theme}-disabled`: ''
			]"
			:style="[iconStyle, plusStyle]"
			data-type="plus"
			@touchstart="touchstart"
			@touchend="touchend"
			@click.stop="plusValue">
			<l-icon class="l-stepper__icon l-stepper__plus-icon"  name="add"></l-icon>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Stepper 步进器组件
	 * @description 用于数字输入场景，支持增减操作和多种样式风格
	 * <br>插件类型：LStepperComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-stepper
	 * 
	 * @property {string} name 表单字段名称
	 * @property {boolean} disableInput 禁用输入框（默认：false）
	 * @property {boolean} disabled 禁用全部操作（默认：false）
	 * @property {boolean} readonly 只读（默认：false）
	 * @property {string} inputWidth 输入框宽度（支持CSS单位，默认："60px"）
	 * @property {boolean} integer 仅允许整数（默认：false）
	 * @property {number} max 最大值（默认：100）
	 * @property {number} min 最小值（默认：0）
	 * @property {'small' | 'medium' | 'large'} size 组件尺寸（默认："medium"）
	 * @value small
	 * @value medium
	 * @value large
	 * @property {number} step 步长（默认：1）
	 * @property {'normal' | 'filled' | 'outline' | 'solid'} theme 组件风格（默认："normal"）
	 * @value normal
	 * @value filled
	 * @value outline
	 * @value solid
	 * @property {number} value 当前值（兼容旧版）
	 * @property {number} defaultValue 默认值（非受控属性）
	 * @property {number} modelValue 当前值（推荐使用v-model）
	 * @property {boolean} longPress 开启长按手势（默认：true）
	 * @property {string} iconRadius 按钮圆角（支持CSS单位）
	 * @property {object} minusStyle 减号按钮自定义样式
	 * @property {object} plusStyle 加号按钮自定义样式
	 * @property {object | string} inputStyle 输入框自定义样式
	 * @property {string} cursorColor 输入框光标颜色（默认：主题色）
	 * @event {Function} change 值变化时触发（返回当前值）
	 * @event {Function} overlimit 达到极限值时触发（返回max/min）
	 * @event {Function} blur 
	 * @event {Function} focus 
	 */
	import { defineComponent, ref, computed, inject } from '@/uni_modules/lime-shared/vue';
	import { formatNumber, add, getLen , formatValue, LONG_PRESS_INTERVAL, LONG_PRESS_START_TIME} from './utils';
	import stepperProps from './props';
	
	export default defineComponent({
		name: 'l-stepper',
		props: stepperProps,
		emits: ['focus', 'blur', 'change','input' , 'overlimit','update:modelValue'],
		setup(props, {emit}) {
			const _modelValue = ref<number|null>(null)
			const inputKey = ref(0)
			const stepperValue = computed({
				set(value : number) {
					_modelValue.value = value;
					emit('update:modelValue', value)
					// #ifdef VUE2
					emit('input', value)
					// #endif
				},
				get() : number {
					if(props.value != null) {
						return props.value ?? 0
					}
					if(_modelValue.value == null) {
						_modelValue.value = props.modelValue ?? props.defaultValue ?? 0; // !isNaN(parseFloat(`${modelValue.value}`)) ? modelValue.value : (props.defaultValue ?? 0)
					}
					return props.modelValue ?? _modelValue.value!
				}
			})
			const formDisabled = inject<Ref<boolean|null>|null>('formDisabled', null)
			const formReadonly = inject<Ref<boolean|null>|null>('formReadonly', null)
			
			const isReadonly = computed(():boolean=>{
				if (props.readonly) return props.readonly;
				return formReadonly?.value ?? false;
			})
			const innerDisabled = computed(():boolean => (formDisabled?.value ?? false) || props.disabled)
			const minusDisabled = computed(():boolean => innerDisabled.value || stepperValue.value <= props.min)
			const plusDisabled = computed(():boolean => innerDisabled.value || stepperValue.value >= props.max)
			const isDisabled = (type : 'minus' | 'plus'):boolean => {
				if (innerDisabled.value) return true;
				if (type == 'minus' && minusDisabled.value) {
					return true;
				}
				if (type == 'plus' && plusDisabled.value) {
					return true;
				}
				return false;
			};
			const iconStyle = computed(() => {
				const style = {}
				if (!['small', 'medium', 'large'].includes(props.size)) {
					style[`width`] =  props.size
					style[`height`] =  props.size
				}
				if(props.iconRadius) {
					style[`border-radius`] =  props.iconRadius
				}
				return style
			})
			
			const inputStyles = computed(() => {
				const style = {}
				if (!['small', 'medium', 'large'].includes(props.size)) {
					style[`height`] =  props.size
				}
				return style
			}) 
			
			const updateValue = (value : string) => {
				const _value = Number(formatNumber(`${value}`, !props.integer));
				stepperValue.value = _value;
				emit('change', _value)
			};
			
			const minusValue = () => {
				if(isReadonly.value) return;
				if (isDisabled('minus')) {
					emit('overlimit', 'minus')
					return;
				} 
				updateValue(
					formatValue(
						add(stepperValue.value, -props.step),
						props.min,
						props.max,
						props.step
					)
				);
			}
			const plusValue = () => {
				if(isReadonly.value) return;
				if (isDisabled('plus')) {
					emit('overlimit', 'plus')
					return;
				};
				updateValue(
					formatValue(
						add(stepperValue.value, props.step),
						props.min,
						props.max,
						props.step
					)
				);
			}
			const handleFocus = (_e : UniInputFocusEvent) => {
				emit('focus', stepperValue.value)
			}
			const handleBlur = (e : UniInputBlurEvent) => {
				const { value } = e.detail;
				if(parseFloat(value) > stepperValue.value) {
					stepperValue.value = props.max
					inputKey.value++
				}
				emit('blur', stepperValue.value)
			}
			const handleInput = (e : UniInputEvent) => {
				const { value } = e.detail;
				// 不允许输入空值
				if (value == '') {
					stepperValue.value = props.min
					return;
				}
				const cur = parseFloat(value)
				if(cur > props.max) {
					nextTick(()=>{
						stepperValue.value = props.max
					})
					return
				}
				updateValue(
					formatValue(
						add(parseFloat(value), 0),
						props.min,
						props.max,
						props.step
					),
				);
			}
			// 长按递增
			let timer = -1;
			
			const touchstart = (e: UniTouchEvent) => {
				if(!props.longPress) return
			
				const type = e.currentTarget?.dataset?.['type'] as "minus" | "plus" | null;
				if(!type) return
				const step = props.step * (type == 'minus' ? -1 : 1);
				
				const longPress = () => {
					if (isDisabled(type)) return;
				    updateValue(
						formatValue(
							add(stepperValue.value, step),
							props.min,
							props.max,
							props.step
						)
					);
				    timer = setTimeout(longPress, LONG_PRESS_INTERVAL);
				};
				timer = setTimeout(longPress, LONG_PRESS_START_TIME);
			}
			const touchend = (e: UniTouchEvent) => {
				if(!props.longPress) return
				clearTimeout(timer)
			}
			return {
				innerDisabled,
				stepperValue,
				minusDisabled,
				plusDisabled,
				iconStyle,
				inputStyles,
				minusValue,
				plusValue,
				handleFocus,
				handleBlur,
				handleInput,
				touchstart,
				touchend,
				inputKey
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>