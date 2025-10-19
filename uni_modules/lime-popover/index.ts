// @ts-nocheck
let popoverQueue : ComponentPublicInstance[] = []

export function pushToQueue(comp : ComponentPublicInstance) {
	popoverQueue.push(comp)
}

export function removeFromQueue(comp : ComponentPublicInstance) {
	const index = popoverQueue.findIndex((item) : boolean => item == comp)
	if (index == -1) return
	popoverQueue.splice(index, 1)
}

export function closeOther(comp : ComponentPublicInstance) {
	popoverQueue.forEach((item) => {
		// #ifdef VUE2
		if (item._uid != comp._uid) {
			item.close()
		}
		// #endif
		// #ifndef VUE2
		if (item.$.uid != comp.$.uid) {
			// #ifdef UNI-APP-X && APP
			item.$callMethod('close')
			// #endif
			// #ifndef UNI-APP-X && APP
			item.$.exposed?.close()
			// #endif
		}
		// #endif
	})
}

export function closeOutside() {
	popoverQueue.forEach((item) => {
		// #ifdef UNI-APP-X && APP
		item.$callMethod('close')
		// #endif
		// #ifndef UNI-APP-X && APP || VUE2
		item.$.exposed?.close()
		// #endif
		// #ifdef VUE2
		item.close()
		// #endif
	})
}