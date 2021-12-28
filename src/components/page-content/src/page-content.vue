<template>
  <div>
    <hy-table
      v-bind="contentTableConfig"
      :userList="userList"
      @selectChange="selectChange"
      :listCount="dataCount"
      v-model:page="pageInfo"
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
        <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
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
import { defineComponent, computed, ref, watch } from 'vue';
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
    //
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    });
    watch(pageInfo, () => getPageData());
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData();
    // const userList = computed(() => store.state.system.userList);
    const userList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );
    return {
      userList,
      getPageData,
      dataCount,
      pageInfo
    };
  }
});
</script>

<style scoped></style>
