<script setup lang="ts">

</script>

<template>
  <div class="h-screen flex">
    <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
      <div
        class="
                  bg-black
                  opacity-20
                  inset-0
                  z-0"
      >

      </div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="text-white font-bold text-4xl font-sans">Sistema Academia de Heroes</h1>
        <p class="text-white mt-1">base de datos del sistema de todos los heroes de la U.A.</p>
      </div>
    </div>
    <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
      <div class="w-full px-8 md:px-32 lg:px-24">
        <!-- Right: Login & Register Form -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center
}
</style>
