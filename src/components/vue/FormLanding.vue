<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  email: "",
  name: "",
  message: "",
  type: "",
});

const saveForm = () => {
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
    .then((json) => console.log("data", json, form.value));
};
</script>

<template>
  <div class="container-form-home shadow">
    <div class="bg-primary-700 card-container p-8">
      <div class="w-full form-group">
        <p class="font-medium">Nombre y apellido</p>
        <input
          v-model="form.name"
          type="text"
          placeholder="Ej: María Perez"
          class="border-black py-2 outline-none bg-transparent text-gray-900 w-full"
        />
      </div>
      <div class="w-full form-group">
        <p class="font-medium">Correo electrónico</p>
        <input
          v-model="form.email"
          type="text"
          placeholder="Correo electrónico"
          class="border-black py-2 outline-none bg-transparent text-gray-900 w-full"
        />
      </div>
      <div class="w-full form-group">
        <p class="font-medium">Tipo de consulta</p>
        <select
          class="w-full p-2 pl-0 outline-none bg-transparent"
          name="select"
          v-model="form.type"
        >
          <option value="null" selected>Seleccionar</option>
          <option value="Emprendedor">Emprendedor</option>
          <option value="Inversionista">Inversionista</option>
        </select>
      </div>
      <div class="w-full form-group">
        <p class="font-medium">Cuéntanos brevemente tu proyecto</p>
        <textarea
          v-model="form.message"
          placeholder="Proyecto"
          class="py-2 outline-none bg-transparent text-gray-900 w-full"
        ></textarea>
      </div>

      <button
        type="button"
        @click="saveForm"
        class="btn-send text-black font-medium border-black rounded-md px-20 py-2 bg-secondary-500"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-form-home {
  border: 20px solid white;
  background: #fff;
  .card-container {
    overflow: hidden;
    border-radius: 20px;
  }
  .form-group {
    border-bottom: 1px solid !important;
    margin-bottom: 1rem;

    input::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #737373;
      opacity: 1; /* Firefox */
    }
    textarea::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #737373;
      opacity: 1; /* Firefox */
    }
    textarea {
      min-height: 200px;
      border: 1px solid;
      margin-top: 0.5rem;
      padding: 0.5rem;
      border-radius: 12px;
    }
    &:nth-child(4) {
      border: none !important;
    }
  }
  .btn-send {
    border: 1px solid;
  }
}
</style>
