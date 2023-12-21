<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Brands from "@/components/Brands.vue";
import Products from "@/components/Products.vue"
import Introduction from "@/components/Introduction.vue"
import Statistics from "@/components/Statistics.vue"
import OurTeam from "@/components/OurTeam.vue";
</script>

<template>
  <div dir="rtl">
    <Header></Header>
    <Slider></Slider>
    <Products></Products>
    
    <div class="w-full h-20"></div>

    <Brands></Brands>

    <div class="w-full h-10 bg-slate-200 "></div>

    <Introduction></Introduction>

    <Statistics></Statistics>

    <OurTeam></OurTeam>

    <RouterView/>
  </div>
</template>

<style scoped></style>
