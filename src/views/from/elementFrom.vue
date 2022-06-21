<template>
  <div>
    侧拉表单的方式:
    <base-from ref="formRef" :model-value="form" :form-data="formJson" />
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <div style="padding-top: 60px">
      行内的方式:
      <base-from
        ref="formRef"
        :model-value="form"
        :form-data="formJson.slice(0, 3)"
        :inline="true"
        :form-rules="formRules"
      />
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  import { formJson, formRules, state } from './constant';
  export default defineComponent({
    setup() {
      const formRef = ref(null);
      const onSubmit = () => {
        (formRef as any).value.validate().then((valid: any) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      };
      return {
        ...toRefs(state),
        ...toRefs(formRules),
        onSubmit,
        formJson,
        formRef,
      };
    },
  });
</script>

<style lang="less" scoped></style>
