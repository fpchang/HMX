<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">倒计时</text>
		<text class="demo-block__desc-text">用于实时展示倒计时数值，支持毫秒精度。</text>
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">时分秒</text>
				<view class="demo-block__body">
					<l-count-down :time="time"></l-count-down>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">自定义格式</text>
				<view class="demo-block__body">
					<l-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒"></l-count-down>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">毫秒级渲染</text>
				<view class="demo-block__body">
					<l-count-down :millisecond="true" :time="time" format="HH:mm:ss:SS"></l-count-down>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">自定义样式</text>
				<view class="demo-block__body row">
					<l-count-down :time="time">
						<template #default="{hours, minutes,seconds }">
							<text class="block">{{ hours }}</text>
							<text class="colon">:</text>
							<text class="block">{{ minutes }}</text>
							<text class="colon">:</text>
							<text class="block">{{ seconds }}</text>
						</template>
					</l-count-down>
				</view>
			</view>

			<view class="demo-block card">
				<text class="demo-block__title-text large">手动控制</text>
				<view class="demo-block__body">
					<l-count-down ref="countDown" :millisecond="true" :time="3000" :auto-start="false" format="ss:SSS"
						@finish="onFinish" />
					<button style="margin-top: 20rpx" @click="start">播放</button>
					<button style="margin-top: 20rpx" @click="pause">暂停</button>
					<button style="margin-top: 20rpx" @click="reset">重置</button>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				time: 30 * 60 * 60 * 1000
			}
		},
		methods: {
			start(){
				this.$refs.countDown.start();
			},
			pause(){
				this.$refs.countDown.pause();
			},
			reset(){
				this.$refs.countDown.reset();
			},
			onFinish(){
				console.log('倒计时结束')
			}
		}
	}
</script>

<style lang="scss">
	.row {
		flex-direction: row;
		align-items: center;
	}

	.colon {
		margin: 0 4px;
		color: #1989fa;
	}

	.block {
		width: 22px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background-color: #1989fa;
		padding: 4px 0;
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