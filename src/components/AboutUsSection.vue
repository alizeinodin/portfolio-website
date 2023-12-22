<script setup lang="ts">

import AboutUsItem from "@/components/AboutUsItem.vue";
</script>

<template>
  <div class="p-10">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <AboutUsItem
            img="/img/image-box1.jpg"
            title="ماموریت ما"
            link="#"
        ></AboutUsItem>
      </div>
      <div>
        <AboutUsItem
            img="/img/image-box2.jpg"
            title="دیدگاه ما"
            link="#"
        ></AboutUsItem>
      </div>
      <div>
        <AboutUsItem
            img="/img/image-box3.jpg"
            title="فلسفه ما"
            link="#"
        ></AboutUsItem>
      </div>
      <div>
        <AboutUsItem
            img="/img/image-box4.jpg"
            title="استراتژی ما"
            link="#"
        ></AboutUsItem>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>