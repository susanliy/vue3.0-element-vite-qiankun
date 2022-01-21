<template>
  <template v-if="children.length > 0">
    <el-sub-menu :index="route" :class="['layout-aside-menu__' + menuLevel]">
      <template #title>
        <div class="menu-title">
          <i v-if="icon" :class="['iconfont', 'iconfont-' + icon]"></i>
          <i v-else class="iconfont"></i>
          {{ title }}
        </div>
      </template>
      <main-aside-menu
        v-for="(item, index) in children"
        :key="index"
        :title="item.meta.title"
        :route="item.path"
        :icon="item.meta.icon"
        :children="item.children"
        :menu-level="menuLevel + 1"
      ></main-aside-menu>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="route" :class="['layout-aside-menu__' + menuLevel]">
      <div class="menu-title">
        <i v-if="icon" :class="['iconfont', 'iconfont-' + icon]"></i>
        <i v-else class="iconfont"></i>
        {{ title }}
      </div>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// 动态生成菜单跟子菜单，递归自身
const props = {
  title: String,
  route: String,
  icon: String,
  children: {
    type: Array,
    default() {
      return []
    },
  },
  menuLevel: {
    type: Number,
    default: 1,
  },
}

export default defineComponent({
  name: 'MainAsideMenu',
  props,
})
</script>

<style lang="scss" scoped>
.menu-title {
  display: flex;
  align-items: center;
  font-size: 12px;
  transition: color 0.3s;
  .iconfont {
    margin: 0 10px 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
