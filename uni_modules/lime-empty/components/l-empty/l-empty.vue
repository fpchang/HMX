<template>
	<view class="l-empty">
		<image class="l-empty__image" :style="[styles]" mode="widthFix" v-if="image" :src="imageUrl"></image>
		<text class="l-empty__description" v-if="description">{{description}}</text>
		<view class="l-empty__bottom">
			<slot></slot>
		</view>
	</view>
</template>
<script lang="ts">
	/**
	 * Empty 空状态组件
	 * @description 用于页面空数据或异常状态的占位提示
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-empty
	 * @property {String} description 描述文字
	 * @property {String|Number} imageSize 图片尺寸（支持px/rpx单位）
	 * @property {'error'|'search'|'default'|'network'|'cart'|'404'|'message'|'coupon'|'comment'|'express'|'order'|'address'} image 预设图片类型
	 * @value error 错误状态（三角形感叹号图标）
	 * @value search 搜索无结果（放大镜图标）
	 * @value default 默认空状态（盒子图标）
	 * @value network 网络错误（断开的地球图标）
	 * @value cart 购物车空（购物车图标）
	 * @value 404 404页面（带文字的大图标）
	 * @value message 无消息（气泡对话框图标）
	 * @value coupon 无优惠券（票券图标）
	 * @value comment 无评论（对话气泡图标）
	 * @value express 无物流（货车图标）
	 * @value order 无订单（文档图标）
	 * @value address 无地址（定位标记图标）
	 */
	import { computed, defineComponent, type PropType} from "@/uni_modules/lime-shared/vue";
	import { addUnit} from "@/uni_modules/lime-shared/addUnit";
	import { type Numeric } from './types'
	export default defineComponent({
		// name: 'l-empty',
		props: {
			description: String,
			imageSize: {
				type: [String, Number, Array] as PropType<Numeric | [Numeric, Numeric]>,
			},
			image: {
				type: String,
				default: 'default',
			},
		},
		setup(props) {
			
			const PRESETS = ['error', 'search', 'default', 'network','cart','404','message', 'coupon', 'comment', 'express', 'order','address']
			const imageUrl = computed(() : string => {
				if (PRESETS.includes(props.image)) {
					return '/uni_modules/lime-empty/static/' + props.image + '.png';
				}
				return props.image
			})
			
			const styles = computed(() => {
				const style:Record<string, any> = {}
				const imageSize = props.imageSize
				if(imageSize == null) {
					return style
				}
				if(Array.isArray(imageSize) && (imageSize as any[]).length > 0) {
					const width = addUnit(imageSize[0])
					const height = addUnit(imageSize[1])
					style['width'] = width
					style['height'] = addUnit(imageSize[1])
					
					return style
				}
				const width = addUnit(imageSize as Numeric)
				style['width'] = width
				return style
			})
			
			return {
				styles,
				imageUrl
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>