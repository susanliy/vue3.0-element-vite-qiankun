<template>
  <div width="250px" class="layout-aside">
    <div class="logo" @click="$router.push('/')">
      <div class="logo-img">
        <img src="@/assets/images/logo.png" alt="logo" height="28" />
      </div>
    </div>
    <div class="flex-center">
      <el-cascader v-model="module" :options="moduleOptions" class="layout-aside-module" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :default-active="$route.path"
        text-color="#ffffffb3"
        active-text-color="#fff"
        background-color="#303445"
        class="layout-aside__menus"
      >
        <main-aside-menu
          v-for="(menu, index) in constantRoutes"
          :key="index"
          :title="menu.meta.title"
          :route="menu.path"
          :icon="menu.meta.icon"
          :children="menu.children"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import MainAsideMenu from './MainAsideMenu.vue';
  import { constantRoutes } from '@/router';

  export default defineComponent({
    name: 'MainAside',
    components: {
      MainAsideMenu,
    },
    setup() {
      const module = ref<string>();
      const moduleOptions: unknown[] = [
        {
          value: '11',
          label: '11',
          children: [
            {
              value: '22',
              label: '22',
            },
            {
              value: '33',
              label: '33',
            },
          ],
        },
      ];

      return {
        module,
        moduleOptions,
        constantRoutes,
      };
    },
  });
</script>

<style lang="scss" scoped>
  $bgColor: #303445;
  .layout-aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    height: 100%;
    width: 250px;
    overflow: hidden;
    font-size: 0;
    background-color: $bgColor;
    transition: width 0.28s;
    .logo-img {
      height: 60px;
      @include flex(center, center);
    }
    :deep(.layout-aside-module) {
      width: 100%;
      padding: 10px 15px;
      .el-input .el-input__inner {
        font-size: 13px;
        font-weight: 600;
        height: 36px;
        line-height: 36px;
      }
    }
    &__menus {
      font-size: 12px;
      border-right: 0;
    }
  }
</style>
