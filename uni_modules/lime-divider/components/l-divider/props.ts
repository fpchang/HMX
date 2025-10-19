// @ts-nocheck
import { DividerProps } from './type';
import { PropType } from '@/uni_modules/lime-shared/vue';
export default {
	/** 文本位置（仅在水平分割线有效） */
	align: {
		type: String as PropType<DividerProps['align']>,
		default: 'center' as DividerProps['align'],
		validator(val : DividerProps['align']) : boolean {
			if (!val) return true;
			return ['left', 'right', 'center'].includes(val);
		},
	},
	/** 子元素 */
	content: {
		type: String as PropType<lDividerProps['content']>,
	},
	/** 是否虚线（仅在水平分割线有效） */
	dashed: Boolean,
	/** 分隔线类型有两种：水平和垂直 */
	vertical: Boolean,
	color: String,
	textColor: String,
}