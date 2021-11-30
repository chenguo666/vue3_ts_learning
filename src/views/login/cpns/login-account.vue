<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
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
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/account-config';
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });

    return {
      account,
      rules
    };
  }
});
</script>
<style lang="less" scoped></style>
