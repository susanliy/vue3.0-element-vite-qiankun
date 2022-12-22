<template>
  <div class="layout-container">
    <!--侧边栏-->
    <sidebar />
    <div class="main-container">
      <main-header />
      <!-- 导航栏 -->
      <main-navigation class="layout-navigation-wrapper" />
      <!-- 主页面 -->
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MainHeader from './components/header/index.vue';
  import Sidebar from './components/sideber/index.vue';
  import AppMain from './components/main/AppMain.vue';
  import MainNavigation from './components/main/MainNavigation.vue';

  export default defineComponent({
    name: 'MainLayout',
    components: {
      MainHeader,
      Sidebar,
      MainNavigation,
      AppMain,
    },
  });
</script>

<style lang="scss">
  .layout-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .main-container {
      background-color: #f7f7f7;
      position: relative;
      min-height: 100%;
      margin-left: 250px; //todo 如果需要伸缩需提成变量
      transition: margin-left 0.28s;
    }
  }
</style>
