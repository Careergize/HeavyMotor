import React, { useState } from 'react';
import { MapPin, Bell, Phone, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface TemplateHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenBooking: () => void;
}

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenBooking,
}) => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 pb-3">
        {/* Top Location & Notifications Row (Matches screenshot top) */}
        <div className="flex items-center justify-between gap-3 mb-3">
          {/* Location Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-start gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    MSM College Junction, Kayamkulam
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-700 transition-colors" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Kerala MVD Approved Ground (KL-29) • NH-66 Frontage
                </p>
              </div>
            </button>

            {/* Location dropdown info */}
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Training Facility</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                    KL-29 MVD
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hans Heavy Motor Driving School, Opposite MSM College Main Gate, Kayamkulam, Kerala 690502.
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Practice Track: 2-Acre</span>
                  <a
                    href="#contact"
                    onClick={() => setShowLocationDropdown(false)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    View Map →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons: Notification Bell & Quick Call (Matches screenshot) */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+910000000000"
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              title="Call Instructor: +91 00000 00000"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
            </a>

            <div className="relative">
              <button
                onClick={onOpenBooking}
                className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Batches Enrolling"
              >
                <Bell className="w-4 h-4 text-slate-700" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar matching screenshot */}
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for truck, bus, JCB, or license course..."
              className="w-full pl-11 pr-11 py-2.5 sm:py-3 rounded-2xl bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 border border-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
            />
            <button
              onClick={() => onOpenBooking()}
              className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Filter Courses"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
