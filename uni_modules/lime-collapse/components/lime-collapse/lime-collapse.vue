<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Collapse 折叠面板</text>
		<text class="demo-block__desc-text">用于对复杂区域进行分组和隐藏 常用于订单信息展示等。</text>	
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-collapse>
						<l-collapse-panel title="折叠标题1">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题2">
							<text>此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			
			<view class="demo-block">
				<text class="demo-block__title-text">带操作说明</text>
				<view class="demo-block__body">
					<l-collapse v-model="values" >
						<l-collapse-panel title="折叠标题1" :note="values.includes(0) ? '收起' : '展开'">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text">手风琴</text>
				<view class="demo-block__body">
					<l-collapse v-model="values1" :accordion="true">
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			
			<view class="demo-block">
				<text class="demo-block__title-text">卡片式</text>
				<view class="demo-block__body">
					<l-collapse :inset="true">
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			
			<view class="demo-block">
				<text class="demo-block__title-text">禁用状态</text>
				<view class="demo-block__body">
					<l-collapse>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试" :disabled="true">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" note="单元测试">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text">自定义标题</text>
				<view class="demo-block__body">
					<l-collapse>
						<l-collapse-panel>
							<template #title>
							    <view style="flex-direction: row; align-items: center;">
									<text style="margin-right: 10rpx;">标题1</text> 
									<l-icon name="help-circle" size="32rpx" />
								</view>
							</template>
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" icon="map-aiming">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" image="https://tdesign.gtimg.com/mobile/demos/avatar1.png">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text">全部展开与全部切换</text>
				<view class="demo-block__body">
					<l-collapse ref="collapseRef">
						<l-collapse-panel title="折叠标题">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题" :disabled="true">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
						<l-collapse-panel title="折叠标题">
							<text>1此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容</text>
						</l-collapse-panel>
					</l-collapse>
					
					<button @click="openAll">全部展开</button>
					<button @click="toggleAll">全部切换</button>
				</view>	
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				values: [],
				values1: [],
			}
		},
		methods: {
			openAll() {
				this.$refs.collapseRef.toggleAll(true)
			},
			toggleAll() {
				this.$refs.collapseRef.toggleAll(false)
			}
		},
		mounted() {
			// setTimeout(()=>{
			// 	this.values1 = [0, 1]
			// },1000)
		}
	}
</script>

<style lang="scss">
	
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
				color: rgba(0, 0, 0, 0.6);
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				display: flex;
				margin-left: 20px;
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