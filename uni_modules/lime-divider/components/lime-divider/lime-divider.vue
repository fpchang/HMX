<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">分割线</text>
		<text class="demo-block__desc-text">用于分割、组织、细化有一定逻辑的组织元素内容和页面结构</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">水平分割线</text>
				<view class="demo-block__body">
					<l-divider></l-divider>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">带文字水平分割线</text>
				<view class="demo-block__body">
					<l-divider content="文字信息" align="left"></l-divider>
					<l-divider content="文字信息"></l-divider>
					<l-divider content="文字信息" align="right"></l-divider>
					<l-divider align="left">插槽</l-divider>
					<l-divider>插槽</l-divider>
					<l-divider align="right">插槽</l-divider>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">垂直分割线</text>
				<view class="demo-block__body">
					<view style="display: flex;flex-direction: row; align-items: center;">
						<text style="width: 300rpx;">文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息文字信息</text>
						<l-divider :vertical="true">我是分割线</l-divider>
						<text style="width: 1em;">文字信息</text>
						<l-divider :vertical="true"></l-divider>
						<text style="width: 1em;">文字信息</text>
					</view>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">虚线样式</text>
				<view class="demo-block__body">
					<l-divider :dashed="true" />
					<l-divider :dashed="true" content="文字信息" align="left" />
					<l-divider :dashed="true" content="文字信息" />
					<l-divider :dashed="true" content="文字信息" align="right" />
				</view>	
			</view>	
			
		</view>	
	</view>
	
<!-- 	
	<demo-block title="分割线" type="ultra">
		<demo-block title="水平分割线">
			<l-divider></l-divider>
		</demo-block>
		<demo-block title="带文字水平分割线">
			<l-divider content="文字信息" align="left"></l-divider>
			<l-divider content="文字信息"></l-divider>
			<l-divider content="文字信息" align="right"></l-divider>
			<l-divider align="left">插槽</l-divider>
			<l-divider>插槽</l-divider>
			<l-divider align="right">插槽</l-divider>
		</demo-block>
		<demo-block title="垂直分割线">
			<view style="display: flex; align-items: center; flex-direction: row;">
				<text>文字信息</text>
				<l-divider :vertical="true"></l-divider>
				<text>文字信息</text>
				<l-divider :vertical="true"></l-divider>
				<text>文字信息</text>
			</view>
		</demo-block>
		<demo-block title="虚线样式">
			<l-divider :dashed="true" />
			<l-divider :dashed="true" content="文字信息" align="left" />
			<l-divider :dashed="true" content="文字信息" />
			<l-divider :dashed="true" content="文字信息" align="right" />
		</demo-block>
	</demo-block> -->
</template>
<script>
</script>
<style lang="scss">
	.demo-block {
		margin: 32px 10px 0;
		overflow: visible;
		&.card{
			padding: 30rpx;
			background-color: white;
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