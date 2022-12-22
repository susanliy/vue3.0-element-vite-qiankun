<template>
  <div class="api-whole">
    <div><tree-list /></div>
    <div><RightParts /></div>
  </div>
</template>
<script lang="ts" setup>
  import treeList from '@/views/treeList.vue';
  import RightParts from './components/RightParts.vue';
</script>
<style lang="scss" scoped>
  .api-whole {
    display: grid;
    grid-template-columns: 20% 78%;
    grid-column-gap: 30px;
  }
</style>
