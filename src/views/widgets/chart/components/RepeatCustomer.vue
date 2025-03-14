<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useTheme } from 'vuetify';
import SvgSprite from '@/components/shared/SvgSprite.vue';

const theme = useTheme();

const currentTheme = ref(theme.current.value.colors);

// Watch for changes in primary
watch(
  () => theme.current.value.colors.primary,
  (newColors) => {
    // Update currentTheme values when changes are detected
    currentTheme.value = {
      ...currentTheme.value,
      primary: newColors
    };
  }
);

const menulist = ref(['Today', 'Weekly', 'Monthly']);

const chartOptions = computed(() => {
  const primaryColor = currentTheme.value.primary;

  return {
    chart: {
      type: 'area',
      height: 260,
      fontFamily: `inherit`,
      foreColor: 'rgba(var(--v-theme-lightText), var(--v-high-opacity))',
      toolbar: false
    },
    colors: [primaryColor],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    grid: {
      borderColor: 'rgba(var(--v-theme-borderLight), var(--v-high-opacity))',
      strokeDashArray: 4
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: true
    }
  };
});

const areaChart = {
  series: [
    {
      name: 'Page Views',
      data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
    }
  ]
};
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-text class="pb-2">
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h5 mb-0">Repeat customer rate</h5>
        <v-menu width="150" location="start">
          <template v-slot:activator="{ props }">
            <v-btn icon color="secondary" aria-label="menu" variant="text" rounded="md" size="small" v-bind="props">
              <SvgSprite name="custom-more-outline" style="width: 20px; height: 20px" />
            </v-btn>
          </template>
          <v-list elevation="24" class="pa-3" rounded="md" aria-label="menu" aria-busy="true">
            <v-list-item density="compact" rounded="md" color="secondary" v-for="(item, index) in menulist" :key="index" :value="index">
              <v-list-item-title class="text-h6 text-lightText">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-text>
    <v-card-item class="pt-0">
      <div class="text-end">
        <h6 class="text-subtitle-1">
          5.44%
          <v-chip color="success" variant="flat" size="small" rounded="md">+2.6%</v-chip>
        </h6>
      </div>
      <apexchart type="area" height="260" :options="chartOptions" :series="areaChart.series"> </apexchart>
    </v-card-item>
  </v-card>
</template>
