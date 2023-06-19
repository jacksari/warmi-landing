<script setup lang="ts">
  import HeaderSection from "../layout/HeaderSection.vue";
  export interface ICourse {
    slug: string, 
    title: string,
    subtitle: string,
    description: string,
    objetive: string,
    resume: string,
    image: string,
    methodologies: string[],
  }
  
  interface Props {
    courses: ICourse[];
  }
  const props = defineProps<Props>();
  </script>


<template>
  
<div class="bg-secondary-300">
  <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <HeaderSection title="Programas que impulsan tu negocio" />

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-full mt-12">
      <div class="item-program bg-secondary-500 p-8 rounded-md" v-for="(course, index) in props.courses" :key="index">
        <span class="span-valid px-2 py-1 rounded-md">{{ course.subtitle }}</span>
        <h3 class="my-4 text-4xl font-semibold">{{ course.title }}</h3>
        <p class="text-gray-500 description mb-4">{{ course.resume }}
        </p>
        <div class="flex items mb-2" v-for="(resu, inde) in course.methodologies" :key="inde">
          <!-- <Icon name="mdi:check" /> -->

          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19"><path d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/></svg>

          <p class="ml-2">{{ resu }}
          </p>
        </div>

       

        <div class="w-full text-center mt-6">
          <a :href="`/programas/${course.slug}`"  class="bg-primary-700 w-full p-3 text-center"> Ver más información</a>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
  .header {
    border-bottom: 1px solid !important;
  }
  .item-program {
    border: 1px solid #7d7887;
    span {
      background: #fff3d6;
      font-size: 12px;
    }
    h3 {
      color: #333333;
    }
    .description {
      border-bottom: 1px dashed #7d7887;
      padding-bottom: 1rem;
    }
    .items {
      p {
        color: #4d4d4d;
      }
    }
    .span-valid {
      border: 1px solid #333333;
    }
    a {
      border: 1px solid #7d7887;
      border-radius: 8px;
      margin-top: 1rem;
    }
  }

  [astro-icon] {
    color: #209663;
    /* OR */
    fill: #209663;
    height: 28px;
    width: 28px;
  }

  svg{
    fill: #218D5E;
  }
</style>
