// @ts-nocheck
export const LONG_PRESS_START_TIME = 600;
export const LONG_PRESS_INTERVAL = 200;
/**
 * 格式化数字
 * @param value 传入的数字字符串
 * @param allowDecimal 是否允许小数，默认为 true
 * @param allowNegative 是否允许负数，默认为 true
 * @returns 返回格式化后的数字字符串
 */
export function formatNumber(value : string, allowDecimal : boolean = true, allowNegative : boolean = true) : string {
	if (allowDecimal) {
		const index = value.indexOf('.');
		if (index != -1) {
			value = `${value.slice(0, index + 1)}${value.slice(index).replace(/\./g, '')}`;
		}
	} else {
		const [splitValue] = value.split('.');
		value = (splitValue);
	}

	if (allowNegative) {
		const index = value.indexOf('-');
		if (index != -1) {
			value = `${value.slice(0, index + 1)}${value.slice(index).replace(/-/g, '')}`;
		}
	} else {
		value = value.replace(/-/g, '');
	}

	return value.replace(/[^\d.-]/g, '');
};


export function getLen(num : number) : number {
	const numStr = num.toString();
	return numStr.indexOf('.') == -1 ? 0 : numStr.split('.')[1].length;
};

/**
 * 精确加法
 */
export function add(a : number, b : number) : number{
	const maxLen = Math.max(getLen(a), getLen(b));
	const base = Math.pow(10, maxLen) //10 ** maxLen;
	return Math.round(a * base + b * base) / base;
};

export function formatValue(value : number, min : number, max : number, step : number) : string {
	// #ifndef APP-ANDROID
	const MAX_VALUE = Number.MAX_VALUE;
	const MIN_VALUE = Number.MIN_VALUE
	// #endif
	// #ifdef APP-ANDROID
	const MAX_VALUE = Number.from(Double.MAX_VALUE);
	const MIN_VALUE = Number.from(Double.MIN_VALUE);
	// #endif
	const maxValue = Math.max(
		Math.min(
			max,
			value,
			MAX_VALUE
		),
		min,
		MIN_VALUE
	).toFixed(
		Math.max(getLen(step),
			getLen(value)
		),
	);
	return maxValue
};