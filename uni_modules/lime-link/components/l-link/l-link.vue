<template>
	<navigator
		class="l-link" 
		:class="[
			'l-link--' + size,
			'l-link--' + type,
			{
				'l-link--disabled':  disabled,
				'l-link--underline':  underline
			}
		]"
		:style="[styles]"
		:url="!disabled ? navigatorProps?.['url'] || url: ''"
		:target="navigatorProps?.['target']"
		:open-type="navigatorProps?.['openType'] || openType"
		:delta="navigatorProps?.['delta']"
		:app-id="navigatorProps?.['appId']"
		:path="navigatorProps?.['path']"
		:extra-data="navigatorProps?.['extraData']"
		:version="navigatorProps?.['version']"
		:short-link="navigatorProps?.['shortLink']"
		:hover-class="hover && !disabled ? 'l-link--hover': ''"
		:hover-stop-propagation="navigatorProps?.['hoverStopPropagation']"
		:hover-start-time="navigatorProps?.['hoverStartTime']"
		:hover-stay-time="navigatorProps?.['hoverStayTime']"
		@click="onClick"
		@success="onSuccess"
		@fail="onFail"
		@complete="onComplete">
		<slot name="prefix-icon">
			<view class="l-link__icon l-link__prefix-icon" v-if="prefixIcon">
				<l-icon :size="fontSize" :color="color" :name="innerPrefixIcon!['name']"></l-icon>
			</view>
		</slot>
		<text class="l-link__content" ref="textRef"><slot>{{content}}</slot></text>
		<slot name="suffix-icon">
			<view class="l-link__icon l-link__suffix-icon" v-if="suffixIcon">
				<l-icon :size="fontSize" :color="color" :name="innerSuffixIcon!['name']"></l-icon>
			</view>
		</slot>
	</navigator>
</template>

<script lang="ts">
	// @ts-nocheck
	/**
	 * Link 链接组件
	 * @description 提供文本超链接功能，支持内外链跳转和多种交互状态
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-link
	 * 
	 * @property {string} url 应用内跳转路径（优先级高于href）
	 * @property {string} href 外部链接地址（需配置业务域名）
	 * @property {'navigate' | 'redirect' | 'switchTab' | 'reLaunch' | 'navigateBack' | 'exit'} openType 跳转方式
	 * @value navigate      保留当前页跳转（默认）
	 * @value redirect      关闭当前页跳转
	 * @value switchTab     切换Tab页
	 * @value reLaunch      重载应用
	 * @value navigateBack  返回上一页
	 * @value exit          退出小程序（部分平台支持）
	 * @property {string} content 链接文本内容（支持插槽）
	 * @property {boolean} disabled 禁用状态（禁止点击）
	 * @property {boolean} hover 启用点击反馈效果
	 * @property {Object} navigatorProps 原生导航属性（参考微信navigator组件）
	 * @property {any} prefixIcon 前置图标（支持图标名称/图片路径/组件）
	 * @property {any} suffixIcon 后置图标（支持图标名称/图片路径/组件）
	 * @property {'small' | 'medium' | 'large'} size 组件尺寸
	 * @value small      
	 * @value medium      
	 * @value large     
	 * @property {'default' | 'primary' | 'danger' | 'warning' | 'success' | 'info'} type 颜色类型
	 * @value default
	 * @value primary      
	 * @value danger 
	 * @value warning 
	 * @value success 
	 * @value info 
	 * @property {boolean} underline 显示下划线
	 * @property {string} color 自定义颜色（覆盖type设置）
	 */
	import { defineComponent, computed } from '@/uni_modules/lime-shared/vue';
	import linkProps from './props';
	import { openSchema } from '@/uni_modules/lime-link'
	import { makePhoneCall, MakePhoneCallOption } from '@/uni_modules/lime-call'
	export default defineComponent({
		name: 'l-link',
		props: linkProps,
		setup(props) {
			const name = 'l-link';
			const fontSize = computed(():string|null=>{
				if(!['small' , 'medium' , 'large'].includes(props.size)) {
					return props.size
				}
				return null
			})
			const styles = computed(() =>{
				const style:Record<string, any> = {}
				if(props.color) {
					style['color'] = props.color!
				}
				if(fontSize.value) {
					style['font-size'] = fontSize.value!
				}
				return style
			})
			const innerPrefixIcon = computed(() => {
				if(props.prefixIcon == null) return null
				if(typeof props.prefixIcon == 'string') return {name: `${props.prefixIcon}`}
				if(typeof props.prefixIcon == 'object') return props.prefixIcon
				return null
			})
			const innerSuffixIcon = computed(() => {
				if(props.suffixIcon == null) return null
				if(typeof props.suffixIcon == 'string') return {name: `${props.suffixIcon}`}
				if(typeof props.suffixIcon == 'object') return props.suffixIcon
				return null
			})
			const isOpenUrl = computed(():boolean => {
				if(props.href) return true
				if(!props.href && !props.url) return true
				return false 
			}) 
			const isMail = computed(():boolean => {
				return props.href?.startsWith('mailto:') || false
			})
			const isTel = computed(():boolean => {
				return props.href?.startsWith('tel:') || false
			})
			const onClick = () => {
				if(props.href == null) return
				if(isMail.value) {
					return
				}
				if(isTel.value) {
					makePhoneCall({
						phoneNumber: props.url!.replace('tel:', '')
					} as MakePhoneCallOption)
					return
				}
				if(isOpenUrl.value) {
					openSchema(props.href!)
				}
			}
			const onSuccess = () => {}
			const onFail = () => {}
			const onComplete = () => {}
			
			return {
				fontSize,
				styles,
				innerPrefixIcon,
				innerSuffixIcon,
				onClick,
				onSuccess,
				onFail,
				onComplete
			}
			
		}
	})
	
</script>

<style lang="scss">
	@import './index';
</style>