<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">单选框</text>
		<text class="demo-block__desc-text" style="display: flex;">在一组备选项中进行单选。</text>
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">基本用法</text>
				<view class="demo-block__body">
					<l-radio allowUncheck>单选框</l-radio>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">选项组</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange">
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shanghai" label="上海" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳" />
					</l-radio-group>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">禁用</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange" disabled>
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shanghai" label="上海" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳" />
					</l-radio-group>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">样式</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange" icon="dot">
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳" />
					</l-radio-group>
					<l-radio-group @change="onChange" icon="line">
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳" />
					</l-radio-group>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义颜色</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange" checked-color="#ee0a24">
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳" />
					</l-radio-group>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义大小</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange" checked-color="#ee0a24">
						<l-radio style="margin-bottom:20px; margin-right:20px" icon-size="44px" name="Beijing" label="北京" />
						<l-radio style="margin-bottom:20px; margin-right:20px" icon-size="34px" name="Guangzhou" label="广州" />
						<l-radio style="margin-bottom:20px; margin-right:20px" icon-size="24px" name="Shenzen" label="深圳" />
					</l-radio-group>
				</view>
			</view>
			<view class="demo-block card">
				<text class="demo-block__title-text">自定义图标</text>
				<view class="demo-block__body">
					<l-radio-group @change="onChange" checked-color="#ee0a24">
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Beijing" label="北京">
							<template #icon="{checked}">
								<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
								<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
							</template>
						</l-radio>
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Guangzhou" label="广州">
							<template #icon="{checked}">
								<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
								<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
							</template>
						</l-radio>
						<l-radio style="margin-bottom:20px; margin-right:20px" name="Shenzen" label="深圳">
							<template #icon="{checked}">
								<image v-show="checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"></image>
								<image v-show="!checked" style="width:20px; height:20px" src="https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png"></image>
							</template>
						</l-radio>
					</l-radio-group>
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
			onChange(v) {
				console.log('?', v)
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.row {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.custom-radio {
		padding: 20rpx 30rpx;
		border-radius: 5rpx;
		border: 1rpx solid #ddd;
		transition: background-color 0.3s;
		color: black;

		&.checked {
			background-color: #007aff;
			color: white;
			border-color: #007aff;
		}
	}

	.demo-block {
		margin: 32px 10px 0;

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