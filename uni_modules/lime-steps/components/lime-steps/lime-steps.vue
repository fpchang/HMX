<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Steps 步骤条</text>
		<text class="demo-block__desc-text">用于任务步骤展示或任务进度展示，让用户了解当前的操作在整体流程中的位置</text>
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础</text>
				<view class="demo-block__body">
					<l-steps :current="current" @change="change">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">图标</text>
				<view class="demo-block__body">
					<l-steps :current="current2" @change="change2">
						<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
						<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
						<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
						<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">简略</text>
				<view class="demo-block__body">
					<l-steps :current="current3" @change="change3" type="dot">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">状态</text>
				<view class="demo-block__body">
					<l-steps :current="current" @change="change">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息" status="error"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义样式</text>
				<view class="demo-block__body">
					<l-steps :current="current" @change="change" activeColor="#FFB400" finishBgColor="rgba(255, 180, 0, 0.1)">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">垂直序号</text>
				<view class="demo-block__body">
					<l-steps :current="current4" @change="change4" layout="vertical" >
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			
			<view class="demo-block card">
				<text class="demo-block__title-text">垂直图标</text>
				<view class="demo-block__body">
					<l-steps :current="current5" @change="change5" layout="vertical" >
						<l-step icon="cart" title="买家下单" content="辅助信息"></l-step>
						<l-step icon="cart" title="商家接单" content="辅助信息"></l-step>
						<l-step icon="cart" title="买家提货" content="辅助信息"></l-step>
						<l-step icon="cart" title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">垂直简略</text>
				<view class="demo-block__body">
					<l-steps :current="current6" @change="change6" layout="vertical" type="dot">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息"></l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">垂直自定义内容</text>
				<view class="demo-block__body">
					<l-steps :current="current7" @change="change7" layout="vertical" type="dot">
						<l-step title="买家下单" content="辅助信息"></l-step>
						<l-step title="商家接单" content="辅助信息">
							<template #extra>
							    <view>
									<image
									  src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ"
									  alt="图标"
									  style="width: 100%;"
									  mode="widthFix"
									/>
								</view>
							</template>
						</l-step>
						<l-step title="买家提货" content="辅助信息"></l-step>
						<l-step title="交易完成" content="辅助信息"></l-step>
					</l-steps>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				current2: 1,
				current3: 1,
				current4: 1,
				current5: 1,
				current6: 1,
				current7: 1,
			}
		},
		methods: {
			change(value) {
				this.current = value
			},
			change2(value) {
				this.current2 = value
			},
			change3(value) {
				this.current3 = value
			},
			change4(value) {
				this.current4 = value
			},
			change5(value) {
				this.current5 = value
			},
			change6(value) {
				this.current6 = value
			},
			change7(value) {
				this.current7 = value
			},
		}
	}
</script>

<style lang="scss">
	.demo-block {
		margin: 32px 0 0;
	
		// overflow: visible;
		&.card {
			background-color: white;
			padding: 30rpx;
			margin-left: 10px !important;
			margin-right: 10px !important;
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
				// margin-left: 20px;
	
				&.large {
					color: rgba(0, 0, 0, 0.9);
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					margin-left: 20px;
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