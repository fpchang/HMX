<template>
	<l-config-provider>
		<view class="demo-block">
			<view class="demo-block__body">
				<view class="demo-block">
					<text class="demo-block__title-text">深色模式</text>
					<view class="demo-block__body">
						<text class="text">请点击文档右上角的按钮</text>
					</view>	
				</view>	
			</view>	
		</view>
		<view class="demo-block">
			<!-- <text class="demo-block__title-text ultra">cell 单元格</text>
			<text class="demo-block__desc-text">用于各个类别行的信息展示。</text>	 -->
			<view class="demo-block__body">
				<view class="demo-block">
					<!-- <text class="demo-block__title-text">基础用法</text> -->
					<view class="demo-block__body">
						
					</view>	
				</view>	
			</view>	
		</view>
	</l-config-provider>
</template>
<script>
</script>
<style lang="scss">
	$card-bg-color: var(--doc-card-bg-color, white);
	// $page-bg-color: var(--doc-page-bg-color, #f5f5f5);
	$title-color: var(--doc-title-color, #000000E6);
	$summary-color: var(--doc-summary-color, #00000099);
	
	.text {
		color: $title-color;
		padding: 15px;
		background-color: $card-bg-color;
	}
	.demo-block {
		margin: 32px 0 0;
		
		// overflow: visible;
		&.card {
			background-color: $card-bg-color;
			transition-property: background-color;
			// transition-duration: 300ms;
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
			}
		}
	}
</style>
