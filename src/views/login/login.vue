<template>
  <a-modal v-model:visible="loginStore.openLoginDialog" :footer="null" :width="750" @ok="handleOk">
    <div class="login-box">
      <img v-lazy-img="SaidBanner" class="login-left" />
      <div class="login-right">
        <AccountNumberFrom v-if="loginType === ELoginType.number" class="login-from" />
        <MobileFrom v-if="loginType === ELoginType.phone" />
        <WeChatFrom v-if="loginType === ELoginType.weChat" />
        <div class="login-button">
          <a-button
            v-for="item in LOGIN_LIST"
            v-show="item.show"
            :key="item.code"
            type="text"
            @click="loginStyle(item.code)"
          >
            <IconFont :name="item.icon" />{{ item.name }}</a-button
          >
        </div>
        <p class="login-footer">
          未注册手机验证后自动登录，注册即同意
          <a href="/frontend/about/serviceClause" target="_blank">《指纹平台用户服务协议》</a>、
          <a href="/frontend/about/privacyPolicy" target="_blank">《隐私权政策》</a>、
          <a href="/frontend/about/legalDeclaration" target="_blank">《法律声明》</a>、
          <a href="/frontend/about/agentAgreement" target="_blank">《委托代理协议》</a>
        </p>
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
  //todo 异地登录的逻辑
  import { computed, ref, watch } from 'vue';
  import SaidBanner from '@/assets/images/mjs_banner.jpg';
  import { LOGIN_LIST } from './constants';
  import { ELoginType } from '@/enums/businessEnum';
  import { loginStoreWithOut } from '@/store/modules/login';

  const loginStore = loginStoreWithOut();

  const modalShow = computed(() => loginStore.openLoginDialog);
  watch(
    () => modalShow,
    (val) => {
      console.log('val', val);
    }
  );

  let loginType = ref(2);
  const loginStyle = (val: number) => {
    loginType.value = val;
    switch (val) {
      case ELoginType.phone:
        LOGIN_LIST.value[1].show = true;
        LOGIN_LIST.value[2].show = false;
        break;
      case ELoginType.number:
        LOGIN_LIST.value[1].show = false;
        LOGIN_LIST.value[2].show = true;
        break;
      case ELoginType.QQ:
        location.href = '/frontend/login/beforeBind?op=qq';
        break;
    }
  };
  const handleOk = () => {
    loginStore.hideLogin();
  };
</script>
<style lang="scss" setup>
  .line-color {
    color: #e6e6e6;
  }
  .ant-modal-body {
    padding: 0px;
    border-radius: 30px;
  }
  .login-box {
    height: 500px;
    display: flex;
  }
  .login-left {
    width: 40%;
    object-fit: cover;
    overflow: hidden;
  }
  .login-right {
    width: 60%;
    position: relative;
    .login-from {
      height: 366px;
      padding: 10px;
    }
    .login-button {
      height: 70px;
      line-height: 20px;
      @include flex(space-around, center);
      position: absolute;
      bottom: 60px;
      left: 45px;
    }
    .login-footer {
      color: $desc-color;
      line-height: 18px;
      font-size: 12px;
      padding: 7px 20px;
      word-break: break-all;
      height: 50px;
      background: #f6f7f9;
      a {
        color: #666;
      }
      position: absolute;
      bottom: 0px;
    }
  }
</style>
