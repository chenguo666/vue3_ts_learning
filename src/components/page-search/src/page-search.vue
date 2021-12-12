<template>
  <div class="page-search">
    <hy-form v-bind="formConfig" v-model="formData">
      <template #header>
        <div class="header">
          <h2>高级检索</h2>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary">重置</el-button>
          <el-button type="success">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import HyForm from '@/base-ui/form';
export default defineComponent({
  components: {
    HyForm
  },
  props: {
    formConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const formData = ref({
      userName: '',
      passWord: '',
      sport: '',
      createTime: ''
    });
    return {
      formData
    };
  }
});
</script>
<style scoped>
.header {
  color: rebeccapurple;
}
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
