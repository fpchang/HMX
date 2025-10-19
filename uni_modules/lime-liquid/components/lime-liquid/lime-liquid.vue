<template>
	<view>
		<demo-block title="基础">
			<!-- #ifdef VUE3 -->
			<l-liquid class="bg" :percent="target1" v-model:current="modelVale1" >
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
			<!-- #ifndef VUE3 -->
			<l-liquid class="bg" :percent="target1" :current.sync="modelVale1" >
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
		</demo-block>
		<demo-block title="外框">
			<!-- #ifdef VUE3 -->
			<l-liquid :percent="target1" v-model:current="modelVale1" outline>
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
			<!-- #ifndef VUE3 -->
			<l-liquid :percent="target1" :current.sync="modelVale1" outline>
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
		</demo-block>
		<demo-block title="自定义">
			<!-- #ifdef VUE3 -->
			<l-liquid class="custom" :percent="target1" v-model:current="modelVale1" outline>
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
			<!-- #ifndef VUE3 -->
			<l-liquid class="custom" :percent="target1" :current.sync="modelVale1" outline>
				<text class="text">{{modelVale1}}<text class="unit">%</text></text>
			</l-liquid>
			<!-- #endif -->
			<button @tap="onClick(20)">+</button>
			<button @tap="onClick(-20)">-</button>
		</demo-block>
	</view>
</template>
<script>
	import {ref, defineComponent} from '@/uni_modules/lime-shared/vue';
	export default defineComponent({
		setup() {
			const target1 = ref(50)
			const modelVale1 = ref(0)
			
			const onClick = number => {
				target1.value = Math.max(Math.min(100, target1.value + number), 0)
			}
			
			return {
				target1,
				modelVale1,
				onClick
			}
		}
	})
	
	
</script>
<style lang="scss">
	
	.text {
		font-size: 50rpx;
		font-weight: 600;
		color: white;
		/* text-shadow: 0 0 20rpx #007aff */
		text-shadow: 0 0 20rpx rgba(0, 0, 0, 0.4) //rgb(0 122 255 / 50%)
	}
	.unit {
		font-size: 0.5em;
	}
	.bg {
		--l-liquid-bg-color: radial-gradient(rgba(0,0,0,0) 40%, #1677ff 200%);
	}
	.custom {
		--l-liquid-border-radius: 20px;
		--l-liquid-inner-border-radius: 10px;
		--l-liquid-wave-color: linear-gradient(0deg, blue 0%, #fa6419 100%);
		--l-liquid-border-color: #5221b5; 
	}
</style>
