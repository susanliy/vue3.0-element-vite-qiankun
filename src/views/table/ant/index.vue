<template>
  <h3>ant 封装表格</h3>
  <h4>鼠标滑过直接编辑，区域拖动</h4>
  <DropTreeIconTable
    :iconFieldNames="treeField"
    :iconColumns="tableColumns"
    :iconOriginDate="treeData"
  />

  <h4 class="mt-30px">点击编辑进行修改，整行数据拖动</h4>
  <DropTreeTable
    :iconFieldNames="treeField"
    :iconColumns="tableColumns"
    :iconOriginDate="treeData1"
  />
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import DropTreeIconTable from './components/AntDropTreeIconTable.vue';
  import DropTreeTable from './components/AntDropTreeTable.vue';
  const treeField = {
    children: 'children',
    title: 'title',
    key: 'id',
  };
  const tableColumns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      component: 'input',
    },
    {
      title: 'pid',
      dataIndex: 'pid',
      key: 'pid',
      component: 'select',
      props: {
        placeholder: '请选择排序方式',
        allowClear: true,
        options: [
          { label: '选项一', value: 22 },
          { label: '选项二', value: 1 },
          { label: '选项4', value: 2 },
        ],
      },
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      component: 'select',
      props: {
        placeholder: '请选择name方式',
        allowClear: true,
        options: [
          { label: '选项一22', value: 22 },
          { label: '选项二11', value: 1 },
          { label: '选项41', value: 2 }, //会被覆盖
        ],
      },
    },
  ];
  const treeData = ref([
    {
      id: 1,
      title: '11',
      pid: 22,
      name: 2,
    },
    {
      id: 66,
      title: '11 - 1',
      pid: 1,
      name: 2,
    },
    {
      id: 3,
      title: '11 - 2',
      pid: 1,
      name: 1,
    },
    {
      id: 4,
      title: '10 - 1',
      pid: 2,
      name: 22,
    },
    {
      id: 5,
      title: '10 - 2',
      pid: 2,
      name: 2,
    },
  ]);

  const treeData1 = ref([
    {
      id: 1,
      title: '11',
      pid: 22,
      name: 2,
    },
    {
      id: 66,
      title: '11 - 1',
      pid: 1,
      name: 2,
    },
    {
      id: 3,
      title: '11 - 2',
      pid: 1,
      name: 1,
    },
    {
      id: 4,
      title: '10 - 1',
      pid: 2,
      name: 22,
    },
    {
      id: 5,
      title: '10 - 2',
      pid: 2,
      name: 2,
    },
  ]);
</script>
