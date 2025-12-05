// @ts-nocheck
import type { PlacementAndWidth } from './type';
import { clamp } from '@/uni_modules/lime-shared/clamp'
/**
 * 弹出位置类型
 * @property top          顶部居中
 * @property top-left     顶部左侧
 * @property top-right    顶部右侧
 * @property bottom       底部居中
 * @property bottom-left  底部左侧
 * @property bottom-right 底部右侧
 * @property left         左侧居中
 * @property left-top     左侧上方
 * @property left-bottom  左侧下方
 * @property right        右侧居中
 * @property right-top    右侧上方
 * @property right-bottom 右侧下方
 */
type PopoverPlacement =
	| 'top' | 'top-left' | 'top-right'
	| 'bottom' | 'bottom-left' | 'bottom-right'
	| 'left' | 'left-top' | 'left-bottom'
	| 'right' | 'right-top' | 'right-bottom';

/** 弹出方向类型：上、右、下、左 */
type PopoverDirection = 'top' | 'right' | 'bottom' | 'left';
/** 弹出框对齐方式类型 */
type PopoverSideAlignment = 'left' | 'right' | 'top' | 'bottom' | 'center';

/** 坐标轴类型：垂直轴(top)或水平轴(left) */
type PopoverAxis = 'top' | 'left';

/** 所有可能的弹出方向数组 */
const directionList : PopoverDirection[] = ['top', 'right', 'bottom', 'left'];


/** Popover位置计算选项 */
export type PopoverPlacementOptions = {
	/** 参考元素与弹出框之间的间隙 */
	refGap : number;
	/** 弹出框位置 */
	position : PopoverPlacement;
	/** 弹出框与视口边缘的最小间隙 */
	viewportGap : number;
	/** 箭头大小 */
	arrowSize : number;
}

/** 样式对象接口 */
type PopoverPoint = {
	top : number;
	left : number;
}

type PopoverRect = {
	top : number
	left : number
	bottom : number
	right : number
}

/**
 * 获取相反方向
 * @param direction 当前方向
 * @returns 相反方向
 */
function getOppositeDirection(direction : PopoverDirection) : PopoverDirection {
	const index = directionList.indexOf(direction);
	if(directionList.length > index + 2) return directionList[index + 2]
	return directionList[index - 2];
}

/**
 * 根据方向获取主轴
 * @param direction 方向
 * @returns 主轴（'top'或'left'）
 */
function getMainAxis(direction : PopoverDirection) : PopoverAxis {
	return ['top', 'bottom'].includes(direction) ? 'left' : 'top';
}

/**
 * 获取交叉轴
 * @param axis 当前轴
 * @returns 交叉轴
 */
function getPerpendicularAxis(axis : PopoverAxis) : PopoverAxis {
	return axis == 'top' ? 'left' : 'top';
}

/**
 * 根据轴获取尺寸名称
 * @param axis 轴
 * @returns 'height'或'width'
 */
function getDimensionByAxis(axis : PopoverAxis) : 'height' | 'width' {
	return axis == 'top' ? 'height' : 'width';
}

function getArrowPerpendicularOffset(direction: PopoverDirection, rect: DOMRect) {
	if(direction == 'top') return rect.height
	if(direction == 'right') return 0
	if(direction == 'bottom') return 0
	return rect.width
}

/**
 * 获取轴上的坐标位置
 * @param rect 矩形区域
 * @param axisName 轴名称
 * @returns 位置值
 */
function getAxisCoordinate(rect: DOMRect | PopoverRect, axisName: PopoverAxis): number {
	// #ifdef APP-ANDROID
	if(rect instanceof DOMRect) {
		return axisName == 'top' ? rect.top : rect.left;
	} else {
		return axisName == 'top' ? rect.top : rect.left;
	}
	// #endif
	// #ifndef APP-ANDROID
	return axisName == 'top' ? rect.top : rect.left;
	// #endif
}

/**
 * 获取指定方向的对边位置值
 * @param rect 矩形区域
 * @param direction 方向
 * @returns 对边位置值
 */
function getOppositeEdgeValue(rect: PopoverRect, direction: PopoverDirection): number {
	if (direction == 'top') return rect.bottom;
	if (direction == 'right') return rect.left;
	if (direction == 'bottom') return rect.top;
	return rect.right; // left
}

