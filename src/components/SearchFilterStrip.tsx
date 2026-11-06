import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

interface SearchFilterStripProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenBooking: () => void;
}

export const SearchFilterStrip: React.FC<SearchFilterStripProps> = ({
  searchQuery,
  onSearchChange,
  onOpenBooking,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Left: Ground Location Tag - Blue Safety Badge */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 w-full sm:w-auto shrink-0">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
          <div className="text-left">
            <span className="text-xs font-bold text-slate-900 block leading-tight">
              MSM College Junction, Kayamkulam
            </span>
            <span className="text-[10px] text-blue-700 font-semibold block leading-tight">
              2-Acre Kerala MVD Approved Ground (KL-29)
            </span>
          </div>
        </div>

        {/* Right: Search Input with hover focus */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search heavy truck, bus, JCB, or badge plans..."
            className="w-full pl-10 pr-10 py-2 sm:py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
          />
          <button
            onClick={onOpenBooking}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
            title="Course Filter"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

