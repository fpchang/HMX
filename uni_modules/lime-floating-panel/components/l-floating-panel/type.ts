// @ts-nocheck
export type LFloatingPanelBoundary ={
	min: number
	max: number
}


export interface FloatingPanelProps {
	height: number,
	anchors:  number[],
	defaultAnchor: number,
	animation: boolean,
	duration: number,
	contentDraggable: boolean,
	safeAreaInsetBottom: boolean,
	bgColor?: string
	barColor?: string
}