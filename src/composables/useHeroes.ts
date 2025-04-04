import { computed, onMounted, ref } from 'vue'
import type { Hero, HeroId } from '@/types/Hero.ts'
import { createHero, deleteHero, getHeroes, updateHero } from '@/api/apiHero.ts'

export const useHeroes = () => {
  const heroes = ref<Hero[]>([]);
  const selectedHero = ref<Hero | null>(null)

  const isLoading = computed( () => heroes.value.length !== 0);

  const fetchHeroes = async () => {
    try {
      heroes.value = await getHeroes();
    }
    catch (e) {
      console.error(e);
    }
  };

  const saveHero = async (hero: Hero) => {
    try {
      await createHero(hero);
      await fetchHeroes();
    }
    catch (e) {
      console.error(e);
    }
  };

  const patchHero = async (id: HeroId, hero: Partial<Hero>) => {
    try {
      await updateHero(id, hero);
      await fetchHeroes();
    }
    catch (e) {
      console.error(e);
    }
  };

  const removeHero = async (id: HeroId) => {
    try {
      await deleteHero(id);
      await fetchHeroes();
    }
    catch (e) {
      console.error(e);
    }
  }

  onMounted(fetchHeroes);

  return {
    heroes,
    isLoading,
    selectedHero,
    fetchHeroes,
    saveHero,
    patchHero,
    removeHero
  }
}
