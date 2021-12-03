<template>
  <div class="user">
    <div class="search">
      <hy-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
      />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HyForm, { IFromItem } from '@/base-ui/form';
export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formItems: IFromItem[] = [
      {
        label: '用户名',
        type: 'input',
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        type: 'password',
        placeholder: '请输入密码'
      },
      {
        label: '运动',
        type: 'select',
        placeholder: '请选择运动',
        options: [
          {
            title: '篮球',
            value: 'basketball'
          },
          {
            title: '足球',
            value: 'football'
          }
        ]
      },
      {
        label: '创建时间',
        type: 'datepicker',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ];
    const labelWidth = '120px';
    const itemStyle = {
      padding: '20px 40px'
    };
    return {
      formItems,
      labelWidth,
      itemStyle
    };
  }
});
</script>

<style scoped></style>
