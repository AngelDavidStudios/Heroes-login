<script setup lang="ts">

</script>

<template>
  <div class="h-screen flex">
    <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
        <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 class="text-white font-bold text-4xl font-sans">Sistema Academia de Heroes</h1>
          <p class="text-white mt-1">base de datos del sistema de todos los heroes de la U.A.</p>
        </div>
      </div>
    <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <!-- Right: Login & Register Form -->
        <RouterView />
    </div>
  </div>
</template>

<style scoped>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba276707-fe1d-417c-aa5c-af799ca32d89/dfrm3sz-efd3047d-c6ae-4a97-8c2f-0433733c0daa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhMjc2NzA3LWZlMWQtNDE3Yy1hYTVjLWFmNzk5Y2EzMmQ4OVwvZGZybTNzei1lZmQzMDQ3ZC1jNmFlLTRhOTctOGMyZi0wNDMzNzMzYzBkYWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PtjCM1Ax9u-RFDF-4T2hSv6e7dXVbvcZIuXwt7mKb74) center center;
  background-size: cover;
}
</style>
