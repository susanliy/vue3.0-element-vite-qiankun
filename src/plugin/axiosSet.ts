//todo 错误码的设置 权限设置，Token携带等等
import axios from 'axios'
const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_API_BASE_URL || '',
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;',
  },
})

export default instance
