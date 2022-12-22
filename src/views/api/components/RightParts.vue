<template>
  <a-tabs v-model:activeKey="activeKey" @change="tabClick">
    <a-tab-pane key="1" tab="文档"><TabDocument />1111</a-tab-pane>
    <a-tab-pane key="2" tab="编辑" force-render>Content of Tab Pane 11112</a-tab-pane>
    <a-tab-pane key="3" tab="测试">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="4" tab="测试用例" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="5" tab="mock">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="6" tab="监控">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import TabDocument from './TabDocument.vue';
  const route = useRoute();
  const router = useRouter();
  const activeKey = ref<String>(String(route.query.tab) || '1');
  const tabClick = (val) => {
    activeKey.value = String(val);
  };
  watch(
    () => [activeKey.value],
    () => {
      router.replace({
        path: route.path,
        query: {
          tab: String(activeKey.value),
        },
      });
    }
  );
  watch(
    () => [route.query.tab],
    () => {
      activeKey.value = String(route.query.tab);
    }
  );
</script>
