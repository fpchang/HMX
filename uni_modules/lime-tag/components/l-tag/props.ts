// import {LTagProps} from './type'
export default {
	/** 标签是否可关闭 */
	closable: Boolean,
	/** 组件子元素 */
	content: {
		type: String,
	},
	/** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
	disabled: Boolean,
	/** 标签中的图标，可自定义图标呈现 */
	icon: {
		type: String
	},
	prefix: {
		type: String
	},
	/** 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 */
	maxWidth: {
		type: String,
	},
	/** 标签类型，有三种：方形、圆角方形、标记型 */
	shape: {
		type: String,
		default: 'square',
		validator(val : string) : boolean {
			return ['square', 'round', 'mark'].includes(val);
		},
	},
	/** 标签尺寸 */
	size: {
		type: String,
		default: 'medium',
		validator(val :string) : boolean {
			return ['small', 'medium', 'large', 'extra-large'].includes(val);
		},
	},
	/** 组件风格，用于描述组件不同的应用场景 */
	type: {
		type: String,
		default: 'default',
		validator(val : string) : boolean {
			return ['default', 'primary', 'warning', 'danger', 'success'].includes(val);
		},
	},
	/** 标签风格变体 */
	variant: {
		type: String,
		default: 'solid',
		validator(val : string) : boolean {
			return ['solid', 'light', 'outline', 'light-outline'].includes(val);
		},
	},
	color: String,
	textColor: String,
	fontSize: String,
	radius: String,
	padding: String,
}