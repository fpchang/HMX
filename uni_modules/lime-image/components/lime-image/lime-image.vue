<template>
	<demo-block type="ultra" title="图片">
		<demo-block type="large" title="类型">
			<view class="row">
				<view class="col">
					<view class="text">裁切</view>
					<!-- <l-image mode="aspectFill" width="72" height="72" src="/static/svg/a.svg"></l-image> -->
					<!-- <l-image width="100" height="100" color="red" src="https://api.iconify.design/material-symbols/backpack-sharp.svg"></l-image> -->
					<!-- <l-image mode="aspectFill" shape="round" width="72" height="72" src="/static/mv.jpg"></l-image> -->
					<!-- <l-image mode="aspectFill" shape="round" width="72" height="72" src="/static/a.svg"></l-image> -->
				</view>
				<view class="col">
					<view class="text">适应高</view>
					<!-- <l-image mode="aspectFill" width="100" height="100" src="https://www.xmplus.cn/static/modules/cms/images/home9_1.svg"></l-image> -->
					
					<!-- <l-image mode="heightFix" width="72" height="72" src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/137584/22/28854/86280/62ff6bb6Ead03e6ac/0847f9dcdd1c3c8f.jpg"></l-image> -->
				</view>
				<view class="col">
					<view class="text">拉伸</view>
					<!-- <l-image width="72" height="72" src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/137584/22/28854/86280/62ff6bb6Ead03e6ac/0847f9dcdd1c3c8f.jpg"></l-image> -->
				</view>
			</view>
			<view class="row">
				<view class="col">
					<view class="text">方形</view>
					<!-- <l-image mode="aspectFill" width="72" height="72" src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/137584/22/28854/86280/62ff6bb6Ead03e6ac/0847f9dcdd1c3c8f.jpg"></l-image> -->
				</view>
				<view class="col">
					<view class="text">圆角方形</view>
					<l-image width="72" height="72" shape="round" src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/137584/22/28854/86280/62ff6bb6Ead03e6ac/0847f9dcdd1c3c8f.jpg"></l-image>
				</view>
				<view class="col">
					<view class="text">圆形</view>
					<!-- <l-image width="72" height="72" shape="circle"  src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/137584/22/28854/86280/62ff6bb6Ead03e6ac/0847f9dcdd1c3c8f.jpg"></l-image> -->
				</view>
			</view>
		</demo-block>
		<demo-block type="large" title="状态">
			<!-- <view class="row">
				<view class="col">
					<view class="text">加载默认提示</view>
					<l-image shape="round" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">自定义加载</view>
					<l-image shape="round" width="72" height="72">
						<template #loading>
							<text style="font-size: 24rpx;">加载中</text>
						</template>
					</l-image>
				</view>
			</view>
			<view class="row">
				<view class="col">
					<view class="text">失败默认提示</view>
					<l-image src="" shape="round" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">自定义失败</view>
					<l-image src="" shape="round" width="72" height="72">
						<template #error>
							<text style="font-size: 24rpx;">加载失败</text>
						</template>
					</l-image>
				</view>
			</view> -->
		</demo-block>
	</demo-block>
</template>
<script>
</script>
<style lang="scss">
	.row {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
		/* #ifdef APP-NVUE  */
		flex-direction: row;
		/* #endif */
		// justify-content: space-between;
		// justify-content: space-around;
		
		.text {
			padding-bottom: 10px;
		}
		&+.row {
			margin-top: 30px;
		}
	}
</style>
