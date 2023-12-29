<script lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
      defaults: 'fa-solid fa-home'
    },
    content: {
      type: String,
    }
  }
}
</script>

<template>
  <div class="flex space-x-5 gap-6">
    <div class="flex-2">
      <div class="bg-indigo-50 lg:p-8 p-3 rounded-xl text-indigo-800">
        <font-awesome-icon class="lg:text-4xl text-2xl" :icon="(icon as string)" />
      </div>
    </div>
    <div class="flex-1">
      <div>
        <h2 class="text-gray-900 lg:text-lg text-sm">{{ title }}</h2>
      </div>
      <div class="text-gray-700 lg:text-sm text-xs">
        <p>{{ content }}</p> 
      </div>
    </div>
  </div>
</template>

<style scoped></style>