<template>
	<l-popup v-model="show" position="bottom" :overlay="overlay" :safeAreaInsetBottom="false" 
		overlay-style="background:rgba(0,0,0,0);backdrop-filter:blur(0)" @close="handleClose">
		<view class="l-keyboard" :style="[styles]">
			<view class="l-keyboard__header">
				<view class="l-keyboard__icon-wrap" v-if="type == 'car'" v-show="!isProvince" @click="handleBack">
					<l-icon class="l-keyboard__icon" name="chevron-left" size="36rpx"></l-icon>
				</view>
				<text class="l-keyboard__title" v-if="title != null">{{ title }}</text>
				<view class="l-keyboard__icon-wrap l-keyboard__icon-right" @click="handleClose">
					<l-icon class="l-keyboard__icon" name="chevron-down" size="36rpx"></l-icon>
				</view>
			</view>
			<view class="l-keyboard__body">
				<view class="l-keyboard__keys">
					<template v-for="(item, index) in keys" :key="item.text">
						<view 
							class="l-keyboard__key-wrap" 
							:style="[item.keysPerRow != null ? {flex: `${100 / (item.keysPerRow ?? 1) * (item.wider ? 3 : 1) }%`}:{}]"
							:class="{
								'l-keyboard__key-wrap--wider': item.wider
							}">
							<button 
								class="l-keyboard__key l-keyboard__key--text"
								:hover-class="item.type == 'close' ? 'l-keyboard__key-close--hover' : 'l-keyboard__key--hover'"
								:class="{
									'l-keyboard__key--mini': item.keysPerRow != null,
									'l-keyboard__key-close--text': item.type == 'close',
									'l-keyboard__key-close': item.type == 'close'
								}" 
								@click="handlePress(item.type, item.text)">
								{{item.text}}
							</button>
							
						</view>
					</template>
				</view>
				<view class="l-keyboard__sidebar" v-if="type == 'custom'">
					<view class="l-keyboard__key-wrap" style="flex-basis: auto; padding-right: 0;">
						<button class="l-keyboard__key l-keyboard__key--text" hover-class="l-keyboard__key--hover" style="flex: 1;" @click="handlePress('delete', '')">
							{{deleteText}}
						</button>
					</view>
					<view class="l-keyboard__key-wrap" style="flex: 1; padding-right: 0;">
						<!-- <button class="l-keyboard__key l-keyboard__key-close" hover-class="l-keyboard__key-close--hover" style="flex: 1;" @click="handlePress('close', '')">
							{{closeText}}
						</button> -->
						<view class="l-keyboard__key l-keyboard__key-close" 
							:hover-stay-time="70" 
							:hover-start-time="20" 
							hover-class="l-keyboard__key-close--hover" 
							style="flex: 1;justify-content: center;align-items: center;" 
							@click="handlePress('close', '')">
							<text class="l-keyboard__key--text">{{closeText}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</l-popup>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Keyboard 虚拟键盘组件
	 * @description 提供安全输入、自定义布局等功能的虚拟键盘
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-keyboard
	 * 
	 * @property {boolean} visible 控制键盘显示/隐藏（必填）
	 * @property {string} [title] 键盘标题文字
	 * @property {'custom' | 'default' | 'car' | 'idcard'} type 键盘类型
	 * @value default 标准数字键盘
	 * @value car     车牌专用键盘（含省份简称）
	 * @value idcard  身份证键盘（含X键）
	 * @value custom  完全自定义布局
	 * @property {boolean} safeAreaInsetBottom 适配底部安全区域（默认true）
	 * @property {string[]} extraKey 额外功能键（如：['.','@']）
	 * @property {number} zIndex 层级（默认：999）
	 * @property {boolean} showDeleteKey 显示删除键（默认true）
	 * @property {boolean} randomKeyOrder 随机排列数字键（安全模式）
	 * @property {string} closeText 关闭按钮文字（默认：'完成'）
	 * @property {string} deleteText 删除键文字（默认：'删除'）
	 * @property {number} maxlength 最大输入长度（0表示不限）
	 * @property {boolean} overlay 显示遮罩层（默认true）
	 * @property {Function} beforeClose 关闭前的异步验证回调
	 * @event {Function} input 按键输入时触发（返回当前输入值）
	 * @event {Function} close 关闭键盘时触发
	 * @event {Function} delete 删除操作时触发
	 * @event {Function} key-up 按键按下触发
	 * @event {Function} blur 关闭键盘时触发
	 */
	import { defineComponent, ref, computed, onMounted } from '@/uni_modules/lime-shared/vue';
	import keyboardProps from './props';
	import { genDefaultKeys, genCustomKeys, genProvinceKeys, getLettersAndNumbers } from './utils'
	import { EXTRA_KEYS } from './constants'
	
	export default defineComponent({
		name: 'l-keyboard',
		props: keyboardProps,
		emits: ['delete', 'update:visible', 'update:modelValue', 'input', 'close', 'key-up', 'blur'],
		setup(props, {emit}) {
			
			const isProvince = ref(true);
			const safeBottom = ref(0);
			const isCar = computed(():boolean => props.type == 'car')
			const maxlength = computed(():number => isCar.value ? 8 : props.maxlength);
			const modelValue = computed({
				set(value: string) {
					emit('update:modelValue', value)
					emit('input', value)
				},
				get():string {
					return props.value ?? props.modelValue
				}
			})
			const show = computed({
				set(value: boolean) {
					emit('update:visible', value)
					if(!value){
						emit('close')
						emit('blur')
					}
				},
				get():boolean {
					return props.visible
				}
			})
			const keys = computed(() : Key[] => {
				if(isCar.value) {
					return isProvince.value ? genProvinceKeys(): getLettersAndNumbers()
				}
				if(props.type == 'custom') {
					return genCustomKeys(props.randomKeyOrder, props.extraKey)
				}
				return genDefaultKeys(props.randomKeyOrder, props.showDeleteKey, props.deleteText, props.type == 'idcard' ? ['X'] : props.extraKey)
			})
			const styles = computed(()=>{
				const style:Record<string, any> = {}
				if(safeBottom.value > 0 && props.safeAreaInsetBottom) {
					style['padding-bottom'] = safeBottom.value + 'px'
				}
				return style
			})
			
			const handleBack = () => {
				isProvince.value = true;
			}
			const handleClose = () => {
				emit('close')
				emit('blur')
				emit('update:visible', false)
			}
			const handlePress = (type: string, text: string) => {
				if(isProvince.value && isCar.value) {
					isProvince.value = false;
					// modelValue.value = text;
					modelValue.value = text + modelValue.value.slice(1, modelValue.value.length)
					emit('key-up', text)
					return
				}
				if(type == 'delete') {
					emit('delete')
					modelValue.value = modelValue.value.slice(0, modelValue.value.length - 1)
					if(modelValue.value.length < 2) {
						isProvince.value = true;
					}
				} else if(type == 'close' || text == EXTRA_KEYS.close) {
					if(props.beforeClose != null) {
						props.beforeClose!({type, value: modelValue.value}).then((res)=>{
							if(!res) return
							handleClose()
						})
						return
					}
					handleClose()
				} else if(modelValue.value.length < maxlength.value) {
					modelValue.value = modelValue.value + text;
					emit('key-up', text)
				}
			}
			
			onMounted(() => {
			  if (props.safeAreaInsetBottom) {
			    const { safeArea, screenHeight, safeAreaInsets } = uni.getWindowInfo()
			    // #ifdef MP-WEIXIN
			    safeBottom.value = screenHeight - (safeArea!.bottom || 0)
			    // #endif
			    // #ifndef MP-WEIXIN
			    safeBottom.value = safeAreaInsets ? safeAreaInsets.bottom : 0
			    // #endif
			  }
			})
			
			return {
				show,
				isProvince,
				keys,
				styles,
				handleClose,
				handleBack,
				handlePress
			}
			
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>
