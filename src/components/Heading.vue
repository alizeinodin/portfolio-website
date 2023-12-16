<template>
  <div>
    <p class="text-sm font-thin text-zinc-400">
      { {{ this.subtitle }} }
    </p>
  </div>
  <div class="mt-2">
    <h2 class="text-2xl font-bold text-gray-600">
      {{ this.title }}
    </h2>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'subtitle']
}
</script>

<style scoped>

</style>