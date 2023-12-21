<template>
  <div class="flex justify-between items-center space-x-2">
    <div>
      <p class="text-white text-5xl font-bold">
        <vue3-autocounter ref='counter' :startAmount='0' :endAmount=this.number :duration='3'
                          separator=','/>
      </p>
    </div>
    <div class="px-3">
      <p class="text-amber-500 font-semibold text-3xl"> {{ this.operator }} </p>
    </div>
    <div class="w-1/2">
      <p class="text-lg font-thin text-slate-200"> {{ this.description }}</p>
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