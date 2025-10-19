export interface SidebarItemProps {
	dot: boolean,
	title?: string,
	// #ifdef APP-ANDROID
	badge?: any,
	// #endif
	// #ifndef APP-ANDROID
	badge?: string | number,
	// #endif
	disabled: boolean,
	badgeProps?: UTSJSONObject
}



export type SidebarProvide = {
	// modelValue: VModelProxy<number>,
	modelValue: Ref<number>,
	children: Ref<ComponentPublicInstance[]>,
	updateChildNode: (child: ComponentPublicInstance, add : boolean) => void,
	// setActive: (value: number) => void
	props: LSidebarComponentPublicInstance
}