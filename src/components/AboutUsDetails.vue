<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String,
    }
  }
}
</script>

<template>
  <div>
    <div>
      <p class="lg:text-sm text-xs font-thin text-indigo-700">
        { {{ subtitle }} }
      </p>
    </div>
    <div class="mt-8 w-3/4">
      <h2 class="lg:text-4xl text-base font-bold">
        {{ title }}
      </h2>
    </div>
    <div class="mt-10 text-justify lg:text-base text-sm text-gray-700 w-3/4">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>