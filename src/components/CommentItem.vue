<template>
  <div class="flex flex-col p-10 bg-white mx-5 mb-2.5 shadow-shadow-1">
    <div class="flex justify-start items-center">
      <div class="flex">
        <img :src=this.avatar :alt=this.name>
      </div>
      <div class="mr-4">
        <div class="flex flex-col">
          <div class="text-gray-950 text-xl">
            <h2>{{ this.name }}</h2>
          </div>
          <div class="text-sm text-gray-400 mt-2">
            <p> {{ this.position }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-justify text-gray-500 mt-8">
        <p>
          {{ this.text }}
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