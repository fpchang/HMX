// @ts-nocheck
// #ifndef APP-ANDROID
import { type ComputedRef, type Ref } from '@/uni_modules/lime-shared/vue';
type ComputedRefImpl<T> = ComputedRef<T>
// #endif
export interface StepsProps {
	/**
	 * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成
	 */
	current ?: number;
	/**
	 * 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成，非受控属性
	 */
	defaultCurrent ?: number;
	/**
     * 用于控制 current 指向的步骤条的状态
     */
	status: 'wait' | 'process' | 'finish' | 'error';
	/**
	 * 步骤条方向，有两种：横向和纵向
	 */
	layout : 'horizontal' | 'vertical';
	/**
	 * 只读状态
	 */
	readonly : boolean;
	/**
	 * 步骤条顺序
	 */
	sequence : 'positive' | 'reverse';
	/**
	 * 步骤条风格
	 */
	type : 'default' | 'dot';

	activeColor ?: string;
	
	// processColor ?: string;
	// processBgColor ?: string;

	// finishColor ?: string;
	finishBgColor ?: string;

	waitColor ?: string;
	waitBgColor ?: string;
}


export type StepsProvide = {
	props : LStepsComponentPublicInstance,
	current : ComputedRefImpl<number>,
	children : Ref<number[]>,
	relation : (child : number) => void,
	onClickItem : (cur : number) => void,
	removeRelation : (child : number) => void,
}