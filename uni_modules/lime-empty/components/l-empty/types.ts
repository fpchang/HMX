// @ts-nocheck
// #ifndef APP-ANDROID
export type Numeric = string | number;
// #endif
// #ifdef APP-ANDROID
export type Numeric = any;
// #endif

export interface EmptyProps {
	description : string,
	imageSize : string | number,
	image : 'error' | 'search' | 'default' | 'network' | 'cart' | '404' | 'message' | 'coupon' | 'comment' | 'express' | 'order' | 'address'
}