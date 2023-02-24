<template>
  <h3> 多个弹窗</h3>
  <el-button @click="firstShow = true">第一个弹窗</el-button>
  <base-dialog
    :dialogShow="firstShow"
    :title="'第一个弹窗'"
    @close-dialog="closeFirstShow"
    @comfirm="closeFirstShow"
  >
    我是第一个弹窗</base-dialog
  >

  <el-button @click="twoShow = true">第二个弹窗</el-button>
  <base-dialog
    :dialogShow="twoShow"
    :title="'第二个弹窗'"
    @close-dialog="closeTwoShow"
    @comfirm="closeTwoShow"
  >
    第二个弹窗</base-dialog
  >

  <el-button @click="threeShow = true">第三个弹窗</el-button>
  <base-dialog
    :dialogShow="threeShow"
    :title="'第三个弹窗'"
    @close-dialog="closeThreeShow"
    @comfirm="closeThreeShow"
  >
    第三个弹窗</base-dialog
  >

  <h3>tab数据切换问题</h3>
  <!-- <el-tab /> -->
  <a-tabs v-model:activeKey="activeKey" @change="tabClick">
    <a-tab-pane key="1" tab="文档"
      ><TabDocument /><div> 第一个tab数据{{ listData }}</div></a-tab-pane
    >
    <a-tab-pane key="2" tab="编辑" force-render
      ><div> 第二个tab数据{{ listData }}</div></a-tab-pane
    >
  </a-tabs>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  import { heardListApi, tableListApi } from '@/api/apiList';

  const firstShow = ref(false);
  const twoShow = ref(false);
  const threeShow = ref(false);

  const closeFirstShow = () => {
    firstShow.value = false;
  };
  const closeTwoShow = () => {
    twoShow.value = false;
  };
  const closeThreeShow = () => {
    threeShow.value = false;
  };

  //tab
  const activeKey = ref(1);
  const listData = ref([]);
  const tabClick = (val: number) => {
    listData.value = []; //点击赋值前清空数据
    if (val == 1) {
      heardListApi().then((res) => {
        listData.value = res.data;
      });
    } else {
      tableListApi().then((res) => {
        listData.value = res.data;
      });
    }
  };
</script>
