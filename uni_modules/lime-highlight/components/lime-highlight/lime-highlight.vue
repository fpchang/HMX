<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Highlight 高亮文本</text>
		<text class="demo-block__desc-text">高亮指定文本内容。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础用法</text>
				<view class="demo-block__body">
					<l-highlight keywords="难题" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">多字符匹配</text>
				<view class="demo-block__body">
					<l-highlight :keywords="['难题', '终有一天', '答案']" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
				</view>	
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text large">设置高亮标签类名</text>
				<view class="demo-block__body">
					<l-highlight keywords="生活" highlight-class="custom-class" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">设置高亮样式</text>
				<view class="demo-block__body">
					<l-highlight keywords="生活" highlight-style="color: red" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。"  />
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text large">插槽</text>
				<view class="demo-block__body">
					<l-highlight keywords="生活" highlight-style="color: red" text="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" >
						<template #default="{item}">
							<text :style="{color: item.highlight? '#07c160': '#8e69d3'}">{{item.text}}</text>
						</template>
					</l-highlight>
				</view>	
			</view>	
		</view>	
	</view>
</template>
<script>
</script>

<style lang="scss">
	.strong{
		font-size: 32rpx;
		font-weight: bold;
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
				display: block;
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
				margin-bottom: 10px;
			}
		}
	}
</style>