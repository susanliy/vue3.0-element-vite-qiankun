<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AppMain',
  });
</script>

<style scoped>
  .app-main {
    position: relative;
    height: calc(100vh - 84px);
    padding: 0px 10px;
    overflow: hidden;
  }
</style>
