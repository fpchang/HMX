<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">阅读更多</text>
		<text class="demo-block__desc-text">用于展示任务当前的进度。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础</text>
				<view class="demo-block__body">
					<l-read-more>
						<view>
							<text class="text">那一天我二十一岁，在我一生的黄金时代，我还有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我知道，生活就是个缓慢受槌的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了槌的牛一样。可是我二十一岁生日时没预见到这一点。我觉得自己会永远生猛下去，什么也槌不了我。——王小波《黄金时代》</text>
							<text class="text">初识王小波是通过阅读他的杂文集——《我的精神家园》。那是一本老旧泛黄的书，孤零零地挤在一堆散文作家中间。我拍了拍散落在上面的灰尘，只翻开一页就不能自拔。老实说，这种新奇有趣的写法确实让我眼前一亮。</text>
						</view>
					</l-read-more>
				</view>
			</view>	
		</view>	
	</view>
</template>
<script>
	
	export default {
		data() {
			return {
				show:  false
			}
		},
		methods: {
			onClick() {
				console.log('click')
			}	
		},
		mounted() {
			setTimeout(() => {
				this.show = true
			},2000)
		}
	}
	
	
</script>
<style lang="scss">
	$card-bg-color: var(--doc-card-bg-color, white);
	// $page-bg-color: var(--doc-page-bg-color, #f5f5f5);
	$title-color: var(--doc-title-color, #000000E6);
	$summary-color: var(--doc-summary-color, #00000099);
	
	.text {
		color: $summary-color;
	}
	.demo-block {
		margin: 32px 20px 0;
		// overflow: visible;
		&.card{
			background-color: $card-bg-color;
			transition-property: background-color;
			// transition-duration: 300ms;
			padding: 30rpx;
			margin-bottom: 20rpx;
		}
		&__title {
			margin: 0;
			margin-top: 8px;
			&-text {
				color: $summary-color;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				
				&.large {
					color: $title-color;
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
				}
				&.ultra {
					color: $title-color;
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
				}
			}
		}
		&__desc-text {
			color: $summary-color;
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
