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
      pageName="role"
      ref="pageModelRef"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageModel from '@/components/page-model';
import { modelConfig } from './config/model-config';
import PageContent from '@/components/page-content';
import PageSearch from '@/components/page-search';
import { contentTableConfig } from './config/content-config';
import { formConfig } from './config/search.config';
import { usePageModel } from '@/hooks/usePageModel';
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModel
  },
  setup() {
    const [pageModelRef, defaultInfo, handleEditData, handleNewData] =
      usePageModel();
    return {
      contentTableConfig,
      formConfig,
      modelConfig,
      pageModelRef,
      defaultInfo,
      handleEditData,
      handleNewData
    };
  }
});
</script>

<style scoped></style>
