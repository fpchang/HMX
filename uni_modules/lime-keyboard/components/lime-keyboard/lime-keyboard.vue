<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">Keyboard 键盘</text>
		<text class="demo-block__desc-text">虚拟数字键盘，可以配合输入框组件或自定义的输入框组件使用。</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text">默认键盘</text>
				<view class="demo-block__body">
					<button @click="visible1 = true">默认键盘</button>
					<l-keyboard v-model:visible="visible1" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">带右侧栏的键盘</text>
				<view class="demo-block__body">
					<button @click="visible2 = true">带右侧栏的键盘</button>
					<l-keyboard type="custom" v-model:visible="visible2" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text">键盘标题</text>
				<view class="demo-block__body">
					<button @click="visible3 = true">键盘标题</button>
					<l-keyboard type="custom" title="键盘标题" v-model:visible="visible3" :extraKey="['.']" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
			
			<view class="demo-block card">
				<text class="demo-block__title-text">配置多个按键</text>
				<view class="demo-block__body">
					<button @click="visible4 = true">配置多个按键</button>
					<l-keyboard type="custom" v-model:visible="visible4"  :extraKey="['00','.']" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">身份证</text>
				<view class="demo-block__body">
					<button @click="visible5 = true">配置多个按键</button>
					<l-keyboard type="idcard" v-model:visible="visible5" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
			<view class="demo-block card">
				<text class="demo-block__title-text">输入车牌</text>
				<view class="demo-block__body">
					<l-code-input 
						v-model="value" 
						:insertAt="{index:2}" 
						:mask="false" 
						:focused="focused"
						lastElementStyle="background: rgba(225, 252, 236, 1);border: 2px dashed rgba(96, 188, 121, 1);"
						lastElementPlaceholder="新能源"
						lastElementPlaceholderStyle="color: rgba(96, 188, 121, 1); font-size:12px; width:12px"
						:disabledKeyboard="true" 
						activeBorderColor="#E75A2C"
						activeBorderWidth="2px"
						@focus="visible6 = true; focused = true" 
						:length="8">
					</l-code-input>
					<l-keyboard type="car" v-model="value" v-model:visible="visible6"  @close="focused = false" @key-up="onKeyUp"></l-keyboard>
				</view>	
			</view>	
		</view>	
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				value: '',
				visible1: false,
				visible2: false,
				visible3: false,
				visible4: false,
				visible5: false,
				visible6: false,
				focused: false,
			}
		},
		methods:{
			handleClick() {},
			onKeyUp(text) {
				uni.showToast({
					icon: 'none',
					title: text,
				})
			}
		}
	}
</script>

<style lang="scss">
	.l-keyboard__key-close{
		background-color: red;
		&--hover {
			background-color: aqua;
		}
	}
	.custom-capsule {
	  width: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: row;
	}
	
	.custom-capsule__icon {
	  position: relative;
	  margin: 0;
	}
	
	.demo-block {
		margin: 32px  0;
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
				padding: 0 16px;
				display: block;
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
			margin: 8px 16px 0 16px;
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