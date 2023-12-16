<template>
  <div class="container">
    <div class="flex justify-between">
      <div class="flex-1">
        <font-awesome-icon class="text-4xl text-gray-800 hover:text-blue-800 transition-all duration-1000"
                           :icon="this.logo"/>
      </div>

      <div class="flex-2 flex-col justify-start w-[85%] h-20">
        <div>
          <h2 class="text-xl font-bold text-slate-800">
            {{ this.title }}
          </h2>
        </div>
        <div>
          <p class="flex flex-wrap text-justify text-gray-600 mt-5">
            {{ this.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: [
    'title',
    'description',
    'logo'
  ],
}
</script>

<style scoped>

</style>