<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBntClick="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContent"
        pageName="users"
        :contentTableConfig="contentTableConfig"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></page-content>
      <page-model
        :defaultInfo="defaultInfo"
        :modelConfig="modelConfigRef"
        pageName="users"
        ref="pageModelRef"
      ></page-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { formConfig } from './config/search.config';
import { modelConfig } from './config/model-config';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModel } from '@/hooks/usePageModel';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const [pageContent, handleQueryClick, handleResetClick] = usePageSearch();
    const newCallback = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === 'password'
      );
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === 'password'
      );
      passwordItem!.isHidden = true;
    };
    const store = useStore();
    const modelConfigRef = computed(() => {
      const departmenItem = modelConfig.formItems.find(
        (item) => item.field === 'departmentId'
      );
      const roleItem = modelConfig.formItems.find(
        (item) => item.field === 'roleId'
      );
      console.log('store.state', store.state);
      departmenItem!.options = store.state.entireDepartment.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modelConfig;
    });
    const [pageModelRef, defaultInfo, handleEditData, handleNewData] =
      usePageModel(newCallback, editCallback);

    return {
      formConfig,
      pageContent,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      modelConfig,
      handleNewData,
      handleEditData,
      pageModelRef,
      defaultInfo,
      modelConfigRef
    };
  }
});
</script>

<style scoped lang="less">
.user {
  .content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
  }
}
</style>
