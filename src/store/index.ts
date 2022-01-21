import { createStore, createLogger } from 'vuex'
import menu from './menu'
import { MenuStateInterface } from './menu/state'

export interface StateInterface {
  navigation: any
  menu: MenuStateInterface
}

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  modules: {
    menu,
  },
})

export function useStore() {
  return store
}
