<template>
  <BasicDropEditTable
    ref="TreeTable"
    :fieldNames="iconFieldNames"
    :columns="iconColumns"
    :originDate="iconOriginDate"
  >
    <template #columnsIcon="tableData">
      <a-popover v-model:visible="topVisible" trigger="click">
        <template #content>
          <div class="top-button">
            <a-button @click="pushWhole('top', tableData)">在顶部插入子函数</a-button>
            <a-button @click="pushWhole('bottom', tableData)">在底部插入子函数</a-button>
          </div>
        </template>
      </a-popover>
      <unordered-list-outlined class="table-icon" @click="topIconClick" />
    </template>
    <template #icon="{ iconData }">
      <a-popover v-if="previewIndex === iconData.id" v-model:visible="visible" trigger="click">
        <template #content>
          <a-button @click="pushInner(iconData)">在内部插入子函数</a-button>
        </template>
      </a-popover>
      <unordered-list-outlined class="table-icon" @click="iconsListFn(iconData)" />
    </template>
    <template #action="item">
      <a-button type="text" @click="deleteFn(item)">删除</a-button>
    </template>
  </BasicDropEditTable>
</template>
<script lang="ts" setup>
  //拖拽表格前排加入按钮控制数据的插入
  import type { TreeProps } from 'ant-design-vue/es/tree';
  import { UnorderedListOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import { removeTreeListItem } from '@/utils/utils';
  defineProps<{
    iconFieldNames: TreeProps['fieldNames']; //  替换字段
    iconColumns: any[]; // 表头
    iconOriginDate: any[]; //原始表格数据
  }>();

  const deleteFn = (item) => {
    const data = TreeTable.value.treeData;
    removeTreeListItem(data, item.item.id);
    TreeTable.value.treeData = [...data];
  };

  //表格头部的按钮
  const topVisible = ref(false);

  const topIconClick = () => {
    topVisible.value = true;
  };

  const TreeTable = ref();
  const pushWhole = (position, data) => {
    const newData = {
      id: data.columnsIcon?.length + 10,
      title: 'test',
      pid: 0,
      change: true,
      name: '',
    };
    position === 'top' ? data.columnsIcon.unshift(newData) : data.columnsIcon.push(newData);
    TreeTable.value.treeData = [...data.columnsIcon];
  };

  //表格行按钮
  const visible = ref(false);
  const previewIndex = ref('');

  const iconsListFn = (item: { id: string }) => {
    visible.value = true;
    previewIndex.value = item.id;
  };

  const pushInner = (item: any) => {
    const dataItem = {
      title: 'test',
      pid: item.id,
      id: item.children ? item.data.children.length + 10 : item.id + 10,
      change: true,
      name: '',
    };
    item.children ? item.data.children.push(dataItem) : (item.data.children = [dataItem]);
  };
</script>
<style scoped lang="scss">
  .table-icon {
    width: 30px;
    margin: auto 0px;
  }

  .top-button {
    button {
      display: block;
      margin: 4px 0px;
    }
  }
</style>
