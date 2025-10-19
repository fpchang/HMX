export type SpaceSize = number | string;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export interface SpaceProps {
	align?: 'start' | 'center' | 'end' | 'baseline';
	direction: 'vertical' | 'horizontal';
	// size: string|string[]|number|number[];
	size: any;
	wrap: boolean;
	fill: boolean;
}
