// @ts-nocheck
export const ariaProps = {
	ariaHidden: Boolean,
	ariaRole: String,
	ariaLabel: String,
	ariaLabelledby: String,
	ariaDescribedby: String,
	ariaBusy: Boolean,
	lStyle: [String, Object]
}
export default {
	fixed: {
		type: Boolean,
		default: true
	},
	icon: {
		type: [String, Boolean],
		default: 'backtop'
	},
	iconSize: String,
	text: String,
	bottom: {
		type: [Number, String],
		// default: 66,
	},
	right: {
		type: [Number, String],
		// default: 16,
	},
	duration: {
		type: Number,
		default: 100,
	},
	/** 页面滚动距离 有的环境不支持获取页面距离，需要传入*/
	scrollTop: {
		type: Number,
		default: 0,
	},
	offset: {
		type: Number,
		default: 200
	},
	target: String,
	shape: {
		type: String,
		default: 'circle' // square 
	},
	...ariaProps
	// plain: Boolean as propType<BackTopProps['plain']>,
}