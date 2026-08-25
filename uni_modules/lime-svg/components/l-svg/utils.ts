// @ts-nocheck
import { pathToBase64 } from '@/uni_modules/lime-shared/pathToBase64'
/**
 * 格式化 URL 为 CSS/JS 函数调用字符串
 * @description 根据URL中是否含引号自动选择包裹方式，避免引号冲突
 * @param url 原始 URL
 * @param action 函数名，如 'url'、'setSrc'
 * @returns 形如 `url("...")` 或 `setSrc('...')` 的字符串
 */
export function formatUrl(url : string, action : string) : string {
	const hasSingle = url.indexOf(`'`) != -1
	const hasDouble = url.indexOf(`"`) != -1
	if (hasDouble && hasSingle) {
		return `${action}("${url.replace(/"/g, '\\"')}")`
	}
	if (hasDouble) {
		return `${action}('${url}')`
	}
	return `${action}("${url}")`
}

// #ifdef APP-NVUE  || APP-VUE
export const getLocalFilePath = (path : string) => {
	if (typeof plus == 'undefined') return path
	if (/^(_www|_doc|_documents|_downloads|file:\/\/|\/storage\/emulated\/0\/)/.test(path)) return path
	if (/^\//.test(path)) {
		const localFilePath = plus.io.convertAbsoluteFileSystem(path)
		if (localFilePath !== path) {
			return localFilePath
		} else {
			path = path.slice(1)
		}
	}
	return '_www/' + path
}
// #endif

/**
 * 小程序把路径转成base64
 * @param {string} path
 * @return 表示 SVG 的 Data URL。
 */
export function pathToDataUrl(path : string) : Promise<string> {

	return new Promise((resolve, reject) => {
		// #ifdef MP
		uni.getFileSystemManager().readFile({
			filePath: path,
			encoding: 'base64',
			success: (res) => {
				resolve(`data:image/svg+xml;base64,${res.data}`)
			},
			fail: (error) => {
				console.error({ error, path })
				reject(error)
			}
		})
		// #endif
		// #ifdef APP-ANDROID || APP-IOS
		const url = path
		resolve(url.replace(/\s+/g, ''))
		// #endif
		// #ifdef APP-NVUE || APP-VUE
		let localFilePath = plus.io.convertAbsoluteFileSystem(path) || path
		if (localFilePath == path) {
			localFilePath = '_www/' + path.slice(1)
		}
		plus.io.resolveLocalFileSystemURL(localFilePath, (entry : any) => {
			entry.file((file : any) => {
				const fileReader = new plus.io.FileReader()
				fileReader.onload = (data : any) => {
					resolve(data.target.result)
				}
				fileReader.onerror = (error : any) => {
					console.error({ error, path })
					reject(error)
				}
				fileReader.readAsDataURL(file)
			}, reject)
		}, reject)
		// #endif
		// #ifndef APP-ANDROID || APP-IOS || MP || APP-PLUS || APP-NVUE || APP-VUE
		reject('不支持')
		// #endif
	})

}

/**
 * 将 SVG 字符串转换为 Data URL。
 * @param {string} svg - 要转换的 SVG 字符串。
 * @returns {string} 表示 SVG 的 Data URL。
 */
export function svgToDataUrl(svgString : string) : string {
	const encodedSvg = encodeURIComponent(svgString)?.replace(/\+/g, '%20');
	return `data:image/svg+xml,${encodedSvg}`
}


// #ifdef APP-ANDROID && VUE3-VAPOR || !APP-ANDROID
export class UniImageErrorEventDetail {
	errMsg: string
	constructor(errMsg: string) {
		this.errMsg = errMsg
	}
}

export class UniImageErrorEvent {
	type: string
	detail: UniImageErrorEventDetail
	constructor(type: string, detail: UniImageErrorEventDetail) {
		this.type = type
		this.detail = detail
	}
}


export class ImageLoadEventDetail {
	width: number
	height: number
	constructor(w: number, h: number) {
		this.width = w
		this.height = h
	}
}

export class UniImageLoadEvent {
	type: string
	detail: ImageLoadEventDetail
	constructor(type: string, detail: ImageLoadEventDetail) {
		this.type = type
		this.detail = detail
	}
}
// #endif