<script lang="ts">
import ContactUsItem from "@/components/ContactUsItem.vue";

export default {
  components: {ContactUsItem},
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String,
    }
  }
}
</script>

<template>
  <div>
    <div>
      <p class="lg:text-sm text-xs font-thin text-indigo-700">
        { {{ subtitle }} }
      </p>
    </div>
    <div class="mt-4">
      <h2 class="lg:text-4xl text-base font-bold">
        {{ title }}
      </h2>
    </div>
    <div class="mt-6">
      <h2 class="lg:text-base text-sm text-justify font-thin text-gray-700" >
        {{ content }}
      </h2>
    </div>
    <div class="mt-20">
      <div class="grid grid-cols-2 lg:gap-7 gap-2">
        <ContactUsItem
          title="موقعیت ما"
          content="ایران - تهران - ونک - خیابان ظفر - پلاک ۲۸"
          icon="fa-solid fa-location-dot"
        ></ContactUsItem>

        <ContactUsItem
          title="ایمیل ما"
          content="info@tadgroup.ir"
          icon="fa-solid fa-envelope"
        ></ContactUsItem>

        <ContactUsItem
          title="تلفن ما"
          content="۰۲۱۳۳۳۸۹۷۳۱"
          icon="fa-solid fa-mobile"
        ></ContactUsItem>

        <ContactUsItem
          title="روز های کاری"
          content="هر روز به جز ایام تعطیل"
          icon="fa-solid fa-clock"
        ></ContactUsItem>

      </div>
    </div>
  </div>
</template>

<style scoped></style>