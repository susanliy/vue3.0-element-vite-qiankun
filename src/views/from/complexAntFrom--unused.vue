<template>
  <div>
    <a-card>
      <schema-form
        ref="dynamicForm"
        :form-schema="formSchema"
        :initialValues="initialValues"
        class="btn-rows"
      >
        <template #operate-button>
          <a-button type="primary" @click="confirm"> 确定 </a-button>
          <a-button type="primary" @click="reset"> 重置 </a-button>
        </template>
      </schema-form>
    </a-card>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'DemosFormRuleForm',
  };
</script>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { message } from 'ant-design-vue';
  import { SchemaForm } from '@/components/schema-form';
  // import { SchemaForm } from '@/components/schema-form';
  import { schemas } from '@/components/schema-form';

  /**
   * @description 验证表单
   */
  const dynamicForm = ref<InstanceType<typeof SchemaForm>>();
  const formSchema = {
    layout: 'vertical',
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
    labelAlign: 'right',
    schemas,
  };

  //重置的数据
  const initialValues = {};
  //重置
  const reset = () => {
    dynamicForm.value?.resetFields().then(() => message.success('重置！'));
  };

  // 点击提交
  function confirm() {
    //提交的值
    console.log('dynamicForm.value', dynamicForm, dynamicForm.value?.formModel);

    dynamicForm.value?.validate().then(() => message.success('验证通过！'));
  }
</script>

<style lang="scss" scoped>
  .btn-rows {
    button {
      margin-right: 12px;
    }
  }
</style>
