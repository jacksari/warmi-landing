<script setup lang="ts">
import type { IGetStaticPathsCourses } from '../../../interfaces/programs';

const data = [
  {
    img: "/images/p1.png",
    title: "Mentoría",
    description:
      "Los proyectos tendrán acceso a sesiones individuales con un mentor para apoyarlos en su consolidación del modelo de negocio",
  },
  {
    img: "/images/p2.png",
    title: "Talleres ",
    description:
      " Se realizarán talleres grupales previo diagnóstico de cada emprendimiento, las cuales fortalecerán sus conocimientos y se implementarán en sus propios emprendimiento.",
  },
  {
    img: "/images/p3.png",
    title: "Mentoría",
    description:
      "Monitoreo por parte del equipo de la Incubadora para fortalecer los conocimientos adquiridos en los talleres, haciendo cumplir la implantación en sus emprendimientos.",
  },
  {
    img: "/images/p4.png",
    title: "Mentoría",
    description:
      "La posibilidad de presentar sus proyectos frente a la red de mentores, y público en general, al finalizar el programa.",
  },
];
  interface Props {
    course: IGetStaticPathsCourses;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div class="bg-secondary-300">
    <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- <HeaderSection title="Programas que impulsan tu negocio" /> -->

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full mt-12"
      >
        <div class="col-span-1 md:col-span-2">
          <span class="span-valid px-2 py-1 rounded-md">{{ props.course.subtitle }}</span>
          <h1 class="text-5xl">{{ props.course.title }}</h1>
        </div>
        <div>
          <p class="font-light">
            {{ props.course.description }}
          </p>
          <p class="font-light mt-8">
            {{ props.course.objetive }}
          </p>

          <div class="mt-10 flex flex-col items-center md:items-start">
            <a
              class="text-black font-medium border-2 border-black rounded-md px-14 py-3 bg-white"
              href="/"
              >Tengo una idea</a
            >
          </div>
        </div>

        <div class="bg-white p-4">
          <img
            class="p-0 m-0 w-full object-cover h-full"
            :src="props.course.image"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 container-footer mt-0 lg:mt-24 pb-10"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-4 bg-white container-details m-10 lg:m-0 mb-0 mt-0"
      >
        <div class="p-5 md:p-10" v-for="(item, index) in data" :key="index">
          <img class="h-12 w-12 object-cover" :src="item.img" alt="" />
          <h3 class="font-bold mt-2 mb-2">{{ item.title }}</h3>
          <p class="font-light text-base leading-5">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.span-valid {
  background: #fff3d6;
  font-size: 12px;
  border: 1px solid #333333;
}
.container-details {
  border: 1px solid #333333;
}

.container-footer {
  position: relative;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 100px;
  }

  .container-details {
    @media screen and (min-width: 1024px) {
      position: absolute;
      top: -50%;
      left: 0;
    }
  }
}
</style>
