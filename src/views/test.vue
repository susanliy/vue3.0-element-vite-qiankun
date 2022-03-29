<template>
  <div>
    just to test
    <div class="whole">
      <P>11</P>
      <p>22</p>
    </div>

    <!-- <div id="mainTE">父节点</div>
    <teleport to="#mainTE"><div>子节点</div></teleport> -->

    <div>{{ t('api.apiTimeoutMessage') }}</div>
    <div id="mainwrapper"></div>
  </div>
</template>
<script lang="ts" setup>
  import { t } from '@/i18n/index';
  import { onMounted } from 'vue';
  import { registerMicroApps, start } from 'qiankun';
  /* ------- 测试乾坤用法------------- */
  const getActiveRule = (hash: any) => (location: any) => location.hash.startsWith(hash);
  onMounted(() => {
    console.log('start loading');
    const array = [
      {
        name: 'map-app',
        entry: process.env.NODE_ENV === 'production' ? '/child/map-app/' : '//localhost:5000/',
        container: '#mainwrapper',
        activeRule: getActiveRule(`#/map-app`),
      },
    ];
    // TODO  在主应用中注册微应用
    registerMicroApps([...array]);

    // TODO 启动微应用
    start({
      prefetch: 'all',
      sandbox: {
        // strictStyleIsolation: true,
        experimentalStyleIsolation: true,
      },
    });
  });
</script>

<style lang="scss" scoped>
  .whole {
    @include flex();
  }
</style>
