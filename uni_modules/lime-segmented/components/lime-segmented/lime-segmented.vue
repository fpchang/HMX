<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Segmented 分段器</text>
		<text class="demo-block__desc-text">用于对复杂区域进行分组和隐藏 常用于订单信息展示</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" :options="options"></l-segmented>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">形状</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" shape="round" :options="options"></l-segmented>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">禁用</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" shape="round" type="button" disabled :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" shape="round" type="text" disabled :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" shape="round" disabled :options="options"></l-segmented>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text">类型</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" type="button" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" type="text" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" :options="options"></l-segmented>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">尺寸</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" size="small" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" size="large" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" type="button" size="small" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" type="button" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" type="button" size="large" :options="options"></l-segmented>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义样式</text>
				<view class="demo-block__body">
					<l-segmented v-model="value" type="button" color="#34c471" active-color="#fff" bg-color="#f3fff8" slider-color="#34c471" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" shape="round" color="#fff" bg-color="#ffb400" active-color="#653a00" :options="options"></l-segmented>
					<view style="height: 10px;"></view>
					<l-segmented v-model="value" type="text" color="#000" slider-color="#FF4D4F"  active-color="#FF4D4F" :options="options"></l-segmented>
					
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">受控</text>
				<view class="demo-block__body">
					<l-segmented :value="value" :options="options" @click="click"></l-segmented>
					
				</view>	
			</view>	
		</view>	
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				value: 2,
				options: ['选项1','选项2','选项3','选项4']
			}
		},
		methods: {
			click(index) {
				uni.showLoading({
					title: '校验中'
				})
				
				setTimeout(()=>{
					uni.hideLoading()
					this.value = index
				},1000)
			}
		}
	}

</script>

<style lang="scss">
	
	.btn {
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		align-self: center;
	}
	.demo-block {
		margin: 32px 0 0;
		
		// overflow: visible;
		&.card{
			background-color: white;
			padding: 30rpx;
			margin-left: 10px !important;
			margin-right: 10px !important;
			margin-bottom: 20rpx !important;
		}
		&__title {
			margin: 0;
			margin-top: 8px;
			&-text {
				color: rgba(0, 0, 0, 0.6);
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				display: flex;
				margin-left: 20px;
				&.large {
					color: rgba(0, 0, 0, 0.9);
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					margin-left: 20px;
				}
				&.ultra {
					color: rgba(0, 0, 0, 0.9);
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
				}
			}
		}
		&__desc-text {
			color: rgba(0, 0, 0, 0.6);
			margin: 8px 16px 0 0;
			font-size: 14px;
			line-height: 22px;
			margin-left: 20px;
		}
		&__body {
			margin: 16px 0;
			overflow: visible;
			.demo-block {
				// margin-top: 0px;
				margin: 0;
			}
		}
	}
</style>