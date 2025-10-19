// @ts-nocheck
import { PaginationItem } from './type';

export function generatePaginationItems(
	totalPageCount: number, 
	visiblePageCount: number, 
	currentPage: number, 
	forceEllipses: boolean, 
	):PaginationItem[] {
	const items:PaginationItem[] = [];
	// const totalPageCount = totalPages.value;
	// const visiblePageCount  = props.pagerCount;
	// const currentPage = modelValue.value;
	// const forceEllipses = props.forceEllipses
	let startPage = 1;
	let endPage = totalPageCount;
	
	const isPageCountLimited = visiblePageCount < totalPageCount;
	if(isPageCountLimited) {
		startPage = Math.max(currentPage - Math.floor(visiblePageCount / 2), 1);
		endPage = startPage + visiblePageCount - 1;
		
		if (endPage > totalPageCount) {
			endPage = totalPageCount;
			startPage = endPage - visiblePageCount + 1;
		}
	}
	for (let number = startPage; number <= endPage; number++) {
		items.push({
			pageNumber: number,
			label: `${number}`,
			isActive: number == currentPage
		} as PaginationItem);
	}
	
	if (isPageCountLimited && visiblePageCount > 0 && forceEllipses) {
		if (startPage > 1) {
			items.shift()
			items.unshift({
				pageNumber: startPage - 1,
				label: '...',
				isActive: false
			} as PaginationItem);
			
			items.unshift({
				pageNumber: 1,
				label: '1',
				isActive: false
			} as PaginationItem);
		}
	
		if (endPage < totalPageCount) {
			items.pop()
			items.push({
				pageNumber: endPage + 1,
				label: '...',
				isActive: false
			} as PaginationItem);
			items.push({
				pageNumber: totalPageCount,
				label: `${totalPageCount}`,
				isActive: false
			} as PaginationItem);
			
		}
	}
	return items;
}