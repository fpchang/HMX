// @ts-nocheck
import { shuffle } from '@/uni_modules/lime-shared/shuffle';
import { type Key } from './type';
import { CAR_KEYBOARD_AREAS, CAR_KEYBOARD_KEYS, EXTRA_KEYS } from './constants'


const basicKeys : Key[] = []
for (let i = 1; i < 10; i++) {
	basicKeys.push({
		text: `${i}`,
		wider: false,
		type: 'text'
	} as Key)
}

export function genBasicKeys(randomKeyOrder : boolean = false) : Key[] {
	return randomKeyOrder ? shuffle(basicKeys) : basicKeys
}

export function genDefaultKeys(
	randomKeyOrder : boolean = false,
	showDeleteKey : boolean = false,
	deleteText : string = EXTRA_KEYS.delete,
	extraKey ?: string[]) : Key[] {
	const keys = genBasicKeys(randomKeyOrder);

	return [
		...keys,
		{ text: extraKey?.[0] ?? EXTRA_KEYS.close, type: 'extra', wider: false } as Key,
		{ text: '0', type: 'text', wider: false } as Key,
		{ text: deleteText, type: showDeleteKey ? 'delete' : 'text', wider: false } as Key
	]
}


export function genCustomKeys(
	randomKeyOrder : boolean = false,
	extraKey : string[]|null = null) : Key[] {
	const keys = [...genBasicKeys(randomKeyOrder)];
	const zeroKey : Key = {
		text: '0',
		wider: true,
		type: 'text'
	}
	if (extraKey == null) {
		keys.push(zeroKey)
		return keys
	} else if (extraKey.length == 1) {
		const key1:Key = {
			text: extraKey[0],
			type: 'extra',
			wider: false
		}
		keys.push(zeroKey, key1)
	} else if (extraKey.length == 2) {
		zeroKey.wider = false;
		const key1:Key = {
			text: extraKey[0],
			type: 'extra',
			wider: false
		}
		const key2:Key = {
			text: extraKey[1],
			type: 'extra',
			wider: false
		}
		keys.push(key1, zeroKey, key2)
	}
	return keys
}

export function genSidebarKeys(deleteText:string, closeText:string): Key[] {
	const keys:Key[] = []
	keys.push({
		text: deleteText,
		type: 'text',
		wider: false
	})
	
	
	return keys
}

export function genProvinceKeys(): Key[] {
	return CAR_KEYBOARD_AREAS.map((text:string):Key => {
		return {
			text,
			type: 'text',
			wider: false,
			keysPerRow: 9
		} as Key
	})
}

export function getLettersAndNumbers(): Key[] {
	const keys = CAR_KEYBOARD_KEYS.map((text:string, index:number):Key => {
		return {
			text,
			type: 'text',
			wider: false,
			keysPerRow: 10
		} as Key
	})
	
	keys.push({
		text: EXTRA_KEYS.delete,
		type: 'delete',
		wider: false,
		keysPerRow: 10
	} as Key)
	keys.push({
		text: '完成',
		type: 'close',
		wider: true,
		keysPerRow: 10
	} as Key)
	return keys
}