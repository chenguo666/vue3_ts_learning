<template>
  <div class="hy-table">
    <el-table :data="userList" border style="width: 100%">
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
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {};
  }
});
</script>

<style scoped></style>
