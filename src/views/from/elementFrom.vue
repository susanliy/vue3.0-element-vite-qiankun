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
  import { defineComponent, reactive, ref, toRefs } from 'vue';
  export default defineComponent({
    setup() {
      const formJson = [
        {
          require: true,
          type: 'input',
          label: '姓名',
          placeholder: '请输入姓名',
          val: 'name',
          other: { style: 'width:220px' },
        },
        {
          require: true,
          type: 'select',
          label: '年级',
          placeholder: '请选择年级',
          val: 'grade',
          selectLabel: 'label',
          selectVal: 'val',
          options: [
            { val: 1, label: '一年级' },
            { val: 2, label: '二年级' },
          ],
        },
        {
          require: true,
          type: 'date',
          label: '入校时间',
          placeholder: '请选择入校时间',
          val: 'date',
          other: { type: 'daterange' },
        },
        {
          type: 'radio',
          label: '是否及格',
          val: 'rank',
          selectLabel: 'label',
          selectVal: 'val',
          options: [
            { val: 1, label: '及格' },
            { val: 0, label: '没及格' },
          ],
        },
        {
          require: true,
          type: 'switch',
          label: '是否公开',
          val: 'public',
        },
        {
          type: 'checkbox',
          label: '兴趣爱好',
          val: 'hobby',
          selectLabel: 'label',
          selectVal: 'val',
          options: [
            { val: 1, label: '篮球' },
            { val: 2, label: '足球' },
            { val: 3, label: '游戏' },
          ],
        },
        {
          type: 'textarea',
          label: '个人评价',
          val: 'desc',
        },
      ];
      const state = reactive({
        form: {
          name: '',
          grade: 1,
          date: '',
          rank: 1,
          public: false,
          hobby: [],
          desc: '',
        },
      });
      const formRules = reactive({
        formRules: {
          name: [
            {
              required: true,
              message: '请填写姓名',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 5,
              message: '只能输入3-5个字',
              trigger: 'blur',
            },
          ],
        },
      });
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
