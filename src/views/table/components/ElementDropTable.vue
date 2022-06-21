<template>
  <BaseElementDropTable :list="testData" :columns="columns" />
</template>

<script lang="ts" setup>
  import { columns, testData } from './constants';
</script>
