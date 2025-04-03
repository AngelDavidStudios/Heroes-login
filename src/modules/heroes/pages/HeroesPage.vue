<script setup lang="ts">

import type { Hero } from '@/types/Hero.ts'
import { useHeroes } from '@/composables/useHeroes.ts'
import HeroesForm from '@/modules/heroes/pages/HeroesForm.vue'
import HeroesList from '@/modules/heroes/pages/HeroesList.vue'

const { heroes, selectedHero, saveHero, patchHero, removeHero, fetchHeroes } = useHeroes()

const handleEdit = (hero: Hero) => {
  selectedHero.value = hero
}

const resetSelectedHero = () => {
  selectedHero.value = null
}
</script>

<template>
      <!-- Form Section -->
      <HeroesForm :hero="selectedHero"
                  :on-save="saveHero"
                  :on-update="patchHero"
                  @saved="fetchHeroes"
                  @updated="fetchHeroes"
                  @cancelEdit="resetSelectedHero"/>

      <!-- Heroes List -->
      <HeroesList :hero="heroes"
                  :on-delete="removeHero"
                  @editHero="handleEdit"/>
</template>

<style scoped>

</style>
