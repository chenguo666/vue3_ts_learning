<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="account.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input
            v-model="account.password"
            type="password"
            autocomplete="off"
          ></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary">Submit</el-button>
        <el-button>Reset</el-button>
      </el-form-item> -->
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
    const loginAction = (isKeepPassword: boolean) => {
      console.log(isKeepPassword);
    };

    return {
      account,
      loginAction,
      rules
    };
  }
});
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
