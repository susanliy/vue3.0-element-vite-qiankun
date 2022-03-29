/* eslint-disable semi */
import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/src/message.scss';
import './assets/css/global/index.scss';
import axiosSet from '@/plugin/axiosSet';
import routes from '@/router';
import { store } from '@/store';
import { i18n } from '@/i18n/index';

import permission from '@/directives/permission';

const app = createApp(App);
app.config.globalProperties.$ELEMENT = {
  size: 'small',
};
app.config.globalProperties.$axios = axiosSet;

app.use(routes);
app.use(store);
app.use(i18n);
app.use(permission);
app.mount('#app');
