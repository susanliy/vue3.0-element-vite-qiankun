<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { renderer } from './RenderLoop';
  // 场景容器
  const ThreeDom = ref(null);
  onMounted(() => {
    (ThreeDom as any)._value.appendChild(renderer.domElement);
  });
</script>

<template>
  <div id="ThreeContainer" ref="ThreeDom"></div>
</template>

<style scoped lang="scss">
  #ThreeContainer {
    width: 100%;
    height: 100%;
  }
</style>
