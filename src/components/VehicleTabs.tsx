import React from 'react';
import { Truck, Bus, HardHat, Car, Bike, Boxes, Check } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../data/mockData';
import type { VehicleCategoryId } from '../types';

interface VehicleTabsProps {
  selectedCategory: VehicleCategoryId;
  onSelectCategory: (id: VehicleCategoryId) => void;
}

export const VehicleTabs: React.FC<VehicleTabsProps> = ({ selectedCategory, onSelectCategory }) => {
  const getIcon = (iconName: string, active: boolean) => {
    const className = `w-6 h-6 transition-colors ${
      active ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-900'
    }`;

    switch (iconName) {
      case 'Truck':
        return <Truck className={className} />;
      case 'Bus':
        return <Bus className={className} />;
      case 'HardHat':
        return <HardHat className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'Bike':
        return <Bike className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      default:
        return <Truck className={className} />;
    }
  };

  return (
    <section id="courses" className="pt-16 pb-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Official Training Categories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Choose Your Vehicle Training & Licensing Plan
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select a commercial or light vehicle category below to review MVD syllabus, practical ground hours, and transparent pricing packages.
          </p>
        </div>

        {/* Scrollable Tabs Bar matching reference screenshot */}
        <div className="relative">
          {/* Mobile swipe helper */}
          <div className="flex md:hidden items-center justify-between text-[11px] font-semibold text-slate-500 mb-2 px-1">
            <span>← Swipe to choose vehicle category →</span>
            <span className="text-amber-600 font-bold">6 Categories</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x">
            {VEHICLE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`group relative flex-shrink-0 snap-start flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border text-left transition-all duration-200 cursor-pointer min-w-[220px] sm:min-w-[260px] md:flex-1 active:scale-98 ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/15 ring-2 ring-amber-400 ring-offset-2'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70 shadow-sm'
                  }`}
                  style={{ minHeight: '64px' }}
                >
                  {/* Category icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? 'bg-slate-800 text-amber-400 border border-slate-700'
                        : 'bg-slate-100 group-hover:bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {getIcon(cat.iconName, isActive)}
                  </div>

                  {/* Label and Badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </div>
                    <h4
                      className={`font-bold text-sm sm:text-base mt-1 truncate ${
                        isActive ? 'text-white' : 'text-slate-900 group-hover:text-amber-600'
                      }`}
                    >
                      {cat.name}
                    </h4>
                    <p
                      className={`text-xs truncate ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {cat.tagline}
                    </p>
                  </div>

                  {isActive && (
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
