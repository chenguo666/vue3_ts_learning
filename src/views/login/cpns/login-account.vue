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
import localCache from '@/utils/cache';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('name');
            localCache.deleteCache('password');
          }
          // 2.开始登陆
          store.dispatch('login/accountLoginActions', { ...account });
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
