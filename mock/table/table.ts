import { resultSuccessnew } from '../_util'
import { MockMethod } from 'vite-plugin-mock'

const course_list = {
  page: 1,
  page_size: 20,
  total: 4,
  list: [
    {
      id: '24',
      title: '编号3',
      state: 0,
      createTime: '2021-09-23T17:57:09',
      remark: '自定义',
    },
    {
      id: '23',
      title: '编号4',
      state: 1,
      createTime: '2021-09-23T17:57:19',
      remark: '自定义',
    },
    {
      id: '23',
      title: '编号5',
      state: 2,
      createTime: '2021-09-23T17:57:29',
      remark: '自定义',
    },
    {
      id: '23',
      title: '编号5',
      state: 1,
      createTime: '2021-09-23T17:57:39',
      remark: '自定义111',
    },
  ],
}

export default [
  {
    url: '/dev/api/courses/list',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccessnew(course_list)
    },
  },
] as MockMethod[]
