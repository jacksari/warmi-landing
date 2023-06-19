<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { IGetStaticPathsCourses } from "../../../interfaces/programs";

interface ISections {
  name: string,
  description: string,
  lessons: string[],
  active: boolean
}

const sections = ref<ISections[]>([]);

interface Props {
    course: IGetStaticPathsCourses;
  }
  const props = defineProps<Props>();
  
  onMounted(() => {
    sections.value = props.course.sections as any;
  })

</script>

<template>
  <div class="bg-primary-500 pt-0 lg:pt-24">
    <div
      class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 class="text-3xl text-center mt-0 lg:mt-20 font-medium">
        Contenido del programa
      </h2>

      <div class="container-sections mx-auto flex flex-col items-center mt-12">
        <article
          class="item-section"
          v-for="(section, index) in sections"
          :key="index"
        >
          <div class="title-section" @click="section.active = !section.active">
            <h4 class="font-bold text-left">{{ section.name }}</h4>
            <svg class="title-icon" :class="section.active ? 'active' : ''" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
              />
            </svg>
          </div>
          <div
            class="container-section text-left"
            :style="{
              height: section.active
                ? `calc(40px + ${section.lessons.length * 28}px)`
                : '0px',
            }"
          >
            <div style="padding: 1rem; padding-top: 0">
              <p
                class="font-light leading-4 mb-2 flex items-center"
                style="height: 36px"
              >
                {{ section.description }}
              </p>
              <ul
                v-for="(lesson, indexLesson) in section.lessons"
                :key="indexLesson"
              >
                <li class="font-light list-disc ml-8">{{ lesson }}</li>
              </ul>
            </div>
          </div>
        </article>

      
      </div>

      <div class="mt-12">
        <button class="text-black font-medium border-2 border-black rounded-md px-14 py-3 bg-secondary-500">Quiero participar</button>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.item-section {
  width: 100%;
  border: 1px solid #333333;
  border-bottom: none;
  &:last-child {
    border-bottom: 1px solid #333333;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  .title-section {
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (min-width: 1024px) {
    padding: 1rem;
    h4{
    }
  }
    cursor: pointer;
    .title-icon{
        transition: .4s all ease-in-out;
    }
    .active{
        transform: rotate(180deg);
    }
  }
  .container-section {
    height: 0;
    min-height: 0;
    overflow: hidden;
    transition: 0.4s all ease-in-out;
    // padding: 1rem;
  }
  .active {
    // overflow: visible;
  }
}
</style>
