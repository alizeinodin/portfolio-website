<template>
  <div class="flex justify-between items-center space-x-2">
    <div>
      <p class="text-white lg:text-5xl text-2xl font-bold">
        {{ number }}
      </p>
    </div>
    <div class="px-3">
      <p class="text-amber-500 lg:font-semibold font-bold lg:text-3xl text-2xl"> {{ operator }} </p>
    </div>
    <div class="w-1/2">
      <p class="lg:text-lg text-xs font-thin text-slate-200"> {{ description }}</p>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  props: ['number', 'operator', 'description'],
}
</script>

<style scoped>

</style>