<template>
  <div v-for="(item, index) in imgList" :key="index" class="left-img" @click="leftClick(item)">
    <img :src="item.src" />
    <p>{{ item.name }}</p></div
  ></template
>
<script lang="ts" setup>
  const imgList = [
    {
      name: '图一',
      src: '/src/assets/images/1.svg',
    },
    { name: '图二', src: '/src/assets/images/2.svg' },
    { name: '图三', src: '/src/assets/images/3.svg' },
    { name: '图四', src: '/src/assets/images/4.svg' },
  ];

  const emits = defineEmits<{
    (e: 'leftClick', item: any): void;
  }>();

  const leftClick = (item) => {
    emits('leftClick', item);
  };
</script>
<style lang="scss" scoped>
  .left-img {
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
  }
</style>
