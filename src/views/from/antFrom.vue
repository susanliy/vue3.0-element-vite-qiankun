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

  let queryForm = ref({
    username: '',
    role_ids: [],
    order_by: 'created:desc',
  });
  const formItems = {
    role_ids: {
      label: '角色',
      component: 'select',
      key: 'username',
      props: {
        placeholder: '请选择角色',
        allowClear: true,
        mode: 'multiple',
        showArrow: true,
        options: [
          {
            label: '111',
            value: 111,
          },
          {
            label: '222',
            value: 222,
          },
        ],
      },
      rules: [{ required: true, message: '请输入' }],
    },
    username: {
      label: '用户名',
      component: 'input',
      props: {
        placeholder: '请输入用户名或真实姓名',
        allowClear: true,
      },
      rules: [{ required: true, message: '请输入' }],
    },
    order_by: {
      label: '排序方式',
      component: 'select',
      props: {
        placeholder: '请选择排序方式',
        allowClear: true,
        options: [
          { label: '按创建时间', value: 'created:desc' },
          { label: '按排序值', value: 'position:desc' },
        ],
      },
    },
  };

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
