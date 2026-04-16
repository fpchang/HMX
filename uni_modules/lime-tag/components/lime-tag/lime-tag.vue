<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">标签</text>
		<text class="demo-block__desc-text">用于表明主体的类目，属性或状态。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">标签主题</text>
				<view class="demo-block__body row">
					<l-tag class="tag" type="primary">品牌色</l-tag>
					<l-tag class="tag" type="success">成功色</l-tag>
					<l-tag class="tag" type="warning">警告色</l-tag>
					<l-tag class="tag" type="danger">危险色</l-tag>
					<l-tag class="tag">通用色</l-tag>
					<!-- <l-tag color="#25C663" :padding="'28rpx 40rpx'" :radius="'40rpx 40rpx 0rpx 40rpx'">内容</l-tag> -->
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">图标标签</text>
				<view class="demo-block__body row">
					<l-tag class="tag" icon="face-retouching" type="primary">标签</l-tag>
					<l-tag class="tag" icon="filter-3" variant="light">标签</l-tag>
					<l-tag class="tag" icon="markup" variant="outline">标签</l-tag>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">超长文本省略标签</text>
				<view class="demo-block__body row">
					<l-tag class="tag" max-width="130px" variant="light">听说超长可以省略听说超长</l-tag>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">可关标签</text>
				<view class="demo-block__body row">
					<l-tag class="tag" v-if="show1" @close="show1 = false" :closable="true" icon="face-retouching" type="primary">标签</l-tag>
					<l-tag class="tag" v-if="show2" @close="show2 = false" :closable="true" icon="filter-3" variant="light">标签</l-tag>
					<l-tag class="tag" v-if="show3" @close="show3 = false" :closable="true" icon="markup" variant="outline">标签</l-tag>
					<!-- <l-tag class="tag" v-if="show3" @close="show3 = false" :closable="true" icon="markup" type="primary" variant="outline">标签</l-tag> -->
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">标签形状</text>
				<view class="demo-block__body row">
					<l-tag class="tag" shape="square" type="primary">方形</l-tag>
					<l-tag class="tag" shape="round" type="success">圆角</l-tag>
					<l-tag class="tag" shape="mark" type="primary">半圆</l-tag>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">标签类型</text>
				<view class="demo-block__body">
					<view class="row" style="margin-bottom:20rpx">
						<l-tag class="tag" variant="light">高亮</l-tag>
						<l-tag class="tag" variant="light" type="primary">品牌</l-tag>
						<l-tag class="tag" variant="light" type="success">成功</l-tag>
						<l-tag class="tag" variant="light" type="warning">警告</l-tag>
						<l-tag class="tag" variant="light" type="danger">危险</l-tag>
					</view>
					<view class="row" style="margin-bottom:20rpx">
						<l-tag class="tag">深色</l-tag>
						<l-tag class="tag" type="primary">品牌</l-tag>
						<l-tag class="tag" type="success">成功</l-tag>
						<l-tag class="tag" type="warning">警告</l-tag>
						<l-tag class="tag" type="danger">危险</l-tag>
					</view>
					<view class="row" style="margin-bottom:20rpx">
						<l-tag class="tag" variant="outline">描边</l-tag>
						<l-tag class="tag" variant="outline" type="primary">品牌</l-tag>
						<l-tag class="tag" variant="outline" type="success">成功</l-tag>
						<l-tag class="tag" variant="outline" type="warning">警告</l-tag>
						<l-tag class="tag" variant="outline" type="danger">危险</l-tag>
					</view>
					<view class="row" style="margin-bottom:20rpx">
						<l-tag class="tag" variant="light-outline">光廓</l-tag>
						<l-tag class="tag" variant="light-outline" type="primary">品牌</l-tag>
						<l-tag class="tag" variant="light-outline" type="success">成功</l-tag>
						<l-tag class="tag" variant="light-outline" type="warning">警告</l-tag>
						<l-tag class="tag" variant="light-outline" type="danger">危险</l-tag>
					</view>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">自定颜色</text>
				<view class="demo-block__body row">
					<l-tag class="tag" color="#7232dd" icon="face-retouching">标签</l-tag>
					<l-tag class="tag" color="linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36))" icon="filter-3">标签</l-tag>
					<l-tag class="tag" color="#7232dd" icon="markup" variant="outline">标签</l-tag>
					<l-tag class="tag" color="#ddd" text-color="#f00">标签</l-tag>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">标签尺寸</text>
				<view class="demo-block__body row">
					<l-tag class="tag" size="mini" type="primary">细</l-tag>
					<l-tag class="tag" size="small" type="primary">小</l-tag>
					<l-tag class="tag" size="medium" type="primary">中</l-tag>
					<l-tag class="tag" size="large" type="warning">大</l-tag>
					<l-tag class="tag" size="extra-large" type="primary">加大</l-tag>
				</view>	
			</view>	
			<!-- <l-tag class="tag" variant="light-outline" :type="type">警告</l-tag> -->
		</view>	
	</view>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				show1: true,
				show2: true,
				show3: true,
				type: 'primary'
			}
		},
		methods: {
			
		},
		mounted() {
			setTimeout(()=>{
				this.type = 'success'
			},3000)
		}
	}
</script>

<style lang="scss">
	$card-bg-color: var(--doc-card-bg-color, white);
	// $page-bg-color: var(--doc-page-bg-color, #f5f5f5);
	$title-color: var(--doc-title-color, #000000E6);
	$summary-color: var(--doc-summary-color, #00000099);
	
	.row{
		display: flex;
		// #ifndef APP-IOS || APP-ANDROID
		gap: 20rpx;
		// #endif
		flex-direction: row;
		flex-wrap: wrap;
	}
	.tag{
		// #ifdef APP-IOS || APP-ANDROID
		margin-right: 20rpx;
		// #endif
	}
	.demo-block {
		margin: 32px 10px 0;
		// overflow: visible;
		&.card{
			background-color: $card-bg-color;
			transition-property: background-color;
			// transition-duration: 300ms;
			padding: 30rpx;
			margin-bottom: 20rpx !important;
		}
		&__title {
			margin: 0;
			margin-top: 8px;
			&-text {
				color: $summary-color;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				
				&.large {
					color: $title-color;
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					display: flex;
				}
				&.ultra {
					color: $title-color;
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
					display: flex;
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