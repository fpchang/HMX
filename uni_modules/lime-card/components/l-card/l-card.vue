<template>
	<view class="l-card" ref="cardRef" :class="{ 'l-card--inset': inset}" :style="[lStyle]">
		<slot name="cover">
			<image v-if="cover " :style="[coverStyle]" class="l-card__cover" :src="cover!" :mode="coverMode"></image>
		</slot>
		<view class="l-card__header"
			:class="{
				'l-card__header--borderless': !headerBordered || !($slots['default'] || $slots['footer'] || actions)
			}"
			 v-if="$slots['title'] || title || note || $slots['header-extra']  || $slots['icon']  || image  || icon "
		>
			<view class="l-card__avatar" v-if="$slots['icon'] || image || icon">
				<!-- #ifndef APP || WEB -->
				<view class="l-card__avatar-icon" >
				<!-- #endif -->
					<l-icon class="l-card__avatar-icon" :l-class="lClassLeftIcon" :size="iconSize" :color="iconColor" v-if="icon" :name="icon" />
				<!-- #ifndef APP || WEB -->
				</view>
				<!-- #endif -->
				<image class="l-card__avatar-img" :style="[imageStyle]" v-if="image" :src="image" mode="aspectFill" />
				<slot name="icon"></slot>
			</view>
			<view class="l-card__title" v-if="$slots['title'] || title || note">
				<slot name="title">
					<text class="l-card__title-text" v-if="title">{{title}}</text>
					<text class="l-card__title-sub" v-if="note">{{note}}</text>
				</slot>
			</view>
			<slot name="header-extra">
				<text class="l-card__extra-text" v-if="extra" @click="onHeaderExtraClick">{{extra}}</text>
				<!-- #ifndef APP || WEB -->
				<view class="l-card__extra-icon">
				<!-- #endif -->
				<l-icon class="l-card__extra-icon" :l-class="lClassRightIcon" v-if="more" :color="rightIconColor" :size="rightIconSize" name="more" @tap="onHeaderExtraClick"/>
				<l-icon class="l-card__extra-icon" :l-class="lClassRightIcon" v-else-if="rightIcon" :color="rightIconColor" :size="rightIconSize" :name="rightIcon" @tap="onHeaderExtraClick"/>
				<!-- #ifndef APP || WEB -->
				</view>
				<!-- #endif -->
			</slot>
		</view>
		<view class="l-card__body" 
			:class="{
				'pt-0': !headerBordered
			}" 
		v-if="$slots['default']">
			<slot></slot>
		</view>
		<view class="l-card__footer" 
			:class="[
				'l-card__footer--' + actionsAlign,
				{
					'l-card__footer--borderless': !footerBordered || !($slots['default']),
					'pt-0': !footerBordered
				}
			]" v-if="$slots['footer'] || actions">
			<slot name="footer">
				<l-button 
					v-for="(action, index) in actions!" 
					:class="[
						'l-card__action--' + actionsAlign,
						{
							
							'l-card__action--gap': index > 0 && actions!.length > 1
						}
					]"
					:key="index"
					:block="action['block'] || false"
					:disabled="action['disabled'] || false"
					:data-extra="index"
					
					:icon="action['icon'] || ''"
					:loading="action['loading'] || false"
					:type="action['type'] || 'primary'"
					:ghost="action['loading'] || false"
					:shape="action['shape'] || 'rectangle'"
					:size="action['size'] || 'medium'"
					:variant="action['variant']"
					:open-type="action['openType'] || ''"
					:color="action['color']"
					:textColor="action['textColor']"
					:fontSize="action['fontSize']"
					
					:hover-stop-propagation="action['hoverStopPropagation'] || false"
					:hover-start-time="action['hoverStartTime'] || 20"
					:hover-stay-time="action['hoverStayTime'] || 70"
					:lang="action['lang'] || 'en'"
					:session-from="action['sessionFrom'] || ''"
					:send-message-title="action['sendMessageTitle'] || ''"
					:send-message-path="action['sendMessagePath'] || ''"
					:send-message-img="action['sendMessageImg'] || ''"
					:app-parameter="action['appParameter'] || ''"
					:show-message-card="action['showMessageCard'] || false"
					@click="onTplButtonTap('action', index)"
					@getuserinfo="getuserinfo"
					@contact="contact" 
					@getphonenumber="getphonenumber"
					@error="error" 
					@opensetting="opensetting" 
					@launchapp="launchapp" 
					@agreeprivacyauthorization="agreeprivacyauthorization">
					{{action['content']}}
				</l-button>
			</slot>
		</view>
	</view>
