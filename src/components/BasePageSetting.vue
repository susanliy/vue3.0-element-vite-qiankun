<template>
  <div v-if="show" class="pagination-container">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="$emit('pageSizeChange')"
      @current-change="$emit('pageCurrentChange')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BasePageSetting',
  props: {
    total: {
      required: true,
      type: Number,
      default: 0,
    },
    //每页显示条目个数
    pageSize: {
      type: Number,
      default: () => {
        return 10
      },
    },
    //每页显示个数选择器
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 50, 100]
      },
    },
    //当前页数
    currentPage: {
      type: Number,
      default: () => {
        return 1
      },
    },
    //组件布局
    layout: {
      type: String,
      default: 'total, prev, pager, next',
    },
    //是否显示
    show: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['pageSizeChange', 'pageCurrentChange'],
})
</script>

<style lang="scss" scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  text-align: right;
}
</style>
