<script setup lang="ts">
import ContactUsDetails from '@/components/ContactUsDetails.vue';
import ContactUsForm from '@/components/ContactUsForm.vue';
</script>

<template>
  <div class="container mx-auto p-10">
    <div class="flex items-center lg:flex-wrap flex-wrap-reverse">
      <div class="flex-1">
        <ContactUsDetails
          subtitle="با ما در ارتباط باشید"
          title="برای تماس با ما فرم زیر را ارسال کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        ></ContactUsDetails>
      </div>
      <div class="flex-1">
        <ContactUsForm></ContactUsForm>
      </div>
    </div>
  </div>
</template>

<style scoped></style>