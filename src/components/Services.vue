<script lang="ts">
import ServiceItem from "@/components/ServiceItem.vue";

export default {
  name: "Services",
  components: {ServiceItem}
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3 xl:m-14 mx-auto ">
    <ServiceItem
        img="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        img-alt="طراحی سایت"
        title="طراحی وب سایت"
        description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
        category="برنامه نویسی"
        cost="1000"
    ></ServiceItem>

    <ServiceItem
        img="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        img-alt="طراحی سایت"
        title="طراحی وب سایت"
        description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
        category="برنامه نویسی"
        cost="1000"
    ></ServiceItem>

    <ServiceItem
        img="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        img-alt="طراحی سایت"
        title="طراحی وب سایت"
        description="طراحی وب سایت خود را به تیم قدرتمند تاد بسپارید. برای استفاده از خدمات طراحی سایت می توانید نیازمندی درخواست خود را با ما درمیان بگذارید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند."
        category="برنامه نویسی"
        cost="1000"
    ></ServiceItem>
  </div>
</template>

<style scoped>

</style>