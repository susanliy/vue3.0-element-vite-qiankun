import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MenuStateInterface } from './state';

const getters: GetterTree<MenuStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
