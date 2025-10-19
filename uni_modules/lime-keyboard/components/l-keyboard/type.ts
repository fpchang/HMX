// @ts-nocheck
export interface KeyboardProps {
	/**
	 * 是否显示
	 */
	visible : boolean;
	title ?: string;
	/**
	 * 
	 */
	type : 'custom' | 'default' | 'car' | 'idcard';
	
	/**
	 * 是否在底部安全区域内
	 */
	safeAreaInsetBottom : boolean;
	/**
	 * 额外按键
	 */
	extraKey?: string [];
	/**
	 * 层级
	 */
	zIndex?: number;
	/**
	 * 是否显示删除键
	 */
	showDeleteKey: boolean;
	/**
	 * 是否将通过随机顺序展示按键
	 */
	randomKeyOrder : boolean;
	/**
	 * 关闭按钮文本
	 */
	closeText: string;
	/**
	 * 删除按钮文本
	 */
	deleteText: string;
	maxlength:number;
	overlay: boolean;
	/**
	 * 
	 */
	beforeClose?: ((value: UTSJSONObject) => Promise<boolean>)
}

export type KeyType = 'text' | 'delete' | 'extra' | 'close'

export type Key = {
	text : string // key文本 //  number | string 
	type : KeyType // key的类型
	wider: boolean // 是否占2个key的宽度
	keysPerRow?: number
}