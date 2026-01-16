import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonIdFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

export function getPokemonImageUrl(id: string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export const typeColors: Record<string, string> = {
  normal: 'bg-slate-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-500',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-orange-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-600',
  rock: 'bg-stone-500',
  ghost: 'bg-violet-800',
  dragon: 'bg-indigo-600',
  steel: 'bg-slate-400',
  fairy: 'bg-pink-400',
};

export const getTypeColor = (type: string) => typeColors[type] || 'bg-slate-500';