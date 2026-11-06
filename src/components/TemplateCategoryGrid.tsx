import React from 'react';
import { Truck, Bus, HardHat, Car, Bike, Boxes, Award, LayoutGrid, ChevronRight } from 'lucide-react';
import type { VehicleCategoryId } from '../types';

interface TemplateCategoryGridProps {
  selectedCategory: VehicleCategoryId | 'all';
  onSelectCategory: (cat: VehicleCategoryId | 'all') => void;
  onOpenBooking?: () => void;
}

export const TemplateCategoryGrid: React.FC<TemplateCategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories: Array<{
    id: VehicleCategoryId | 'all';
    label: string;
    sub: string;
    icon: React.ElementType;
    badge?: string;
  }> = [
    { id: 'heavy-truck', label: 'Heavy Trucks', sub: 'HGV / Multi-Axle', icon: Truck },
    { id: 'bus-transport', label: 'Passenger Bus', sub: 'HPMV / Transit', icon: Bus },
    { id: 'jcb-earthmover', label: 'JCB Machinery', sub: 'Backhoe & Loader', icon: HardHat },
    { id: 'car-lmv', label: 'Car / LMV', sub: 'Manual & Auto', icon: Car },
    { id: 'bike-autorickshaw', label: 'Two-Wheeler', sub: '8 Track & 3W', icon: Bike },
    { id: 'trailer-articulated', label: 'Articulated Rig', sub: '40ft Container', icon: Boxes },
    { id: 'mvd-badge', label: 'MVD Badge', sub: 'PSV Commercial', icon: Award },
    { id: 'all', label: 'All Packages', sub: '21 Total Plans', icon: LayoutGrid },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-3">
      {/* Header Row matching screenshot ("Popular Services" / "See all >") */}
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Popular Vehicle Courses
          </h3>
          <p className="text-[11px] text-slate-500 font-medium">Select a category to view practical batch plans</p>
        </div>

        <button
          onClick={() => onSelectCategory('all')}
          className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-0.5 cursor-pointer"
        >
          <span>See all</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4x2 Grid of Rounded Square Cards matching screenshot */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat.id)}
              className={`group flex flex-col items-center justify-center py-2 sm:py-3 px-1 sm:px-3 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-lg active:scale-95 min-h-[92px] sm:min-h-[88px] ${
                isActive
                  ? 'bg-slate-900 text-white border-2 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
              }`}
            >
              {/* Icon container */}
              <div
                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-1.5 transition-all duration-300 group-hover:scale-110 shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-amber-400 shadow-xs border border-amber-500/30'
                    : 'bg-slate-100 text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-600'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2.2} />
              </div>

              <span
                className={`text-[10px] sm:text-xs font-bold leading-tight line-clamp-2 sm:line-clamp-1 break-words text-center w-full px-0.5 ${
                  isActive ? 'text-amber-400 font-extrabold' : 'text-slate-800'
                }`}
              >
                {cat.label}
              </span>
              <span className={`text-[9px] font-medium line-clamp-1 hidden sm:block mt-0.5 ${
                isActive ? 'text-slate-300' : 'text-slate-400'
              }`}>
                {cat.sub}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
