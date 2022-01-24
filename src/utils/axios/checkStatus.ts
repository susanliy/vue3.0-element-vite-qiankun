//请求状态码对映

import { ElMessage } from 'element-plus'
export function checkStatus(status: number): void {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '请求错误'
      break
    case 404:
      message = '请求地址出错'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器内部错误!'
      break
    case 501:
      message = '服务未实现!'
      break
    case 502:
      message = '网关错误!'
      break
    case 503:
      message = '服务不可用!'
      break
    case 504:
      message = '网关超时!'
      break
    case 505:
      message = 'HTTP版本不受支持'
      break
    default:
      message = '请求失败'
  }

  ElMessage.error(message)
}
