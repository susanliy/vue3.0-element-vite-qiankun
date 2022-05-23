<template>
  <div class="vis-layout">
    <div><left @left-click="leftInfo" /></div>
    <div class="vie-center-bg" :style="centerBgFn"> <img :scr="centerBg" />center</div>
    <div>right</div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const centerBg = ref('');
  const centerBgFn = computed(() => {
    return `background:url(${centerBg.value})`;
  });

  const leftInfo = (item) => {
    console.log('item', item);
    centerBg.value = item.src;
  };
</script>
<style lang="scss" scoped>
  .vis-layout {
    display: grid;
    grid-template-columns: 15% 68% 15%;
    grid-column-gap: 10px;
  }
  .vie-center-bg {
    width: 600px;
    height: 600px;
    border: 1px solid red;
  }
</style>
