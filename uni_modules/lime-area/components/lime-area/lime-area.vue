<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Area 省市区选择</text>
		<text class="demo-block__desc-text">省市区三级联动选择，通常与弹出层组件配合使用。</text>	
		<view class="demo-block__body">
			<view class="demo-block">
				<text class="demo-block__title-text large">基础用法{{value.join('/')}}</text>
				<view class="demo-block__body">
					<l-area :localData="areaList" v-model="value" confirm-btn="确认" @confirm="onConfirm"></l-area>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text">配置显示列</text>
				<view class="demo-block__body">
					<l-area :localData="areaList" v-model="value" :columns-num="2" cancel-btn="取消" title="选择地区" confirm-btn="确认" @confirm="onConfirm"></l-area>
				</view>	
			</view>	
			<view class="demo-block">
				<text class="demo-block__title-text large">uniCloud</text>
				<view class="demo-block__body">
					<l-area uniCloud v-model="value"></l-area>
				</view>	
			</view>
		</view>	
	</view>
</template>

<script>
	import { areaList } from '@/uni_modules/lime-shared/areaData';
	export default {
		data() {
			return {
				areaList: areaList,
				value: []
			}
		},
		methods: {
			onConfirm(event) {
				console.log('event', event)
				this.value = event.values
			}
		}
	}

</script>

<style lang="scss">
	.row{
		flex-direction: row;
		flex-wrap: wrap;
	}
	.btn {
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		align-self: center;
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
				display: flex;
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