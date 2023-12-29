<template>
  <div class="flex flex-col p-10 bg-white mx-5 mb-2.5 shadow-shadow-1">
    <div class="flex justify-start items-center">
      <div class="flex">
        <img class="lg:w-full w-[70%]" :src=avatar :alt=name>
      </div>
      <div class="mr-4">
        <div class="flex flex-col">
          <div class="text-gray-950 lg:text-xl text-base">
            <h2>{{ name }}</h2>
          </div>
          <div class="lg:text-sm text-xs text-gray-400 mt-2">
            <p> {{ position }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-justify text-xs lg:text-base text-gray-500 mt-8">
        <p>
          {{ text }}
        </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['avatar', 'name', 'position', 'text'],
}
</script>

<style scoped></style>