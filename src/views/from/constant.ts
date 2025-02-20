import { reactive, ref } from 'vue';


export const owner = {
  Date: '2023-10-07',
  zhi: 4273,
  wei: 1386,
  zhe: 10000,
  zhao: 53118,
  jian: 1016,
  ping: 142549,
  gong: 3560,
  open: 65962,

  

  owner: 150000,
  total: 215902,
}


export const owner1 = {
  Date: '2024-04-19',
  zhi: '1273(锁定)',
  wei: 1386,
  zhao: 114000,
  jian: 1838,
  gong: 3564,
  ping: 186400,
  

  open: 114000,
  owner: 194461,
  total: 308461,
}


export const owner2 = {
  Date: '2025-02-20',
  zhi: '1569(锁定)',
  wei: 108,
  zhao: 61910,
  jian: 1625,
  gong: 4525,
  ping: 222594,
  zhong: 36422,
  
  
  gupiao: '67049(锁定)',
  
  open: 98332,
  owner: 230421,

  total: 395802,
}

//element
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

//表单的属性
export const state = reactive({
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

export const formRules = reactive({
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

//ant
export const formItems = {
  role_ids: {
    label: '角色',
    component: 'select',
    key: 'username',
    props: {
      placeholder: '请选择角色',
      allowClear: true,
      mode: 'multiple',
      showArrow: true,
      options: [
        {
          label: '111',
          value: 111,
        },
        {
          label: '222',
          value: 222,
        },
      ],
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

export const queryForm = ref({
  username: '',
  role_ids: [],
  order_by: 'created:desc',
});
