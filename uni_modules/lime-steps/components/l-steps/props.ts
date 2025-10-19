export default {
	/**
	 * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成
	 */
	current :{
		type: Number,
		default: null
	},
	value :{
		type: Number,
		default: null
	},
	modelValue :{
		type: Number,
		default: null
	},
	/**
	 * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成，非受控属性
	 */
	defaultCurrent :{
		type: Number,
		default: null
	},
	/**
	 * 用于控制 current 指向的步骤条的状态
	 * //'wait' | 'process' | 'finish' | 'error';
	 */
	status: {
		type: String,
		default: 'process'
	},
	
	/**
	 * 步骤条方向，有两种：横向和纵向
	 * 'horizontal' | 'vertical';
	 */
	layout : {
		type: String,
		default: 'horizontal'
	},
	/**
	 * 只读状态
	 */
	readonly : {
		type: Boolean,
		default: false
	},
	/**
	 * 步骤条顺序
	 * 'positive' | 'reverse';
	 */
	sequence : {
		type: String,
		default: 'positive'
	},
	/**
	 * 步骤条风格
	 *  'default' | 'dot';
	 */
	type :{
		type: String,
		default: 'default'
	},
	
	activeColor: {
		type: String,
		default: null
	},
	
	// processColor :{},
	// processBgColor :{},
	
	// finishColor :{},
	finishBgColor :{
		type: String,
		default: null
	},
	
	waitColor :{
		type: String,
		default: null
	},
	waitBgColor :{
		type: String,
		default: null
	},
}