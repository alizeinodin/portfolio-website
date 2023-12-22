<template>
  <div class="flex flex-col transition-all duration-700 bg-gray-50 cursor-pointer justify-between items-center text-center hover:bg-white hover:shadow-2xl">
    <div class="">
      <img :src=this.img alt="{{ this.name }}">
    </div>
    <div class="flex flex-col justify-center py-5">
      <div>
        <h2 class="lg:text-2xl text-md text-gray-950">{{ this.name }}</h2>
      </div>
      <div>
        <p class="lg:text-sm text-xs text-gray-600 mt-2">{{ this.position }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['img', 'name', 'position'],
}
</script>

<style scoped>

</style>