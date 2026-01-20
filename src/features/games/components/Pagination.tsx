import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export const Pagination = ({ currentPage, totalCount, pageSize, onPageChange, isLoading }: Props) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages: (number | string)[] = [];
    
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  const baseButtonClass = "w-10 h-10 flex items-center justify-center rounded-lg border transition-all text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed";
  const inactiveClass = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-600";
  const activeClass = "bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-110 z-10";

  return (
    <div className="flex justify-center items-center gap-2 mt-12 select-none">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className={`${baseButtonClass} ${inactiveClass}`}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex gap-2 hidden sm:flex">
        {pages.map((page, index) => (
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              disabled={isLoading}
              className={`${baseButtonClass} ${page === currentPage ? activeClass : inactiveClass}`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="w-10 h-10 flex items-center justify-center text-slate-500 pb-2 text-lg">
              ...
            </span>
          )
        ))}
      </div>

      <div className="sm:hidden flex items-center px-4 font-mono text-slate-400 text-sm">
        <span className="text-white font-bold">{currentPage}</span>
        <span className="mx-2">/</span>
        <span>{totalPages}</span>
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className={`${baseButtonClass} ${inactiveClass}`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};