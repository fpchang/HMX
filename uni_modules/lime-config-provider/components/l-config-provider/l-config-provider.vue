<template>
	<view :class="themeClass" :style="themeStyle">
		<slot />
	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	/**
	 * ConfigProvider LimeUi 全局配置
	 * @description 用于管理多个折叠面板的展开状态，支持手风琴模式和卡片风格
	 * <br> 插件类型：LConfigProviderComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-config-provider
	 * 
	 * @property {string} theme 主题风格，设置为 dark 来开启深色模式，全局生效
	 * @property {UTSJSONObject} themeVars 自定义主题变量
	 * @property {string|UTSJSONObject} lStyle 自定义节点样式
	 * @property {string} lClass 自定义节点class name
	 */
	import { defineComponent, computed, provide } from '@/uni_modules/lime-shared/vue'
	import { objToCss } from '@/uni_modules/lime-shared/objToCss'
	import { mapThemeVarsToCSSVars } from './utils'
	import { getThemeTokens } from './theme'
	import onfigProviderProps from './props'
	export default defineComponent({
		props: onfigProviderProps,
		setup(props) {
			const themeClass = computed(() : string => {
				return `l-theme-${props.theme} ${props.lClass}`
			})
			
			const themeStyle = computed(() : string => {
				const styleObj = mapThemeVarsToCSSVars(props.themeVars)
				const lStyle = typeof props.lStyle == 'string' ? props.lStyle : objToCss(props.lStyle ?? {})
				return styleObj ? `${objToCss(styleObj)}${lStyle}` : lStyle
			})
			
			const themeConfig = computed(() => {
				const themeVars = getThemeTokens(props.theme, props.themeVars)
				return themeVars
			});
			
			provide('limeConfigProviderThemeVars', themeConfig)
			provide('limeConfigProviderTheme', computed(()=> props.theme))
			
			return {
				themeClass,
				themeStyle
			}
		}
	})
	
</script>
<style>
</style>
