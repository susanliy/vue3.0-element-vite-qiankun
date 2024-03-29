<template>
  <div class="basic-drop-tree-table">
    <div class="flex table-head">
      <slot name="columnsIcon" :columnsIcon="gData"></slot>
      <div
        v-for="columnsItem in columns"
        :key="columnsItem.key"
        :style="countColWidth('150')"
        class="table-box"
      >
        {{ columnsItem.title }}
      </div>
      <p class="table-head-action">操作</p>
    </div>
    <a-tree
      class="draggable-tree"
      :draggable="isDraggable"
      block-node
      :tree-data="gData"
      :fieldNames="fieldNames"
      :defaultExpandAll="true"
      @drop="onDrop"
    >
      <template #title="item">
        <div class="flex">
          <FolderOutlined class="tree-draggable-icon" @mousemove="openDraggable" />
          <slot name="icon" :iconData="item"></slot>
          <div
            v-for="bb in columns"
            :key="bb.key"
            :style="countColWidth(180)"
            class="table-box table-row-action"
          >
            <component
              :is="componentMap[bb.component]"
              :value="item[bb.key]"
              v-bind="bb.props || {}"
              @update:value="inputChange($event, item, bb)"
              @mousemove="() => (isDraggable = false)"
            />
          </div>
          <div class="table-row-action">
            <slot name="action" :item="item"></slot>
          </div>
        </div>
      </template>
    </a-tree>
  </div>
</template>
<script lang="ts" setup>
  //可拖拽可编写表格
  import type { TreeProps } from 'ant-design-vue/es/tree';
  import useTreeData from '@/hooks/component/useTreeData';
  import { ref } from 'vue';
  import { markRaw } from 'vue';
  import { Input, Select } from 'ant-design-vue';
  import { translateArrayToTree } from '@/utils/utils';
  import { FolderOutlined } from '@ant-design/icons-vue';

  const isDraggable = ref(true);
  const openDraggable = () => {
    isDraggable.value = true;
  };

  //类型注册
  const componentMap = {
    input: markRaw(Input),
    select: markRaw(Select),
  };

  const props = defineProps<{
    originDate: any[]; //原始表格数据
    fieldNames: { key: string | number }; //替换字段
    columns: any[]; // 表头
  }>();

  const treeData = ref<TreeProps['treeData']>(translateArrayToTree(props.originDate));
  defineExpose({ treeData });

  const { onDrop, gData } = useTreeData(treeData, props.fieldNames);

  const countColWidth = (num) => {
    return `width : calc( (100% - ${num}px) / ${props.columns.length} )`;
  };

  const emits = defineEmits<{
    (e: 'editableSave', treeData: TreeProps['treeData']): void;
  }>();

  /**可编辑 */
  const inputChange = (
    $event: any,
    item: { data: { [x: string]: any } },
    bb: { key: string | number }
  ) => {
    item.data[bb.key] = $event;
    emits('editableSave', treeData.value);
  };
</script>
<style lang="scss" scoped>
  .tree-draggable-icon {
    width: 20px;
    margin: auto 0;
  }

  .basic-drop-tree-table {
    border: 1px solid #f0f0f0;

    :deep(.ant-tree .ant-tree-treenode) {
      padding: 2px 0px;
      line-height: 40px;
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }
    }

    :deep(.ant-tree-switcher) {
      margin: auto 0px;
    }

    .table-head {
      background: #fafafa;
      color: #000000d9;
      font-weight: 500;
      line-height: 40px;
      border-bottom: 1px solid #f0f0f0;
      padding-left: 50px;

      .table-head-action {
        margin: auto 0px;
      }
    }

    .table-row-action {
      display: flex;
      align-items: center;
    }

    .table-box {
      height: 40px;
      line-height: 40px;
      margin: auto 0px;
    }

    .ant-select {
      width: 80%;
    }

    :deep(.ant-select:not(.ant-select-customize-input) .ant-select-selector) {
      border: none;

      &:hover {
        border: 1px solid #d9d9d9;
      }
    }

    .ant-input {
      width: 80%;
      border: none;

      &:hover {
        border: 1px solid #d9d9d9;
      }
    }

    .tree-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
