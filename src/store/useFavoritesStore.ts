import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type PokemonBasic } from '../features/games/types';
import { getPokemonIdFromUrl } from '../lib/utils';

interface FavoritesStore {
  favorites: PokemonBasic[];
  toggleFavorite: (pokemon: PokemonBasic) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      toggleFavorite: (pokemon) => set((state) => {
        const idToCheck = getPokemonIdFromUrl(pokemon.url);
        const exists = state.favorites.some((p) => getPokemonIdFromUrl(p.url) === idToCheck);
        
        if (exists) {
          return { favorites: state.favorites.filter((p) => getPokemonIdFromUrl(p.url) !== idToCheck) };
        } else {
          return { favorites: [...state.favorites, pokemon] };
        }
      }),

      isFavorite: (id) => {
        return get().favorites.some((p) => getPokemonIdFromUrl(p.url) === id);
      },
    }),
    {
      name: 'inventory-storage',
    }
  )
);