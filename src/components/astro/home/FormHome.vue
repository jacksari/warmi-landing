<script setup lang="ts">
import type { IGetStaticPathsCourses } from "../../../interfaces/programs";
import FormLanding from "../../vue/FormLanding.vue";
interface Props {
  course: IGetStaticPathsCourses;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        class="w-full pb-4 flex flex-col justify-center items-center md:items-start"
      >
        <img
          class="h-12 w-12 md:h-20 md:w-20"
          src="https://images.vexels.com/media/users/3/188383/isolated/preview/441ae65c263ed326999f19e452b4f044-icono-de-adorno-de-arbol-de-estrella-de-navidad.png"
          alt=""
        />
        <h2 class="text-2xl md:text-5xl font-semibold text-center md:text-left">
          Cuéntanos sobre tu proyecto
        </h2>
        <p
          class="text-gray-500 text-base md:text-xl leading-tight mt-4 text-center md:text-left"
        >
          Completa el siguiente formulario y te estaremos contactando
        </p>
      </div>

      <div>
        <FormLanding :course="props.course"/>
      </div>
    </div>
  </div>
</template>
