<script lang="ts">
import ServiceItem from "@/components/ServiceItem.vue";

export default {
  name: "Services",
  components: {ServiceItem}
}
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="grid xl:grid-cols-3 md:grid-cols-1 gap-12 xl:my-28 my-12 px-3">
      <ServiceItem
          img="/img/service.jpeg"
          img-alt="طراحی سایت"
          title="طراحی وب سایت"
          description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
          category="برنامه نویسی"
          cost="1000"
      ></ServiceItem>

      <ServiceItem
          img="/img/service.jpeg"
          img-alt="طراحی نرم افزار"
          title="طراحی اپلیکیشن"
          description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
          category="طراحی اپلیکیشن"
          cost="2000"
      ></ServiceItem>

      <ServiceItem
          img="/img/service.jpeg"
          img-alt="تست نفوذ"
          title="تست نفوذ و امنیت"
          description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
          category="امنیت شبکه"
          cost="1390"
      ></ServiceItem>
    </div>
  </div>
</template>

<style scoped>

</style>