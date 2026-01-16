import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Sword, Heart, Zap, Footprints } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { getTypeColor, getPokemonImageUrl } from '../../../lib/utils';

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, isError } = usePokemonDetails(id || '1');

  if (isLoading) return <div className="text-center pt-20 animate-pulse text-purple-400">Carregando ficha técnica...</div>;
  if (isError || !pokemon) return <div className="text-center pt-20 text-red-500">Erro ao carregar dados.</div>;

  const imageUrl = getPokemonImageUrl(pokemon.id.toString());

  const getStatIcon = (name: string) => {
    switch(name) {
      case 'hp': return <Heart size={16} />;
      case 'attack': return <Sword size={16} />;
      case 'defense': return <Shield size={16} />;
      case 'speed': return <Zap size={16} />;
      default: return <Footprints size={16} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para o inventário
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
             <div className={`absolute inset-0 blur-3xl opacity-30 rounded-full ${getTypeColor(pokemon.types[0].type.name)}`} />
             <img 
               src={imageUrl} 
               alt={pokemon.name} 
               className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] animate-float"
             />
          </div>

          <div className="flex gap-3">
            {pokemon.types.map(({ type }) => (
              <span 
                key={type.name} 
                className={`${getTypeColor(type.name)} px-4 py-1 rounded-full text-white text-sm font-bold uppercase tracking-wider shadow-lg`}
              >
                {type.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.1 }}
           className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-baseline justify-between mb-6">
            <h1 className="text-4xl font-bold capitalize text-white">{pokemon.name}</h1>
            <span className="text-2xl font-mono text-slate-500 font-bold">#{id?.padStart(3, '0')}</span>
          </div>

          <h2 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
            <Shield size={18} /> ATRIBUTOS DE BATALHA
          </h2>

          <div className="space-y-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400 font-bold capitalize flex items-center gap-2">
                    {getStatIcon(stat.stat.name)} {stat.stat.name.replace('-', ' ')}
                  </span>
                  <span className="text-white font-mono">{stat.base_stat}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(stat.base_stat, 100)}%` }} 
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full ${stat.base_stat > 90 ? 'bg-purple-400' : 'bg-slate-500'}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-950/50 p-3 rounded-lg">
                <span className="block text-slate-500 text-xs uppercase">Altura</span>
                <span className="text-white font-mono text-lg">{(pokemon.height || 0) / 10}m</span>
            </div>
            <div className="bg-slate-950/50 p-3 rounded-lg">
                <span className="block text-slate-500 text-xs uppercase">Peso</span>
                <span className="text-white font-mono text-lg">{(pokemon.weight || 0) / 10}kg</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};