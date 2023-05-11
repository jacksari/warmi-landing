<script setup lang="ts">
interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex justify-between items-center w-full border-gray-500 pb-4 header flex-col md:flex-row"
  >
    <h2 class="text-2xl md:text-5xl font-semibold text-center md:text-left">
      {{ props.title }}
    </h2>

    <img
      class="h-12 w-12 md:h-20 md:w-20 mt-4 md:mt-0"
      src="https://images.vexels.com/media/users/3/188383/isolated/preview/441ae65c263ed326999f19e452b4f044-icono-de-adorno-de-arbol-de-estrella-de-navidad.png"
      alt=""
    />
  </div>
</template>
