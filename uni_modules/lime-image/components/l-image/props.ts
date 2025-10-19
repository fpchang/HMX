// @ts-nocheck
export const props = {
	ariaHidden: Boolean,
	ariaRole: String,
	ariaLabel: String,
	ariaLabelledby: String,
	ariaDescribedby: String,
	ariaBusy: Boolean,
	lStyle: String
}
export default {
	...props,
	src: String,
	mode: {
		type: String,
		default: 'scaleToFill'
	},
	lazyLoad: Boolean,
	fadeShow: {
		type: Boolean,
		default: true
	},
	webp: Boolean,
	showMenuByLongpress: Boolean,
	draggable: {
		type: Boolean,
		default: true
	},
	height: null,
	width: null,
	shape: {
		type: String,
		default: 'round'
	},
	// lStyle: String,
	parentId: String,
	injectId: String,
	// #ifdef APP-NVUE
	color: String,
	// #endif
}