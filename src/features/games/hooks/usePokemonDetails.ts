import { useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/axios';
import { type PokemonDetails } from '../types';

export const usePokemonDetails = (id: string) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const { data } = await api.get<PokemonDetails>(`/pokemon/${id}`);
      return data;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });
};