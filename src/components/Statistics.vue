<template>
  <div class="pb-20 pt-10 bg-indigo-700">
    <div class="container h-32 mx-auto text-center">
      <Heading
          subtitle="آمار ما"
          title="موفقیت ما بی دلیل نیست!"
          color="text-gray-100"
      >
      </Heading>
    </div>
    <div class="container flex justify-between mx-auto">
      <div>
        <StatisticsItem
            number="30"
            operator="+"
            description="سال تجربه کاری موفق"
        >
        </StatisticsItem>
      </div>
      <div>
        <StatisticsItem
            number="97"
            operator="%"
            description="درصد رضایت کامل مشتریان"
        >
        </StatisticsItem>
      </div>
      <div>
        <StatisticsItem
            number="746"
            operator="+"
            description="پروژه موفق"
        >
        </StatisticsItem>
      </div>
      <div>
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