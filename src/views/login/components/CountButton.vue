<template>
  <a-button
    v-bind="$attrs"
    :disabled="isStart === !orDisabled"
    :loading="loading"
    class="count-button"
    @click="handleStart"
  >
    {{ getButtonText }}
  </a-button>
</template>
<script lang="ts">
  import { defineComponent, ref, watchEffect, computed, unref } from 'vue';
  import { isFunction } from '@/utils/is';
  import { useCountdown } from '@/hooks/useCountdown';

  const props = {
    value: { type: [Object, Number, String, Array] },
    count: { type: Number, default: 60 },
    beforeStartFunc: {
      //启动的前期准备
      type: Function as PropType<() => Promise<boolean>>,
      default: null,
    },
    orDisabled: { type: Boolean, default: false },
  };

  export default defineComponent({
    name: 'CountButton',
    props,
    setup(props) {
      const loading = ref(false);

      const { currentCount, isStart, start, reset } = useCountdown(props.count);

      const getButtonText = computed(() => {
        return !unref(isStart) ? '获取验证码' : `${unref(currentCount)}s`;
      });

      watchEffect(() => {
        props.value === undefined && reset();
      });

      /**
       * @description 执行前判断是否有外部功能，执行后决定是否启动
       */
      async function handleStart() {
        const { beforeStartFunc } = props;
        if (beforeStartFunc && isFunction(beforeStartFunc)) {
          loading.value = true;
          try {
            const canStart = await beforeStartFunc(); //请求的链接
            canStart && start();
          } finally {
            loading.value = false;
          }
        } else {
          start();
        }
      }
      return { handleStart, currentCount, loading, getButtonText, isStart };
    },
  });
</script>
<style scoped lang="scss">
  .count-button {
    height: 40px;
    text-align: center;
    width: 122px;
  }
</style>
