//注册全局组件

import BaseTable from '@/components/BaseTable.vue'
import BasePageSetting from '@/components/BasePageSetting.vue'
import BaseFrom from '@/components/BaseFrom.vue'
const components: any[] = [BaseTable, BasePageSetting, BaseFrom]

const globalComponents = (app: any): any => {
  components.forEach((component) => {
    //全局组件内必须存在name这个属性
    app.component(component.name, component)
  })
}
export default globalComponents
