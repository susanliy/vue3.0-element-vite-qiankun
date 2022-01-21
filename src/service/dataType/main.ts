/** 初始化 */
export type Init = {
  admin: {
    userName: string
    realName: string
  }
  menus: Menu[]
  permissions: string[]
  popup?: {
    title: string
    route: string
  }
  routes: {
    login: string
    logout: string
    changePwd: string
  }
}

/** 菜单结构 */
export type Menu = {
  path: string
  component: any
  name: string
  meta: {
    title: string
    icon: string
  }
  children?: Menu[]
}

// /** 菜单结构 */
// export type Menu = {
//   // 菜单标题
//   title: string
//   // 旧域名路由 纯菜单则为空
//   route: string
//   // 菜单子项
//   list: Menu[]
//   // 弹窗形式而非iframe嵌入
//   isPop?: boolean
// }
