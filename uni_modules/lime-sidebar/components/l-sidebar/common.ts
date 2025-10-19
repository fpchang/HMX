// @ts-nocheck
import { type InjectionKey, type Ref, type ComputedRef, type ComponentPublicInstance } from './vue';
export const name = 'l-sidebar'
export const SIDEBAR_KEY: InjectionKey<SidebarProvide> = Symbol(name);


export interface SidebarProvide {
	relation : (child: ComponentPublicInstance) => void;
	children : Ref<ComponentPublicInstance[]>;
	currentValue : ComputedRef<number>;
	removeRelation : (child : ComponentPublicInstance) => void;
	setActive : (value : number) => void;
}