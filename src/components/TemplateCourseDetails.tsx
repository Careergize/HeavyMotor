import React from 'react';
import { Check, Clock, ArrowRight, MessageCircle, Truck, Bus, HardHat, Car, Bike, Boxes, Award } from 'lucide-react';
import { COURSE_PACKAGES, VEHICLE_CATEGORIES } from '../data/mockData';
import type { VehicleCategoryId, CoursePackage } from '../types';

interface TemplateCourseDetailsProps {
  selectedCategory: VehicleCategoryId | 'all';
  onOpenBooking: (courseName?: string, tierName?: string) => void;
}

const renderCategoryIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Bus': return <Bus className={className} />;
    case 'HardHat': return <HardHat className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Bike': return <Bike className={className} />;
    case 'Boxes': return <Boxes className={className} />;
    case 'Award': return <Award className={className} />;
    default: return <Truck className={className} />;
  }
};

export const TemplateCourseDetails: React.FC<TemplateCourseDetailsProps> = ({
  selectedCategory,
  onOpenBooking,
}) => {
  const activeCatId = selectedCategory === 'all' ? 'heavy-truck' : selectedCategory;
  const currentCategory = VEHICLE_CATEGORIES.find((c) => c.id === activeCatId) || VEHICLE_CATEGORIES[0];
  const packages = COURSE_PACKAGES.filter((p) => p.categoryId === activeCatId);

  const getWhatsAppLink = (pkg: CoursePackage) => {
    const text = encodeURIComponent(
      `Hello Hans Driving School, I am interested in the ${currentCategory.name} - ${pkg.title} (${pkg.duration}) priced at ₹${pkg.price}. Please provide batch timings and admission details.`
    );
    return `https://wa.me/910000000000?text=${text}`;
  };

  return (
    <section id="all-courses" className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Category Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
              {renderCategoryIcon(currentCategory.iconName, "w-6 h-6 text-amber-500")}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                  {currentCategory.badge}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">KL-29 MVD Syllabus</span>
              </div>
              <h3 className="text-base sm:text-xl font-extrabold text-slate-950 mt-0.5">
                {currentCategory.name} Detailed Syllabus & Tiers
              </h3>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Assigned Fleet</p>
            <p className="text-xs font-bold text-slate-800">{currentCategory.vehicleModel}</p>
          </div>
        </div>
      </div>

      {/* 3 Tier Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {packages.map((pkg) => {
          const isPopular = pkg.popular;
          return (
            <div
              key={pkg.id}
              className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 ${isPopular
                  ? 'border-2 border-amber-500 ring-4 ring-amber-500/10'
                  : 'border-slate-200 hover:border-slate-300'
                }`}
            >
              {/* Package Header Visual */}
              {pkg.image && (
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-amber-500/30">
                      {pkg.vehicleType.split('(')[0].trim()}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {pkg.tierLabel.split(':')[0]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {pkg.duration}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-slate-950 leading-tight">
                  {pkg.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-[34px]">
                  {pkg.subTitle}
                </p>

                {/* Price Box */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-950">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-xs text-slate-400 line-through font-medium">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-amber-600 font-semibold mt-0.5">
                    Includes fuel, ground fee & instructor guidance
                  </p>
                </div>

                {/* Syllabus checklist */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                    Key Training Modules:
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50/40 mt-4 rounded-b-2xl">
                <div className="space-y-2 pt-3">
                  <button
                    onClick={() => onOpenBooking(currentCategory.name, pkg.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer ${isPopular
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md hover:shadow-amber-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white font-semibold hover:border-amber-500 shadow-sm'
                      }`}
                  >
                    <span>Enroll in Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-amber-500 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
