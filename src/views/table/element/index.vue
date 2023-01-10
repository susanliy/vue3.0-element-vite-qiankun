<template>
  <div>
    <h1>封装普通表格</h1>
    <base-table
      :list="testData"
      :columns="columns"
      :sort-list="['state', 'createTime']"
      @sort-change="sortChange"
    >
      <template #actionSlot>
        <el-button v-has="['add']" type="text">确 定</el-button>
        <el-button v-has="['bbb']" type="text">取 消</el-button>
      </template>
    </base-table>
    <base-page-setting :total="4" />
  </div>
</template>

<script lang="ts" setup>
  import { columns, testData } from '../constants';

  const sortChange = (sort: any) => {
    console.log('sort', sort);
    //传递参数
  };
</script>
