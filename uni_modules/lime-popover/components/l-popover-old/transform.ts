export const transformMap = new Map<string, string>([
	// #ifndef APP-IOS || APP-ANDROID || APP-HARMONY
	['top', 'translate(-50%, -100%)'],
	['top-left', 'translate(0%, -100%)'],
	['top-right', 'translate(0%, -100%)'],
	['bottom', 'translate(-50%, 100%)'],
	['bottom-left', 'translate(0%, 100%)'],
	['bottom-right', 'translate(0%, 100%)'],
	['left-bottom', 'translate(-100%, 0%)'],
	['right-bottom', 'translate(100%, 0%)'],
	['left', 'translate(-100%, -50%)'],
	['left-top', 'translate(-100%, 0%)'],
	['right', 'translate(100%, -50%)'],
	['right-top', 'translate(100%, 0%)'],
	// #endif
])

// APP使用fixed 与 非app端transform不同
export const appTransformMap = new Map<string, string>([
	// #ifdef APP-IOS || APP-ANDROID || APP-HARMONY
	['left', 'translateY(-50%)'],
	['right', 'translateY(-50%)'],
	['right-bottom', 'translateY(-100%)'],
	['left-bottom', 'translateY(-100%)'],
	// #endif
])

export const transformOriginMap = new Map<string, string>([
	['top', '50% 100%'],
	['top-left', '0 100%'],
	['top-right', '100% 100%'],
	['bottom', '50% 0%'],
	['bottom-left', '0% 0%'],
	['bottom-right', '100% 0'],
	['left-bottom', '100% 100%'],
	['right-bottom', '0 100%'],
	['left', '100% 50%'],
	['left-top', '100% 0'],
	['right', '0 50%'],
	['right-top', '0 0'],
])