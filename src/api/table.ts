import $axios from 'axios'

// eslint-disable-next-line no-unused-vars
enum Api {
  // eslint-disable-next-line no-unused-vars
  TABLE_LIST = '/dev/api/courses/list', //表格数据
}

export const tableListApi = () => $axios.post(Api.TABLE_LIST)
