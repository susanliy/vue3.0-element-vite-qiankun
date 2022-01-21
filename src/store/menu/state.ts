import { Menu } from '@/service/dataType/main'

export interface MenuStateInterface {
  menus: Menu[]
  navigation: Menu[]
}

function state(): MenuStateInterface {
  return {
    menus: [],
    navigation: [],
  }
}

export default state
