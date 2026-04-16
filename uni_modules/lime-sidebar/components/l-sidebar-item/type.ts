// @ts-nocheck
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif
export interface SidebarItemProps {
	dot: boolean,
	title?: string,
	value?: string | number,
	badge?: string | number,
	disabled: boolean,
	badgeProps?: UTSJSONObject
}

