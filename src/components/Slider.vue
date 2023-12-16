
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/slide1-home1.jpg",
        "https://frontdesign.ir/template/engitech/wp-content/uploads/2020/04/slide2-home1.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 10000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<template>
  <div class="relative">
    <transition-group move-class="transition ease-in-out delay-150" name="fade" tag="div">

      <div v-for="i in [currentIndex]" :key="i">
        <div class="relative w-full h-3/4">
          <img class="w-screen" :src="currentImg" />
        </div>
      </div>
    </transition-group>

    <div class="flex flex-col position absolute top-1/4 justify-between text-slate-200 h-[35%] w-[25%] right-[15%]">
      <div>
        <h3 @transition-enter="startAnimation"
          class="text-3xl font-light">// ما با شما هستیم</h3>
      </div>
      <div>
        <h1 class="text-6xl font-semibold flex-wrap">گروه نرم افزاری طاد</h1>
      </div>
      <div>
        <p class="text-lg font-light flex-wrap text-justify leading-6 w-[80%]">ما یک تیم نرم افزاری قوی از مهندسانی با
          تجربه هستیم که تا پایان مسیر همراه شماییم. با ما بر شانه غول ها بایستید</p>
      </div>
    </div>



    <div class="flex absolute bottom-[10%] right-[15%] justify-between w-[10%]">
      <button @click="prev()"
        class="p-2 border-separate bg-transparent text-stone-400 hover:underline hover:text-slate-300">
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-arrow-right-long" />

      </button>
      <button @click="next()" class="p-2 bg-transparent text-stone-400 hover:underline  hover:text-slate-300">
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-arrow-left-long" />

      </button>
    </div>
  </div>
</template>

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