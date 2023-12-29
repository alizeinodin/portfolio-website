<template>
  <div>
    <p class="lg:text-sm text-xs font-thin text-zinc-400">
      { {{ subtitle }} }
    </p>
  </div>
  <div class="mt-2">
    <h2 class="lg:text-2xl text-sm font-bold" :class="color">
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    color: {
      type: String,
      default: "text-gray-500"
    }
  }
}
</script>

<style scoped>

</style>