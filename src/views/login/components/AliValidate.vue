<template>
  <div id="nc" ref="captchaEl"></div>
</template>

<script lang="ts" setup>
  // https://help.aliyun.com/document_detail/193141.html
  import 'https://g.alicdn.com/AWSC/AWSC/awsc.js';
  import { ref, onMounted } from 'vue';

  const captchaEl = ref();

  const props = defineProps({
    form: Object,
    sessionId: String,
    token: String,
    sig: String,
  });
  const emit = defineEmits(['update:sessionId', 'update:token', 'update:sig']);

  onMounted(() => {
    //实例化nc
    // @ts-ignore
    AWSC.use('nc', function (state, module) {
      const ncOption = {
        appkey: 'FFFF0N000000000074F9', // 应用类型标识
        scene: 'nc_login', //使用场景标识
        renderTo: 'nc', //声明滑动验证需要渲染的目标ID。
        success: function (data) {
          captchaEl.value.className += ' is-compelete';
          const { sessionId, sig, token } = data; //会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段
          emit('update:sessionId', sessionId);
          emit('update:token', token);
          emit('update:sig', sig);

          props.form?.clearValidate('acs.token');
        },
        fail: function (failCode) {
          console.log(failCode);
        },
        error: function (errorCode) {
          console.log(errorCode);
        },
      };
      // @ts-ignore
      window.nc = module.init(ncOption);
    });
  });
</script>

<style lang="scss" scoped>
  .sm-pop-inner {
    position: relative;
    width: 100%;
  }

  #nc {
    :deep(.nc_wrapper) {
      width: 100%;
    }

    :deep(.nc_scale .btn_slide),
    :deep(.nc_scale .btn_ok) {
      width: 50px;
      height: 100%;
      font-size: 20px;
      font-weight: bold;
    }

    :deep(.nc_scale .btn_slide) {
      color: '#1890ff';
      border-radius: 2px !important;
    }

    // :deep(.nc_scale .nc_ok) {
    //   background: '#1890ff'r;
    // }
    // :deep(.nc_scale .nc_bg) {
    //   background: #f6ffed;
    //   border: 1px solid #b7eb8f;
    // }
    :deep(.errloading .icon_warn) {
      font-size: 16px;
    }

    :deep(.nc_scale) {
      border-radius: 2px !important;
    }
  }
</style>
