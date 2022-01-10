<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7"
        ><hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart> </hy-card
      ></el-col>
      <el-col :span="10"
        ><hy-card title="不同城市商品销量">
          <base-echart :options="mgoption"></base-echart>
        </hy-card>
      </el-col>
      <el-col :span="7"
        ><hy-card title="分类商品数量(玫瑰图)">
          <base-echart :options="mgoption"></base-echart> </hy-card
      ></el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="12"
        ><hy-card title="分类商品的销量">
          <base-echart :options="options"></base-echart></hy-card
      ></el-col>
      <el-col :span="12"
        ><hy-card title="分类商品的收藏">
          <base-echart :options="options"></base-echart> </hy-card
      ></el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import HyCard from '@/base-ui/card';
import BaseEchart from '@/base-ui/echart';
import PieEchart from '@/components/page-echarts';
export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    BaseEchart,
    PieEchart
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboard/getDashboardDataActions');
    const options = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    };
    const mgoption = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [10, 150],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    };
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    return {
      options,
      mgoption,
      categoryGoodsCount
    };
  }
});
</script>

<style scoped></style>
