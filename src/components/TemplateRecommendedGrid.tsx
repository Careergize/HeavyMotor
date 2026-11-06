import React from 'react';
import { Star, Clock, ChevronRight, ShieldCheck } from 'lucide-react';
import { COURSE_PACKAGES, VEHICLE_CATEGORIES } from '../data/mockData';
import type { VehicleCategoryId } from '../types';

interface TemplateRecommendedGridProps {
  selectedCategory: VehicleCategoryId | 'all';
  searchQuery?: string;
  onOpenBooking: (courseName?: string, tierName?: string) => void;
}

export const TemplateRecommendedGrid: React.FC<TemplateRecommendedGridProps> = ({
  selectedCategory,
  searchQuery = '',
  onOpenBooking,
}) => {
  // Filter courses based on category and search query
  const filteredPackages = COURSE_PACKAGES.filter((pkg) => {
    const matchesCategory = selectedCategory === 'all' || pkg.categoryId === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.vehicleType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to get image corresponding to course category
  const getImage = (catId: VehicleCategoryId) => {
    const cat = VEHICLE_CATEGORIES.find((c) => c.id === catId);
    return cat ? cat.image : 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-6">
      {/* Header Row matching screenshot ("Recommended for you" / "View all >") */}
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Recommended for you
          </h3>
          <p className="text-[11px] text-slate-500 font-medium">
            Top-rated training plans for Kayamkulam (KL-29) licensing
          </p>
        </div>

        <span className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-0.5 cursor-pointer">
          <span>{filteredPackages.length} Plans</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Grid of Recommended Cards matching screenshot */}
      {filteredPackages.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2 my-2">
          <p className="font-bold text-slate-800 text-sm">No courses matching your search</p>
          <p className="text-xs text-slate-500">Try searching for "truck", "bus", "JCB", "badge", or "trailer".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredPackages.map((pkg, idx) => {
            const isBestseller = pkg.popular || idx % 2 === 0;
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                  isBestseller
                    ? 'border-2 border-amber-500 shadow-xl ring-4 ring-amber-500/10 hover:-translate-y-2'
                    : 'border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-2'
                }`}
              >
                {/* Card Image Area with Floating Bestseller Tag */}
                <div>
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pkg.image || getImage(pkg.categoryId)}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                    {/* Bestseller Badge matching screenshot top-left */}
                    {isBestseller && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-black text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          Bestseller
                        </span>
                      </div>
                    )}

                    {/* Tier Label floating bottom-right */}
                    <div className="absolute bottom-2.5 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold border border-amber-500/20">
                        {pkg.tierLabel.split(':')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5">
                    {/* Title */}
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-950 leading-snug line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {pkg.title}
                    </h4>

                    {/* Rating & Duration Row */}
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>4.9</span>
                        <span className="text-[11px] font-normal text-slate-400">(1.2k)</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Verified Professional Pill in Steel Blue */}
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>KL-29 Verified Ground & Dual Controls</span>
                      </span>
                    </div>

                    {/* Quick Feature Preview */}
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pkg.features[0]} • {pkg.features[1]}
                    </p>
                  </div>
                </div>

                {/* Price & "Book Now" Button Row */}
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-1 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-black text-slate-950">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-xs text-slate-400 line-through font-medium">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenBooking(pkg.title, pkg.tierLabel)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs transition-all active:scale-95 cursor-pointer ${
                      isBestseller
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md hover:shadow-amber-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white font-semibold hover:border-amber-500 shadow-sm'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
