<script lang="ts">

export default {
  name: "ServiceItem",
  props: {
    img: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    cost: {
      type: String,
    },

  }
}
</script>

<template>
  <div class="max-w-md rounded-md shadow-md border shadow-sm overflow-hidden shadow-md hover:shadow-lg">
    <div class="relative">
      <img class="w-full" :src="img" :alt="imgAlt">
      <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{{ category }}
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
      <div class="flex items-center justify-between">
        <span class="font-bold text-lg">${{ cost }}</span>
        <button class="bg-indigo-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          خرید سرویس
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>