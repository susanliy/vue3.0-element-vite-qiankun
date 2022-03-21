import { Menu } from '@/service/dataType/main';
import { MutationTree } from 'vuex';
import { MenuStateInterface } from './state';
import { ElMessage } from 'element-plus';

const mutation: MutationTree<MenuStateInterface> = {
  SET_MENUS(state) {
    // state.menus = menus
    state.menus = [
      {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'home' },
        children: [
          {
            path: '/main',
            component: () => import('@/views/table.vue'),
            name: 'main',
            meta: { title: '表格', icon: 'tag' },
          },
          {
            path: '/from',
            component: () => import('@/views/from.vue'),
            name: 'from',
            meta: { title: '表单', icon: 'tag' },
          },
          {
            path: '/asyncDialog',
            component: () => import('@/views/asyncDialog.vue'),
            name: 'asyncDialog',
            meta: { title: '异步加载弹窗', icon: 'tag' },
          },
        ],
      },
    ];
  },

  //添加导航栏
  ADD_NAVIGATE(state, view: Menu) {
    if (state.navigation.some((v) => v.path === view.path)) return;
    if (state.navigation.length > 9) {
      ElMessage({
        message: '页面最多展示10个标签',
        type: 'warning',
      });
      return;
    }
    const views = JSON.parse(JSON.stringify(view));
    const data = Object.assign({}, views, {
      title: views.meta?.title || 'no-name',
    });
    state.navigation.push(data);
  },

  //删除导航栏
  DEL_NAVIGATE(state, view: Menu) {
    for (const [i, v] of state.navigation.entries()) {
      if (v.path === view.path) {
        state.navigation.splice(i, 1);
        break;
      }
    }
  },
};

export default mutation;
