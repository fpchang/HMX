/**
 * 车牌号键盘-省份简称
 */
export const CAR_KEYBOARD_AREAS = [
	'京',
	'津',
	'冀',
	'晋',
	'蒙',
	'辽',
	'吉',
	'黑',
	'沪',
	'苏',
	'浙',
	'皖',
	'闽',
	'赣',
	'鲁',
	'豫',
	'鄂',
	'湘',
	'粤',
	'桂',
	'琼',
	'渝',
	'川',
	'贵',
	'云',
	'藏',
	'陕',
	'甘',
	'青',
	'宁',
	'新',
	'港',
	'澳',
	'学',
	'警',
	'领'
]
/**
 * 车牌号键盘-数字和字母
 */
export const CAR_KEYBOARD_KEYS = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M'
]

type EXTRA_KEYS_TYPE = {
	delete : string;
	close : string;
}
export const EXTRA_KEYS : EXTRA_KEYS_TYPE = {
	// 'delete': '\ue6ef',
	'delete': "\uE6EF",
	'close': '\ue6c4'
}