/**
 * 获取轴上的尺寸大小
 * @param rect 矩形区域
 * @param sizeName 尺寸名称
 * @returns 尺寸值
 */
function getElementDimension(rect: DOMRect, sizeName: 'height' | 'width'): number {
	return sizeName == 'height' ? rect.height : rect.width;
}

/**
 * 获取最佳的侧边对齐方式
 * @param refRect 参考元素的矩形区域
 * @param popperRect Popover的矩形区域
 * @param axis 主轴
 * @param axisWindowSize 窗口在主轴上的尺寸
 * @param viewportGap 视口边缘的最小间隙
 * @param side 当前的侧边对齐方式
 * @param axisSizeName 主轴尺寸名称
 * @returns 最佳的侧边对齐方式
 */
function getOptimalAlignment(
	refRect: DOMRect,
	popperRect: DOMRect,
	axis: PopoverAxis,
	axisWindowSize: number,
	viewportGap: number,
	side: PopoverSideAlignment,
	axisSizeName: 'height' | 'width'): PopoverSideAlignment {
		
	
	return side;
}

/**
 * 计算Popover的位置和箭头位置
 * @param refRect 参考元素的矩形区域
 * @param popperRect Popover的矩形区域
 * @param options 配置选项
 * @returns [popperStyle, arrowStyle] Popover样式和箭头样式
 */
/** getPopoverPlacement 函数返回的类型 */
export type PopoverPlacementResult = {
	points: PopoverPoint[];
	placement: PopoverPlacement;
}

