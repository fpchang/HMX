export default {
	/**
	 * 步骤描述
	 */
	content:{
		type: String,
		default: null
	},
	/**
	 * 图标，默认显示内置图标，也可以自定义图标，值为 false 则不显示图标。
	 */
	icon:{
		type: String,
		default: null
	},

	/**
	 * 标题
	 */
	title:{
		type: String,
		default: null
	},

	/**
	 * 垂直方向 标题右侧信息
	 */
	titleRight:{
		type: String,
		default: null
	},
	/**
	 * 用于控制 current 指向的步骤条的状态
	 */
	status: {
		type: String,
		default: 'wait' //'wait' | 'process' | 'finish' | 'error';
	}
}