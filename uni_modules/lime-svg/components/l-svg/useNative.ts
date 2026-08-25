// @ts-nocheck
// #ifdef APP
// #ifndef UNI-APP-X
import { watchEffect, onBeforeUnmount, getCurrentInstance, type Ref } from '@/uni_modules/lime-shared/vue';
// #endif
import { NativeImage } from "@/uni_modules/lime-svg";
import type { LSvgProps } from './type';
import { UniImageErrorEventDetail, UniImageErrorEvent } from './utils';

export type UseNativeReturn = {
	onviewinit : (e : UniNativeViewInitEvent) => void
}

export function useNative(props : LSvgProps, path : Ref<string>) : UseNativeReturn {
	let nativeImage : NativeImage | null = null
	const map = new Map<string, string>()

	const onviewinit = (e : UniNativeViewInitEvent) => {
		nativeImage = new NativeImage(e.detail.element)
		nativeImage?.updateSrc(path.value)
		nativeImage?.updateColor(props.color)
		
	}

	watchEffect(() => {
		// #ifdef APP-ANDROID || APP-IOS
		if (!props.web && props.src.startsWith('http')) {
			if (map.has(props.src)) {
				nativeImage?.updateSrc(map.get(props.src)!)
				return
			}
			uni.request({
				url: props.src,
				dataType: 'text',
				success(res) {
					if (res.data == null) return
					path.value = `${res.data}`
					map.set(props.src, path.value)
					nativeImage?.updateSrc(path.value)
				}
			})
		} else {
			path.value = props.src
			nativeImage?.updateSrc(props.src)
		}
		// #endif
		// #ifdef APP-HARMONY
		if(props.color == null) {
			path.value = props.src
			return
		}
		if (map.has(`${props.src}_${props.color}`)) {
			path.value = map.get(`${props.src}_${props.color}`)!
			return
		}
		if (props.src.startsWith('http')) {
			uni.request({
				url: props.src,
				dataType: 'text',
				success(res) {
					if (res.data == null) return
					path.value = replaceSvgColors(res.data, props.color)
					map.set(`${props.src}_${props.color}`, path.value)
				}
			})
		} else {
			path.value = replaceSvgColors(props.src, props.color)
			map.set(`${props.src}_${props.color}`, path.value)
		}
		// #endif
	})

	watchEffect(() => {
		if (props.color == null || props.color == '') return
		nativeImage?.updateColor(props.color)
	})

	return {
		onviewinit
	} as UseNativeReturn
}
// #endif
