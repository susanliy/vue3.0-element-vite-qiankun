import { useStore } from '@/store'
import { computed } from 'vue'

//全部的权限 --在store里面  ---eg:['add','edit']
//组件中使用--  v-has=“['add','edit']”

export default (Vue: any) => {
  /**自定义按钮权限指令 */
  Vue.directive('has', {
    mounted(el: Element, binding: any) {
      const { state } = useStore()
      const permissionList = computed(() => state.menu.permission)
      const { value } = binding
      const isHas = permissionList.value.some((val) => {
        return value.includes(val)
      })
      if (!isHas) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
  })
}
