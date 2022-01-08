<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7"><hy-card title="分类商品数量(饼图)"></hy-card></el-col>
      <el-col :span="10"><hy-card title="不同城市商品销量"></hy-card></el-col>
      <el-col :span="7"
        ><hy-card title="分类商品数量(玫瑰图)"></hy-card
      ></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"
        ><hy-card title="分类商品的销量"> <base-echart></base-echart></hy-card
      ></el-col>
      <el-col :span="12"><hy-card title="分类商品的收藏"></hy-card></el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import HyCard from '@/base-ui/card';
import BaseEchart from '@/base-ui/echart';
export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    BaseEchart
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboard/getDashboardDataActions');

    return {};
  }
});
</script>

<style scoped></style>
