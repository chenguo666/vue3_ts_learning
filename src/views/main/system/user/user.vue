<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="formConfig" v-model="formData" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HyForm from '@/base-ui/form';
import { formConfig } from './config/search.config';
export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      userName: '',
      passWord: '',
      sport: '',
      createTime: ''
    });
    return {
      formConfig,
      formData
    };
  }
});
</script>

<style scoped></style>
