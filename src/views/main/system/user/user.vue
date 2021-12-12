<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <hy-table :userList="userList" :propList="propList">
        <template #enable="scope">
          <h2>{{ scope.row.enable ? '启用' : '禁用' }}</h2>
        </template>
        <template #createAt="scope">
          <h2>{{ scope.row.createAt }}</h2>
        </template>
        <template #updateAt="scope">
          <h2>{{ scope.row.createAt }}</h2>
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
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ];
    return {
      formConfig,
      userList,
      propList
    };
  }
});
</script>

<style scoped>
.user {
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
