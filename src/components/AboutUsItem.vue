<script lang="ts">
export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String
    },
    link: {
      type: String
    },
  }
}
</script>

<template>
  <div class="relative">
    <div class="absolute top-1/2 right-1/2 text-2xl text-white z-10">
      <h2>{{ title }}</h2>
    </div>
    
    <div>
      <a :href="link">
      <img class="grayscale hover:grayscale-0 duration-700 rounded-lg" :src="img" :alt="title">
    </a>
    </div>
  </div>
</template>

<style scoped></style>