// @ts-nocheck
// #ifndef UNI-APP-X
import { getCurrentInstance, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif
import { UniImageErrorEventDetail, UniImageErrorEvent, ImageLoadEventDetail, UniImageLoadEvent } from './utils';
import type { LSvgProps } from './type';

export type UseSvgEventsReturn = {
	handleClick: () => void;
	handleError: () => void;
	handleLoad: (e: any) => void;
};

/**
 * SVG 事件 hook
 * @description 构造并派发 click/error/load 事件
 */
export function useSvgEvents(props: LSvgProps, imageURL: Ref<string>): UseSvgEventsReturn {
	const instance = getCurrentInstance();

	const handleClick = () => {
		instance?.emit('click');
	};

	const handleError = () => {
		const detail = new UniImageErrorEventDetail(`加载失败: ${props.src}`);
		const event = new UniImageErrorEvent('error', detail);
		instance?.emit('error', event);
		instance?.emit('error');
	};

	const handleLoad = (e: any) => {
		// #ifdef WEB
		// @ts-ignore Web 端 e.target 为 HTMLImageElement
		imageURL.value = e.target.src ?? instance.$el.querySelector('img').src;
		// #endif
		
		// 真实尺寸由原生端 emit('load') 提供，此处 512 为兜底值
		const detail = new ImageLoadEventDetail(512, 512);
		const event = new UniImageLoadEvent('load', detail);
		instance?.emit('load', event);
	};

	return {
		handleClick,
		handleError,
		handleLoad
	};
}
