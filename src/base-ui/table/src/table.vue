<template>
  <div class="hy-table">
    <el-table
      @selection-change="handleSelectChange"
      :data="userList"
      border
      style="width: 100%"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      >
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          :prop="propItem.prop"
          :label="propItem.label"
          :min-width="propItem.minWidth"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'dashboard',
  props: {
    userList: {
      type: Array,
      require: true
    },
    propList: {
      type: Array,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      require: true,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  emits: ['update:modelValue', 'selectChange'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('selectChange', value);
      console.log(value);
    };
    return {
      handleSelectChange
    };
  }
});
</script>

<style scoped></style>
