<template>
  <div class="wechat-from">
    <p class="wechat-title">微信扫码登录注册</p>
    <p>注册即送新人免费拿样券</p>
    <div class="login-wechat-img">
      <img :src="loginImg" />
      <div v-if="codeFailure" class="login-wechat-invalid">
        <p>二维码已失效</p>
        <a-button type="text" @click="getCode">点击刷新</a-button>
      </div>
    </div>
    <p>扫码关注公众号 即可注册/登录</p>
  </div>
</template>
<script lang="ts" setup>
  import { getWeChatCode, loginApi } from '@/api/login/login';
  import { ref, onMounted } from 'vue';
  const loginImg = ref('');

  //登录参数
  const loginCode = ref(''); //todo 后期需要存在store里
  let openid = ref('');
  let unionid = ref('');

  let codeFailure = false;
  const getCode = () => {
    getWeChatCode().then((res) => {
      loginImg.value = res.data.url;
      loginCode.value = res.data.loginCode;

      //轮询确定是否扫描了二维码
      const checkWxScan = setInterval(() => {
        const params = {};
        loginApi(params).then(() => {
          //TODO返回的状态码详细设置-axios里面的错误拦截 eg:注册/登录/账号被占用。。。
          if (res.code === 'register') {
            //需要注册的参数
            openid.value = res.data.openid;
            unionid.value = res.data.unionid;
          }
        });
        clearInterval(checkWxScan);
      }, 1000);

      //一分钟二维码过期了
      const timer = setTimeout(() => {
        codeFailure = true;
        clearTimeout(timer);
      }, 60000);
    });
  };

  onMounted(() => {
    getCode();
  });
</script>
<style lang="scss">
  .wechat-from {
    text-align: center;
  }
  .login-wechat-img {
    width: 150px;
    height: 150px;
    position: relative;
    margin: 40px auto;
  }
  .login-wechat-invalid {
    position: absolute;
    top: 0px;
    width: 150px;
    height: 150px;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    color: #fff;
    @include flex(center, center, column);
  }
  .wechat-title {
    font-size: 24px;
    font-weight: 500;
    color: $title-color;
    line-height: 32px;
    margin: 38px 0 0;
  }
</style>
