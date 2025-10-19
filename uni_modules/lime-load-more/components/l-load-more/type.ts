// @ts-nocheck
export interface LoadMoreProps {
	status: 'remaining' | 'loading' | 'finished' | 'error';
	
	remainingText: string;
	loadingText: string;
	finishedText: string;
	errorText: string;
	
	loadingColor?: string;
	loadingSize?: string;
	color?: string;
	fontSize?: string;
}