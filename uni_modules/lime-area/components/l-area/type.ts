// @ts-nocheck
import type { PickerColumn, PickerColumnItem, PickerConfirmEvent, PickerPickEvent, PickerValue } from '@/uni_modules/lime-picker';
export type { PickerColumn, PickerColumnItem, PickerConfirmEvent, PickerPickEvent, PickerValue } from '@/uni_modules/lime-picker';


export interface AreaProps {
	/**
	  * 取消按钮文字
	  */
	cancelBtn ?: string;
	cancelStyle ?: string|UTSJSONObject;
	/**
	  * 确定按钮文字
	  */
	confirmBtn ?: string;
	confirmStyle ?: string|UTSJSONObject;
	/**
	  * 标题
	  */
	title ?: string;
	titleStyle ?: string|UTSJSONObject;
	uniCloud : boolean
	/**
	 * 配置每一列的选项
	 */
	// columns : PickerColumn[];
	localData : UTSJSONObject;
	/**
	 * 显示列数，3-省市区，2-省市，1-省
	 */
	columnsNum : number;
	/**
	  * 选中值
	  */
	modelValue ?: PickerValue[];
	defaultValue ?: PickerValue[];
	value ?: PickerValue[];
	/**
	 * 是否为加载状态
	 */
	loading : boolean;
	loadingColor ?: string;
	loadingMaskColor ?: string;
	loadingSize ?: string;

	itemHeight ?: string;
	itemColor ?: string;
	itemFontSize ?: string;
	itemActiveColor ?: string;

	indicatorStyle ?: string;
	bgColor ?: string;
	groupHeight ?: string;
	radius ?: string;
	resetIndex: boolean 
}