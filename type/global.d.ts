//全局参数的统一设置  --todo

declare global {
  // eslint-disable-next-line no-unused-vars
  type Recordable<T = any> = Record<string, T>
}
// eslint-disable-next-line no-undef
export { Recordable }
