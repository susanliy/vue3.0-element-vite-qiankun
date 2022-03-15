import { encryptBySha1 } from '@/utils/cipher'
import { isObject, isString } from '@/utils/is'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const sercet = 'oj878:;;?@#-=UFfHFUwTs!SNJHUFp!{[d}'

export function joinTimestamp<T extends boolean>(
  join: boolean,
  restful: T,
): T extends true ? string : object

export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? '' : {}
  }
  const now = new Date().getTime()
  if (restful) {
    return `?_t=${now}`
  }
  return { _t: now }
}

/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: any) {
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return
  }

  for (const key in params) {
    const format = params[key]?.format ?? null
    if (format && typeof format === 'function') {
      params[key] = params[key].format(DATE_TIME_FORMAT)
    }
    if (isString(key)) {
      const value = params[key]
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value
        } catch (error: any) {
          throw new Error(error)
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key])
    }
  }
}

export function getHeaders() {
  const stamp = new Date().getTime()
  const nonce = Math.floor(Math.random() * 999999)
  const sercetKey = sercet + stamp + nonce
  const sign = encryptBySha1(sercetKey)
  return { stamp, nonce, sercetKey, sign }
}
