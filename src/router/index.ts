import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    name: 'Home',
    meta: { title: '练习列表', icon: 'home' },
    children: [
      {
        path: '/table',
        component: () => import('@/views/table/table.vue'),
        name: 'table',
        meta: { title: '表格', icon: 'tag' },
      },
      {
        path: '/drop-table',
        component: () => import('@/views/table/DropTable.vue'),
        name: 'DropTable',
        meta: { title: '可拖拽表格', icon: 'tag' },
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
  {
    path: '/api',
    component: () => import('@/views/api/api.vue'),
    name: 'api',
    meta: { title: 'api的编辑文档', icon: 'home' },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
console.log('router', router);
export default router;
