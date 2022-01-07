<template>
  <div>
    <hy-table
      v-bind="contentTableConfig"
      :userList="userList"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- @selectChange="selectChange" -->
      <!-- header -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
        >
          新建数据
        </el-button>
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            type="text"
            size="mini"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            type="text"
            @click="handleDeleteClick(scope.row)"
            size="mini"
            >删除</el-button
          >
        </div>
      </template>
      <!-- pagecontent 动态插入 -->
      <template
        #[item.slotName]="scope"
        v-for="item in otherPropSlots"
        :key="item.prop"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from '@/store';
import { usePermission } from '@/hooks/usePermission';
import HyTable from '@/base-ui/table';
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    HyTable
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore();
    console.log('props', props.pageName);

    const isCreate = usePermission(props.pageName, 'create');
    const isUpdate = usePermission(props.pageName, 'update');
    const isDelete = usePermission(props.pageName, 'delete');
    const isQuery = usePermission(props.pageName, 'query');

    //
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    });
    watch(pageInfo, () => getPageData());
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
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
    // 获取其他的slot
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false;
        if (item.slotName === 'enable') return false;
        if (item.slotName === 'createAt') return false;
        if (item.slotName === 'updateAt') return false;
        if (item.slotName === 'handler') return false;
        return true;
      }
    );
    // 删除
    const handleDeleteClick = (item: any) => {
      console.log(item);
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      });
    };
    // 编辑
    const handleEditClick = (item: any) => {
      console.log('edit');
      emit('editBtnClick', item);
    };
    // 新增
    const handleNewClick = () => {
      console.log('new');
      emit('newBtnClick');
    };
    return {
      userList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    };
  }
});
</script>

<style scoped></style>
