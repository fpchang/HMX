<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">数字滚动</text>
		<text class="demo-block__desc-text">用于数字的动态效果展示。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础使用</text>
				<view class="demo-block__body row">
					<l-count-to :from="0" :to="12039" />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">精度</text>
				<text class="demo-block__desc-text">
					<text>设置</text>
					<text style="color: red;">precision</text>
					<text>可以控制小数位数哦。</text>
				</text>
				<view class="demo-block__body row" style="display: flex; flex-direction: column; align-items: flex-start;">
					<l-count-to ref="CountToRef0" :from="0.0" :to="24.0" :active="false" :precision="2" />
					<button style="margin-top: 30rpx; margin-left: 0;" size="mini" @click="handleClick('CountToRef0')"> 播放</button>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">分隔符</text>
				<view class="demo-block__body row" style="display: flex; flex-direction: column; align-items: flex-start;">
					<l-count-to ref="CountToRef1" :show-separator="true" :from="0" :to="100000000" :active="false" />
					<button style="margin-top: 30rpx; margin-left: 0;" size="mini" @click="handleClick('CountToRef1')"> 播放</button>
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">万分位</text>
				<text class="demo-block__desc-text"><text>设置</text><text style="color: red;">separator</text><text>为</text><text style="color: red;">group4</text><text>，使用</text> <text style="color: red;">万分位切割</text></text>	
				<view class="demo-block__body row" style="display: flex; flex-direction: column; align-items: flex-start;">
					<l-count-to ref="CountToRef2" separator="group4" :show-separator="true" :from="0.0" :to="699700.699" :active="false" :precision="3" />
					<button style="margin-top: 30rpx; margin-left: 0;" size="mini" @click="handleClick('CountToRef2')"> 播放</button>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">插槽</text>
				<view class="demo-block__body row" style="display: flex; flex-direction: column; align-items: flex-start;">
					<l-count-to ref="CountToRef3" :show-separator="true" :from="0.0" :to="699700.699" :active="false" :precision="3">
						<template #formatted={value}>
							<text style="background-color: antiquewhite;">
								<text style="font-size: 32rpx">￥</text>
								<text style="font-size: 52rpx" :key="value.integer">{{value.integer}}</text>
								<text style="font-size: 32rpx">.</text>
								<text style="font-size: 32rpx">{{value.decimal}}</text>
							</text>
						</template>
					</l-count-to>
					<button style="margin-top: 30rpx; margin-left: 0;" size="mini" @click="handleClick('CountToRef3')"> 播放</button>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">结束的回调</text>
				<view class="demo-block__body row" style="display: flex; flex-direction: column; align-items: flex-start;">
					<l-count-to ref="CountToRef4" :show-separator="true"  :from="0" :to="100000000" :active="false" @finish="handleFinish" />
					<button style="margin-top: 30rpx; margin-left: 0;" size="mini" @click="handleClick('CountToRef4')"> 播放</button>
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
			handleClick(name){
				(this.$refs[name]).play()
			},
			handleFinish(){
				uni.showToast({
					icon: 'none',
					title: '结束了'
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.row{
		flex-direction: row;
		flex-wrap: wrap;
	}
	.btn {
		margin-bottom: 20rpx;
		margin-right: 20rpx;
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
				display: flex;
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