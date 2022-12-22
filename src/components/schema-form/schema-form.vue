<template>
  <Form ref="schemaFormRef" :model="formModel" v-bind="formSchemaRef">
    <Row v-bind="getRowConfig">
      <template v-for="schemaItem in formSchemaRef.schemas" :key="schemaItem.field">
        <test :schema-item="schemaItem" :schema="formSchemaRef" :form-model="formModel">
          <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </test>
      </template>
      <template v-if="$slots['operate-button']">
        <slot name="operate-button"></slot>
      </template>
    </Row>
  </Form>
</template>

<script lang="ts">
  import {
    reactive,
    ref,
    PropType,
    unref,
    defineComponent,
    computed,
    getCurrentInstance,
  } from 'vue';
  import { Form, Row } from 'ant-design-vue';
  import { formProps } from 'ant-design-vue/lib/form';
  import { isFunction } from '@/utils/is';
  import test from './schema-form-item.vue';
  import type { FormItemSchema, FormSchema, FormActionType } from './types/form';
  import { NamePath } from 'ant-design-vue/lib/form/interface';
  import { createFormContext } from './hooks/useFormContext';

  export default defineComponent({
    name: 'SchemaForm',
    components: { Form, Row, test },
    props: {
      ...formProps,
      formSchema: {
        // 动态验证表单
        type: Object as PropType<FormSchema>,
        default: () => ({}),
      },
      initialValues: {
        // 预置字段默认值
        type: Object as PropType<Recordable>,
        default: () => ({}),
      },
    },
    emits: ['submit', 'reset'],
    setup(props, { attrs, emit }) {
      // provide schemaForm instance
      createFormContext(getCurrentInstance()!);
      const formSchemaRef = ref<FormSchema>(props.formSchema);
      // 表单项数据
      const formModel = reactive({ ...props.initialValues });
      // 表单默认数据
      const defaultFormValues = reactive({ ...props.initialValues });
      // 表单实例
      const schemaFormRef = ref<FormActionType>();
      // 表单属性
      const schemaFormPropsRef = ref<Partial<FormSchema>>({});
      // 将所有的表单组件实例保存起来
      const compRefs = {} as any;

      // 获取表单所有属性
      const getFormProps = computed(() => {
        return {
          ...props,
          ...attrs,
          ...schemaFormPropsRef.value,
        } as FormSchema;
      });

      // 将所有的表单组件实例保存起来
      const setItemRef = (formItem: FormItemSchema) => {
        return (el) => {
          if (el) {
            console.log('compRefs[formItem.field]', compRefs[formItem.field], el);
            compRefs[formItem.field] = el;
          }
        };
      };

      // 设置表单属性
      const setFormProps = (formProps: Partial<FormSchema>) => {
        Object.assign(schemaFormPropsRef.value, formProps);
      };

      // 获取栅栏Row配置
      const getRowConfig = computed((): Recordable => {
        const { baseRowStyle = {}, rowProps } = unref(getFormProps);
        return {
          style: baseRowStyle,
          ...rowProps,
        };
      });

      //重置
      async function resetFields(): Promise<void> {
        const { resetFunc, submitOnReset } = unref(getFormProps);
        resetFunc && isFunction(resetFunc) && (await resetFunc());

        Object.keys(formModel).forEach((key) => {
          formModel[key] = defaultFormValues[key];
        });

        emit('reset', formModel);
        submitOnReset && handleSubmit();
        setTimeout(clearValidate);
      }

      //触发表单验证
      async function validateFields(nameList?: NamePath[] | undefined) {
        return schemaFormRef.value?.validateFields(nameList);
      }

      async function validate(nameList?: NamePath[] | undefined) {
        await schemaFormRef.value?.validate(nameList);
        return formModel;
      }

      //移除表单项的校验结果。
      async function clearValidate(name?: string | string[]) {
        await schemaFormRef.value?.clearValidate(name);
      }

      const handleSubmit = () => {
        emit('submit');
      };

      return {
        schemaFormRef,
        schemaFormPropsRef,
        getFormProps,
        formModel,
        formSchemaRef,
        getRowConfig,
        compRefs,
        setItemRef,
        resetFields,
        setFormProps,
        validateFields,
        validate,
        clearValidate,
      };
    },
  });
</script>
