import { Menu } from '@/service/dataType/main';

export interface MenuStateInterface {
  menus: Menu[];
  navigation: Menu[];
  permission: string[];
}

function state(): MenuStateInterface {
  return {
    menus: [],
    navigation: [],
    permission: ['add', 'edit', 'delete'],
  };
}

export default state;
