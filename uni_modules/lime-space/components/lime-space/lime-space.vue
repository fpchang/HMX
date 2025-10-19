<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">间距</text>
		<text class="demo-block__desc-text">设置元素之间的间距。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础用法</text>
				<view class="demo-block__body">
					<l-space  :wrap="true">
						<l-button type="primary">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
						<l-button type="warning" v-if="show">品牌色</l-button>
					</l-space>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">垂直排列</text>
				<view class="demo-block__body">
					<l-space direction="vertical" :fill="true">
						<l-button type="primary" :data-block="true">品牌色</l-button>
						<l-button type="primary" :data-block="true">品牌色</l-button>
						<l-button type="warning" :data-block="true">品牌色</l-button>
					</l-space>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">自定义间距</text>
				<view class="demo-block__body">
					<l-space :size="20">
						<l-button type="primary">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
					</l-space>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">对齐方式</text>
				<view class="demo-block__body">
					<radio-group @change="onChange" style="flex-direction: row;">
						<radio style="padding: 20rpx" class="radio" value="start">start</radio>
						<radio style="padding: 20rpx" class="radio" value="center">center</radio>
						<radio style="padding: 20rpx" class="radio" value="end">end</radio>
						<radio style="padding: 20rpx" class="radio" value="baseline">baseline</radio>
					</radio-group>
					<l-space :align="align">
						<l-button type="primary">{{align}}</l-button>
						<view style="padding: 40px 20px; background: #eee">Block</view>
					</l-space>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text large">自动换行</text>
				<view class="demo-block__body">
					<l-space :wrap="true">
						<l-button type="primary">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
						<l-button type="primary">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
						<l-button type="warning">品牌色</l-button>
					</l-space>
				</view>	
			</view>	
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				align: 'center',
				show: false,
			}
		},
		methods: {
			onChange(e: RadioGroupChangeEvent){
				this.align = e.detail.value
			}
		},
		mounted() {
			setTimeout(()=>{
					this.show = true
			},300)
		}
	}
</script>

<style lang="scss">
	.radio {
		// margin: 10rpx 20rpx 10rpx 0;
		// padding: 20rpx;
		// background-color: aqua;
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