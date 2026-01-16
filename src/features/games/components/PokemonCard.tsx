import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type PokemonBasic } from '../types';
import { getPokemonIdFromUrl, getPokemonImageUrl } from '../../../lib/utils';

interface Props {
  pokemon: PokemonBasic;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const id = getPokemonIdFromUrl(pokemon.url);
  const imageUrl = getPokemonImageUrl(id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-visible hover:border-purple-500 transition-colors duration-300 z-0"
    >
      <Link to={`/pokemon/${id}`} className="block h-full"> 
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl overflow-hidden" />

        <button 
          onClick={(e) => {
            e.preventDefault();
            console.log('Favoritado!'); 
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/50 text-slate-400 hover:text-red-500 hover:bg-slate-900 transition-all z-10 backdrop-blur-sm"
        >
          <Heart size={20} />
        </button>

        <div className="p-6 flex flex-col items-center relative">
          <span className="absolute top-0 left-4 text-slate-600 font-mono text-xs font-bold">
            #{id.padStart(3, '0')}
          </span>
          
          <div className="relative w-32 h-32 mb-8 z-20 transition-all duration-500 ease-out group-hover:scale-[1.35] group-hover:-translate-y-10">
              
              <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
              
              <img
                src={imageUrl}
                alt={pokemon.name}
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
          </div>

          <h3 className="text-lg font-bold text-slate-100 capitalize tracking-wide relative z-30 bg-slate-900/50 px-2 rounded-lg backdrop-blur-sm">
            {pokemon.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};