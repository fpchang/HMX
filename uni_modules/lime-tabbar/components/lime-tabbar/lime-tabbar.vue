<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">标签栏</text>
		<text class="demo-block__desc-text">用于在不同功能模块之间进行快速切换，位于页面底部</text>
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text large">组件类型</text>
				<view class="demo-block__body">

					<view class="demo-block">
						<text class="demo-block__title-text">纯文本</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false">
								<l-tabbar-item label="首页"></l-tabbar-item>
								<l-tabbar-item label="应用"></l-tabbar-item>
								<l-tabbar-item>聊天</l-tabbar-item>
								<l-tabbar-item>我的</l-tabbar-item>
							</l-tabbar>

						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">图标加文字标签栏</text>
						<view class="demo-block__body">
							<l-tabbar :fixed="false" :safeAreaInsetBottom="false">
								<l-tabbar-item icon="home" value="home" :badgeProps="badgeProps"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app" :badgeProps="badgeProps"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>
						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">纯图标</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false">
								<l-tabbar-item icon="home" value="home"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">颜色</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false" activeColor="red" color="#999">
								<l-tabbar-item icon="home" value="home"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">禁用</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false">
								<l-tabbar-item icon="home" value="home"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat" :disabled="true"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">监听切换事件</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false" @change="change">
								<l-tabbar-item icon="home" value="home"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text large">组件样式</text>
				<view class="demo-block__body">

					<view class="demo-block">
						<text class="demo-block__title-text">默认样式</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false" theme="tag" @change="change">
								<l-tabbar-item icon="home" :badgeProps="{ content: 16, max:5 }"
									value="home"></l-tabbar-item>
								<l-tabbar-item icon="app" :badgeProps="badgeProps" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" :badgeProps="{ content: 'New', offset: [10,-2] }"
									value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" :badgeProps="{ content: '···' }"
									value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>

					<view class="demo-block">
						<text class="demo-block__title-text">悬浮胶囊标签栏</text>
						<view class="demo-block__body">

							<l-tabbar :fixed="false" :safeAreaInsetBottom="false" theme="tag" shape="round">
								<l-tabbar-item icon="home" value="home" :badgeProps="badgeProps"></l-tabbar-item>
								<l-tabbar-item icon="app" value="app"></l-tabbar-item>
								<l-tabbar-item icon="chat" value="chat"></l-tabbar-item>
								<l-tabbar-item icon="user" value="user"></l-tabbar-item>
							</l-tabbar>

						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				badgeProps: {dot: true}
			}
		},
		methods:{
			change(value){
				console.log('value', value)
			}
		}
	}
</script>

<style lang="scss">
	.badge {
		position: absolute;
		transform-origin: 100%;
		background-color: #FF4D4F;
		overflow: visible;
		border-radius: 999px;

	}

	.demo-block {
		margin: 32px 0 0;
		overflow: visible;

		&__title {
			margin: 0;
			margin-top: 8px;

			&-text {
				color: rgba(0, 0, 0, 0.6);
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				padding-left: 20px;

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
			padding-left: 20px;
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