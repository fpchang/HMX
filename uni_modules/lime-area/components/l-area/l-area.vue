<template>
	<l-cascade
		ref="pickerRef"
		v-if="!uniCloud"
		v-model="selectedValues" 
		:cancelBtn="cancelBtn"
		:cancelStyle="cancelStyle" 
		:confirmBtn="confirmBtn"
		:confirmStyle="confirmStyle" 
		:title="title" 
		:titleStyle="titleStyle" 
		:loading="loading"
		:loadingColor="loadingColor" 
		:loadingMaskColor="loadingMaskColor" 
		:loadingSize="loadingSize"
		:itemHeight="itemHeight" 
		:itemColor="itemColor" 
		:itemFontSize="itemFontSize" 
		:itemActiveColor="itemActiveColor"
		:indicatorStyle="indicatorStyle" 
		:bgColor="bgColor" 
		:groupHeight="groupHeight" 
		:radius="radius"
		:resetIndex="resetIndex" 
		:columns="localColumns" 
		@cancel="onCancel" 
		@confirm="onConfirm">
	</l-cascade>
	<l-picker 
		ref="pickerRef"
		v-if="uniCloud" 
		v-model="selectedValues" 
		:cancelBtn="cancelBtn"
		:cancelStyle="cancelStyle" 
		:confirmBtn="confirmBtn"
		:confirmStyle="confirmStyle" 
		:title="title" 
		:titleStyle="titleStyle" 
		:loading="loading"
		:loadingColor="loadingColor" 
		:loadingMaskColor="loadingMaskColor" 
		:loadingSize="loadingSize"
		:itemHeight="itemHeight" 
		:itemColor="itemColor" 
		:itemFontSize="itemFontSize" 
		:itemActiveColor="itemActiveColor"
		:indicatorStyle="indicatorStyle" 
		:bgColor="bgColor" 
		:groupHeight="groupHeight" 
		:radius="radius"
		:resetIndex="resetIndex" 
		@pick="onPick" 
		@confirm="onConfirm">
		<l-picker-item :options="provinces"></l-picker-item>
		<l-picker-item :options="cities" v-if="columnsNum > 1"></l-picker-item>
		<l-picker-item :options="counties" v-if="columnsNum > 2"></l-picker-item>
	</l-picker>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Area 地区选择组件
	 * @description 支持省市区三级联动的选择器组件，可对接本地数据或uniCloud云数据
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-area
	 * 
	 * @property {string} cancelBtn 取消按钮文字
	 * @property {string|object} cancelStyle 取消按钮样式（支持CSS字符串）
	 * @property {string} confirmBtn 确定按钮文字
	 * @property {string|object} confirmStyle 确定按钮样式（支持CSS字符串）
	 * @property {string} title 标题文字
	 * @property {string|object} titleStyle 标题样式（支持CSS字符串）
	 * @property {boolean} uniCloud 是否启用uniCloud数据源（必填）
	 * @property {object} localData 本地数据源（与uniCloud二选一）
	 * @property {number} columnsNum 显示列数（必填，默认3=省市区）
	 * @property {PickerValue[]} modelValue 选中值（支持v-model）
	 * @property {PickerValue[]} defaultValue 默认选中值
	 * @property {PickerValue[]} value 选中值（兼容旧版）
	 * @property {boolean} loading 是否显示加载状态
	 * @property {string} loadingColor 加载图标颜色
	 * @property {string} loadingMaskColor 加载遮罩颜色
	 * @property {string} loadingSize 加载图标尺寸
	 * @property {string} itemHeight 选项行高度（支持CSS单位）
	 * @property {string} itemColor 选项文字颜色
	 * @property {string} itemFontSize 选项字体大小
	 * @property {string} itemActiveColor 选中项高亮颜色
	 * @property {string} indicatorStyle 指示器样式（支持CSS字符串）
	 * @property {string} bgColor 背景颜色
	 * @property {string} groupHeight 选项组高度（支持CSS单位）
	 * @property {string} radius 圆角半径（支持CSS单位）
	 * @property {boolean} resetIndex 是否重置选中索引
	 * @event {Function} confirm 点击确定时触发（返回PickerConfirmEvent）
	 * @event {Function} cancel 点击取消时触发
	 * @event {Function} change 值变化时触发（返回PickerPickEvent）
	 */
	import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount } from '@/uni_modules/lime-shared/vue';
	import type { PickerColumn, PickerColumnItem, PickerConfirmEvent, PickerPickEvent, PickerValue } from '@/uni_modules/lime-picker';
	
	import areaProps from './props'
	import { useCascaderAreaData, pushAt } from './utils';
	export default defineComponent({
		name: 'l-area',
		props: areaProps,
		emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
		setup(props, {emit, expose}) {
			const cache = new Map<string, PickerColumnItem[]>()
			// 省
			const provinces = ref<PickerColumnItem[]>([]);
			// 市
			const cities = ref<PickerColumnItem[]>([]);
			// 区
			const counties = ref<PickerColumnItem[]>([]);
			
			const selectedValues = ref<PickerValue[]>(props.value??props.modelValue??props.defaultValue??[])
			const getUniCloudCity = (where: UTSJSONObject):Promise<PickerColumnItem[]> => {
				return new Promise((resolve, reject)=>{
					const db = uniCloud.databaseForJQL();
					const collection = db.collection('opendb-city-china');
					const type = where.getNumber('type') ?? 4;
					const code = where.getString('parent_code');
					if(code != null && cache.has(code)) {
						const data = cache.get(code)!
						if(type == 1) {
							cities.value = data
						} else if(type == 2) {
							counties.value = data
						}
						resolve(data)
						return
					}
					uni.showLoading({
						title: '加载中'
					})
					collection.where(where).get().then(res => {
						uni.hideLoading()
						const data = res.data.map(item => ({
							label: item.getString('name')??'',
							value: item.getString('code')??'',
						} as PickerColumnItem))
						if(type == 1) {
							cache.set(code!, data)
							cities.value = data
						} else if(type == 2) {
							cache.set(code!, data)
							counties.value = data
						} else {
							provinces.value = data;
						}
						resolve(data)
					}).catch(err=>{
						uni.hideLoading()
						uni.showToast({
							icon: 'error',
							title: '加载失败'
						})
						reject(err)
					})
				})
				
				
			}
			
			const localColumns = computed(():UTSJSONObject[] => {
				return useCascaderAreaData(props.localData, props.columnsNum)
			});
			
			const onPick = async ({ values, column, index } : PickerPickEvent) => {
				if (column == 0) {
					// 更改省
					const _provinces = provinces.value[index].value
					pushAt(selectedValues.value, 0, _provinces)
					if(props.columnsNum == 1) return
					const _cities = await getUniCloudCity({type: 1, parent_code: _provinces})
					pushAt(selectedValues.value, 1, _cities[0].value)
					if(props.columnsNum == 2) return
					const _counties = await getUniCloudCity({type: 2, parent_code: _cities[0].value})
					pushAt(selectedValues.value, 2, _counties[0].value)
				} else if(column == 1) {
					// 更改市
					if(props.columnsNum == 1) return
					const _cities = cities.value[index].value
					pushAt(selectedValues.value, 1, _cities)
					if(props.columnsNum == 2) return
					const _counties = await getUniCloudCity({type: 2, parent_code: _cities})
					pushAt(selectedValues.value, 2, _counties[0].value)
				} else if(column == 2) {
					if(props.columnsNum == 2) return
					const _counties = counties.value[index].value
					pushAt(selectedValues.value, 2, _counties)
				}
				
			}
			const onConfirm = (event : PickerConfirmEvent) => {
				emit('confirm', event)
			}
			const onCancel = () => {
				emit('cancel')
			}
			
			const update = async () => {
				if(props.uniCloud) {
					let cursor:PickerColumnItem[] = provinces.value
					if(provinces.value.length == 0) {
						cursor = await getUniCloudCity({type: 0})
					}
					
					for (let i = 1; i < props.columnsNum; i++) {
						const last = i - 1
						const value = selectedValues.value.length > last ? selectedValues.value[last] : cursor[0].value;
						cursor = await getUniCloudCity({type: i, parent_code: value})
						pushAt(selectedValues.value, last, value)
						if(i == props.columnsNum - 1) {
							const selectedValue = selectedValues.value.length > i ? selectedValues.value[i] : null;
							const item = cursor.find(it => it.value == selectedValue)
							pushAt(selectedValues.value, i, item?.value ?? cursor[0].value)
						}
					}
				}
				
			}
			
			const stop = watch(selectedValues, (v: PickerValue[])=>{
				emit('change', [...selectedValues.value])
				emit('update:modelValue', [...selectedValues.value])
			})
			
			
			onMounted(() => {
				update()
			})
			
			onBeforeUnmount(()=>{
				stop()
			})
			
			const pickerRef = ref<ComponentPublicInstance|null>(null)
			const confirm = () => {
				pickerRef.value?.confirm()
			}
			const getSelectedOptions = ():PickerConfirmEvent => {
				return pickerRef.value!.getSelectedOptions()
			}
			// #ifdef VUE3
			expose({
				confirm,
				getSelectedOptions
			})
			// #endif
			
			return {
				pickerRef,
				provinces,
				cities,
				counties,
				selectedValues,
				localColumns,
				onPick,
				onConfirm,
				onCancel,
				// #ifdef VUE2
				confirm,
				getSelectedOptions
				// #endif
			}
		}
	})
</script>
<style>
</style>
