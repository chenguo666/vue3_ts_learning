<template>
  <div class="apge-model">
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
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </template>
    </el-dialog>
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
    modelConfig: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const dialogVisable = ref(true);
    console.log(props.modelConfig);
    const formData = ref({});
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
