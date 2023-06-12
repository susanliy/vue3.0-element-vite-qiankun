<template>
  <div>
    <el-form
      v-bind="$attrs"
      ref="formRef"
      label-suffix=":"
      :model="form"
      :inline="inline"
      :label-width="labelWidth"
      :rules="formRules"
    >
      <el-form-item
        v-for="item in formData"
        :key="item.val"
        :label="item.label"
        :prop="item.val"
        :required="item.require"
      >
        <template v-if="['input', 'textarea'].includes(item.type)">
          <el-input
            v-model="form[item.val]"
            :type="item.type"
            v-bind="item.other"
            :placeholder="item.placeholder"
          />
        </template>
        <template v-if="item.type === 'select'">
          <el-select v-model="form[item.val]" v-bind="item.other" :placeholder="item.placeholder">
            <el-option
              v-for="op in item.options"
              :key="op[item.selectVal]"
              :label="op[item.selectLabel]"
              :value="op[item.selectVal]"
            />
          </el-select>
        </template>
        <template v-if="item.type === 'date'">
          <el-date-picker
            v-model="form[item.val]"
            v-bind="item.other"
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </template>
        <template v-if="item.type === 'radio'">
          <el-radio-group v-model="form[item.val]" v-bind="item.other">
            <el-radio
              v-for="op in item.options"
              :key="op[item.selectVal]"
              :label="op[item.selectVal]"
            >
              {{ op[item.selectLabel] }}
            </el-radio>
          </el-radio-group>
        </template>
        <template v-if="item.type === 'checkbox'">
          <el-checkbox-group v-model="form[item.val]" v-bind="item.other">
            <el-checkbox
              v-for="op in item.options"
              :key="op[item.selectVal]"
              :label="op[item.selectVal]"
            >
              {{ op[item.selectLabel] }}
            </el-checkbox>
          </el-checkbox-group>
        </template>
        <template v-if="item.type === 'switch'">
          <el-switch v-model="form[item.val]" v-bind="item.other" />
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  //两个插件的组件区别  类型不是用注册的  这样的话不方便自定义 建议改成注册的
  import { computed, defineComponent, reactive, toRefs, ref, watch } from 'vue';
  export default defineComponent({
    name: 'BaseFrom',
    props: {
      //设置为行内元素
      inline: {
        type: Boolean,
        default: false,
      },
      labelWidth: {
        type: String,
        default: '90px',
      },
      //数据
      formData: {
        type: Array,
        default: () => [],
      },
      //表单绑定值
      modelValue: {
        type: Object,
        default: () => ({}),
      },
      //验证规则
      formRules: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const formRef = ref(null);
      const state = reactive({
        form: computed(() => props.modelValue),
      });
      watch(
        () => state.form,
        (val) => {
          emit('update:modelValue', val);
        },
        { deep: true }
      );

      const validate = () => {
        return new Promise((resolve, reject) => {
          formRef.value
            .validate()
            .then((valid) => {
              resolve(valid);
            })
            .catch((err) => {
              reject(err);
            });
        });
      };

      return {
        ...toRefs(state),
        validate,
        formRef,
      };
    },
  });
</script>
