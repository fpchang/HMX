<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">cell 单元格</text>
		<text class="demo-block__desc-text">用于各个类别行的信息展示。</text>	
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text">基础用法</text>
				<view class="demo-block__body">
					<l-cell-group>
						<l-cell title="单行标题" arrow></l-cell>
						<l-cell title="单行标题" arrow hover required />
						<l-cell title="单行标题" arrow hover>
						    <template #note>
						        <l-badge :content="20" />
						    </template>
						</l-cell>
						<l-cell title="单行标题" note="辅助信息" arrow hover />
						<l-cell title="单行标题" icon="animation-1" arrow hover />
					</l-cell-group>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text">分组</text>
				<view class="demo-block__body">
					<l-cell-group title="分组1">
						<l-cell title="单行标题" icon="animation-1" arrow></l-cell>
						<l-cell title="单行标题" size="small" icon="animation-1" arrow></l-cell>
					</l-cell-group>
				</view>	
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">多行</text>
				<view class="demo-block__body">
					<l-cell-group>
						<l-cell title="单行标题" description="一段很长很长的内容文字" arrow></l-cell>
						<l-cell title="单行标题" description="一段很长很长的内容文字" arrow hover required />
						<l-cell title="单行标题" description="一段很长很长的内容文字" arrow hover>
						    <template #note>
						        <l-badge :content="20" />
						    </template>
						</l-cell>
						<l-cell title="单行标题" description="一段很长很长的内容文字" note="辅助信息" arrow hover />
						<l-cell title="单行标题" description="一段很长很长的内容文字" icon="animation-1" arrow hover />
						<l-cell title="单行标题" description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容" />
						<l-cell
						    title="多行高度不定，长文本自动换行，该选项的描述是一段很长的内容"
						    description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
						/>
						<l-cell title="多行带头像" description="一段很长很长的内容文字" arrow>
						    <template #icon>
						        <l-avatar shape="circle" src="https://tdesign.gtimg.com/mobile/demos/avatar1.png" />
						    </template>
							<!-- <template #title>
								<button>
									<text>chat-bubble-1</text>
									<l-icon name="chat-bubble-1" color="red" size="28rpx"></l-icon>
								</button>
							</template> -->
						</l-cell>
						<l-cell title="多行带图片" description="一段很长很长的内容文字" image="https://tdesign.gtimg.com/mobile/demos/avatar2.png" />
					</l-cell-group>
				</view>	
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">卡片</text>
				<view class="demo-block__body">
					<l-cell-group inset>
						<l-cell title="单行标题" icon="animation-1" arrow></l-cell>
						<l-cell title="单行标题" icon="animation-1" arrow hover />
						<l-cell title="单行标题" icon="animation-1" arrow hover />
						<l-cell title="单行标题" icon="animation-1" arrow hover required />
					</l-cell-group>
				</view>	
			</view>
			<view class="demo-block">
				<text class="demo-block__title-text">尺寸</text>
				<view class="demo-block__body">
					<l-cell-group inset>
						<l-cell title="单行标题" icon="animation-1" arrow></l-cell>
						<l-cell title="单行标题" size="small" icon="animation-1" arrow></l-cell>
					</l-cell-group>
				</view>	
			</view>
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	$card-bg-color: var(--doc-card-bg-color, white);
	// $page-bg-color: var(--doc-page-bg-color, #f5f5f5);
	$title-color: var(--doc-title-color, #000000E6);
	$summary-color: var(--doc-summary-color, #00000099);
	
	
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
				color: $summary-color;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				display: flex;
				margin-left: 20px;
				&.large {
					color: $title-color;
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
					margin-left: 20px;
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