<template>
  <div class="pb-20 pt-10 bg-[url('/img/bg-maps-dots.jpg')]">
    <div class="container h-32 mx-auto text-center">
      <Heading
          subtitle="مشتریان ما"
          title="ما در ۱۵ کشور دنیا مورد اعتماد هستیم"
      >
      </Heading>
    </div>
    <div class="container px-10 flex flex-wrap lg:flex-nowrap justify-between mx-auto">
      <div>
        <CommentItem
            avatar="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/testi1.png"
            name="نوید محمدی"
            position="بنیانگذار شرکت"
            text="لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب وارد کنند. در حقیقت این متن هیچ معنی و مفهوم خاصی ندارد و فقط برای پر کردن صفحه از آن استفاده میشود تا کاربران سایت را به همراه محتوا ببینند."
        >
        </CommentItem>
      </div>
      <div>
        <CommentItem
            avatar="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/testi2.png"
            name="سارا نویدی"
            position="بیانگذار شرکت"
            text="لورم ایپسوم یک متن ساختگی و نامفهوم برای طراحان وب است تا محتوای پیشفرض را برای پر کردن صفحات وب وارد کنند. در حقیقت این متن هیچ معنی و مفهوم خاصی ندارد و فقط برای پر کردن صفحه از آن استفاده میشود تا کاربران سایت را به همراه محتوا ببینند."
        >
        </CommentItem>
      </div>
<!--      <div>-->
<!--        <CommentItem-->
<!--            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/testi3.png"-->
<!--            name="رها اعتمادی"-->
<!--            position="مدیر عامل شرکت"-->
<!--        >-->
<!--        </CommentItem>-->
<!--      </div>-->
<!--      <div>-->
<!--        <CommentItem-->
<!--            img="https://frontdesign.ir/template/engitech/wp-content/uploads/2020/01/member4.jpg"-->
<!--            name="سعید سعیدی"-->
<!--            position="مدیر ارشد شرکت"-->
<!--        >-->
<!--        </CommentItem>-->
<!--      </div>-->
    </div>
  </div>
</template>


<script lang="ts">
import StatisticsItem from "@/components/StatisticsItem.vue"
import Heading from "@/components/Heading.vue";
import OurTeamItem from "@/components/OurTeamItem.vue";
import CommentItem from "@/components/CommentItem.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';


export default {
  components: {CommentItem, OurTeamItem, Heading, StatisticsItem, Swiper, SwiperSlide}

}


</script>

<style scoped>

</style>