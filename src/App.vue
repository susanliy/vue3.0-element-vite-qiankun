<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import { ref } from 'vue';
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

  export default {
    components: {
      [ElConfigProvider.name]: ElConfigProvider, //汉化element-plus
    },
    setup() {
      const locale = ref(zhLocale);
      return {
        locale,
      };
    },
  };
</script>
