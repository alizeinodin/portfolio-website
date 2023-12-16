<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Brands from "@/components/Brands.vue";
</script>

<template>
  <div dir="rtl">
    <Header></Header>
    <Slider></Slider>
    <Brands></Brands>

    <RouterView/>
  </div>
</template>

<style scoped></style>
