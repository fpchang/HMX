// @ts-nocheck
import { EasingFunction } from './type';
import { raf } from '@/uni_modules/lime-shared/raf';
// const easeOut = (t : number) : number => 1 - (1 - t) ** 5
const easeOut = (t: number): number => 1 - Math.pow(1 - t, 5)

// Tween
export type TweenProps = {
	from : number
	to : number
	fps : number
	duration : number
	onUpdate : (currentValue : number) => void
	timingFunction : EasingFunction | null
	onFinish : () => void
}



export function tween(props : TweenProps) : void {
	const { from, to, duration, onUpdate, onFinish, timingFunction, fps } = props
	const _timingFunction = timingFunction ?? easeOut
	const now = ():number => {
		// #ifdef APP-ANDROID || APP-IOS
		return Date.now()
		// #endif
		// #ifndef APP-ANDROID || APP-IOS
		return typeof performance == 'undefined' ? Date.now() : performance.now()
		// #endif
	}

	const startTime = now()
	const frameInterval = fps != 0 ? 1000 / fps : 0; // 计算帧间隔
	let lastFrameTime = startTime; // 上一次更新帧的时间戳
		
	let tick: (() => void) | null = null
	 tick = () => {
		const current = now()
		const elapsedTime = Math.min(current - startTime, duration)
		const currentValue = from + (to - from) * _timingFunction(elapsedTime / duration)
		if (elapsedTime == duration) {
			onFinish()
			return
		}
		if(fps != 0) {
			if(current - lastFrameTime >= frameInterval) {
				onUpdate(currentValue);
				lastFrameTime = current;
			}
		} else {
			onUpdate(currentValue);
		}
		// onUpdate(currentValue)
		if(tick == null) return
		raf(tick!)
	}
	tick()
}


export function round(number : number, precision : number = 0) : number {
	const factor = Math.pow(10, precision);
	return Math.round(number * factor) / factor;
}