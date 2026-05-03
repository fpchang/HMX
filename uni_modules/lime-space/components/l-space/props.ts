import { SpaceSize } from './type'
import { PropType } from 'vue'
export default {
	align: {
		type: String,
		default: ''
	},
	direction: {
		type: String as PropType<'vertical' | 'horizontal'>,
		default: 'horizontal',
	},
	size: {
		type: [Number, String, Array] as PropType<number | string | [SpaceSize, SpaceSize]>,
		default: 8,
	},
	wrap: Boolean,
	fill: Boolean,
}