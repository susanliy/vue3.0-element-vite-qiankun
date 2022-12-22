<template>
  <div class="tab-document">
    <div class="flex tab-document-title">
      <p class="tab-document-http">HTTP</p>
      <span class="tab-document-http bg-blue">{{ heardInfo?.httpType }}</span>
      <span>{{ heardInfo?.api }}</span>
    </div>
    <div class="tab-document-icon">
      <edit-outlined />
      <clock-circle-outlined />
      <alert-outlined />
      <ellipsis-outlined />
      <a-button @click="goToTest">测试</a-button>
    </div>
  </div>
  <p>{{ heardInfo?.name }}</p>
  {{ heardInfo?.status === 0 ? '已发布' : '未发布' }}
  <div class="tab-document-info">
    <span>报文编码格式:{{ heardInfo?.format }}</span>
    <span>分组:{{ heardInfo?.group }}</span>
    <span>负责人:{{ heardInfo?.people }}</span>
    <span>创建者:{{ heardInfo?.user }}</span>
    <span>最后编辑人:{{ heardInfo?.lastEdit }}</span>
    <span>更新时间:{{ heardInfo?.time }}</span>
  </div>
</template>
<script lang="ts" setup>
  import { heardListApi } from '@/api/apiList';
  import { ref } from 'vue';
  import {
    EditOutlined,
    ClockCircleOutlined,
    AlertOutlined,
    EllipsisOutlined,
  } from '@ant-design/icons-vue';
  import { useRouter } from 'vue-router';
  type fromList = {
    httpType: string;
    api: string;
    name: string;
    status: number;
    format: string;
    group: string;
    people: string;
    user: string;
    lastEdit: string;
    time: string;
  };
  let heardInfo = ref<fromList>({
    httpType: '',
    api: '',
    name: '',
    status: 0,
    format: '',
    group: '',
    people: '',
    user: '',
    lastEdit: '',
    time: '',
  });
  heardListApi().then((res) => {
    console.log('res', res);
    heardInfo.value = res.data;
  });

  const router = useRouter();
  const goToTest = () => {
    router.push({
      path: '/api',
      query: {
        tab: 2,
      },
    });
  };
</script>
<style lang="scss" scoped>
  .tab-document {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .tab-document-http {
    height: 20px;
    width: 40px;
    line-height: 20px;
    background-color: aquamarine;
    text-align: center;
    border-radius: 6px;
    margin-right: 8px;
  }
  .bg-blue {
    background-color: aqua;
  }
  .tab-document-icon {
    span {
      padding: 10px;
    }
  }
  .tab-document-info {
    span {
      margin-right: 20px;
    }
  }
</style>
