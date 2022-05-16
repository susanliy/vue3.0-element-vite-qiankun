<template>
  <a-modal :visible="visible" :footer="footer" @ok="handleOk" @update:visible="updateVisible">
    <template #title>{{ title }}</template>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </a-modal>
</template>
<script lang="ts" setup>
  withDefaults(
    defineProps<{
      title: string;
      visible: boolean;
      footer: string | null;
    }>(),
    { title: '标题', visible: false }
  );

  const emits = defineEmits<{
    (e: 'handleOk', val: any): void;
    (e: 'update:visible', val): void;
  }>();

  //确定按钮的事件
  const handleOk = (val: MouseEvent) => {
    emits('handleOk', val);
  };

  const updateVisible = (e) => {
    emits('update:visible', e);
  };
</script>
