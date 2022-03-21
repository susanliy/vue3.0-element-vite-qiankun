<template>
  <div>
    <el-button @click="openDialog">点击异步加载按钮</el-button>
    <login-pop ref="login" />
  </div>
</template>
<script lang="ts">
  import { defineAsyncComponent, defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      LoginPop: defineAsyncComponent(() => import('./dialog.vue')),
    },
    setup() {
      const login = ref();
      const openDialog = () => {
        login.value?.openDialog();
      };
      return { openDialog, login };
    },
  });
</script>
