import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router'
import '@/assets/styles/app.scss'
import { store } from './store'
import 'element-plus/theme-chalk/src/message.scss'
import common from './plugin/common'
import axiosSet from '@/plugin/axiosSet'
import actions from '@/service/function/actions'
import permission from './directives/permission'

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'

const app = createApp(App)
common(app)
//element 全局默认大小为small
app.config.globalProperties.$ELEMENT = {
  size: 'small',
}
app.config.globalProperties.$axios = axiosSet

//qiankun 子应用
let instance: any = null
function render(props: any = {}) {
  if (props) {
    // 注入 actions 实例-实现父子通信
    actions.setActions(props)
  }
  const { container } = props
  instance = createApp(App)
  instance
    .use(routes)
    .use(store)
    .use(permission)
    .mount(container ? container.querySelector('#app') : '#app')
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

// some code
renderWithQiankun({
  mount(props) {
    console.log('viteapp mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount() {
    console.log('vite被卸载了')
    // instance.unmount()
    // instance._container.innerHTML = ''
    // history.destroy() // 不卸载  router 会导致其他应用路由失败
    // routes = null
    instance = null
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
