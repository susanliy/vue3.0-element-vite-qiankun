import { ref } from 'vue';
import { tableListApi } from '@/api/table';

export const columns = ref([
  {
    prop: 'id',
    label: '编号',
  },
  {
    prop: 'title',
    label: '标题',
    html: (row: { title: string }) => {
      return `<el-button type="text" style="color:var(--el-color-primary);" onclick='console.log(1111)'>${row.title}</el-button>`;
    },
  },
  {
    prop: 'createTime',
    label: '创建时间',
  },
  {
    prop: 'state',
    label: '状态',
    dictionary: [
      { code: 0, name: '待审核' },
      { code: 1, name: '已审核' },
      { code: 2, name: '审核中' },
    ],
  },
  {
    prop: 'custom',
    label: '自定义',
    html: (row: { title: string; remark: any }) => {
      return row.title === '编号3' ? `<span style="color: red;">${row.remark}</span>` : `未定义`;
    },
  },
]);

export const testData = ref([]);
tableListApi().then((res: any) => {
  testData.value = res?.data.list;
});
