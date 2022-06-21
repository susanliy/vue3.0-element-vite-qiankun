<template>
  <h3>简易版表单</h3>
  <BaseAntFrom ref="dynamicForm" v-model:condition="queryForm" :data="formItems" />
  <div class="form_btn">
    <a-button class="mr-10px" @click="resetForm">重置</a-button>
    <a-button type="primary" @click="handleSearch">搜索</a-button>
  </div>

  <h3 class="mt-30px">完整版表单 todo</h3>
</template>
<script lang="ts" setup>
  import { FormActionType } from '@/components/schema-form/types/form';
  import { ref } from 'vue';
  import { queryForm, formItems } from './constant';

  const emitEvents = defineEmits(['updateQueryParams']);

  const dynamicForm = ref<FormActionType>();

  const resetForm = () => {
    dynamicForm?.value?.resetFields();
  };

  const handleSearch = () => {
    if (dynamicForm.value?.validate()) {
      dynamicForm.value
        ?.validate()
        .then(() => emitEvents('updateQueryParams', queryForm))
        .catch((err) => console.log(err));
    }
  };
</script>
