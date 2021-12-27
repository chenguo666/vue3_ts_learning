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
          <el-button type="primary" @click="handleRestClick">重置</el-button>
          <el-button type="success" @click="handleQueryClick">搜索</el-button>
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
  emits: ['resetBtnClick', 'queryBntClick'],
  setup(props, { emit }) {
    const formItem = props.formConfig?.formItems ?? [];
    const formOrignData = {};
    for (const item of formItem) {
      formOrignData[item.field] = '';
    }
    const formData = ref(formOrignData);
    // const formData = ref({
    //   userName: '',
    //   passWord: '',
    //   sport: '',
    //   createTime: ''
    // });
    const handleRestClick = () => {
      for (const key in formOrignData) {
        formData.value[`${key}`] = formOrignData[key];
      }
      emit('resetBtnClick');
      // formData.value = formOrignData;
    };
    const handleQueryClick = () => {
      console.log(111);
      emit('queryBntClick', formData.value);
    };
    return {
      formData,
      handleRestClick,
      handleQueryClick
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
