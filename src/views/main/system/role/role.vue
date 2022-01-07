<template>
  <div class="role">
    <page-search :formConfig="formConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      :defaultInfo="defaultInfo"
      :modelConfig="modelConfig"
      :otherInfo="otherInfo"
      pageName="role"
      ref="pageModelRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="leafTree"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue';
import PageModel from '@/components/page-model';
import { modelConfig } from './config/model-config';
import PageContent from '@/components/page-content';
import PageSearch from '@/components/page-search';
import { contentTableConfig } from './config/content-config';
import { formConfig } from './config/search.config';
import { usePageModel } from '@/hooks/usePageModel';
import { getMenuLeafKeys } from '@/utils/map-menu';
import { useStore } from 'vuex';
import { ElTree } from 'element-plus';
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModel
  },
  setup() {
    const leafTree = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      console.log('item', item.menuList);
      const leafKeys = getMenuLeafKeys(item.menuList);
      nextTick(() => {
        leafTree.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [pageModelRef, defaultInfo, handleEditData, handleNewData] =
      usePageModel(undefined, editCallback);
    const store = useStore();
    const menus = computed(() => store.state.entireMenu);
    const otherInfo = ref({});
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      contentTableConfig,
      formConfig,
      modelConfig,
      pageModelRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      menus,
      otherInfo,
      handleCheckChange,
      leafTree
    };
  }
});
</script>

<style scoped>
.menu-tree {
  margin-left: 20px;
}
</style>
