<template>
  <div>
    <base-diolog :dialog-show="dialogVisible" @close-dialog="closeDialog" @comfirm="closeDialog">
      <template #default>
        <base-from
          ref="formRef"
          :model-value="form"
          :form-data="formJson"
          style="margin-top: 18px"
        />
      </template>
    </base-diolog>
  </div>
</template>
<script lang="ts">
  import BaseFrom from '@/components/BaseFrom.vue';
  import { defineComponent, toRefs } from 'vue';
  import BaseDiolog from '../../components/BaseDialog.vue';
  import useDialogVisible from '@/components/hooks/useDialogVisible';
  import { formJson, state } from './constants';

  export default defineComponent({
    components: {
      BaseDiolog,
      BaseFrom,
    },
    emits: ['closeDialog'],
    setup() {
      //弹窗控制
      const { openDialog, closeDialog, dialogVisible } = useDialogVisible();
      return {
        closeDialog,
        formJson,
        ...toRefs(state),
        openDialog,
        dialogVisible,
      };
    },
  });
</script>
