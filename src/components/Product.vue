<template>
  <div class="container">
    <div class="flex justify-between">
      <div class="flex-1">
        <font-awesome-icon class="lg:text-4xl text-2xl text-indigo-950 hover:text-yellow-600 transition-all duration-1000"
                           :icon="logo"/>
      </div>

      <div class="flex-2 flex-col justify-start w-[85%] h-20">
        <div class="mr-2 text-right">
          <h2 class="lg:text-xl text-md font-bold text-slate-800">
            {{ title }}
          </h2>
        </div>
        <div class="w-[90%] lg:w-full">
          <p class="flex flex-wrap text-justify text-gray-600 lg:px-0 mt-5 text-sm">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  props: [
    'title',
    'description',
    'logo'
  ],
}
</script>

<style scoped>

</style>