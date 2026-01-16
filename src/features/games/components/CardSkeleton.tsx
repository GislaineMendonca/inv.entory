export const CardSkeleton = () => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 flex flex-col items-center gap-4 animate-pulse border border-slate-700">
      <div className="w-full aspect-square bg-slate-700/50 rounded-lg" />
      <div className="h-6 w-3/4 bg-slate-700/50 rounded" />
      <div className="h-4 w-1/2 bg-slate-700/50 rounded" />
    </div>
  );
};