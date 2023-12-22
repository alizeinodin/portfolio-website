<template>
  <div class="pb-20 pt-10 bg-indigo-950 bg-[url('/img/endless-constellation.svg')]">
    <div class="container h-32 mx-auto text-center">
      <Heading
          subtitle="آمار ما"
          title="موفقیت ما بی دلیل نیست!"
          color="text-gray-100"
      >
      </Heading>
    </div>
    <div class="container flex flex-wrap  lg:justify-between lg:text-right  justify-center mx-auto lg:space-y-0 space-y-3">
      <div class="w-[90%] lg:w-fit">
        <StatisticsItem
            number="30"
            operator="+"
            description="سال تجربه کاری موفق"
        >
        </StatisticsItem>
      </div>
      <div class="w-[90%] lg:w-fit">
        <StatisticsItem
            number="97"
            operator="%"
            description="درصد رضایت کامل مشتریان"
        >
        </StatisticsItem>
      </div>
      <div class="w-[90%] lg:w-fit">
        <StatisticsItem
            number="746"
            operator="+"
            description="پروژه موفق"
        >
        </StatisticsItem>
      </div>
      <div class="w-[90%] lg:w-fit">
        <StatisticsItem
            number="100"
            operator="+"
            description="عدد قهوه در ساعت"
        >
        </StatisticsItem>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import StatisticsItem from "@/components/StatisticsItem.vue"
import Heading from "@/components/Heading.vue";

export default {
  components: {Heading, StatisticsItem}

}


</script>

<style scoped>

</style>