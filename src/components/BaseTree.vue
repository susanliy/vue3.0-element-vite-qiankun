<template>
  <a-tree
    class="draggable-tree"
    draggable
    block-node
    :tree-data="gData"
    :fieldNames="fieldNames"
    @drop="onDrop"
    @dragenter="onDragEnter"
  >
    <template #title="item">
      <span class="tree-title">
        <span>{{ item.title }}</span>
        <slot name="icon" :item="item"></slot>
      </span>
    </template>
  </a-tree>
</template>
<script lang="ts" setup>
  import type { AntTreeNodeDragEnterEvent, TreeProps } from 'ant-design-vue/es/tree';
  import useTreeData from '@/hooks/component/useTreeData';
  import { translateArrayToTree } from '@/utils/utils';
  import { ref } from 'vue';

  const props = defineProps<{
    treeData: any[]; //数据
    fieldNames: TreeProps['fieldNames']; //替换字段
  }>();

  const treeData = ref<TreeProps['treeData']>(translateArrayToTree(props.treeData));
  const { onDrop, gData } = useTreeData(treeData, props.fieldNames);

  const onDragEnter = (info: AntTreeNodeDragEnterEvent) => {
    console.log('111', info);
  };
</script>
<style lang="scss" scoped>
  .tree-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
