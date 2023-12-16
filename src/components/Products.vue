<template>
  <div class="flex flex-col justify-center text-center my-12 align-middle ">
    <div>
      <p class="text-sm font-thin text-zinc-400">
        { خدمات ما }
      </p>
    </div>
    <div class="mt-2">
      <h2 class="text-2xl font-bold text-gray-600">
        ما چه خدماتی ارائه می دهیم؟
      </h2>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-20">
      <div v-for="product in products">
        <Product
            :title="product.title"
            :description="product.description"
            :logo="product.logo"
        ></Product>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import Product from "@/components/Product.vue";

export default {
  components: {Product},
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
          logo: "fa-solid fa-code"
        },
        {
          title: "طراحی UI / UX",
          description: "محصول مورد نیاز خود را به موقع به تیمی با تجربه بسپارید که از یک فرآیند طراحی روشن و مؤثر استفاده کند.",
          logo: "fa-solid fa-code"
        },
        {
          title: "آزمون و خطا رایگان",
          description: "برای انجام آزمایش های جامع ، چند مرحله ای و ممیزی نرم افزار خود به متخصصان ما مراجعه کنید تا راهنمای شما باشند.",
          logo: "fa-solid fa-code"
        },
        {
          title: "توسعه سیستم عامل",
          description: "ایجاد یک نرم افزار پیچیده شرکتی ، اطمینان از ادغام نرم افزار قابل اعتماد ، مدرن کردن سیستم خود را به ما بسپارید.",
          logo: "fa-solid fa-code"
        },
        {
          title: "تیم قوی",
          description: "طی یک دهه گذشته ، مشتریان ما موفق به پشت سر گذاشتن روند انگیزشی در تجارت و برند خود شدند.",
          logo: "fa-solid fa-code"
        },
      ]
    }
  }
}
</script>


<style scoped>

</style>