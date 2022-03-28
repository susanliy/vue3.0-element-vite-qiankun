<template>
  {{ count }}
  <el-button @click="inc(1)">增加</el-button>
  <el-button @click="dec(2)">减少2</el-button>
  <el-button @click="set(99)">设置</el-button>
  <el-button @click="reset()">清空</el-button>

  {{ get() }}

  {{ height }}
  {{ width }}
</template>
<script lang="ts" setup>
  import useCounter from '@/components/hooks/useCounter';
  import useWindowSize from '@/hooks/useWindowSize';
  const { count, inc, dec, get, set, reset } = useCounter();
  const { height, width } = useWindowSize();
</script>
