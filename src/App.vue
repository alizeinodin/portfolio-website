<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Brands from "@/components/Brands.vue";
import Products from "@/components/Products.vue"
import Introduction from "@/components/Introduction.vue"
import Statistics from "@/components/Statistics.vue"
import OurTeam from "@/components/OurTeam.vue";
import Comments from "@/components/Comments.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div dir="rtl">

    <RouterView/>
  </div>
</template>

<style scoped></style>
