<template>
	<demo-block title="侧边栏" type="ultra">
		<demo-block title="基础使用">
			<view class="preview"  style="height: 500rpx;">
				<l-sidebar v-model="active">
					<l-sidebar-item title="标签名称" />
					<l-sidebar-item title="标签名称" />
					<l-sidebar-item title="标签名称" />
				</l-sidebar>
			</view>
		</demo-block>
		<view class="demo-block card">
			<text class="demo-block__title-text large">线条</text>
			<view class="demo-block__body" style="height: 500rpx;">
				<l-sidebar v-model="active" line>
				  <l-sidebar-item title="标签名称"/>
				  <l-sidebar-item title="标签名称"/>
				  <l-sidebar-item title="标签名称"/>
				</l-sidebar>
			</view>	
		</view>	
		<view class="demo-block card">
			<text class="demo-block__title-text large">圆角</text>
			<view class="demo-block__body" style="height: 500rpx;">
				<l-sidebar v-model="active" round>
				  <l-sidebar-item title="标签名称"/>
				  <l-sidebar-item title="标签名称"/>
				  <l-sidebar-item title="标签名称"/>
				</l-sidebar>
			</view>	
		</view>	
		<demo-block title="徽标提示">
			<view class="preview">
				<l-sidebar v-model="active">
				  <l-sidebar-item title="标签名称" dot />
				  <l-sidebar-item title="标签名称" badge="5"/>
				  <l-sidebar-item title="标签名称" />
				</l-sidebar>
			</view>
		</demo-block>
		<demo-block title="禁用状态">
			<view class="preview">
				<l-sidebar v-model="active">
				  <l-sidebar-item title="标签名称" />
				  <l-sidebar-item title="标签名称" disabled/>
				  <l-sidebar-item title="标签名称" />
				</l-sidebar>
			</view>
		</demo-block>
		<demo-block title="监听切换事件">
			<view class="preview">
				<l-sidebar v-model="active" @change="onChange">
				  <l-sidebar-item title="标签名称" />
				  <l-sidebar-item title="标签名称" />
				  <l-sidebar-item title="标签名称" />
				</l-sidebar>
			</view>
		</demo-block>
	</demo-block>
</template>
<script>
	export default {
		data() {
			return {
				active: 0
			}
		},
		methods: {
			onChange(value) {
				uni.showToast({
					title: `标签${value}`
				})
			}
		}
	}
</script>
<style lang="scss">
	.preview {
		background-color: white;
		// padding: 20px;
	}
</style>