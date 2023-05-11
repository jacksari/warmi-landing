<script setup lang="ts">
import HeaderSection from "../layout/HeaderSection.vue";
export interface IAllies {
  id: number;
  name: string;
  url: string;
}

interface Props {
  allies: IAllies[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <HeaderSection title="Estas son las empresas que nos acompañan" />

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 w-full mt-12"
    >
      <div
        v-for="(alli, index) in props.allies"
        :key="index"
        class="border-gray-200 rounded-md border-2 bg-white p-2 text-center"
      >
        <img class="object-contain w-full h-full" :src="alli.url" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
