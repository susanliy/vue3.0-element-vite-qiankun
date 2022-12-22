<template>
  <div>
    <BaseModal
      :visible="ModalVisible"
      :title="'新增树形列表'"
      :footer="null"
      @update:visible="closeModal"
    >
      <template #content>新增树形列表内容</template>
    </BaseModal>
    <BaseTree :treeData="treeData1" :fieldNames="treeField">
      <template #icon="item">
        <a-popover v-model:visible="treeVisible" trigger="click">
          <template v-if="previewIndex === item.item.id" #content>
            <div class="tree-right-button">
              <a-button type="text" @click="showModal()">新增</a-button>
              <a-button type="text">删除</a-button>
              <a-button type="text" @click="showModal()">修改</a-button>
            </div>
          </template>

          <ellipsis-outlined style="width: 20px" @click="iconFn(item)" />
        </a-popover>
      </template>
    </BaseTree> </div
></template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { EllipsisOutlined } from '@ant-design/icons-vue';
  const treeVisible = ref(false);

  const previewIndex = ref('');
  const iconFn = (val: any) => {
    previewIndex.value = val.item.id;
    treeVisible.value = true;
  };

  const ModalVisible = ref(false);
  const showModal = () => {
    ModalVisible.value = true;
  };
  const closeModal = () => {
    ModalVisible.value = false;
  };

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

  const treeField = {
    children: 'children',
    title: 'title',
    key: 'id',
  };
</script>
<style></style>
