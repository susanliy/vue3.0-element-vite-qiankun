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
      />
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
<script setup lang="ts">
  // 动态生成菜单跟子菜单，递归自身
  type menusType = {
    title: string;
    route: string;
    icon: string;
    children: any;
    menuLevel?: number;
  };

  withDefaults(defineProps<menusType>(), {
    children: [],
    menuLevel: 1,
  });
</script>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'MainAsideMenu',
  });
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
