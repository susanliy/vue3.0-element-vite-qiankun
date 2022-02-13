// 跳转这个页面在跳转子页面
<template>just to test111 ------{{ mainData }}</template>

<script lang="ts">
import actions from '@/service/function/actions'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      mainData: '',
    }
  },
  mounted() {
    if (Object.keys(actions.actions).length !== 0) {
      actions.onGlobalStateChange((state: string) => {
        this.mainData = state
      })
    }
  },
})
</script>
