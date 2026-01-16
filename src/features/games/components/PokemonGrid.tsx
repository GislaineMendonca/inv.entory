import { useState } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonCard } from './PokemonCard';
import { CardSkeleton } from './CardSkeleton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PokemonGrid = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = usePokemonList(page);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isError) {
    return (
      <div className="text-center py-20 text-red-400">
        Falha ao carregar dados. Verifique sua conexão.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)
          : data?.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => handlePageChange(Math.max(1, page - 1))}
          disabled={page === 1 || isLoading}
          className="p-3 rounded-lg bg-slate-800 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
        >
          <ChevronLeft size={24} />
        </button>
        
        <span className="font-mono text-slate-400">
          Página <span className="text-white font-bold">{page}</span>
        </span>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={isLoading || !data?.next}
          className="p-3 rounded-lg bg-slate-800 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};