<template>
	<!-- #ifndef APP-NVUE -->
	<view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<scroller ref="scroller" @scroll="scroll">
		<view ref="topAnchor"><text></text></view>
	<!-- #endif -->
		<demo-block title="组件类型">
			<demo-cell title="圆形" @click="onClick('circle')"></demo-cell>
			<demo-cell title="方形" @click="onClick('square')"></demo-cell>
		</demo-block>
		<view style="height: 1050px;"></view>
		<!-- nvue 需要设置topAnchor -->
		<l-back-top  bottom="90" target="topAnchor" :shape="shape" text="顶部" :offset="200">
			<!-- <template #icon>
				<text>1</text>
			</template> -->
		</l-back-top>		
		
	<!-- #ifndef APP-NVUE -->
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	</scroller>
	<!-- #endif -->
</template>
<script>
	export default {
		data() {
			return {
				shape: 'circle'
			}
		},
		methods: {
			onClick(type) {
				this.shape = type
			}
		}
	}
</script>
<style>
</style>
