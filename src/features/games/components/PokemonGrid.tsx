import { useState } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { PokemonCard } from './PokemonCard';
import { CardSkeleton } from './CardSkeleton';
import { SearchBar } from './SearchBar';
import { ChevronLeft, ChevronRight, Ban } from 'lucide-react';

export const PokemonGrid = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const listQuery = usePokemonList(page);
  
  const searchQuery = usePokemonDetails(searchTerm);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSearching = !!searchTerm;
  const isLoading = isSearching ? searchQuery.isLoading : listQuery.isLoading;
  const isError = isSearching ? searchQuery.isError : listQuery.isError;

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchTerm} />

      {isSearching && isError && (
        <div className="text-center py-20 flex flex-col items-center animate-in fade-in zoom-in duration-300">
          <div className="bg-slate-800 p-4 rounded-full mb-4">
            <Ban size={48} className="text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-200">Nenhum Pokémon encontrado</h3>
          <p className="text-slate-500 mt-2">
            Verifique se digitou o nome corretamente (em inglês)<br/>ou tente pelo número do ID.
          </p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 text-purple-400 hover:text-purple-300 hover:underline font-medium"
          >
            Limpar busca e voltar
          </button>
        </div>
      )}

      {(!isSearching || !isError) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {isLoading ? (
            Array.from({ length: isSearching ? 1 : 12 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          ) : isSearching && searchQuery.data ? (
             <PokemonCard 
               pokemon={{
                 name: searchQuery.data.name,
                 url: `https://pokeapi.co/api/v2/pokemon/${searchQuery.data.id}/`
               }} 
             />
          ) : (
            listQuery.data?.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))
          )}
        </div>
      )}

      {!isSearching && !isLoading && !isError && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="p-3 rounded-lg bg-slate-800 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white border border-slate-700"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
            Página <span className="text-white font-bold">{page}</span>
          </span>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={!listQuery.data?.next}
            className="p-3 rounded-lg bg-slate-800 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white border border-slate-700"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};