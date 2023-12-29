<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "درباره ما"
    }
  }
}
</script>

<template>
  <div class="h-96 w-full bg-[url('/img/bg-pheader.jpg')] flex items-center">
    <div class="container lg:mr-60 mr-10 flex">
      <div>
        <h1 class="text-gray-50 text-5xl">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>