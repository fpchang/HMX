<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Popover 弹出气泡</text>
		<text class="demo-block__desc-text">用于文字提示的气泡框。</text>	
		<view class="demo-block__body">
			<!-- <view style="height: 600px;"></view> -->
			<view class="demo-block card">
				<text class="demo-block__title-text">顶部</text>
				<view class="demo-block__body row">
					<l-popover theme="dark" style="flex:1; margin-right:10px" placement="top-left" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容">
						<button type="primary" @click="onClick">顶部左</button>
					</l-popover>
					<l-popover theme="dark" style="flex:1; margin-right:10px"  content="内容">
						<button type="primary" @click="onClick">顶部中</button>
						<template #content>
							<view>
								<text style="color: aliceblue;">内容内容内内容</text>
							</view>
						</template>
					</l-popover>
					<l-popover theme="red" style="flex:1;" content="内容" placement="top-right">
						<button type="primary" @click="onClick">顶部右</button>
					</l-popover>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">底部</text>
				<view class="demo-block__body row">
					<l-popover theme="dark" style="flex:1; margin-right:10px" placement="bottom-left" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容">
						<button type="primary" style="width: 100%;" @click="onClick">底部左</button>
					</l-popover>
					<l-popover style="flex:1; margin-right:10px" placement="bottom"  content="内容">
						<button type="primary" @click="onClick">底部中</button>
						<template #content>
							<view style="width: 100px;">
								<text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
							</view>
						</template>
					</l-popover>
					<l-popover theme="dark" style="flex:1;" content="内容内容内容内容内容" placement="bottom-right">
						<button type="primary" @click="onClick">底部右</button>
					</l-popover>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">右侧</text>
				<view class="demo-block__body">
					<l-popover theme="dark" placement="right-top" content="内容内容内容内容内容内容内容内容">
						<button type="primary" style="width: 223px; height: 80px; line-height: 80px;" @click="onClick">底部左</button>
					</l-popover>
					<view style="height: 20px;"></view>
					<l-popover theme="dark" placement="right" content="内容">
						<button type="primary" style="width: 223px;height: 80px; line-height: 80px;" @click="onClick">底部中</button>
					</l-popover>
					<view style="height: 20px;"></view>
					<l-popover theme="dark" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" placement="right-bottom">
						<button type="primary" style="width: 223px;height: 80px; line-height: 80px;" @click="onClick">底部右</button>
					</l-popover>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">左侧</text>
				<view class="demo-block__body" style="display: flex; flex-direction: column; align-items: flex-end;">
					<l-popover theme="dark" placement="left-top" content="内容内容内容内容内容内容内容内容">
						<button type="primary" style="width: 223px; height: 80px; line-height: 80px;" @click="onClick">底部左</button>
					</l-popover>
					<view style="height: 20px;"></view>
					<l-popover theme="dark" placement="left" content="内容">
						<button type="primary" style="width: 223px;height: 80px; line-height: 80px;" @click="onClick">底部中</button>
					</l-popover>
					<view style="height: 20px;"></view>
					<l-popover theme="dark" content="内容内容内容内容内容内容内容内容内容" placement="left-bottom">
						<button type="primary" style="width: 223px;height: 80px; line-height: 80px;" @click="onClick">底部右</button>
					</l-popover>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">测试</text>
				<view class="demo-block__body" style="display: flex; flex-direction: column;align-items: flex-end;">
					<l-popover theme="dark" placement="right-top" content="内容内容内容内容内容内容内容内容">
						<button type="primary" style="width: 223px; height: 80px; line-height: 80px;" @click="onClick">底部左</button>
					</l-popover>
					<view style="height: 20px;"></view>
					<l-popover :closeOnClickOutside="false" style="align-self: flex-start;" theme="dark" content="内容内容内容内容内容内容内容内容内容" placement="left-bottom">
						<button type="primary" style="width: 223px;height: 80px; line-height: 80px;" @click="onClick">底部右</button>
					</l-popover>
				</view>	
			</view>
		</view>	
		<button @click="closeAll">关闭所有</button>
		<view style="height: 500px;"></view>
	</view>
</template>

<script>
	import { closeOutside } from '@/uni_modules/lime-popover';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onClick() {
				console.log('onClick:0')
			},
			closeAll() {
				closeOutside()
			}
		}
	}
</script>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.demo-block {
		margin: 32px 14px 0;
		overflow: visible;
		&.card{
			background-color: white;
			padding: 30rpx;
			margin-bottom: 20rpx !important;
			overflow: visible;
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
			margin: 16px 0 0;
			overflow: visible;
			.demo-block {
				// margin-top: 0px;
				margin: 0;
			}
		}
	}
</style>