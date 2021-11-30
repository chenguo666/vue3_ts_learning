<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name" required>
        <el-input v-model="account.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input
          v-model="account.password"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/account-config';
import { ElForm } from 'element-plus';
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录开始');
        }
      });
    };

    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>
<style lang="less" scoped></style>
