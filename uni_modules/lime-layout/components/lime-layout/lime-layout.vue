<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Layout 布局</text>
		<text class="demo-block__desc-text">提供`row`/`col`划分区块来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性。</text>
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text">基础使用</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row>
						<l-col span="8"><text class="layout-box" style="background-color: #3283ff;">span: 8</text></l-col>
						<l-col span="8"><text class="layout-box" style="background-color: #000;">span: 8</text></l-col>
						<l-col span="8"><text class="layout-box" style="background-color: #3283ff;">span: 8</text></l-col>
						<l-col ></l-col>
					</l-row>
					<l-row style="padding-top: 10px">
						<l-col span="4"><text class="layout-box" style="background-color: #34c471;">span: 4</text></l-col>
						<l-col span="10" offset="4"><text class="layout-box" style="background-color: #34c471;">offset: 4, span: 10</text></l-col>
					</l-row>
					<l-row  style="padding-top: 10px">
					  <l-col offset="12" span="12"><text class="layout-box" style="background-color: #000;">offset: 12, span: 12</text></l-col>
					</l-row>
					<l-row gap="20"  style="padding-top: 10px">
					  <l-col span="6"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
					  <l-col><text class="layout-box" style="background-color: #3283ff;">span</text></l-col>
					  <l-col span="auto"><text class="layout-box" style="background-color: #3283ff;">span: auto</text></l-col>
					</l-row>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">水平间距</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row gap="20">
						<l-col span="8"><text class="layout-box" style="background-color: #000;">span: 8</text></l-col>
						<l-col span="8"><text class="layout-box" style="background-color: #000;">span: 8</text></l-col>
						<l-col span="8"><text class="layout-box" style="background-color: #000;">span: 8</text></l-col>
					</l-row>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">垂直间距</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row :gap="[20,20]">
						<l-col span="12"><text class="layout-box" style="background-color: #34c471;">span: 8</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #34c471;">span: 8</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #34c471;">span: 8</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #34c471;">span: 8</text></l-col>
					</l-row>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">水平对齐</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row :gap="[0,10]" justify="start">
						<l-col span="6"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
						<l-col span="6"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
					</l-row>
					<l-row :gap="[0,10]" justify="center" style="padding-top: 10px;">
						<l-col span="6"><text class="layout-box" style="background-color: #000;">span: 6</text></l-col>
						<l-col span="6"><text class="layout-box" style="background-color: #000;">span: 6</text></l-col>
					</l-row>
					<l-row :gap="[0,10]" justify="end" style="padding-top: 10px;">
						<l-col span="6"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
						<l-col span="6"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
					</l-row>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">垂直对齐</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row :gap="[0,10]" align="start">
						<l-col span="12"><text class="layout-box" style="background-color: #ffb400;">span: 6</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #000; height: 80px; line-height: 80px;">span: 6</text></l-col>
					</l-row>
					<l-row :gap="[0,10]" align="center" style="padding-top: 10px;">
						<l-col span="12"><text class="layout-box" style="background-color: #000;">span: 6</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #ffb400; height: 80px; line-height: 80px;">span: 6</text></l-col>
					</l-row>
					<l-row :gap="[0,10]" align="end" style="padding-top: 10px;">
						<l-col span="12"><text class="layout-box" style="background-color: #ffb400;">span: 6</text></l-col>
						<l-col span="12"><text class="layout-box" style="background-color: #000; height: 80px; line-height: 80px;">span: 6</text></l-col>
					</l-row>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">宽高比例</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row :gap="[10,10]" align="start">
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1;">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1; ">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
						<l-col span="6" :aspectRatio="1"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">1/1</text></l-col>
					</l-row>
					<view style="height: 20px"></view>
					<l-row :gap="[10,10]" align="start">
						<l-col span="8" :aspectRatio="3/4"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1;">3/4</text></l-col>
						<l-col span="8" :aspectRatio="3/4"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">3/4</text></l-col>
						<l-col span="8" :aspectRatio="3/4"><text style="display:flex;background-color: rgba(0,0,0,0.1); flex: 1">3/4</text></l-col>
					</l-row>
					
				</view>
			</view>
			
			<view class="demo-block">
				<text class="demo-block__title-text">列顺序</text>
				<view class="demo-block__body" style="padding: 0 15px;">
					<l-row :gap="[0,10]" align="start">
						<l-col span="12"><text class="layout-box" style="background-color: #3283ff;">span: 6</text></l-col>
						<l-col span="12" :order="-1"><text class="layout-box" style="background-color: #000;">order: -1</text></l-col>
					</l-row>
					<l-row :gap="[0,10]" align="center" style="padding-top: 10px;">
						<l-col :order="2"><text class="layout-box" style="background-color: #3283ff;">order: 2</text></l-col>
						<l-col :order="1"><text class="layout-box" style="background-color: #000; ">order: 1</text></l-col>
						<l-col><text class="layout-box" style="background-color: #34c471; ">span: 6</text></l-col>
					</l-row>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="uts" setup>

</script>

<style lang="scss">
	.layout-box {
		display: block;
		width: 100%;
		height: 46px;
		text-align: center;
		line-height: 46px;
		color: white
	}

	
	
	.demo-block {
		margin: 32px 0 0;

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
				margin-left: 16px;

				&.large {
					color: rgba(0, 0, 0, 0.9);
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					display: flex;
				}

				&.ultra {
					color: rgba(0, 0, 0, 0.9);
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
					display: flex;
				}
			}
		}

		&__desc-text {
			color: rgba(0, 0, 0, 0.6);
			margin: 8px 16px 0 0;
			font-size: 14px;
			line-height: 22px;
			margin-left: 16px;
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