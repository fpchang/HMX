<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">ScrollX 横向滚动</text>
		<text class="demo-block__desc-text">仿京东带指示器横向滚动</text>	
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-scroll-x>
						<view class="grid">
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
							<view class="item">
								<image mode="widthFix" class="item-img" src="https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png"></image>
								<text class="item-text">京东超市</text>
							</view>
						</view>
						<!-- <l-grid :column="8" :wrap="false" grid-width="80px">
							<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
							<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
							<l-grid-item text="标题文字" image="https://tdesign.gtimg.com/mobile/demos/avatar3.png" />
							<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
							<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
							<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
							<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
							<l-grid-item text="最多五个字" image="https://tdesign.gtimg.com/mobile/demos/avatar4.png" />
						</l-grid> -->
					</l-scroll-x>
				</view>	
			</view>	
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	$card-bg-color: var(--doc-card-bg-color, white);
	// $page-bg-color: var(--doc-page-bg-color, #f5f5f5);
	$title-color: var(--doc-title-color, #000000E6);
	$summary-color: var(--doc-summary-color, #00000099);
	
	.item-text {
		color: $summary-color;
	}
	.grid {
		display: flex;
		flex-wrap: nowrap;
		position: relative;
		overflow: visible;
		flex-direction: row;
	}
	.item {
		// width: 80px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		padding: 10px;
		&-img {
			width: 40px;
		}
		&-text {
			padding: 5px;
			font-size: 12px;
			white-space: nowrap;
		}
	}
	.btn {
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		align-self: center;
	}
	.demo-block {
		margin: 32px 0 0;
		
		// overflow: visible;
		&.card{
			// background-color: white;
			padding: 30rpx;
			margin-bottom: 20rpx;
		}
		&__title {
			margin: 0;
			margin-top: 8px;
			&-text {
				color: $summary-color;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				display: flex;
				margin-left: 20px;
				&.large {
					color: $title-color;
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					margin-left: 20px;
				}
				&.ultra {
					color: $title-color;
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
				}
			}
		}
		&__desc-text {
			color: $summary-color;
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
				overflow: visible;
			}
		}
	}
</style>