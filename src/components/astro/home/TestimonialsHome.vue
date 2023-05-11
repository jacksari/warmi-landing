<script setup lang="ts">
import HeaderSection from "../layout/HeaderSection.vue";
export interface IReview {
  id: number;
  name: string;
  url: string;
  country: string;
  comment: string;
}

interface Props {
  reviews: IReview[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <HeaderSection title="Qué dicen nuestras participantes" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-12">
      <div class="testimonial-item" v-for="(review, index) in props.reviews" :key="index">
        <div class="flex items-center">
          <img
            class="rounded-full h-14 w-14 object-cover"
            :src="review.url"
            alt=""
          />
          <!-- <Image :src="review.url"/> -->
          <div class="ml-4">
            <p class="font-bold">{{ review.name }}</p>
            <p>{{ review.country }}</p>
          </div>
        </div>
        <p class="mt-4">
          “{{review.comment}}”
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid !important;
}
.testimonial-item {
  border-bottom: 1px solid #bebebe;
  padding-bottom: 1rem;
}
</style>
