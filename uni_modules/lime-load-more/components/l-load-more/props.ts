export default {
	status: {
		type: String, //'remaining' | 'loading' | 'finished' | 'error';
		default: 'remaining'
	},
	remainingText: {
		type: String,
		default: '加载更多'
	},
	loadingText: {
		type: String,
		default: '加载中…'
	},
	finishedText: {
		type: String,
		default: '没有更多了'
	},
	errorText: {
		type: String,
		default: '请求失败，点击重新加载'
	},
	loadingColor:  {
		type: String,
		default: null
	},
	loadingSize:  {
		type: String,
		default: null
	},
	color:  {
		type: String,
		default: null
	},
	fontSize:  {
		type: String,
		default: null
	}
}