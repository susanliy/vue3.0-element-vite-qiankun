import { reactive } from 'vue';
export const formJson = [
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
];
export const state = reactive({
  form: {
    name: '',
    grade: 1,
    date: '',
  },
});
