// index.obj.d.ts
type AnyFunction = (...args: any[]) => any;

declare const validEmailAndCode: AnyFunction;
declare const validEmailAndCodeRegister: AnyFunction;
declare const login: AnyFunction;
declare const updatePassword: AnyFunction;
declare const register: AnyFunction;
declare const resetPasswordByEmailCode: AnyFunction;

export { // 上面的写法可以自己调整，仅需保证export内包含所有方法即可
  validEmailAndCode,
  validEmailAndCodeRegister,
  login,
  updatePassword,
  register,
  resetPasswordByEmailCode
}
