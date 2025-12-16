<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Pagination 分页</text>
		<text class="demo-block__desc-text">数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<view style="height: 10px;"></view>
					<l-pagination v-model="currentPage" :total="24" :pageSize="5" :pagerCount="3" ></l-pagination>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">简单模式</text>
				<view class="demo-block__body">
					<view style="height: 10px;"></view>
					<l-pagination v-model="currentPage" :total="24" :pageSize="5" simple></l-pagination>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">显示省略号{{currentPage}}</text>
				<view class="demo-block__body">
					<view style="height: 10px;"></view>
					<l-pagination 
						v-model="currentPage" 
						:total="204" 
						:pageSize="5" 
						:pagerCount="5" 
						:showPrevButton="false"
						:showNextButton="false"
						force-ellipses></l-pagination>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">禁用</text>
				<view class="demo-block__body">
					<view style="height: 10px;"></view>
					<l-pagination 
						v-model="currentPage" 
						:total="204" 
						:pageSize="5" 
						:pagerCount="5" 
						:showPrevButton="false"
						:showNextButton="false"
						:disabled="true"
						forceEllipses></l-pagination>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义</text>
				<view class="demo-block__body">
					<view style="height: 10px;"></view>
					<!-- <l-pagination 
						v-model="currentPage" 
						:total="204" 
						:pageSize="5" 
						:pagerCount="3" 
						prevText="<"
						nextText=">"
						color="#000"
						bgColor="white"
						borderColor="#888"
						activeBgColor="#ffb400"
						activeColor="#000"
						radius="99px"
						force-ellipses>
						 
						</l-pagination> -->
						<l-pagination
							v-model="currentPage" 
							:total="204" 
							:pageSize="5" 
							:pagerCount="3" 
							force-ellipses>
							<template #prev="{disabled}">
								<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px">👈</text>
							</template>
							<template #page="{label, active}">
								<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px; margin: 0 5px;">{{label}}</text>
							</template>
							<template #next="{disabled}">
								<text style="width: 40px; height:40px; background: #000; border-radius:99px; color: white; text-align: center; line-height:40px">👉</text>
							</template>
						</l-pagination>
				</view>	
			</view>	
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 1
			}
		}
	}
</script>

<style lang="scss">
	.demo-block {
		margin: 32px 14px 0;
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