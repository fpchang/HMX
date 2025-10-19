<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">LoadMore 加载更多</text>
		<text class="demo-block__desc-text">一般用于标识页面底部加载数据时的状态。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-load-more status="remaining" @load-more="load"></l-load-more>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">loading</text>
				<view class="demo-block__body">
					<l-load-more status="loading"></l-load-more>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">finished</text>
				<view class="demo-block__body">
					<l-load-more status="finished"></l-load-more>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">error</text>
				<view class="demo-block__body">
					<l-load-more status="error" @reload="reload"></l-load-more>
				</view>	
			</view>
			
			<view class="demo-block card">
				<text class="demo-block__title-text"></text>
				<view class="demo-block__body">
					<l-load-more :status="status"></l-load-more>
					
					<radio-group @change="radioChange" class="radio-group">
						<radio style="margin-top:20rpx" :checked=" status == 'remaining'" value="remaining">remaining</radio>
						<radio style="margin-top:20rpx" :checked=" status == 'loading'" value="loading">loading</radio>
						<radio style="margin-top:20rpx" :checked=" status == 'finished'" value="finished">finished</radio>
						<radio style="margin-top:20rpx" :checked=" status == 'error'" value="error">error</radio>
					</radio-group>
				</view>	
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'remaining'
			}
		},
		methods: {
			radioChange(e) {
				this.status = e.detail.value
			},
			load() {
				console.log('点击了 load')
			},
			reload() {
				console.log('点击了 reload')
			}
		}
	}
</script>

<style lang="scss">
	.row{
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
		&.card{
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