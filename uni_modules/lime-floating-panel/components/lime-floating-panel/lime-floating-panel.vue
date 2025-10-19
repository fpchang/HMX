<template>
	<demo-block title="浮动面板" type="ultra">
		<view class="tabs">
			<text class="tab" :class="{active: active == 0}" @click="tabChange(0)">基础用法</text>
			<text class="tab" :class="{active: active == 1}" @click="tabChange(1)">自定义锚点</text>
			<text class="tab" :class="{active: active == 2}" @click="tabChange(2)">仅头部拖拽</text>
		</view>
		<view v-if="active == 1" style="padding: 20rpx" @click="to">自定义锚点: 跳到3</view>
		<view class="content">
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
			<view @click="onClick">content</view>
		</view>
		<view v-if="active == 0">
			<l-floating-panel>
				<scroll-view scroll-y style="height: 100%;" @scrolltolower="scrolltolower">
					<view v-for="(item, index) in list" class="cell" :key="index">内容:{{index}}</view>
					<view style="text-align: center; padding: 15px;" v-if="loading">
						<text style="color: #999;">loading</text>
					</view>
				</scroll-view>
			</l-floating-panel>
		</view>
		<view v-if="active == 1">
			<!-- #ifdef VUE3 -->
			<l-floating-panel v-model:height="height" :anchors="anchors" :defaultAnchor="1" ref="floatingPanelRef">
				  <view style="text-align: center; padding: 15px">
						<text>面板显示高度 {{ height.toFixed(0) }} px</text>
				  </view>
			</l-floating-panel>
			<!-- #endif -->
			<!-- #ifndef VUE3 -->
			<l-floating-panel :height.sync="height" :anchors="anchors" :defaultAnchor="1">
				  <view style="text-align: center; padding: 15px">
						<text>面板显示高度 {{ height.toFixed(0) }} px</text>
				  </view>
			</l-floating-panel>
			<!-- #endif -->
		</view>
		<view v-if="active == 2">
			<l-floating-panel :content-draggable="false" @height-change="heightChange">
				<view style="text-align: center; padding: 15px">
					<text style="display: block;">内容不可拖拽</text>
					<text style="color: #999;">当前高度 {{height3}}</text>
				</view>
			</l-floating-panel>
		</view>
	</demo-block>
</template>
<script>
	export default {
		data() {
			const {windowHeight} = uni.getSystemInfoSync()
			return {
				height: 0,
				height3: 0,
				active: 0,
				loading: false,
				list: [],
				anchors: [
			      30,
			      Math.round(0.4 * windowHeight),
			      Math.round(0.7 * windowHeight),
			],
			}
		},
		methods: {
			tabChange(v) {
				this.active = v
			},
			scrolltolower() {
				this.getData()
			},
			heightChange({height}) {
				this.height3 = height
			},
			onClick() {
				uni.showToast({
					icon: "none",
					title: "点击了内容"
				})
			},
			to() {
				this.$refs.floatingPanelRef.toAnchor(2)
			},
			getData() {
				this.loading = true
				setTimeout(() => {
					this.list.push(...new Array(10).fill(0))
					this.loading = false
				},500)
			}
		}
	}
</script>
<style lang="scss">
	.tabs {
		display: flex;
		flex-direction: row;
		padding: 15px 60rpx;
		justify-content: space-between;
		background-color: white;
	}
	.tab{margin-right:10px}
	.tab:last-child {
		margin-right:0px
	}
	.text {
		display: block;
		margin: 30px 0;
		color: rgba(0, 0, 0, 0.6);
	}
	.active {
		color: blue;
	}
	.cell {
		height: 120rpx;
		padding: 30rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #eee;
		&:first-child{
			border-top: 1rpx solid #eee;
		}
	}
</style>
