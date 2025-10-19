// @ts-nocheck
import { EXTRA_KEYS } from './constants'
export default {
	/**
	 * 是否显示
	 */
	visible: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: null
	},
	/**
	 * 
	 */
	type: {
		type: String,
		default: 'default'//'custom' | 'default' | 'car' | 'idcard';
	},

	/**
	 * 是否在底部安全区域内
	 */
	safeAreaInsetBottom: {
		type: Boolean,
		default: true
	},
	/**
	 * 额外按键
	 */
	extraKey: {
		type: Array
	},
	/**
	 * 层级
	 */
	zIndex: {
		type: Number
	},
	/**
	 * 是否显示删除键
	 */
	showDeleteKey: {
		type: Boolean,
		default: true
	},
	/**
	 * 是否将通过随机顺序展示按键
	 */
	randomKeyOrder: {
		type: Boolean,
		default: false
	},
	/**
	 * 关闭按钮文本
	 */
	closeText: {
		type: String,
		default: '完成'
	},
	/**
	 * 删除按钮文本
	 */
	deleteText: {
		type: String,
		default: EXTRA_KEYS.delete
	},
	maxlength: {
		type: Number,
		default: Number.MAX_VALUE
	},
	overlay: {
		type: Boolean,
		default: false
	},
	modelValue: {
		type: String,
		default: ''
	},
	value: {
		type: String,
		default: null
	},
	beforeClose: {
		type: Function
	}
}