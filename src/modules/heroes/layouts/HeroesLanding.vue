<script setup lang="ts">

import { isAuthGuard } from '@/modules/auth/guards/is-auth.guard.ts'
import { useRouter } from 'vue-router'
import { signOut } from 'aws-amplify/auth';


isAuthGuard({redirectName:'LandingAuth'})

const router = useRouter();

async function doLogout() {
  await signOut();
  router.replace({ name: 'LandingAuth' });
}

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-950 via-green-900 to-blue-950 p-8">
    <div class="max-w-6xl mx-auto mb-10">
      <!-- Header -->
      <header class="flex items-center mb-5">
        <div class="text-center justify-center w-full" >
          <h1 class="text-4xl font-bold text-white mb-2">My Hero Academia</h1>
          <p class="text-gray-300">Sistema de Gestión de Héroes</p>
        </div>
        <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6 text-xl text-amber-50">
          <RouterLink :to="{ name: 'Heroes' }"> Heroes </RouterLink>
          <RouterLink :to="{ name: 'Contact' }"> Contact </RouterLink>
          <button @click="doLogout">
            Salir
          </button>
        </nav>
      </header>

      <main class="mb-4">
        <RouterView />
      </main>

      <!-- Footer -->
      <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
        <p class="flex-1 text-sm text-white text-center">
          © {{ new Date().getFullYear() }} Angel David Studios. Derechos reservados
        </p>
      </footer>
      <!-- Fin Footer -->

    </div>
  </div>
</template>

<style scoped>

</style>
