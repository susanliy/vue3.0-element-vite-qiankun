<template>
  <el-dialog
    :model-value="dialogShow"
    v-bind="$attrs"
    :fullscreen="fullscreen"
    :before-close="$emit('beforeClose')"
    :show-close="false"
    @open="$emit('dialogOpen')"
  >
    <template #title>
      <div class="flex-between icon">
        <span class="title-size">{{ title }}</span>
        <div>
          <i
            class="iconfont icon-FullScreen"
            @click="fullscreen = !fullscreen"
          />
          <i class="iconfont icon-Close" @click="$emit('closeDialog')" />
        </div>
      </div>
    </template>
    <div class="base-size">
      <slot />
    </div>
    <template #footer>
      <el-button @click="$emit('closeDialog')">取消</el-button>
      <el-button type="primary" @click="$emit('comfirm')">提交</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    dialogShow: {
      //弹窗显示
      type: Boolean,
      default: false,
    },
    title: {
      //标题
      type: String,
      default: '标题',
    },
  },
  emits: ['comfirm', 'closeDialog', 'dialogOpen', 'beforeClose'],
  setup() {
    const fullscreen = ref(false)
    return { fullscreen }
  },
})
</script>
<style scoped lang="scss">
.icon {
  cursor: pointer;
  height: 24px;
  line-height: 24px;
  i:last-child {
    padding-left: 10px;
  }
}
</style>
