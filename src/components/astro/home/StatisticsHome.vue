<script setup lang="ts">
export interface IStatistic {
  id: number;
  number: number;
  name: string;
}

interface Props {
  statistics: IStatistic[];
}
const props = defineProps<Props>();
</script>

<template>
  <div
    class="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex py-20 items-center justify-between"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      <div
        v-for="(statistic, index) in props.statistics"
        :key="index"
        class="border-gray-200 rounded-md border-2 bg-primary-100 p-5 text-center"
      >
        <h4 class="text-5xl text-secondary-800 font-bold">
          +{{ statistic.number }}
        </h4>
        <h5 class="text-base text-secondary-800 uppercase font-medium">
          {{ statistic.name }}
        </h5>
      </div>
    </div>
  </div>
</template>
