// @ts-nocheck
// #ifndef UNI-APP-X
import { ref, watchEffect, type Ref, getCurrentInstance } from '@/uni_modules/lime-shared/vue'
// #endif
import { formatUrl, svgToDataUrl, pathToDataUrl } from './utils'
import type { LSvgProps } from './type'

export type UseWebViewReturn = {
	webRef : Ref<UniWebViewElement | null>
	setSvgSrc : () => void
	setSvgColor : () => void
	error : (event : UniWebViewErrorEvent) => void
	loaded : (event : UniWebViewLoadEvent) => void
	message : (event : UniWebViewMessageEvent) => void
}

export function useWebView(props : LSvgProps, path : Ref<string>) : UseWebViewReturn {
	const instance = getCurrentInstance()
	const webRef = ref<UniWebViewElement | null>(null)
	const setSvgSrc = () => {
		if (path.value != '') {
			webRef.value?.evalJS(formatUrl(path.value, 'setSrc'))
		}
	}

	const setSvgColor = () => {
		if (props.color != '' && path.value != '') {
			webRef.value?.evalJS(`setStyle({"--color": "${props.color}"})`)
		}
	}

	const error = (_ : UniWebViewErrorEvent) => {
		instance?.emit('error')
	}

	const loaded = (_ : UniWebViewLoadEvent) => {
		watchEffect(() => {
			if (props.src == '' || !props.web) return
			if (props.src.startsWith('<svg')) {
				path.value = svgToDataUrl(props.src)
				setSvgSrc()
				setSvgColor()
			} else if (props.src.startsWith('/static')) {
				pathToDataUrl(props.src).then(res => {
					path.value = res
					setSvgSrc()
					setSvgColor()
				}).catch(err => {
					instance?.emit('error')
					console.warn('[lime-svg]' + props.src + JSON.stringify(err))
				})
			} else {
				path.value = props.src
				console.log('path.value', path.value)
				setSvgSrc()
				setSvgColor()
			}
		})
	}

	const message = (event : UniWebViewMessageEvent) => {
		// #ifdef UNI-APP-X
		const data = UTSJSONObject.assign({}, event.detail.data[0] as UTSJSONObject)
		const type = data.getString('event')
		// #endif
		// #ifndef UNI-APP-X
		const data = event.detail.data[0]
		const type = data?.event
		// #endif
		
		if (type == 'click') {
			instance?.emit('click')
		} else if (type == 'load') {
			instance?.emit(type)
		} else if (type == 'error') {
			instance?.emit(type)
		}
	}

	return {
		webRef,
		setSvgSrc,
		setSvgColor,
		error,
		loaded,
		message
	} as UseWebViewReturn
}