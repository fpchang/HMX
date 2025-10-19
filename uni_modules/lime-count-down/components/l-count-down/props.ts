export default {
	/**是否自动开始计时*/
	autoStart: {
		type: Boolean,
		default: true
	},
	format: {
		type: String,
		default: 'HH:mm:ss'
	},
	/**毫秒精度*/ 
	millisecond: Boolean,
	time: {
		type: Number,
		required: true
	}
}