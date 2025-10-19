// @ts-nocheck
// import {PropType} from 'vue'
export default {
	height: {
		type: Number,
		default: 0
	},
	defaultAnchor: {
	    type: Number,
	    default: 0
	},
	anchors: {
		type: Array,// as PropType<number[]>,
		default: () => []
	},
	animation: {
		type: Boolean,
		default: true
	},
	contentDraggable: {
		type: Boolean,
		default: true
	},
	safeAreaInsetBottom: {
		type: Boolean,
		default: true
	},
	bgColor: String,
	barColor: String,
}