export function getPopoverPlacement(
	refRect : DOMRect,
	popperRect : DOMRect,
	options : PopoverPlacementOptions
) : PopoverPlacementResult {
	const { refGap, position, viewportGap, arrowSize } = options
	// 计算Popover在参考元素两侧的尺寸
	const breadth = popperRect.width + refGap;
	const thickness = popperRect.height + refGap;

	// 获取窗口尺寸
	const { windowWidth, windowHeight } = uni.getWindowInfo();

	// 计算各方向的边界间隙
	const gapBoundaries:PopoverRect = {
		top: refRect.top - thickness - viewportGap,
		right: windowWidth - refRect.right - breadth - viewportGap,
		bottom: windowHeight - refRect.bottom - thickness - viewportGap,
		left: refRect.left - breadth - viewportGap,
	};
	// 解析位置参数
	let direction:PopoverDirection = ''
	let side:PopoverSideAlignment = ''
	let res = position.split('-')
	if(res.length > 0) {
		direction = res[0]
	} 
	if(res.length > 1) {
		side = res[1]
	}
	// 获取指定方向的边界间隙
	function getGapBoundary(dir: string): number {
		if (dir == 'top') return gapBoundaries.top;
		if (dir == 'right') return gapBoundaries.right;
		if (dir == 'bottom') return gapBoundaries.bottom;
		return gapBoundaries.left;
	}

	// 如果首选方向空间不足，尝试反转方向
	if (getGapBoundary(direction) < 0) {
		direction = getOppositeDirection(direction);
		if (getGapBoundary(direction) < 0) {
			direction = getOppositeDirection(direction);
		}
	}
	// 确定主轴和交叉轴
	const axis = getMainAxis(direction);
	const crossAxis = getPerpendicularAxis(axis);

	// 获取尺寸相关属性名
	const axisSizeName = getDimensionByAxis(axis);
	const crossAxisSizeName = getDimensionByAxis(crossAxis);

	// 获取窗口在主轴和交叉轴上的尺寸
	const axisWindowSize = axis == 'top' ? windowHeight : windowWidth;
	const crossAxisWindowSize = axis == 'top' ? windowWidth : windowHeight;

	// 初始化Popover样式
	const popperStyle : PopoverPoint = {
		top: 0,
		left: 0,
	};

	/**
	 * 计算主轴方向的偏移量
	 * @returns 主轴偏移量
	 */
	function getSideOffset() : number {
		
		const refSize = getElementDimension(refRect, axisSizeName);
		const popperSize = getElementDimension(popperRect, axisSizeName);
		const refAxisValue = getAxisCoordinate(refRect, axis);
		
		let offset:number
		// 根据对齐方式计算偏移量
		if (side == 'left' || side == 'top') {
			offset = refAxisValue;
		}
		else if (side == 'right' || side == 'bottom') {
			offset = refAxisValue - (popperSize - refSize);
		}
		else { // center
			offset = refAxisValue - (popperSize - refSize) / 2;
		}
		// 确保偏移量在视口范围内
		return clamp(offset, viewportGap, axisWindowSize - getElementDimension(popperRect, axisSizeName) - viewportGap);
	}

	/**
	 * 计算交叉轴方向的偏移量
	 * @returns 交叉轴偏移量
	 */
	function getDirectionOffset() : number {
		let offset:number
		if (direction == 'top') {
			offset = refRect.top - refGap - popperRect.height;
		} else if (direction == 'right') {
			offset = refRect.right + refGap;
		} else if (direction == 'bottom') {
			offset = refRect.bottom + refGap;
		} else {
			offset = refRect.left - refGap - popperRect.width;
		}
		
		// 确保偏移量在视口范围内
		return clamp(offset, viewportGap, crossAxisWindowSize - getElementDimension(popperRect, crossAxisSizeName) - viewportGap);
	}
	// 设置Popover位置
	if (crossAxis == 'top') {
		popperStyle.top = getDirectionOffset();
	} else {
		popperStyle.left = getDirectionOffset();
	}
	
	if (axis == 'top') {
		popperStyle.top = getSideOffset();
	} else {
		popperStyle.left = getSideOffset();
	}

	const arrowStyle:PopoverPoint = {
		top: 0,
		left: 0,
	};
	const finalPopperRect:PopoverRect = {
		top: popperStyle.top,
		left: popperStyle.left,
		bottom: popperStyle.top + popperRect.height,
		right: popperStyle.left + popperRect.width,
	};
	
	function getArrowOffset() {
		
		const reverseDirection = getOppositeDirection(direction);
		const refAxisValue = axis == 'top' ? refRect.top : refRect.left;
		const finalPopperAxisValue = axis == 'top' ? finalPopperRect.top : finalPopperRect.left;
		
		let extra = refAxisValue - finalPopperAxisValue;
		if (extra < 0) {
			extra = 0;
		}
		
		const refReverseValue = getOppositeEdgeValue({
			top: refRect.top,
			left: refRect.left,
			bottom: refRect.bottom,
			right: refRect.right
		}, reverseDirection);
		
		const finalPopperReverseValue = getOppositeEdgeValue(finalPopperRect, reverseDirection);
		
		const intersection = Math.min(refReverseValue, finalPopperReverseValue) -
			Math.max(refAxisValue, finalPopperAxisValue);
		
		const offset = extra + intersection / 2;
		// 确保箭头位于popper之内
		return clamp(offset, arrowSize, getElementDimension(popperRect, axisSizeName) - arrowSize);
	}

	if (axis == 'top') {
		arrowStyle.top = getArrowOffset();
	} else {
		arrowStyle.left = getArrowOffset();
	}
	
	if (crossAxis == 'top') {
		arrowStyle.top = getArrowPerpendicularOffset(direction, popperRect);
	} else {
		arrowStyle.left = getArrowPerpendicularOffset(direction, popperRect);
	}

	// 获取最佳的对齐方式
	const adjustedSide = getOptimalAlignment(
		refRect,
		popperRect,
		axis,
		axisWindowSize,
		viewportGap,
		side,
		axisSizeName
	);
	
	// 根据计算后的方向和对齐方式，确定最终的 placement
	let finalPlacement: PopoverPlacement = direction as PopoverPlacement;
	// 如果有侧边对齐，则组合成完整的 placement
	if (adjustedSide != '') {
		finalPlacement = `${direction}-${adjustedSide}` as PopoverPlacement;
	}
	return {
		points: [popperStyle, arrowStyle] as PopoverPoint[],
		placement: finalPlacement
	} as PopoverPlacementResult;
}

export function calculateWidthAndAdjustPlacement(
	placement : string,
	availableLeft : number,
	availableRight : number,
	popoverWidth : number) : PlacementAndWidth {
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