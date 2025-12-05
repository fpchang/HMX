// @ts-nocheck
import type { PlacementAndWidth } from './type';

export function findPageElement(startEl : UniElement | null, className: string|null = null) : UniElement | null {
	let currentEl : UniElement | null = startEl;
	
	if(className != null && currentEl?.classList?.contains(className) == true) {
		return currentEl;
	}
	
	while (currentEl != null && currentEl.parentElement != null) {
		
		currentEl = currentEl.parentElement;
		if(className != null && currentEl?.classList?.contains(className) == true) {
			return currentEl;
		}
		// if(className != null && currentEl?.classList?.contains('l-popover__wrapper') == true) {
		// 	return null;
		// }
	}
	return currentEl;
};

export function previousSibling(startEl : UniElement | null) : UniElement | null {
	let currentEl : UniElement | null = startEl;
	while (currentEl != null) {
		currentEl = currentEl.previousSibling;
		if (currentEl != null && !['#text', '#comment'].includes(currentEl.nodeName)) {
			return currentEl;
		}
	}
	return null
}

export function calculateWidthAndAdjustPlacement(
	placement : string, 
	availableLeft : number, 
	availableRight : number, 
	popoverWidth : number): PlacementAndWidth{
	let finalPlacement : string = placement;
	let finalWidth : number = popoverWidth;

	if (['left', 'right'].some((dir) : boolean => placement.startsWith(dir))) {
		const isLeft = placement.startsWith('left');
		const availableSpace = isLeft ? availableLeft : availableRight;
		const oppositeSpace = isLeft ? availableRight : availableLeft;
		
		if (availableSpace >= popoverWidth) {
			finalWidth = popoverWidth;
		} else if (oppositeSpace >= popoverWidth) {
			finalWidth = popoverWidth;
			finalPlacement = placement.replace(isLeft ? 'left' : 'right', isLeft ? 'right' : 'left');
		} else if (availableSpace < 64 && finalWidth > 64) {
			finalPlacement = 'bottom';
			finalWidth = popoverWidth;
		} else {
			finalWidth = availableSpace;
		}
	}
	return {
		placement: finalPlacement,
		finalWidth
	} as PlacementAndWidth
}