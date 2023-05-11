<script setup lang="ts">
import HeaderSection from "../layout/HeaderSection.vue";

export interface IWhyBePart {
  id: number;
  title: string;
  name: string;
}

interface Props {
  items: IWhyBePart[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="py-20 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <HeaderSection title="¿Porqué ser parte?" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8">
      <div>
        <div class="mb-8" v-for="(item, index) in props.items" :key="index">
          <h6 class="text-2xl font-bold text-black text-center md:text-left">
            {{ item.title }}
          </h6>
          <p
            class="font-normal text-gray-800 text-md mt-2 text-center md:text-left"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
      <div class="container-images">
        <div class="header-images-center">
          <img class="" src="images/why1.png" alt="" />
        </div>
        <div class="header-images-bottom">
          <img class="" src="images/why2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid !important;
}
.container-images {
  position: relative;
  min-height: 500px;
  display: none;
  @media screen and (min-width: 800px) {
    display: inline;
  }
  .header-images-center {
    height: 400px;
    width: 380px;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    padding: 0.6rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 40px;
    }
  }
  .header-images-bottom {
    height: 240px;
    width: 200px;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;

    background: #fff;
    padding: 0.6rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;

      border-radius: 12px;
    }
  }
}
</style>
