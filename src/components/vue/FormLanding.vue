<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  email: "",
  name: "",
  message: "",
});

const click = () => {
  // console.log('ADD', form.value);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log('data', json));
};
</script>

<template>
  <div class="bg-red-300">
    <h2>Formulario</h2>
    <input type="text" v-model="form.name" />
    <button @click="click" class="bg-primar">Add</button>
    <!-- {{ form.name }} -->
  </div>
</template>