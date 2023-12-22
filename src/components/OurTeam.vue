<template>
  <div class="pb-20 pt-10">
    <div class="container h-32 mx-auto text-center">
      <Heading
          subtitle="تیم ما"
          title="تیم رهبری ما"
      >
      </Heading>
    </div>
    <div class="container px-10 flex flex-wrap md:flex-nowrap justify-between mx-auto">
      <div>
        <OurTeamItem
            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/01/member1.jpg"
            name="نوید محمدی"
            position="بنیانگذار شرکت"
        >
        </OurTeamItem>
      </div>
      <div>
        <OurTeamItem
            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/01/member2.jpg"
            name="سارا نویدی"
            position="بیانگذار شرکت"
        >
        </OurTeamItem>
      </div>
      <div>
        <OurTeamItem
            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/01/member3.jpg"
            name="رها اعتمادی"
            position="مدیر عامل شرکت"
        >
        </OurTeamItem>
      </div>
      <div>
        <OurTeamItem
            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/01/member4.jpg"
            name="سعید سعیدی"
            position="مدیر ارشد شرکت"
        >
        </OurTeamItem>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import StatisticsItem from "@/components/StatisticsItem.vue"
import Heading from "@/components/Heading.vue";
import OurTeamItem from "@/components/OurTeamItem.vue";

export default {
  components: {OurTeamItem, Heading, StatisticsItem}

}


</script>

<style scoped>

</style>