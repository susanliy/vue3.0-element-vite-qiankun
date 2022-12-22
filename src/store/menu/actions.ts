//actions的方法为小驼峰式
//commit 为大写的
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MenuStateInterface } from './state';
import { Menu, Init } from '@/service/dataType/main';

const actions: ActionTree<MenuStateInterface, StateInterface> = {
  //获取用户的数据
  // async loginInfo({ commit, dispatch }) {
  //   const data = await getInit()
  //   // if (wrapper) {
  //   //   const { code, msg, data } = wrapper
  //   //   //code是被提出的  对应的状态码是不同的
  //   //   if (code === CommonCode.SUCCESS) {
  //   commit('init', data)
  //   await dispatch('menu/setData', data, { root: true })
  //   //   } else if ([CommonCode.LOGIN_FIAL].includes(code)) {
  //   //     jumpOldPath(data.routes.login) //根据不同平台进行数据登陆的验证
  //   //   } else {
  //   //     notifyFail(msg)
  //   //   }
  //   // }
  // },

  //登入数据的分发
  setData({ commit }, data: Init) {
    commit('SET_MENUS', data.menus);
    // commit('SET_POPUP', data.popup)
    // commit('SET_PERMISSIONS', data.permissions)
  },

  //添加导航栏数据
  addNavigate({ commit }, view: Menu) {
    commit('ADD_NAVIGATE', view);
  },

  //删除导航栏
  delNavigate({ commit, state }, view: Menu) {
    return new Promise((resolve) => {
      commit('DEL_NAVIGATE', view);
      resolve([...state.navigation]);
    });
  },
};

export default actions;
