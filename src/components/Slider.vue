<template>
  <div class="relative">
    <transition-group move-class="transition ease-in-out delay-150" name="fade" tag="div">

      <div v-for="i in [currentIndex]" :key="i">
        <div class="relative w-full xl:min-h-[800px] lg:min-h-[460px] md:min-h-[330px] sm:min-h-[200px] min-h-[180px] h-3/4">
          <img @load="startAnimation" class="w-screen" :src="currentImg"/>
        </div>
      </div>
    </transition-group>

    <div class="flex flex-col position absolute top-1/4 justify-between text-slate-200 xl:h-[35%] h-[20%] xl:w-[25%] w-[35%] right-[15%]">
      <div class="animation-container hidden md:block">
        <h3 :class="{ 'animated-active' : animationRun }" class="xl:text-3xl md:text-xl text-sm font-light animated-text">// ما با شما هستیم</h3>
      </div>
      <div class="animation-container">
        <h1 :class="{ 'animated-active' : animationRun }" class="xl:text-6xl md:text-3xl text-base font-semibold flex-wrap animated-title">گروه نرم افزاری طاد</h1>
      </div>
      <div class="animation-container hidden xl:block">
        <p :class="{ 'animated-active' : animationRun }" class="animated-paragraph xl:text-lg md:text-base font-light flex-wrap text-justify leading-6 w-[90%]">ما یک تیم نرم افزاری قوی از مهندسانی با
          تجربه هستیم که تا پایان مسیر همراه شماییم. با ما بر شانه غول ها بایستید.</p>
      </div>
    </div>


    <div class="flex absolute bottom-[10%] right-[15%] justify-between xl:w-[10%] w-[25%]">
      <button @click="prev()"
              class="p-2 border-separate bg-transparent text-stone-400 hover:underline hover:text-slate-300">
        <font-awesome-icon class="lg:text-2xl" icon="fa-solid fa-arrow-right-long"/>

      </button>
      <button @click="next()" class="p-2 bg-transparent text-stone-400 hover:underline  hover:text-slate-300">
        <font-awesome-icon class="lg:text-2xl" icon="fa-solid fa-arrow-left-long"/>

      </button>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  data() {
    return {
      images: [
        "https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/slide1-home1.jpg",
        "https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/slide2-home1.jpg",
      ],
      timer: 0 as number,
      currentIndex: 0,
      animationRun: false,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 10000) ;
    },

    next: function () {
      this.currentIndex += 1;
      this.endAnimation();

    },
    prev: function () {
      this.currentIndex -= 1;
      this.endAnimation();
    },

    startAnimation: function () {
      setTimeout(this.showAnimation, 1000);
    },

    endAnimation: function () {
      this.animationRun = false;
    },

    showAnimation: function () {
      this.animationRun = true;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-active {
  transition-delay: 300ms;
}

.fade-leave-active {
  position: absolute;
  transition: all 0.5s ease-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-to {
  opacity: 1;
  transition: all 0.2s ease-out;
}

.animation-container {
  position: relative;
}

.animated-text {
  position: absolute;
  top: 50%;
  right: -30px;
  opacity: 0;
  transition: right 0.3s ease-in-out, opacity 0.5s ease-in-out; /* Define the transitions */
}

.animated-title {
  position: absolute;
  top: 50%;
  right: -30px;
  opacity: 0;
  transition: right 0.5s ease-in-out, opacity 0.3s ease-in-out; /* Define the transitions */
  transition-delay: 300ms;
}

.animated-paragraph {
  position: absolute;
  top: 50%;
  right: -30px;
  opacity: 0;
  transition: right 0.2s ease-in-out, opacity 0.2s ease-in-out; /* Define the transitions */
  transition-delay: 700ms;
}

.animated-active {
  right: 0; /* Change the top position */
  opacity: 1; /* Change the opacity */
}


.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>