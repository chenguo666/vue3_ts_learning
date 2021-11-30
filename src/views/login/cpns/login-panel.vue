<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><User /></el-icon>账号登录
          </span>
        </template>
        <loginaccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Phone /></el-icon>手机登录
          </span>
        </template>
        <loginphone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码？</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Phone, User } from '@element-plus/icons';
import loginaccount from './login-account.vue';
import loginphone from './login-phone.vue';
export default defineComponent({
  components: {
    Phone,
    User,
    loginaccount,
    loginphone
  },
  setup() {
    const isKeepPassword = ref(true);
    const handleLoginClick = () => {
      console.log(132);
    };
    return {
      isKeepPassword,
      handleLoginClick
    };
  }
});
</script>
<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-top: -120px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
