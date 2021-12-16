<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <hy-table
        :title="title"
        :showSelectColumn="showSelectColumn"
        :showIndexColumn="showIndexColumn"
        :userList="userList"
        :propList="propList"
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import HyTable from '@/base-ui/table';
import { formConfig } from './config/search.config';
import { useStore } from '@/store';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 1,
        size: 10
      }
    });
    const userList = computed(() => store.state.system.userList);
    // const userCount = computed(() => store.state.system.userCount);
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '电话',
        minWidth: '100',
        slotName: 'cellphone'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '100',
        slotName: 'updateAt'
      },
      {
        prop: '操作',
        label: '操作',
        minWidth: '120',
        slotName: 'handler'
      }
    ];
    const title = '用户列表';
    const showIndexColumn = true;
    const showSelectColumn = true;
    const selectChange = (e: any) => {
      console.log('e', e);
    };
    return {
      title,
      formConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectChange
    };
  }
});
</script>

<style scoped lang="less">
.user {
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
