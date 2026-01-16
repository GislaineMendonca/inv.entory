import { useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/axios';
import { type PokemonListResponse } from '../types';

export const usePokemonList = (page: number) => {
  const limit = 20;
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: ['pokemon-list', page],
    queryFn: async () => {
      const { data } = await api.get<PokemonListResponse>(
        `/pokemon?limit=${limit}&offset=${offset}`
      );
      return data;
    },
    staleTime: 1000 * 60 * 10,
    placeholderData: (previousData) => previousData,
  });
};