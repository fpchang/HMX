<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">avatar 头像</text>
		<text class="demo-block__desc-text">用图标、图片、字符的形式展示用户或事物信息。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础用法</text>
				<view class="demo-block__body row">
					<l-avatar class="btn" src="https://tdesign.gtimg.com/mobile/demos/avatar1.png"></l-avatar>
					<l-avatar class="btn" icon="user"></l-avatar>
					<l-avatar class="btn">A</l-avatar>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">尺寸</text>
				<view class="demo-block__body row">
					<l-avatar class="btn" color="#3283ff" size="large" icon="user"></l-avatar>
					<l-avatar class="btn" size="large" icon="user"></l-avatar>
					<l-avatar class="btn" size="large">A</l-avatar>
					<view style="width: 100%;"></view>
					<l-avatar class="btn" color="#34c471" icon="user"></l-avatar>
					<l-avatar class="btn" icon="user"></l-avatar>
					<l-avatar class="btn">A</l-avatar>
					<view style="width: 100%;"></view>
					<l-avatar class="btn" color="#ffb400" size="small" icon="user"></l-avatar>
					<l-avatar class="btn" size="small" icon="user"></l-avatar>
					<l-avatar class="btn" size="small">B</l-avatar>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">形状</text>
				<view class="demo-block__body row">
					<l-avatar class="btn" color="#3283ff" icon="user"></l-avatar>
					<l-avatar class="btn" color="#34c471" shape="square" icon="user"></l-avatar>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">组合</text>
				<view class="demo-block__body row">
					<l-avatar-group :max="5" collapseFontSize="20rpx"  collapseText="更多" cascading="left-up">
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar1.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar2.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar3.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar4.png"></l-avatar>
						<l-avatar color="#3283ff">陈</l-avatar>
						<l-avatar color="#3283ff">王</l-avatar>
						<l-avatar color="#3283ff">李</l-avatar>
						<l-avatar color="#3283ff">黄</l-avatar>
					</l-avatar-group>
					<view style="width: 100%; height: 10px;"></view>
					<l-avatar-group :max="4">
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar1.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar2.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar3.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar4.png"></l-avatar>
						<l-avatar src="https://tdesign.gtimg.com/mobile/demos/avatar5.png"></l-avatar>
						<l-avatar color="#3283ff">陈</l-avatar>
					</l-avatar-group>
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
				&.large {
					color: $title-color;
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
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