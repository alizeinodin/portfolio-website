<script setup lang="ts">
import Products from "@/components/Products.vue";
import OurTeam from "@/components/OurTeam.vue";
import Introduction from "@/components/Introduction.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Comments from "@/components/Comments.vue";
import Statistics from "@/components/Statistics.vue";
import Brands from "@/components/Brands.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <Header></Header>
    <Slider></Slider>
    <Products></Products>

    <div class="w-full h-20"></div>

    <Brands></Brands>

    <div class="w-full h-10 bg-slate-200 "></div>

    <Introduction></Introduction>

    <Statistics></Statistics>

    <OurTeam></OurTeam>

    <Comments></Comments>

    <Footer></Footer>
  </main>
</template>
