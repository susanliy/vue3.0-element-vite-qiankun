import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'
import type { App, Plugin } from 'vue'

import { unref } from 'vue'
import { isObject } from '@/utils/is'

export const noop = () => {}

/**
 * @description:  Set ui mount node
 */
export function getPopupContainer(node?: HTMLElement): HTMLElement {
  return (node?.parentNode as HTMLElement) ?? document.body
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl)
    ? baseUrl + parameters
    : baseUrl.replace(/\/?$/, '?') + parameters
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key])
  }
  return src
}

export function openWindow(
  url: string,
  opt?: {
    target?: any
    noopener?: boolean
    noreferrer?: boolean
  },
) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {}
  const feature: string[] = []

  noopener && feature.push('noopener=yes')
  noreferrer && feature.push('noreferrer=yes')

  window.open(url, target, feature.join(','))
}

// dynamic use hook props
export function getDynamicProps<T, U>(props: T): Partial<U> {
  const ret: any = {}

  Object.keys(props).map((key) => {
    ret[key] = unref((props as any)[key])
  })

  return ret as Partial<U>
}

export function getRawRoute(
  route: RouteLocationNormalized,
): RouteLocationNormalized {
  if (!route) return route
  const { matched, ...opt } = route
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path,
        }))
      : undefined) as RouteRecordNormalized[],
  }
}

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as T & Plugin
}

export function getLocationOrigin() {
  return import.meta.env.VITE_BASE_URL || location.origin
}

export function getCustomUrl(url?: string | URL | undefined) {
  let targetUrl = url
  if (typeof url === 'string' && !/^http/.test(url)) {
    if (/^\//.test(url)) {
      targetUrl = `${getLocationOrigin()}${targetUrl}`
    } else {
      targetUrl = `${getLocationOrigin()}/${targetUrl}`
    }
  }
  return targetUrl
}

export function openCustomWindow(
  url?: string | URL | undefined,
  target?: string | undefined,
  features?: string | undefined,
) {
  const targetUrl = getCustomUrl(url)
  return window.open(targetUrl, target, features)
}

export function getRootScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop || 0
}

export function setRootScrollTop(top = 0) {
  document.documentElement.scrollTop = document.body.scrollTop = top
}
