import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PokemonGrid } from './features/games/components/PokemonGrid';
import { Details } from './features/games/pages/Details';
import { Favorites } from './features/games/pages/Favorites';
import { Box, Heart } from 'lucide-react';
import { useFavoritesStore } from './store/useFavoritesStore';

const queryClient = new QueryClient();

const Header = () => {
  const favoritesCount = useFavoritesStore((state) => state.favorites.length);

  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 text-purple-500 hover:opacity-80 transition-opacity">
          <Box size={28} strokeWidth={2.5} />
            <h1 className="text-2xl font-bold tracking-tight text-white font-mono flex items-center">
              inv<span className="text-purple-500">.</span>entory
              <span className="text-purple-500 ml-2 text-lg opacity-80">pokémon</span>
            </h1>
        </Link>

        <Link to="/favorites" className="relative group p-2">
            <Heart className={`w-6 h-6 transition-colors ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-slate-400 group-hover:text-red-400'}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-purple-900 text-[10px] font-bold px-1.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
        </Link>
      </div>
    </header>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#121212] text-slate-100 font-sans">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PokemonGrid />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/pokemon/:id" element={<Details />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;