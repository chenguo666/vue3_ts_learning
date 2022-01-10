<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import BaseEchart from '@/base-ui/echart';
import { defineExpose, defineProps, computed } from 'vue';
import { IDataType } from '../types';
const props = defineProps<{
  pieData: IDataType[];
}>();
const options = computed(() => {
  return {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>
