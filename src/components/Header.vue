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
  <nav class="bg-blue-500 p-4 hidden md:block">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-lg">
        YourLogo
      </div>

      <!-- Navigation Links -->
        <div class="flex space-x-5 w-96 justify-between">
          <a href="#" class="text-white hover:text-gray-300">Home</a>
          <a href="#" class="text-white hover:text-gray-300">About Us</a>
          <a href="#" class="text-white hover:text-gray-300">Contact Us</a>
        </div>
      </div>
  </nav>

  <!-- Navbar for Small Screens -->
  <nav class="bg-blue-500 p-4 md:hidden">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-lg">
        YourLogo
      </div>

      <!-- Navigation Button (Hamburger Menu) -->
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Responsive Navigation Menu (Hidden by Default) -->
  <div v-if="menuVisible" class="bg-blue-500 p-4 md:hidden">
    <a href="#" class="text-white block py-2">Home</a>
    <a href="#" class="text-white block py-2">About Us</a>
    <a href="#" class="text-white block py-2">Contact Us</a>
  </div>

</template>

<style scoped>

</style>