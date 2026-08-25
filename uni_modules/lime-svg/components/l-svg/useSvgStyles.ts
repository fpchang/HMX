// @ts-nocheck
// #ifndef UNI-APP-X
import { computed, ref, type ComputedRef, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif
import { stringifyStyle } from '@/uni_modules/lime-shared/stringifyStyle';
import { formatUrl } from './utils';
import type { LSvgProps } from './type';

// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif

export type UseSvgStylesReturn = {
	svgUrl: Ref<string>;
	isInherit: ComputedRef<boolean>;
	styles: ComputedRef<string>;
};

/**
 * SVG 样式 hook
 * @description 计算 SVG 组件的样式、继承状态和图片 URL
 *
 * `svgUrl` 承载最终用于渲染的 URL：
 * - 初始为 `props.src`
 * - useSvgPath/useSvgNative/useSvgWebView 会改写为转换/下载后的 URL
 * - WEB onLoad 后由 useSvgEvents 改写为真实图片 URL
 *
 * 统一使用 CSS 变量 `--svg` 承载图片 URL，由 SCSS 中
 * `mask-image: var(--svg)` / `background-image: var(--svg)` 消费，
 * uvue 与 vue 共用同一份逻辑，无需平台分支。
 */
export function useSvgStyles(props: LSvgProps): UseSvgStylesReturn {
	const svgUrl = ref(props.src);

	// uni-app-x APP 端使用原生渲染，不需要 is-inherit 类名
	// 其他端通过 inherit 或 color 判断是否继承颜色
	const isInherit = computed((): boolean => {
		// #ifdef UNI-APP-X && APP
		return false;
		// #endif
		// #ifndef UNI-APP-X && APP
		return props.inherit || props.color != '';
		// #endif
	});

	const styles = computed((): string => {
		const style: UTSJSONObject = {};

		// #ifndef UNI-APP-X && APP
		// uni-app-x APP 端使用原生渲染，--svg 和 color 由 NativeImage 处理
		// if (svgUrl.value != '') {
		// 	style['--svg'] = formatUrl(svgUrl.value, 'url');
		// }
		const image = formatUrl(svgUrl.value, 'url')
		if (isInherit.value) {
			style['-webkit-mask-image'] =  image
			style['mask-image'] = image
		} else {
			style['background-image'] =  image
		}
		if (props.color != '') {
			style['color'] = props.color;
		}
		// #endif

		return stringifyStyle(style, props.lStyle);
	});

	return {
		svgUrl,
		isInherit,
		styles
	};
}
