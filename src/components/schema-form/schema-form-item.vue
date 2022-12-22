<template>
  <a-col v-bind="schemaItem.colProps">
    <a-form-item
      :label="schemaItem.label"
      :name="schemaItem.field"
      :rules="schemaItem.rules"
      :required="schemaItem.required"
    >
      <!-- slot--todo -->
      <slot v-if="schemaItem.slot" :name="schemaItem.slot"> </slot>
      <component
        :is="getComponent"
        v-else
        :key="schemaItem.field"
        v-bind="getComponentProps"
        v-model:[modelValueType]="formModel[schemaItem.field]"
        :allowClear="true"
        v-on="componentEvents"
      >
        <!-- loading 的样式 -->
        <template v-if="Object.is(schemaItem.loading, true)" #notFoundContent>
          <a-spin size="small" />
        </template>
      </component>
    </a-form-item>
  </a-col>
</template>

<script lang="tsx">
  import { defineComponent, computed, toRefs, Ref, PropType } from 'vue';
  import { FormItemSchema, FormSchema } from './types/form';
  import { isString } from '@/utils/is';
  import { componentMap } from './componentMap';
  import { AllComponentProps } from './types';

  export default defineComponent({
    props: {
      //绑定的值
      formModel: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({}),
      },
      //当个组件的数据
      schemaItem: {
        type: Object as PropType<FormItemSchema>,
        default: () => ({}),
      },
      //全部数据
      schema: {
        type: Object as PropType<FormSchema>,
        default: () => ({}),
      },
    },
    setup(props) {
      const { schemaItem, schema } = toRefs(props) as {
        schemaItem: Ref<FormItemSchema>;
        schema: Ref<FormSchema>;
      };

      /**
       * @description 当前表单项组件
       */
      const getComponent = computed(() => {
        const component = props.schemaItem.component;
        return isString(component) ? componentMap[component] : component;
      });

      /**
       * @description 表单组件事件--todo
       */
      const componentEvents = computed(() => {
        const componentProps = props.schemaItem?.componentProps || {};
        return Object.keys(componentProps).reduce((prev, key) => {
          if (/on([A-Z])/.test(key)) {
            // eg: onChange => change
            const eventKey = key.replace(/on([A-Z])/, '$1').toLocaleLowerCase();
            prev[eventKey] = componentProps[key];
          }
          return prev;
        }, {});
      });

      /**
       * @description 表单组件props--设置表单的详情
       */
      const getComponentProps = computed(() => {
        const { schemaItem } = props;
        const { componentProps = {}, placeholder = '' } = schemaItem;
        (componentProps as AllComponentProps).placeholder ??= placeholder;
        return componentProps as AllComponentProps;
      });

      const modelValueType = computed(() => {
        const { component, componentProps } = schemaItem.value;
        if (typeof componentProps !== 'function' && componentProps?.vModelKey) {
          return componentProps.vModelKey;
        }
        const isCheck = isString(component) && ['Switch', 'Checkbox'].includes(component);
        return isCheck ? 'checked' : 'value';
      });

      return { getComponent, componentEvents, getComponentProps, modelValueType };
    },
  });
</script>
