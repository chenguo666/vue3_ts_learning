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
      ></page-content>
      <page-model :modelConfig="modelConfig"></page-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { formConfig } from './config/search.config';
import { modelConfig } from './config/model-config';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/usePageSearch';
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const [pageContent, handleQueryClick, handleResetClick] = usePageSearch();
    return {
      formConfig,
      pageContent,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      modelConfig
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
