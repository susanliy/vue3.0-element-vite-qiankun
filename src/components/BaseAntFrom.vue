<template>
  <a-form v-bind="formProps" ref="schemaFormRef">
    <template v-for="(item, bind) in data" :key="bind">
      <a-form-item :name="bind" :rules="item.rules">
        <template #label>
          {{ item.label }}
          <a-tooltip v-if="item.helpMessage" placement="top">
            <template #title><div v-html="item?.helpMessage"></div></template>
          </a-tooltip>
        </template>
        <component
          :is="componentMap[item.component]"
          v-model:value="form[bind]"
          v-bind="item.props || {}"
          class="mb-20px mr-20px"
          :style="item.component === 'rangePicker' ? 'width: 350px' : 'width: 260px'"
        />
      </a-form-item>
    </template>
  </a-form>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { FormItemsType, NamePath } from './helpers';
  import { markRaw } from 'vue';
  import { Input, Select, DatePicker } from 'ant-design-vue';
  import { FormActionType } from './schema-form/types/form';
  const RangePicker = DatePicker.RangePicker;

  //类型注册
  const componentMap = {
    input: markRaw(Input),
    select: markRaw(Select),
    rangePicker: markRaw(RangePicker),
  };

  //传入的参数
  type BasicFormProps = {
    condition: object; //绑定的值
    data: FormItemsType; //数据
    layout?: 'horizontal' | 'vertical' | 'inline';
    labelCol?: object;
    wrapperCol?: object;
    labelAlign?: string;
  };

  const props = withDefaults(defineProps<BasicFormProps>(), {
    layout: 'inline',
    labelAlign: 'right',
  });

  const form = computed(() => {
    return props.condition;
  });
  const formProps = computed(() => {
    const { layout, labelAlign, labelCol, wrapperCol } = props;
    return { layout, labelAlign, labelCol, wrapperCol, model: form.value, autocomplete: 'off' };
  });

  //表单验证
  const schemaFormRef = ref<FormActionType>();
  async function validateFields(nameList?: NamePath[] | undefined) {
    return schemaFormRef.value?.validateFields(nameList);
  }

  async function validate(nameList?: NamePath[] | undefined) {
    try {
      await schemaFormRef.value?.validate(nameList);
      return formProps;
    } catch (err) {
      console.log(err);
    }
  }

  //重置
  const resetFields = () => {
    schemaFormRef?.value?.resetFields();
  };

  defineExpose({
    schemaFormRef,
    validate,
    validateFields,
    resetFields,
  });
</script>
