import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    name: 'Home',
    meta: { title: '封装组件', icon: 'home' },
    children: [
      {
        path: '/drop-table',
        component: () => import('@/views/table/ant/index.vue'),
        name: '/DropTable',
        meta: { title: '可拖拽表格--ant', icon: 'tag' },
      },
      {
        path: '/ant-from',
        name: '/antFrom',
        component: () => import('@/views/from/antFrom.vue'),
        meta: { title: '表单封装--ant', icon: 'tag' },
      },
      {
        path: '/tree-list',
        component: () => import('@/views/treeList.vue'),
        name: 'treeList',
        meta: { title: '可拖拽树形列表--ant', icon: 'tag' },
      },
      // {
      //   path: '/table',
      //   component: () => import('@/views/table/element/ElementTable.vue'),
      //   name: 'table',
      //   meta: { title: '表格+可拖拽-element', icon: 'tag' },
      // },
      {
        path: '/from',
        component: () => import('@/views/from/elementFrom.vue'),
        name: 'from',
        meta: { title: '表单封装--element', icon: 'tag' },
      },
      {
        path: '/asyncDialog',
        component: () => import('@/views/dialog/asyncDialog.vue'),
        name: 'asyncDialog',
        meta: { title: '异步加载弹窗--element', icon: 'tag' },
      },
    ],
  },
  {
    path: '/page',
    component: () => import('@/layouts/index.vue'),
    name: 'page',
    meta: { title: '组合的页面', icon: 'home' },
    children: [
      {
        path: '/api',
        component: () => import('@/views/api/api.vue'),
        name: 'api',
        meta: { title: 'api的编辑文档', icon: 'home' },
      },
      {
        path: '/hooksPage',
        component: () => import('@/views/hooksPage/hooksPage.vue'),
        name: 'hooksPage',
        meta: { title: '钩子练习页', icon: 'tag' },
      },
      {
        path: '/map-app/marker',
        name: '/map-app',
        component: () => import('@/views/qiankun/test.vue'),
        meta: { title: 'qiankun测试页', icon: 'tag' },
      },
      {
        path: '/three3D',
        name: '/three3D',
        component: () => import('@/views/three3D/index.vue'),
        meta: { title: 'three.js', icon: 'tag' },
      },
      {
        path: '/dailyPractice',
        component: () => import('@/views/dailyDemo/index.vue'),
        name: 'dailyPractice',
        meta: { title: '日常练习', icon: 'tag' },
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
