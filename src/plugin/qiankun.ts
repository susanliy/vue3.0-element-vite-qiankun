import App from '@/App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import routes from '@/router';
import actions from '@/service/function/actions';
import { store } from '@/store';
import permission from '@/directives/permission';
import { createApp } from 'vue';
import { i18n } from '@/i18n/index';

//qiankun 子应用
let instance: any = null;
function render(props: any = {}) {
  if (props) {
    // 注入 actions 实例-实现父子通信
    actions.setActions(props);
  }
  const { container } = props;
  instance = createApp(App);
  instance
    .use(routes)
    .use(store)
    .use(i18n)
    .use(permission)
    .mount(container ? container.querySelector('#app') : '#app');
}

// some code
const renderHooks = () => {
  renderWithQiankun({
    mount(props) {
      console.log('viteapp mount');
      render(props);
    },
    bootstrap() {
      console.log('bootstrap');
    },
    unmount() {
      console.log('vite被卸载了');
      // instance.unmount()
      // instance._container.innerHTML = ''
      // history.destroy() // 不卸载  router 会导致其他应用路由失败
      // routes = null
      instance = null;
    },
  });
};

const isQianKun = () => {
  if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
  } else {
    console.log('我正在作为子应用运行');
  }
};

export default function useQianKun() {
  renderHooks();
  isQianKun();
}
