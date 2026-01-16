import { Link } from 'react-router-dom';
import { ArrowLeft, HeartCrack } from 'lucide-react';
import { useFavoritesStore } from '../../../store/useFavoritesStore';
import { PokemonCard } from '../components/PokemonCard';

export const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link 
            to="/" 
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
            <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-white">Meus Favoritos <span className="text-purple-500">({favorites.length})</span></h1>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-20 flex flex-col items-center opacity-50">
          <HeartCrack size={64} className="text-slate-600 mb-4" />
          <h2 className="text-2xl font-bold text-slate-400">Seu inventário está vazio</h2>
          <p className="text-slate-500 mt-2">Explore o catálogo e adicione alguns Pokémons!</p>
          <Link to="/" className="mt-6 text-purple-400 hover:underline">Voltar ao catálogo</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};