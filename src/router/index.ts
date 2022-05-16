import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const constantRoutes: Array<RouteRecordRaw> = [
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
        path: '/ant-from',
        name: '/antFrom',
        component: () => import('@/views/from/antFrom.vue'),
        meta: { title: '表单封装--ant', icon: 'tag' },
      },
      {
        path: '/from',
        component: () => import('@/views/from/elementFrom.vue'),
        name: 'from',
        meta: { title: '表单封装--element', icon: 'tag' },
      },
      {
        path: '/tree-list',
        component: () => import('@/views/treeList.vue'),
        name: 'treeList',
        meta: { title: '可拖拽树形列表', icon: 'tag' },
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

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
console.log('router', router);
export default router;
