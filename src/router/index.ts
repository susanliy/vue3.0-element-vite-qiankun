import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const constantRoutes: Array<RouteRecordRaw> = [
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
      // {
      //   path: '/test',
      //   component: () => import('@/views/test.vue'),
      //   name: 'test',
      //   meta: { title: '测试页', icon: 'tag' },
      // },
      {
        path: '/hooksPage',
        component: () => import('@/views/hooksPage.vue'),
        name: 'hooksPage',
        meta: { title: '钩子页', icon: 'tag' },
      },
      {
        path: '/map-app/marker',
        name: '/map-app',
        component: () => import('@/views/qiankun/test.vue'),
        meta: { title: 'qiankun测试页', icon: 'tag' },
      },
    ],
  },
  //todo--qiankun

  // {
  //   path: '/bsapi/user/user/list',
  //   name: 'backstage',
  //   component: () => import('@/views/backstage.vue'),
  // },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
