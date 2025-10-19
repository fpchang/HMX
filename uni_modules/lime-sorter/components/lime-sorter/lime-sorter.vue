<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Sorter 排序按钮</text>
		<text class="demo-block__desc-text">用于呈现一个可供点击的按钮，以实现数据排序功能</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-sorter>价格</l-sorter>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">允许重置</text>
				<view class="demo-block__body">
					<l-sorter allow-reset>价格</l-sorter>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">降序优先</text>
				<view class="demo-block__body">
					<l-sorter desc-first>价格</l-sorter>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义</text>
				<view class="demo-block__body">
					<l-sorter>
						<text>价格</text>
						<template #arrow="{value}">
							<view style="margin-left: 4px; flex-direction: row;">
								<text v-show="value == 1 || value == 0" style="font-size: 10px; font-weight: bold;">↿</text>
								<text v-show="value == -1 || value == 0" style="font-size: 10px; font-weight: bold">⇂</text>
							</view>
						</template>
					</l-sorter>
				</view>	
			</view>	
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	
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