<template>
  <div class="vis-layout">
    <div><left @left-click="leftInfo" /></div>
    <aacenter class="vie-center-bg" :img-url="centerBg" :tile="tileDirection" />
    <right ref="right" @draw-direction="drawDirection" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import aacenter from './Center.vue';

  /*图片链接获取 */
  const centerBg = ref('/src/assets/images/1.svg');
  const leftInfo = (item) => {
    centerBg.value = item.src;
  };

  /*right center 平铺数据传输 */
  const tileDirection = ref();
  const drawDirection = (direction) => {
    tileDirection.value = direction;
  };
</script>
<style lang="scss" scoped>
  .vis-layout {
    display: grid;
    grid-template-columns: 15% 32% 65%;
    grid-column-gap: 10px;
  }
  .vie-center-bg {
    border: 1px solid red;
  }
</style>
