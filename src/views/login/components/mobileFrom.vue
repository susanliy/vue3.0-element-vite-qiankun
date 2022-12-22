<template>
  <div class="account-number-from">
    <p class="account-number-from-name">手机验证码登录</p>
    <p class="color-red">注册即送新人免费拿样券</p>
    <div class="account-number-from-box pt-20px">
      <a-form ref="formRef">
        <a-form-item v-bind="validateInfos.mobile">
          <a-input v-model:value="formState.mobile" size="large" placeholder="请输入手机号码" />
        </a-form-item>
        <a-form-item v-bind="validateInfos['acs.token']">
          <AliValidate
            v-model:sessionId="formState.acs.sessionid"
            v-model:token="formState.acs.token"
            v-model:sig="formState.acs.sig"
            :form="formRef"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.verification" class="verification">
          <a-input v-model:value="formState.verification" placeholder="验证码" />
          <CountButton :orDisabled="buttonDisabled" :beforeStartFunc="getVerificationCode" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block size="large" @click.prevent="login">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, watchEffect } from 'vue';
  import { Form } from 'ant-design-vue';
  import { LoginEnum } from '@/enums/loginEnum';
  import AliValidate from './AliValidate.vue';
  import { getVerificationCode, loginApi } from '@/api/login/login';
  import { Rule } from 'ant-design-vue/es/form/interface';
  import { LoginParams } from '../data';

  const formRef = ref();
  const formState = reactive<LoginParams>({
    mobile: '',
    verification: '',
    platform: LoginEnum.PLATFORM as number,
    acs: { sessionid: '', token: '', sig: '', scene: LoginEnum.SCENE as string },
  });

  const useForm = Form.useForm;

  let validatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('请输入手机号码');
    } else {
      const telText = /^1\d{10}$/;
      if (!telText.test(value)) {
        return Promise.reject('请输入11位手机号码');
      }
      return Promise.resolve();
    }
  };

  const rulesRef = reactive({
    mobile: [
      {
        required: true,
        trigger: 'change',
        validator: validatePass,
      },
    ],
    verification: [
      {
        required: true,
        message: '请输入验证码',
      },
    ],
    'acs.token': [
      {
        required: true,
        message: '请滑动验证',
      },
    ],
  });

  const buttonDisabled = ref(false);
  watchEffect(() => {
    console.log('buttonDisabled.value', buttonDisabled.value, formState);
    buttonDisabled.value = formState.acs.sessionid === '' || formState.mobile === '';
  });

  const { validate, validateInfos } = useForm(formState, rulesRef);

  const login = async () => {
    try {
      await validate();
      console.log('formState', formState);
      loginApi(formState).then(() => {}); //todo 参数
    } catch (error) {
      console.log(error);
    }
  };
</script>

<style lang="scss" scoped>
  :deep(.ant-form-item-explain.ant-form-item-explain-error) {
    text-align: left;
  }
  .account-number-from {
    text-align: center;
    .account-number-from-name {
      font-size: 24px;
      font-weight: 500;
      color: $title-color;
      line-height: 32px;
      margin: 38px 0 0;
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
  .forget-verification {
    margin-top: -10px;
  }
  .verification {
    :deep(.ant-form-item-control-input-content) {
      display: flex;
      .ant-input {
        margin-right: 10px;
      }
    }
  }
</style>
