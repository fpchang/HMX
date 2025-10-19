// @ts-nocheck
// Configuration
export const AUTO_CLOSE_AFTER_CLICK = true; // 是否在点击菜单后自动关闭
export const OPEN_THRESHOLD_PERCENT = 0.3; // 自动打开菜单的滑动阈值百分比
export const swipeCellInstances : LSwipeCellComponentPublicInstance[] = []


// 关闭其他所有SwipeCell实例的面板
export const closeOtherPanels = (instance: LSwipeCellComponentPublicInstance) => {
	swipeCellInstances.filter((item) : boolean => item != instance).forEach((item) => {
		// #ifdef UNI-APP-X && APP || UNI-APP-X && WEB
		item.$callMethod('close')
		// #endif
		// #ifndef UNI-APP-X && APP || UNI-APP-X && WEB
		item._.exposed.close()
		// #endif
	});
}


export const closeOutside = () => {
	swipeCellInstances.forEach((item) => {
		// #ifdef UNI-APP-X && APP || UNI-APP-X && WEB
		item.$callMethod('close')
		// #endif
		// #ifndef UNI-APP-X && APP || UNI-APP-X && WEB
		item._.exposed.close()
		// #endif
	});
}