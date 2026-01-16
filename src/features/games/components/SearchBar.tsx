import { Search } from 'lucide-react';
import { useState, type FormEvent } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value.toLowerCase().trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8 relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-500 group-focus-within:text-purple-500 transition-colors" />
      </div>
      
      <input
        type="text"
        className="block w-full pl-10 pr-4 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all shadow-lg backdrop-blur-sm"
        placeholder="Busque por nome ou ID (ex: mew, 150)..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value === '') onSearch('');
        }}
      />
      
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span className="text-slate-600 text-xs border border-slate-700 rounded px-1.5 py-0.5 font-mono">
          Enter
        </span>
      </div>
    </form>
  );
};