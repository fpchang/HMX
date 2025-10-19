<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Footer 页脚</text>
		<text class="demo-block__desc-text">用于展示页面底部信息，包含Logo、导航链接和版权信息等元素。</text>
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-footer text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">链接页脚</text>
				<view class="demo-block__body">
					<l-footer :links="links" text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">品牌页脚</text>
				<view class="demo-block__body">
					<l-footer :logo="logo" text="Copyright © 2024-2025 LimeUI.All Rights Reserved." />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo: {
					icon: '/static/logo.64379736.png',
					title: '品牌名称',
				},
				links: [{
						name: '底部链接',
						url: '',
					},
					{
						name: '底部链接',
						url: '',
					},
				]
			}
		},
		methods: {

		},
		mounted() {

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
				overflow: visible;
			}
		}
	}
</style>