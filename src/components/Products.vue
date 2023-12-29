<template>
  <div class="flex flex-col justify-center text-center lg:my-12 my-4 align-middle">
    <div class="container mx-auto lg:h-40 h-20">
      <Heading
          subtitle="خدمات ما" ,
          title="ما چه خدماتی ارائه می دهیم؟"
      ></Heading>
    </div>

    <div class="container mx-auto hidden lg:block">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-20">
        <div v-for="product in products">
          <Product
              :title="product.title"
              :description="product.description"
              :logo="product.logo"
          ></Product>
        </div>
      </div>
    </div>

    <div class="block lg:hidden">
    <swiper
          :slides-per-view="1"
          :space-between="10"
          allow-touch-move
          autoplay
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          grab-cursor
          rewind
      >
        <swiper-slide v-for="product in products" :key="product.title"
                      class="xl:min-h-[100px] lg:min-h-[70px] md:min-h-[50px] mx-auto flex ">
                      <Product
              :title="product.title"
              :description="product.description"
              :logo="product.logo"
          ></Product>
        </swiper-slide>
      </swiper>
      </div>

  </div>

</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import Heading from "@/components/Heading.vue";
import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/vue';

export default {
  components: { Heading, Product, Swiper, SwiperSlide },
  data() {
    return {
      products: [
        {
          title: "توسعه وب",
          description: "ما برنامه نویسانی با مهارت های کد نویسی خوب داریم. تجربه ما باعث می شود که از توسعه وب شما متمایز شود.",
          logo: "fa-solid fa-code"
        },
        {
          title: "توسعه موبایل",
          description: "ایجاد یک نرم افزار پیچیده شرکتی ، اطمینان از ادغام نرم افزار قابل اعتماد ، مدرن کردن سیستم خود را به ما بسپارید.",
          logo: "fa-solid fa-mobile"
        },
        {
          title: "طراحی UI / UX",
          description: "محصول مورد نیاز خود را به موقع به تیمی با تجربه بسپارید که از یک فرآیند طراحی روشن و مؤثر استفاده کند.",
          logo: "fa-solid fa-pen-nib"
        },
        {
          title: "آزمون و خطا رایگان",
          description: "برای انجام آزمایش های جامع ، چند مرحله ای و ممیزی نرم افزار خود به متخصصان ما مراجعه کنید تا راهنمای شما باشند.",
          logo: "fa-solid fa-vial"
        },
        {
          title: "توسعه سیستم عامل",
          description: "ایجاد یک نرم افزار پیچیده شرکتی ، اطمینان از ادغام نرم افزار قابل اعتماد ، مدرن کردن سیستم خود را به ما بسپارید.",
          logo: "fa-brands fa-apple"
        },
        {
          title: "تیم قوی",
          description: "طی یک دهه گذشته ، مشتریان ما موفق به پشت سر گذاشتن روند انگیزشی در تجارت و برند خود شدند.",
          logo: "fa-solid fa-people-group"
        },
      ]
    }
  }
}
</script>


<style scoped>

</style>