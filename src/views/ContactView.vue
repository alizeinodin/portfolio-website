<script setup lang="ts">

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import ContactUs from '@/components/ContactUs.vue'
</script>

<template>
    <Header></Header>
    <HeaderPage
        title="ارتباط با ما"
    ></HeaderPage>
    
    <ContactUs></ContactUs>

    <Footer></Footer>
</template>

<style scoped></style>