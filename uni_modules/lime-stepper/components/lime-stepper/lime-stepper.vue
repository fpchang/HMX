<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Stepper 步进器</text>
		<text class="demo-block__desc-text">步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。</text>
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body row">
					<l-stepper v-model="value" />
					<view style="width: 20px;"></view>
					<l-stepper v-model="decimal" :integer="false" :step="0.5" />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">限制输入范围</text>
				<view class="demo-block__body row">
					<l-stepper :default-value="0" />
					<view style="width: 20px;"></view>
					<l-stepper
					      v-model="number"
					      :step="1"
					      :min="0"
					      :max="10"
					      @overlimit="onOverlimit"
					      @change="onChange"
					      @blur="onBlur"
					    />
					<view style="width: 20px;"></view>
					<l-stepper :default-value="999" :max="999" />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">禁用</text>
				<view class="demo-block__body row">
					<!-- <l-stepper :default-value="0" :disabled="true" /> -->
					<view style="width: 20px;"></view>
					<l-stepper :default-value="0" :disableInput="true" />
				</view>	
			</view>	
			<!-- <view class="demo-block card">
				<text class="demo-block__title-text">样式{{number}}</text>
				<view class="demo-block__body row">
					<l-stepper theme="outline"/>
					<view style="width: 20px;"></view>
					<l-stepper v-model="number" theme="normal"/>
					<view style="width: 20px;"></view>
					<l-stepper v-model="number" theme="solid" iconRadius="50rpx" :minusStyle="{background: 'red',border:0, color:'white'}"/>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">尺寸</text>
				<view class="demo-block__body row">
					<l-stepper size="small"/>
					<view style="width: 20px;"></view>
					<l-stepper/>
					<view style="width: 20px;"></view>
					<l-stepper size="large"/>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">授控</text>
				<view class="demo-block__body row">
					<l-stepper :value="asyncNumber" @change="asyncChange" />
				</view>	
			</view>	 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 2,
				decimal: 3.5,
				value2: 3,
				number: 3,
				asyncNumber: 3,
				
			}
		},
		methods: {
			onOverlimit($type) {
				 console.log(`onOverlimit ${$type}`);
			},
			onChange($event) {
				console.log(`change to ${$event}`);
			},
			onBlur($event) {
				console.log(`blur to ${$event}`);
			},
			asyncChange(v) {
				uni.showLoading({
					title: '加载中'
				})
				setTimeout(() => {
					uni.hideLoading()
					if (v > 10) {
						this.asyncNumber = 10
						return
					}
					this.asyncNumber = v
				}, 1000);
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.btn {
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		align-self: center;
	}

	.demo-block {
		margin: 32px 10px 0;

		// overflow: visible;
		&.card {
			background-color: white;
			padding: 30rpx;
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

				&.large {
					color: rgba(0, 0, 0, 0.9);
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
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