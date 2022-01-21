<template>
  <div>
    <base-diolog ref="dialogRef">
      <template #default>
        <base-from
          ref="formRef"
          :model-value="form"
          :form-data="formJson"
          style="margin-top: 18px"
        />
      </template>
    </base-diolog>
  </div>
</template>
<script>
import BaseFrom from '@/components/BaseFrom.vue'
import { defineComponent, reactive, toRefs } from 'vue'
import BaseDiolog from '../components/BaseDialog.vue'

export default defineComponent({
  components: {
    BaseDiolog,
    BaseFrom,
  },
  props: {
    id: Number,
  },
  setup(props) {
    console.log(props, 'props3')

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
        label: '时间',
        placeholder: '请选择入校时间',
        val: 'date',
        other: { type: 'daterange' },
      },
    ]
    const state = reactive({
      form: {
        name: '',
        grade: 1,
        date: '',
      },
    })

    return {
      formJson,
      ...toRefs(state),
    }
  },
})
</script>
