// @ts-nocheck
// #ifdef APP
// #ifndef UNI-APP-X
import { watchEffect, onBeforeUnmount, getCurrentInstance, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif
import { NativeImage } from "@/uni_modules/lime-svg";
import type { LSvgProps } from './type';
import { UniImageErrorEventDetail, UniImageErrorEvent } from './utils';

export type UseSvgNativeReturn = {
	handleViewInit: (e: UniNativeViewInitEvent) => void;
};

/**
 * SVG 原生渲染 hook（仅 APP，包含 Android/iOS/Harmony）
 * @description 使用 NativeImage 原生组件渲染 SVG，处理网络资源下载与颜色更新
 *
 * 网络资源下载后会改写 svgUrl 为本地临时路径；
 * 颜色变化时调用 nativeImage.update 更新原生渲染。
 */
export function useSvgNative(props: LSvgProps, svgUrl: Ref<string>): UseSvgNativeReturn {
	const instance = getCurrentInstance();
	let nativeImage: NativeImage | null = null;
	const downloadCache = new Map<string, string>();

	const handleViewInit = (e: UniNativeViewInitEvent) => {
		nativeImage = new NativeImage(e.detail.element);
		nativeImage?.update(svgUrl.value, props.color);
	}

	watchEffect(() => {
		// #ifdef APP-ANDROID || APP-IOS
		// ios uts组件使用uni.request会报错，故在这里使用 uni.downloadFile
		if (!props.web && props.src.startsWith('http')) {
			if (downloadCache.has(props.src)) {
				return;
			}
			uni.downloadFile({
				url: props.src,
				success(res) {
					svgUrl.value = res.tempFilePath;
					downloadCache.set(props.src, res.tempFilePath);
				},
				fail(err) {
					const detail = new UniImageErrorEventDetail(`下载失败: ${props.src}`);
					const event = new UniImageErrorEvent('error', detail);
					instance?.emit('error', event);
					console.warn('[lime-svg] downloadFile failed: ' + props.src + JSON.stringify(err));
				}
			});
		} else {
			svgUrl.value = props.src;
		}
		// #endif
		
		// #ifdef APP-HARMONY
		svgUrl.value = props.src;
		// #endif
	});

	watchEffect(() => {
		if (svgUrl.value == '') return;
		nativeImage?.update(svgUrl.value, props.color);
	});

	onBeforeUnmount(() => {
		// #ifdef APP-ANDROID || APP-IOS
		nativeImage?.destroy();
		// #endif
		nativeImage = null;
	});

	return {
		handleViewInit
	};
}
// #endif
