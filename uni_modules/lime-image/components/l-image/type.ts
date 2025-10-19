export interface ImageProps {
	src : string;
	mode ?: string;
	lazyLoad ?: boolean;
	fadeShow ?: boolean;
	webp ?: boolean;
	showMenuByLongpress ?: boolean;
	draggable ?: boolean;
	height ?: string | number | Record<string, any>;
	width ?: string | number | Record<string, any>;
	shape ?: string;
}