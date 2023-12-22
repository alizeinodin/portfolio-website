<template>
  <div class="container">
    <div class="flex justify-between">
      <div class="flex-1">
        <font-awesome-icon class="text-4xl text-indigo-950 hover:text-yellow-600 transition-all duration-1000"
                           :icon="this.logo"/>
      </div>

      <div class="flex-2 flex-col justify-start w-[85%] h-20">
        <div class="mr-2 text-right">
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