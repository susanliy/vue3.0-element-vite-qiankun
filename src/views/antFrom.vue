<template>
  <BaseAntFrom ref="dynamicForm" v-model:condition="queryForm" :items="formItems" />
</template>
<script lang="ts" setup>
  const queryForm = {
    username: '',
    role_ids: [],
    order_by: 'created:desc',
  };
  const formItems = {
    role_ids: {
      label: '角色',
      component: 'select',
      props: {
        placeholder: '请选择角色',
        allowClear: true,
        mode: 'multiple',
        showArrow: true,
        options: [],
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
</script>
