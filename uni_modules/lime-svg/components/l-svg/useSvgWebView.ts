// @ts-nocheck
// #ifndef UNI-APP-X
import { ref, watchEffect, getCurrentInstance, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif


import type { LSvgProps } from './type';
import { pathToDataUrl, svgToDataUrl, formatUrl } from './utils';
import { UniImageErrorEventDetail, UniImageErrorEvent, ImageLoadEventDetail, UniImageLoadEvent } from './utils';

export type UseSvgWebViewReturn = {
	webRef: Ref<UniWebViewElement|null>;
	handleWebViewError: (e: UniWebViewErrorEvent) => void;
	handleWebViewLoad: (e: UniWebViewLoadEvent) => void;
	handleWebViewMessage: (event: UniWebViewMessageEvent) => void;
};

/**
 * SVG WebView 渲染 hook（APP-ANDROID / APP-IOS，uvue + vue nvue 共用）
 * @description 通过 WebView 加载 SVG，支持动画
 *
 * SVG 字符串/本地路径会被转换为 DataURL 写入 svgUrl，再通过 evalJS 传给 WebView。
 * uvue 与 vue nvue 的差异通过条件编译处理：
 * - 数据访问：uvue 用 UTSJSONObject 方法，vue 用 JS 属性
 * - 事件构造：uvue 构造事件类，vue emit 原始对象
 */
export function useSvgWebView(props: LSvgProps, svgUrl: Ref<string>): UseSvgWebViewReturn {
	const instance = getCurrentInstance();
	const webRef = ref<UniWebViewElement|null>(null);

	const setSvgSrc = () => {
		if (svgUrl.value != '') {
			webRef.value?.evalJS(formatUrl(svgUrl.value, 'setSrc'));
		}
	};

	const setSvgColor = () => {
		if (props.color != '' && svgUrl.value != '') {
			webRef.value?.evalJS(`setStyle({"--color": "${props.color}"})`);
		}
	};

	const emitError = (errMsg: string) => {
		const detail = new UniImageErrorEventDetail(errMsg);
		const event = new UniImageErrorEvent('error', detail);
		instance?.emit('error', event);
	};

	const handleWebViewError = (_: UniWebViewErrorEvent) => {
		emitError(`加载失败: ${props.src}`);
	};

	const handleWebViewLoad = (_: UniWebViewLoadEvent) => {
		watchEffect(() => {
			if (props.src == '') return;
			if (props.src.startsWith('<svg')) {
				svgUrl.value = svgToDataUrl(props.src);
				setSvgSrc();
				setSvgColor();
			} else if (props.src.startsWith('/static')) {
				pathToDataUrl(props.src).then(res => {
					svgUrl.value = res;
					setSvgSrc();
					setSvgColor();
				}).catch(err => {
					emitError(`加载失败: ${props.src}`);
					console.warn("[lime-svg]" + props.src + JSON.stringify(err));
				});
			} else {
				svgUrl.value = props.src;
				setSvgSrc();
				setSvgColor();
			}
		});
	};

	const handleWebViewMessage = (event: UniWebViewMessageEvent) => {
		const data =  event.detail.data[0] as UTSJSONObject;
		const type = data['event'] as string;
		const innerData = data['data'] as UTSJSONObject|null
		const detail = innerData?.['detail'] as UTSJSONObject|null;
		
		if (type == 'click') {
			instance?.emit('click');
		} else if (type == 'load') {
			const width = (detail?.['width'] ?? 512) as number;
			const height = (detail?.['height'] ?? 512) as number;
			const loadDetail = new ImageLoadEventDetail(width, height);
			const loadEvent = new UniImageLoadEvent('load', loadDetail);
			instance?.emit('load', loadEvent);
		} else if (type == 'error') {
			emitError(`加载失败: ${props.src}`);
		}
	};

	return {
		webRef,
		handleWebViewError,
		handleWebViewLoad,
		handleWebViewMessage
	};
}
