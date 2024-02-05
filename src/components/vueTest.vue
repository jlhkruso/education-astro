<template>
  <div class="bg-slate-100">
    <h1>VUE component</h1>
    <p>{{ myRef }}</p>
    <div>
      <button @click="increment()">increment</button>
    </div>
    <button @click="decrement()">decrement</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const myRef = ref(0);

const increment = () => myRef.value++;

const decrement = () => myRef.value--;
</script>
