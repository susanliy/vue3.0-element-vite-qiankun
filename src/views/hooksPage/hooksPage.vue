<template>
  {{ count }}
  <el-button @click="inc(1)">增加</el-button>
  <el-button @click="dec(2)">减少2</el-button>
  <el-button @click="set(99)">设置</el-button>
  <el-button @click="reset()">清空</el-button>
  <a-button type="primary" @click="info">Display normal message</a-button>

  {{ get() }}

  {{ height }}
  {{ width }}
</template>
<script lang="ts" setup>
  import useCounter from '@/components/hooks/useCounter';
  import useWindowSize from '@/hooks/useWindowSize';
  import { message } from 'ant-design-vue';
  const { count, inc, dec, get, set, reset } = useCounter();
  const { height, width } = useWindowSize();
  const info = () => {
    message.info('This is a normal message');
  };
</script>
