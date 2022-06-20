<template>
  <el-table
    ref="mutipleTable"
    v-bind="$attrs"
    :key="tableKey"
    :data="testData"
    row-key="id"
    :header-cell-style="{ background: '#eceef4' }"
  >
    <draggable v-model="testData" tag="tbody" item-key="id">
      <template v-for="column in columns" :key="column.label">
        <el-table-column :prop="column.prop" :label="column.label">
          <template #default="scope">
            <span>{{ scope.row[column.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </draggable>
  </el-table>
</template>
<script lang="ts">
  import draggable from 'vuedraggable';
  import { columns, testData } from '@/views/table/components/content';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      draggable,
    },

    setup() {
      const tableKey = Math.random();
      const drag = false;
      return {
        columns,
        testData,
        drag,
        tableKey,
      };
    },
  });
</script>
