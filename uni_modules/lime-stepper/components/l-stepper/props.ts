export default {
	name: String,
	/**
	  * 禁用输入框
	  */
	disableInput: {
		type: Boolean,
		default: false
	},
	/**
	 * 禁用全部操作
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	},
	/**
	 * 输入框宽度
	 */
	inputWidth: {
		type: String
	},
	/**
	 * 是否整型
	 */
	integer: {
		type: Boolean,
		default: true
	},
	/**
	 * 最大值 100
	 */
	max: {
		type: Number,
		default: 100
	},
	/**
	 * 最小值
	 * @default 0
	 */
	min : {
		type: Number,
		default: 0
	},
	/**
	 * 组件尺寸
	 */
	size : {
		type: String,//'small' | 'medium' | 'large';
		default: 'medium'
	},
	/**
	 * 步长
	 * @default 1
	 */
	step :{
		type: Number,
		default: 1
	},
	/**
	 * 组件风格
	 */
	theme : {
		type: String,
		default: 'filled'//'normal' | 'filled' | 'outline' | 'solid';
	},
	/**
	 * 值
	 */
	value: {
		type: Number,
		default: null
	},
	/**
	 * 值，非受控属性
	 */
	defaultValue:  Number,
	modelValue: {
		type: Number,
		default: null
	},
	/**
	 * 是否开启长按手势，开启后可以长按增加和减少按钮
	 */
	longPress : {
		type: Boolean,
		default: true
	},
	iconRadius: String,
	minusStyle: {
		type: [Object, String]
	},
	plusStyle: {
		type: [Object, String]
	},
	inputStyle: {
		type: [Object, String]
	},
	cursorColor: {
		type: String,
		default: 'rgba(0,0,0,0.88)',
	}
}