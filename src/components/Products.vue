<template>
  <div class="flex flex-col justify-center text-center my-12 align-middle">
    <div class="container mx-auto h-40">
      <Heading
          subtitle="خدمات ما" ,
          title="ما چه خدماتی ارائه می دهیم؟"
      ></Heading>
    </div>

    <div class="container mx-auto">
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
  </div>

</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import Heading from "@/components/Heading.vue";

export default {
  components: {Heading, Product},
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