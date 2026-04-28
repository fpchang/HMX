// index.obj.d.ts
type AnyFunction = (...args: any[]) => any;

declare const sendEmailCode: AnyFunction


export { // 上面的写法可以自己调整，仅需保证export内包含所有方法即可
  sendEmailCode
}
