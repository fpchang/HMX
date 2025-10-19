<template>
	<scroll-view 
		class="l-date-strip l-date-strip__scroll"
		:scroll-x="true"
		:scroll-left="scrollLeft"
		:show-scrollbar="false"
		direction="horizontal"
		:style="[styles]"
		v-if="switchMode == 'none'">
			<l-date-strip-item 
				:dates="displayWeeks[0].dates" 
				:color="color"
				:activeBgColor="activeBgColor"
				:activeColor="activeColor"
				:bgColor="bgColor"
				:radius="radius"
				:switchMode="switchMode"
				:shape="shape"
				@click="onClick">
			</l-date-strip-item>
	</scroll-view>
	<swiper 
		v-else
		class="l-date-strip" 
		:style="[styles]"
		:current="currentWeekIndex" 
		:circular="swiperCircular" 
		@animationfinish="swiperFinish" 
		@change="swiperChange">
		<swiper-item v-for="(week, g) in displayWeeks" :key="g">
			<l-date-strip-item 
				:dates="week.dates" 
				:color="color"
				:activeBgColor="activeBgColor"
				:activeColor="activeColor"
				:bgColor="bgColor"
				:radius="radius"
				:switchMode="switchMode"
				:shape="shape"
				@click="onClick">
			</l-date-strip-item>
		</swiper-item>
	</swiper>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * DateStrip 日期条组件
	 * @description 用于显示和选择日期范围的横向滚动条
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-date-strip
	 * 
	 * @property {Number} firstDayOfWeek 周起始日
	 * @default 0
	 * @value 0 周日
	 * @value 1 周一
	 * @value 2 周二（类推至6）
	 * @property {DateFormatType} format 自定义日期格式函数
	 * @property {Number} maxDate 最大可选日期时间戳（默认当前时间+180天）
	 * @property {Number} minDate 最小可选日期时间戳（默认当前时间）
	 * @property {Number} value 当前选中日期时间戳（受控模式）
	 * @property {Number} defaultValue 默认选中日期时间戳
	 * @property {Number} modelValue双向绑定值
	 * @property {String} height 组件高度（支持单位：px/rpx）
	 * @property {String} gridWidth 单个日期格宽度
	 * @property {String} color 主题色（十六进制）
	 * @property {String} activeBgColor 选中背景色（默认使用主题色）
	 * @property {String} activeColor 选中文字颜色
	 * @property {String} bgColor 背景色
	 * @property {String} radius 圆角大小（单位px）
	 * @property {'week'|'none'} switchMode 切换模式
	 * @property {'square'|'circle'|'none'} shape 日期块形状
	 * @property {Boolean} showNavigation 是否显示导航按钮
	 * @property {String[]} weekdays 自定义星期数组（默认["日","一","二","三","四","五","六"]）
	 * @event {Function} change 切换时完成触发
	 * @event {Function} select 选中时触发
	 * @event {Function} scroll 滚动时触发
	 * @event {Function} panelChange 切换面板时触发
	 */
	import { defineComponent, ref, computed, watchEffect, onMounted, nextTick  } from '@/uni_modules/lime-shared/vue';
	import dateStripProps from './props';
	import { WeekDateCollection, DateStriPDay, DateType } from './type';
	import { unitConvert } from '@/uni_modules/lime-shared/unitConvert'
	import { getWeekRange, addDays, addWeeks, calcType, daysBetween } from './utils';
	
	export default defineComponent({
		props: dateStripProps,
		emits: ['change', 'select', 'update:modelValue', 'input'],
		setup(props, {emit, expose}) {
			// 当前选中的周索引
			const currentWeekIndex = ref(0)
			const scrollLeft = ref(0)
			// 是否循环滚动
			const swiperCircular = ref(true);
			const selectedDate = ref<Date|null>(null);
			// 计算一周的星期顺序
			const firstDayOfWeek = computed(() : number => Math.min(Math.max(props.firstDayOfWeek, 0), 6));
			
			// 计算最小和最大日期
			const today = new Date();
			const minDate = computed(() : Date => (props.minDate != null ? new Date(props.minDate!) : today));
			const maxDate = computed(() : Date => (props.maxDate != null
				? new Date(props.maxDate!)
				: addDays(today, 31))
			);
			
			const days = computed(():number => {
				return daysBetween(maxDate.value, minDate.value)
			})
			
			const styles = computed(()=>{
				const style:Record<string, any> = {}
				
				if(props.height) {
					style['height'] = props.height
				}
				if(props.bgColor) {
					style['background'] = props.bgColor
				}
				return style
			})
			
			const cache = new Map<number, WeekDateCollection>();
			const createWeek = (currentStartDate: Date, length: number):WeekDateCollection => {
				const dates : DateStriPDay[] = [];
				const time = currentStartDate.getTime()
				if(cache.has(time)) {
					return cache.get(time)!
				}
				for (let i = 0; i < length; i++) {
					const date = new Date(time);
					date.setDate(currentStartDate.getDate() + i);
					const week = date.getDay();
					const year = date.getFullYear();
					const month = date.getMonth() + 1; 
					const day =  date.getDate()
					const dateObj:DateStriPDay = {
						key: `${year}-${month}-${day}`,
						date,
						year,
						month,
						day,
						text: `${day}`.padStart(2, '0'),
						type: calcType(date, minDate.value, maxDate.value, selectedDate.value),
						prefix: props.weekdays[week],
					}
					dates.push(props.format != null ? props.format!(dateObj) : dateObj);
				}
				const obj:WeekDateCollection = {
					start: new Date(dates[0].year, dates[0].month - 1, dates[0].day).getTime(),
					end: new Date(dates[length - 1].year, dates[length - 1].month - 1, dates[length - 1].day).getTime(),
					dates
				} as WeekDateCollection
				
				// cache.set(time, obj)
				
				return obj
			}
			
			const currentDate = ref<Date>(today)
			
			// 计算要显示的三周数据
			const displayWeeks = computed(() : WeekDateCollection[] => {
				const weeks: WeekDateCollection[] = [];
				if(props.switchMode == 'week') {
					const currentRange = getWeekRange(currentDate.value, firstDayOfWeek.value);
					const offsetMap = new Map<number, number[]>([
						[0, [0, 1, -1]],
						[1, [-1, 0, 1]],
						[2, [1, -1, 0]],
					])
					let indices = offsetMap.get(currentWeekIndex.value)!
					indices.forEach(i => {
						 const weekDate = addWeeks(currentRange.start, i);
						 weeks.push(createWeek(weekDate, 7)) 
					})
				} else {
					 weeks.push(createWeek(minDate.value, days.value)) 
				}
				
				return weeks
			})
			
			const swiperChange = (event : UniSwiperChangeEvent) => {
				const delta = event.detail.current - currentWeekIndex.value;
				const newDate = addWeeks(currentDate.value, delta == 1 || delta == -2 ? 1 : -1);
				currentDate.value = newDate;
				currentWeekIndex.value = event.detail.current;
			}
			const swiperFinish = (_event : UniSwiperAnimationFinishEvent) => {
				
			}
			
			const onClick = (day: DateStriPDay) => {
				if(day.type == 'disabled') return
				selectedDate.value = day.date
				const v = day.date.getTime()
				emit('change', v)
				emit('select', v)
				emit('update:modelValue', v)
				// #ifdef VUE2
				emit('input', v)
				// #endif
			}
			
			
			const scrollToDate = (date: Date) => {
				currentDate.value = date
				if(props.switchMode != 'none') return
				scrollLeft.value = unitConvert(props.gridWidth || 50)  *  daysBetween(date, minDate.value)
			}
			
			watchEffect(()=>{
				const value = props.value || props.modelValue || props.defaultValue 
				if(!value) return
				selectedDate.value = new Date(value)
			})
			
			onMounted(()=>{
				nextTick(()=>{
					scrollToDate(currentDate.value)
				})
			})
			
			// #ifdef VUE3
			expose({
				scrollToDate
			})
			// #endif
			return {
				styles,
				scrollLeft,
				currentWeekIndex,
				swiperCircular,
				swiperFinish,
				swiperChange,
				displayWeeks,
				onClick,
				// #ifdef VUE2
				scrollToDate
				// #endif
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>