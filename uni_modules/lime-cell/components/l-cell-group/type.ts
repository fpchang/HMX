// @ts-nocheck
export interface CellGroupProps {
	title?:string
	inset:boolean
	// bordered:boolean
}



export type CellGroupProvide = {
	children: Ref<number[]>,
	props: LCellGroupComponentPublicInstance
}