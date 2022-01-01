<template>
  <div class="menu">
    <pagecontent :pageName="'menu'" :contentTableConfig="contentTableConfig">
    </pagecontent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pagecontent from '@/components/page-content';
import { contentTableConfig } from './config/content-config';
export default defineComponent({
  name: 'menus',
  components: {
    pagecontent
  },
  setup() {
    return {
      contentTableConfig
    };
  }
});
</script>

<style scoped></style>
