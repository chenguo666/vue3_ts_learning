<template>
  <div class="base-echart">
    <div ref="echartDivRef" style="width: 500px; height: 500px"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!);
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
  echartInstance.setOption(options);
});
</script>
<style></style>
