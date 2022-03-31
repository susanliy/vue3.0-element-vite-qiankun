<template>
  <div>
    just to test qiankun
    <!-- <div class="whole">
      <P id="mainTE">11</P>
    </div>
    <teleport to="#mainTE"><div>子节点</div></teleport> -->

    <div>{{ t('api.apiTimeoutMessage') }}</div>
    <div>
      <button @click="sendMes1"> 点击向子应用发送消息1</button>
      <button @click="sendMes2"> 点击向子应用发送消息2</button>
      <!-- <p> 当前显示的项目:{{ project }} </p> -->
    </div>
    <div id="mainwrapper"></div>
  </div>
</template>
<script lang="ts" setup>
  import { t } from '@/i18n/index';
  import { onMounted } from 'vue';
  import { registerMicroApps, start } from 'qiankun';
  import actions from './action';
  /* ------- 注册主应用像子应用传值------------- */
  const mes1 = { project_id: '项目1' };
  const sendMes1 = () => {
    actions.setGlobalState(mes1);
  };
  const mes2 = { project_id: '项目21' };
  const sendMes2 = () => {
    actions.setGlobalState(mes2);
  };

  // const project = '111';
  /* ------- 注册乾坤用法------------- */
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
