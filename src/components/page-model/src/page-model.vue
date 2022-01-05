<template>
  <div class="page-model">
    <el-dialog
      title="新建用户"
      destroy-on-close
      v-model="dialogVisable"
      width="30%"
      center
    >
      <hy-form v-bind="modelConfig" v-model="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisable = false">取 消</el-button>
          <el-button @click="dialogVisable = false" type="primary"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import HyForm from '@/base-ui/form';
export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const dialogVisable = ref(false);
    console.log(props.modelConfig);
    const formData = ref({});
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modelConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    return {
      dialogVisable,
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
