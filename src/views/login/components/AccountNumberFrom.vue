<template>
  <div class="account-number-from">
    <p class="account-number-from-name">账号密码登录</p>
    <div class="account-number-from-box pt-20px">
      <a-form ref="formRef" :wrapper-col="{ style: { width: '300px' } }">
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-model:value="formState.username"
            size="large"
            placeholder="用户名/邮箱/手机号"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password v-model:value="formState.password" placeholder="请输入登录密码" />
        </a-form-item>
        <a-form-item v-bind="validateInfos['acs.token']">
          <AliValidate
            v-model:sessionId="formState.acs.sessionid"
            v-model:token="formState.acs.token"
            v-model:sig="formState.acs.sig"
            :form="formRef"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block size="large" @click.prevent="login">登录</a-button>
        </a-form-item>
        <!-- 需要跳转页面，是否需要新的页面交互 -->
        <a-button type="text" class="forget-password" @click="forgotPassword">忘记密码?</a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Form } from 'ant-design-vue';
  // import { userStore } from '@/store/modules/user';
  import AliValidate from './AliValidate.vue';
  import { loginApi } from '@/api/login/login';
  import { LoginParams } from '../data';
  import { LoginEnum } from '@/enums/loginEnum';

  const formRef = ref();
  const formState = reactive<LoginParams>({
    username: '',
    password: '',
    platform: LoginEnum.PLATFORM as number,
    acs: { sessionid: '', token: '', sig: '', scene: LoginEnum.SCENE as string },
  });

  const forgotPassword = () => {
    window.open('/frontend/findPassword');
  };
  const useForm = Form.useForm;

  const rulesRef = reactive({
    username: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
      },
      { min: 6, message: '密码不得少于6为数' },
    ],
    'acs.token': [
      {
        required: true,
        message: '请滑动验证',
      },
    ],
  });
  //把表单的校验放在了公共里--把条件从外部往里面传
  const { validate, validateInfos } = useForm(formState, rulesRef);

  const login = async () => {
    try {
      await validate();
      console.log('formState', formState);
      loginApi(formState).then(() => {});
    } catch (error) {
      console.log(error);
    }
  };
</script>

<style lang="scss" scoped>
  .account-number-from {
    .account-number-from-name {
      font-size: 24px;
      font-weight: 500;
      color: $title-color;
      line-height: 32px;
      margin: 38px 0 0;
      text-align: center;
    }
    .account-number-from-box {
      @include flex(center, center, row);
    }
  }
  :deep(.ant-input-affix-wrapper > input.ant-input) {
    height: 30px;
  }
  input.ant-input {
    height: 40px;
  }
  .forget-password {
    margin-top: -10px;
  }
</style>
