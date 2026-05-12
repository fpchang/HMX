export function useCloudObject(objName: string) {
	const cloudObj = uniCloud.importObject(objName) as { [key: string]: (...args: any[]) => Promise<any> };
	
	return new Proxy(cloudObj, {
		get(target, prop: string) {
			if (typeof target[prop] === 'function') {
				return function(...args: any[]) {
					const token = uni.getStorageSync('hm_token');
					const user = uni.getStorageSync('user');
					
					if (args.length > 0 && typeof args[0] === 'object') {
						args[0] = {
							...args[0],
							$token: token,
							$user: user
						};
					} else {
						args.unshift({
							$token: token
							//$user: user
						});
					}
					
					return target[prop](...args);
				};
			}
			return target[prop];
		}
	});
}