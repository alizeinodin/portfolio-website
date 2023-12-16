<template>

  <div class="xl:h-28 lg:h-14 md:h-10 bg-gray-50 hidden md:block  px-[15%]">
  
    <swiper
        :slides-per-view="6"
        :space-between="10"
        allow-touch-move
        autoplay
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        grid
        grab-cursor
        modules="modules"
        rewind

        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="img in images" :key="img"
                    class="xl:min-h-[100px] lg:min-h-[70px] md:min-h-[50px] mx-auto flex ">
        <div class="xl:w-[70%] lg:w-[80%] md:w-[70%]">
          <a :href="img.link">
            <img class="grayscale hover:grayscale-0 transition-all duration-1000 xl:mt-10 lg:mt-4 md:mt-3"
                 :src="img.src" alt="">
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="bg-gray-50 h-8 md:hidden px-[10%]">
    <swiper
        :slides-per-view="3"
        :space-between="10"
        allow-touch-move
        autoplay
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        grid
        grab-cursor
        modules="modules"
        rewind

        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="img in images" :key="img" class="min-h-[40px] mx-auto flex ">
        <div class="w-[70%]">
          <a :href="img.link">
            <img class="grayscale hover:grayscale-0 transition-all duration-1000 mt-1.5" :src="img.src" alt="">
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  data() {
    return {
      images: [
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client2.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client3.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client3.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client5.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client5.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client5.svg',
          link: 'https://google.com'
        },
        {
          src: 'https://frontdesign.ir/template/engitech/wp-content/uploads/2020/03/client8.svg',
          link: 'https://google.com'
        },
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  }
};
</script>