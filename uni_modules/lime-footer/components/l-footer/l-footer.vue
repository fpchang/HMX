<template>
	<view class="l-footer">
		<view class="l-footer__logo" v-if="logo">
			<image class="l-footer__icon" v-if="logo['icon']" :src="logo['icon']"></image>
			<text class="l-footer__title" v-if="logo['title']" :style="[color ? {color:color}:{}]">{{logo!['title']}}</text>
		</view>
		<view class="l-footer__link-list" v-if="links && links.length > 0">
			<template v-for="(item,index) in links">
				<navigator 
					:url="item['url']" 
					:open-type="item['openType']" 
					hover-class="none"
					class="l-footer__link-item">
					<text class="l-footer__link-item-text" :style="[linkColor ? {color:linkColor}:{}]">{{item['name']}}</text>
				</navigator>
				<text aria-hidden v-if="index != (links.length - 1)" :style="[lineColor ? {color:lineColor}:{}]" class="l-footer__link-line">|</text>
			</template>
		</view>
		<text class="l-footer__text" :style="[textColor ? {color:textColor}:{}]">{{text}}</text>
	</view>
</template>
<script lang="ts">
	import {  defineComponent } from '@/uni_modules/lime-shared/vue';
	import footerProps from './props'
	export default defineComponent({
		props: footerProps,
		setup() {
			
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>