<script lang="ts">
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<template>
  <!-- Navbar for Large Screens -->
  <div class="bg-indigo-950 w-full h-2"></div>
  <nav class="bg-gray-50 w-full text-neutral-800 p-4 hidden md:block">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="font-bold lg:text-xl text-lg text-indigo-950">
        !TadGroup
      </div>

      <!-- Navigation Links -->
      <div class="flex space-x-5 xl:w-1/3 w-3/4 justify-between text-indigo-950">
        <router-link to="/" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-house-chimney" />
          خانه
        </router-link>
        <router-link to="/services" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-laptop" />
          خدمات ما
        </router-link>
        <router-link to="/about" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-building" />
          درباره ما
        </router-link>
        <router-link to="/contact" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-phone" />
          ارتباط با ما
        </router-link>
      </div>
    </div>
  </nav>

  <!-- Navbar for Small Screens -->
  <nav class="bg-gray-100 w-full text-neutral-800 p-2 md:hidden">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="font-bold text-sm">
        !TadGroup
      </div>

      <!-- Navigation Button (Hamburger Menu) -->
      <button @click="toggleMenu" class="text-neutral-800 focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Responsive Navigation Menu (Hidden by Default) -->
  <div v-if="menuVisible" class="bg-gray-100 flex flex-col space-y-1 text-neutral-800 text-sm p-4 md:hidden">
    <div class="p-1 border-b">
      <router-link to="/" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-house-chimney" />
          خانه
        </router-link>
    </div>
    <div class="p-1 border-b">
      <router-link to="/services" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-laptop" />
          خدمات ما
        </router-link>
    </div>
    <div class="p-1 border-b">
      <router-link to="/about" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-building" />
          درباره ما
        </router-link>
    </div>
    <div class="p-1 border-b">

      <router-link to="/contact" class="hover:text-yellow-600">
          <font-awesome-icon class="ml-1" icon="fa-solid fa-phone" />
          ارتباط با ما
        </router-link>
    </div>
  </div>
</template>

<style scoped></style>