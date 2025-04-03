import axios from 'axios'
import type { Hero, HeroId } from '@/types/Hero.ts'

const apiHero = axios.create({
  baseURL: import.meta.env.API_URL_HEROES_AWSLAMBDA
})

export const getHeroes = async (): Promise<Hero[]> => {
  const response = await apiHero.get('/Hero')
  return response.data;
}

export const createHero = async(hero: Hero): Promise<Hero[]> => {
  const response = await apiHero.post('/Hero', hero)
  return response.data;
}

export const updateHero = async (id: HeroId, hero: Partial<Hero>): Promise<Hero> => {
  const response = await apiHero.put<Hero>(`/Hero/${id}`, hero);
  return response.data;
};

export const deleteHero = async (id: HeroId): Promise<void> => {
  await apiHero.delete(`/Hero/${id}`);
};
