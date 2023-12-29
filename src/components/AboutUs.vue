<script setup lang="ts">

import AboutUsDetails from "@/components/AboutUsDetails.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
</script>

<template>
  <div class="flex lg:flex-nowrap lg:justify-between lg:items-center container mx-auto h-50vh lg:py-5  lg:my-20 my-14 lg:px-20">
    <div class="lg:flex-1 ">
      <AboutUsDetails
          subtitle="آنچه ما ارائه می دهیم"
          title="شریک زندگی شما در نوآوری نرم افزار هستیم"
          content="      لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب وارد کنند. در
      حقیقت این متن هیچ معنی و مفهوم خاصی ندارد و فقط برای پر کردن صفحه از آن استفاده میشود تا کاربران سایت را به همراه
      محتوا ببینند. لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب
      وارد کنند.
      لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب وارد کنند. در حقیقت این متن هیچ معنی و مفهوم خاصی ندارد و فقط برای پر کردن صفحه از آن استفاده میشود تا کاربران سایت را به همراه محتوا ببینند. لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب وارد کنند."
      >

      </AboutUsDetails>
    </div>
    <div class="lg:flex-1 hidden lg:block">
      <AboutUsSection></AboutUsSection>
    </div>
  </div>
</template>

<style scoped>

</style>