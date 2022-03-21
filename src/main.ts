/* eslint-disable semi */
import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/app.scss';
import 'element-plus/theme-chalk/src/message.scss';
import axiosSet from '@/plugin/axiosSet';

import useQianKun from '@/plugin/qiankun';

const app = createApp(App);
//element 全局默认大小为small
app.config.globalProperties.$ELEMENT = {
  size: 'small',
};
app.config.globalProperties.$axios = axiosSet;

useQianKun();
