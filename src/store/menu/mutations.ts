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
        meta: { title: '练习列表', icon: 'home' },
        children: [
          {
            path: '/main',
            component: () => import('@/views/table.vue'),
            name: 'main',
            meta: { title: '表格', icon: 'tag' },
          },
          {
            path: '/from',
            component: () => import('@/views/from/elementFrom.vue'),
            name: 'from',
            meta: { title: '表单', icon: 'tag' },
            children: [
              {
                path: '/from',
                component: () => import('@/views/from/elementFrom.vue'),
                name: 'from',
                meta: { title: 'element表单封装', icon: 'tag' },
              },
              {
                path: '/antFrom',
                name: '/antFrom',
                component: () => import('@/views/from/antFrom.vue'),
                meta: { title: 'ant表单封装', icon: 'tag' },
              },
            ],
          },
          {
            path: '/asyncDialog',
            component: () => import('@/views/dialog/asyncDialog.vue'),
            name: 'asyncDialog',
            meta: { title: '异步加载弹窗', icon: 'tag' },
          },
          {
            path: '/hooksPage',
            component: () => import('@/views/hooksPage/hooksPage.vue'),
            name: 'hooksPage',
            meta: { title: '钩子练习页', icon: 'tag' },
          },
          {
            path: '/three3D',
            name: '/three3D',
            component: () => import('@/views/three3D/index.vue'),
            meta: { title: 'three.js', icon: 'tag' },
          },
          {
            path: '/map-app/marker',
            name: '/map-app',
            component: () => import('@/views/qiankun/test.vue'),
            meta: { title: 'qiankun测试页', icon: 'tag' },
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