</template>
<script lang="ts">
	/**
	 * Card 卡片组件
	 * @description 卡片组件，用于展示内容区块。支持标题、副标题、图标、封面图、自定义操作按钮等多种配置。
	 * <br> 插件类型：LCardComponentPublicInstance
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-card
	 * 
	 * @property {string} title 卡片标题
	 * @property {string} note 和标题同行的说明文字
	 * @property {string} extra 右侧额外文字
	 * @property {string} icon 左侧图标名称
	 * @property {string} image 左侧图片地址
	 * @property {string} cover 封面图片地址
	 * @property {boolean} more 是否显示更多图标
	 * @property {boolean} inset 是否使用内嵌样式
	 * @property {Array} actions 操作按钮列表
	 * @property {'left' | 'right' | 'space-between'} actionsAlign 操作按钮对齐方式
	 * @value left 左对齐
	 * @value right 右对齐
	 * @value space-between 两端对齐
	 * @property {string} iconColor 左侧图标颜色
	 * @property {string} rightIcon 右侧图标名称
	 * @property {string} rightIconColor 右侧图标颜色
	 * @property {string} iconSize 左侧图标大小
	 * @property {string} rightIconSize 右侧图标大小
	 * @property {string | object} imageStyle 左侧图片样式
	 * @property {string | object} coverStyle 封面图片样式
	 * @property {string} coverMode 封面图片裁剪、缩放的模式
	 * @value scaleToFill 不保持纵横比缩放图片，使图片完全适应
	 * @value aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来
	 * @value aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来
	 * @value widthFix 宽度不变，高度自动变化，保持原图宽高比不变
	 * @value heightFix 高度不变，宽度自动变化，保持原图宽高比不变
	 * @property {string} bgColor 卡片背景色
	 * @property {boolean} headerBordered 是否显示头部边框
	 * @property {boolean} footerBordered 是否显示底部边框
	 * @property {string} lClass 自定义类名
	 * @property {string} lClassLeftIcon 左侧图标自定义类名
	 * @property {string} lClassRightIcon 右侧图标自定义类名
	 * 
	 * @event {Function} action 点击操作按钮时触发
	 * @event {Function} getuserinfo 用户点击该按钮时，会返回获取到的用户信息
	 * @event {Function} contact 客服消息回调
	 * @event {Function} getphonenumber 获取用户手机号回调
	 * @event {Function} error 当使用开放能力时，发生错误的回调
	 * @event {Function} opensetting 在打开授权设置页后回调
	 * @event {Function} launchapp 打开APP成功的回调
	 * @event {Function} chooseavatar 获取用户头像回调
	 * @event {Function} agreeprivacyauthorization 用户同意隐私协议事件回调
	 * 
	 * @slot default 卡片内容
	 * @slot cover 自定义封面
	 * @slot title 自定义标题区域
	 * @slot icon 自定义图标
	 * @slot header-extra 自定义头部右侧区域
	 * @slot footer 自定义底部内容
	 */
	
	import { defineComponent } from '@/uni_modules/lime-shared/vue';
	import cardProps from './props'
	
	export default defineComponent({
		props: cardProps,
		emits: ['action', 'agreeprivacyauthorization', 'chooseavatar', 'getuserinfo','contact', 'getphonenumber', 'error', 'opensetting', 'launchapp', 'more'],
		setup(props, {emit}) {
			
			const onTplButtonTap = (type: string, extra:number) => {
				emit('action', extra)
			}
			
			const getuserinfo = (e: UniEvent) => {
				emit('getuserinfo', e);
			}
			const contact = (e: UniEvent) => {
				emit('contact', e);
			}
			const getphonenumber = (e: UniEvent) => {
				emit('getphonenumber', e);
			}
			const error = (e: UniEvent) => {
				emit('error', e);
			}
			const opensetting = (e: UniEvent) => {
				emit('opensetting', e);
			}
			const launchapp = (e: UniEvent) => {
				emit('launchapp', e);
			}
			const chooseavatar = (e: UniEvent) => {
				emit('chooseavatar', e);
			}
			const agreeprivacyauthorization = (e: UniEvent) => {
				emit('agreeprivacyauthorization', e);
			}
			
			const onHeaderExtraClick = (e: UniEvent) => {
			    emit('more', e);
			}
				
			return {
				onHeaderExtraClick,
				agreeprivacyauthorization,
				chooseavatar,
				launchapp,
				opensetting,
				error,
				getphonenumber,
				contact,
				getuserinfo,
				onTplButtonTap
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>
