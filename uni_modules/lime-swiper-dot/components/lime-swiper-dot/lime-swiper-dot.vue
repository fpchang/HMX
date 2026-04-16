<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">SwipeDot 轮播图指示点</text>
		<text class="demo-block__desc-text">自定义轮播图指示点组件。</text>
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<view style="position: relative">
						<swiper style="height: 300rpx" :current="current" @change="onChange" :autoplay="true" :interval="3000">
							<swiper-item class="slide slide1"><text class="text">1</text></swiper-item>
							<swiper-item class="slide slide2"><text class="text">2</text></swiper-item>
							<swiper-item class="slide slide3"><text class="text">3</text></swiper-item>
						</swiper>
						<l-swiper-dot :current="current" :type="type" :list="list" field="title" />
					</view>
				</view>
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">自定义颜色</text>
				<view class="demo-block__body">
					<view style="position: relative">
						<swiper style="height: 300rpx" :current="current" @change="onChange" :autoplay="true" :interval="3000">
							<swiper-item class="slide slide1"><text class="text">1</text></swiper-item>
							<swiper-item class="slide slide2"><text class="text">2</text></swiper-item>
							<swiper-item class="slide slide3"><text class="text">3</text></swiper-item>
						</swiper>
						<l-swiper-dot  activeColor="#ff6b6b" inactiveColor="#ffe66d" color="#2d3436"  :current="current" type="title" :list="list" field="title" />
					</view>
				</view>
			</view>
			<view class="demo-block card">
				
				<view class="demo-block__body">
					<radio-group  @change="radioChange">
						<radio checked value="dot">dot</radio>
						<radio style="margin-top:10px" value="dot-bar">dot-bar</radio>
						<radio style="margin-top:10px" value="index">index</radio>
						<radio style="margin-top:10px" value="title">title</radio>
						<radio style="margin-top:10px" value="fraction">fraction</radio>
					</radio-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				type: 'dot',
				 typeList: ['dot', 'dot-bar', 'index', 'title', 'fraction'],
				list: [
					{
						title: '人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。',
					},
					{
						title: '但愿人长久，千里共婵娟。',
					},
					{
						title: '无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。',
					},
				]
			}
		},
		methods: {
			onChange(e) {
				this.current = e.detail.current
			},
			radioChange(e) {
				this.type = e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	.slide {
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.text {
		font-size: 120rpx;
		font-weight: bold;
		color: #fff;
	}
	.slide1 {
		background-color: rgba(255, 59, 48, 0.3);
		/* 类苹果红色调 */
	}

	.slide2 {
		background-color: rgba(52, 199, 89, 0.3);
		/* 类苹果绿色调 */
	}

	.slide3 {
		background-color: rgba(0, 122, 255, 0.3);
		/* 类苹果蓝色调 */
	}

	.demo-block {
		margin: 32px 16px 0;

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