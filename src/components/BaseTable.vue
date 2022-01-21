<template>
  <el-table
    ref="mutipleTable"
    :data="list"
    v-bind="$attrs"
    :header-cell-style="{ background: '#eceef4' }"
    @sort-change="sortChange"
  >
    <template v-for="column in normalColumns" :key="column.label">
      <el-table-column
        :prop="column.prop"
        :label="column.label"
        :sortable="sortFun(column.prop)"
        :sort-orders="['descending', 'ascending', null]"
      >
        <template #default="scope">
          <!-- 自定义字段 todo 改为render写法-->
          <template v-if="column.html">
            <div v-html="column.html(scope.row, column)"></div>
          </template>
          <!--字典转换--->
          <template v-else-if="column.dictionary">
            <span>
              {{
                column.dictionary.find(
                  (item) => item.code === scope.row[column.prop],
                ).name
              }}
            </span>
          </template>
          <span v-else>{{ scope.row[column.prop] }}</span>
        </template>
      </el-table-column>
    </template>
    <el-table-column label="操作">
      <template #default="scope">
        <slot v-bind="scope" name="actionSlot" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { StringObjType } from './helpers'

export default defineComponent({
  name: 'BaseTable',
  props: {
    // 数据列表
    list: {
      type: Array,
      default: () => [],
    },
    // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽
    columns: {
      type: Array,
      default: () => [],
    },
    sortList: {
      // 需要开启排序的列
      type: Array,
      default: () => {
        return []
      },
    },
  },
  emits: ['sortChange'],
  setup(props, context) {
    const normalColumns = props.columns.filter((item: any) => !item.type)

    const sortType: StringObjType = {
      ascending: 'asc',
      descending: 'desc',
    }
    //todo 排序的字段名key需要固定
    //排序点击传出参数
    const sortChange = (column: { order: any; prop: any }) => {
      let order = sortType[column.order]
      const sortParam = order
        ? { sort_key: column.prop, sort_order: order }
        : {}
      console.log('---sortParam----', sortParam)
      context.emit('sortChange', sortParam)
    }
    //后端进行排序
    const sortFun = (val: string) => {
      const temp = props.sortList.find((item) => {
        return item === val
      })
      return temp ? 'custom' : false
    }
    return {
      normalColumns,
      sortChange,
      sortFun,
    }
  },
})
</script>
