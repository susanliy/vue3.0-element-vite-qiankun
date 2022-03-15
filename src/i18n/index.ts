import { createI18n } from 'vue-i18n'
import en from './lang/en'
import cn from './lang/cn'

export const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    cn,
  },
})

export const t = i18n.global.t
