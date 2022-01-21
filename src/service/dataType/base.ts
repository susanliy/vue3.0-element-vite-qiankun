/**
 * 统一基础格式
 */
export interface BaseWrapper {
  /** 状态码 */
  code: number
  /** 消息 */
  msg: string
}

/**
 * 单数据格式
 */
export interface DataWrapper<T> extends BaseWrapper {
  data: T
}
