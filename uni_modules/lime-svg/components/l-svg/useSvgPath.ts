// @ts-nocheck
// #ifndef UNI-APP-X
import { watchEffect, getCurrentInstance, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif
import type { LSvgProps } from './type';
import { pathToDataUrl, svgToDataUrl } from './utils';
import { UniImageErrorEventDetail, UniImageErrorEvent } from './utils';

/**
 * SVG 路径转换 hook（vue 全端 + uvue 小程序/WEB）
 * @description 将 SVG 字符串、本地路径转换为可用的 URL，写入 svgUrl
 *
 * - `<svg` 字符串 → 转为 Data URL
 * - `/static` 本地路径：
 *   - WEB：直接使用原始路径
 *   - APP-VUE：去掉前导 `/`（相对路径）
 *   - 小程序：转为 Data URL
 * - 其他（http/https/data:）→ 直接使用
 */
export function useSvgPath(props: LSvgProps, svgUrl: Ref<string>): void {
	const instance = getCurrentInstance();

	watchEffect(() => {
		if (props.src == '') return;
		if (props.src.startsWith('<svg')) {
			svgUrl.value = svgToDataUrl(props.src);
		} else if (props.src.startsWith('/static')) {
			
			// #ifdef WEB
			svgUrl.value = props.src;
			// #endif
			
			// #ifdef APP-VUE
			// svgUrl.value = props.src.slice(1);
			// #endif
			
			// #ifndef WEB 
			pathToDataUrl(props.src).then(res => {
				svgUrl.value = res;
			}).catch(err => {
				const errDetail = new UniImageErrorEventDetail(`加载失败: ${props.src}`);
				const errEvent = new UniImageErrorEvent('error', errDetail);
				instance?.emit('error', errEvent);
				console.warn("[lime-svg]" + props.src + JSON.stringify(err));
			});
			// #endif
		} else {
			svgUrl.value = props.src;
		}
	});
}
