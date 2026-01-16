import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonGrid } from './features/games/components/PokemonGrid';
import { Details } from './features/games/pages/Details';
import { Box } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#121212] text-slate-100 font-sans">
          
          <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              
              <div className="flex items-center gap-2 text-purple-500">
                <Box size={28} strokeWidth={2.5} />
                <h1 className="text-2xl font-bold tracking-tight text-white font-mono">
                  inv<span className="text-purple-500">.</span>entory
                </h1>
              </div>

            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<PokemonGrid />} />
              <Route path="/pokemon/:id" element={<Details />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;