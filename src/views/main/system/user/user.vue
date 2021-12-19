<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <page-content
        pageName="users"
        :contentTableConfig="contentTableConfig"
      ></page-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import { formConfig } from './config/search.config';
import { contentTableConfig } from './config/content-config';

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
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
