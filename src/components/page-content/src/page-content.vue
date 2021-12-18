<template>
  <div>
    <hy-table
      v-bind="contentTableConfig"
      :userList="userList"
      @selectChange="selectChange"
    >
      <!-- header -->
      <template #headerHandler>
        <el-button type="primary" size="medium"> 新建数据 </el-button>
      </template>
      <!-- 列中 -->
      <template #enable="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <h2>{{ $filter.formatTime(scope.row.createAt) }}</h2>
      </template>
      <template #updateAt="scope">
        <h2>{{ $filter.formatTime(scope.row.updateAt) }}</h2>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" type="text" size="mini"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" type="text" size="mini"
            >删除</el-button
          >
        </div>
      </template>
    </hy-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import HyTable from '@/base-ui/table';
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    HyTable
  },
  setup(props) {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 1,
        size: 10
      }
    });
    // const userList = computed(() => store.state.system.userList);
    const userList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    return {
      userList
    };
  }
});
</script>

<style scoped></style>
